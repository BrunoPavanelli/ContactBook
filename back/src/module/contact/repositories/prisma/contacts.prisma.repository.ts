import { Injectable } from "@nestjs/common";
import { ConstactsRepository } from "../contacts.repository";
import {
  CreateContactDto,
  CreateEmailDto,
  CreatePhoneNumberDto,
} from "../../dto/create-contact.dto";
import {
  UpdateEmailDto,
  UpdatePhoneNumberDto,
} from "../../dto/update-contact.dto";
import { Contact, Email, PhoneNumber } from "../../entities/contact.entity";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class ContactsPrismaRepository implements ConstactsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateContactDto, userId: string): Promise<Contact> {
    const contact = new Contact();
    Object.assign(contact, {
      name: data.name,
      userId: userId,
    });

    const newContact = await this.prisma.contact.create({
      data: {
        ...contact,
      },
    });

    data.phoneNumbers.map(async (phoneNumberData) => {
      const newPhoneNumber = new PhoneNumber();
      Object.assign(newPhoneNumber, {
        phoneNumber: phoneNumberData,
        contactId: newContact.id,
      });

      return await this.prisma.phoneNumber.create({
        data: { ...newPhoneNumber },
      });
    });

    data.emails.map(async (emailData) => {
      const newEmail = new Email();
      Object.assign(newEmail, {
        email: emailData,
        contactId: newContact.id,
      });

      return await this.prisma.email.create({
        data: { ...newEmail },
      });
    });

    const findContact = await this.prisma.contact.findFirst({
      where: {
        id: newContact.id,
      },
      include: {
        phoneNumbers: {
          select: {
            id: true,
            phoneNumber: true,
          },
        },
        emails: {
          select: {
            id: true,
            email: true,
          },
        },
      },
    });

    return findContact;
  }

  async createPhoneNumber(
    data: CreatePhoneNumberDto,
    contactId: string,
  ): Promise<PhoneNumber> {
    const newPhoneNumber = new PhoneNumber();
    Object.assign(newPhoneNumber, {
      phoneNumber: data.phoneNumber,
      contactId: contactId,
    });

    return await this.prisma.phoneNumber.create({
      data: { ...newPhoneNumber },
    });
  }

  async createEmail(data: CreateEmailDto, contactId: string): Promise<Email> {
    const newEmail = new Email();
    Object.assign(newEmail, {
      email: data.email,
      contactId: contactId,
    });

    return await this.prisma.email.create({
      data: { ...newEmail },
    });
  }

  async findAll(): Promise<Contact[]> {
    const contacts = await this.prisma.contact.findMany({
      include: {
        phoneNumbers: {
          select: {
            id: true,
            phoneNumber: true,
          },
        },
        emails: {
          select: {
            id: true,
            email: true,
          },
        },
      },
    });

    return contacts;
  }

  async findAllByUser(userId: string): Promise<Contact[]> {
    const contacts = await this.prisma.contact.findMany({
      where: {
        userId: userId,
      },
      include: {
        phoneNumbers: {
          select: {
            id: true,
            phoneNumber: true,
          },
        },
        emails: {
          select: {
            id: true,
            email: true,
          },
        },
      },
    });

    return contacts;
  }

  async findOne(id: string): Promise<Contact | null | undefined> {
    const findContact = await this.prisma.contact.findFirst({
      where: {
        id,
      },
      include: {
        phoneNumbers: {
          select: {
            id: true,
            phoneNumber: true,
          },
        },
        emails: {
          select: {
            id: true,
            email: true,
          },
        },
      },
    });

    return findContact;
  }

  async findOnePhoneNumber(
    phoneNumberId: string,
  ): Promise<PhoneNumber | null | undefined> {
    const findPhoneNumber = await this.prisma.phoneNumber.findFirst({
      where: { id: phoneNumberId },
    });

    return findPhoneNumber;
  }

  async findOneEmail(emailId: string): Promise<Email | null | undefined> {
    const findEmail = await this.prisma.email.findFirst({
      where: { id: emailId },
    });

    return findEmail;
  }

  async updatePhoneNumber(
    contactId: string,
    phoneNumberId: string,
    data: UpdatePhoneNumberDto,
  ): Promise<Contact> {
    await this.prisma.phoneNumber.update({
      where: { id: phoneNumberId },
      data: { ...data },
    });

    return await this.findOne(contactId);
  }
  async updateEmail(
    contactId: string,
    emailId: string,
    data: UpdateEmailDto,
  ): Promise<Contact> {
    await this.prisma.email.update({
      where: { id: emailId },
      data: { ...data },
    });

    return await this.findOne(contactId);
  }

  async remove(id: string): Promise<void> {
    await this.prisma.contact.delete({
      where: { id },
    });
  }

  async removeAllPhoneNumbers(id: string): Promise<void> {
    await this.prisma.phoneNumber.deleteMany({
      where: { contactId: id },
    });
  }

  async removeAllEmails(id: string): Promise<void> {
    await this.prisma.email.deleteMany({
      where: { contactId: id },
    });
  }

  async removeAllPhoneNumbersAndEmails(id: string): Promise<void> {
    await this.removeAllPhoneNumbers(id);
    await this.removeAllEmails(id);
  }

  async removePhoneNumber(phoneNumberId: string): Promise<void> {
    await this.prisma.phoneNumber.delete({
      where: { id: phoneNumberId },
    });
  }

  async removeEmail(emailId: string): Promise<void> {
    await this.prisma.email.delete({
      where: { id: emailId },
    });
  }
}
