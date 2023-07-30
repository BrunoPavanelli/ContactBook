import { Injectable } from "@nestjs/common";
import { ConstactsRepository } from "../contacts.repository";
import { CreateContactDto } from "../../dto/create-contact.dto";
import { UpdateContactDto } from "../../dto/update-contact.dto";
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
            phoneNumber: true,
          },
        },
        emails: {
          select: {
            email: true,
          },
        },
      },
    });

    return findContact;
  }

  async findAll(): Promise<Contact[]> {
    const contacts = await this.prisma.contact.findMany({
      include: {
        phoneNumbers: {
          select: {
            phoneNumber: true,
          },
        },
        emails: {
          select: {
            email: true,
          },
        },
      },
    });

    return contacts;
  }
  findAllByUser(userId: string): Promise<Contact[]> {
    throw new Error("Method not implemented.");
  }
  update(id: string, data: UpdateContactDto): Promise<Contact> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
