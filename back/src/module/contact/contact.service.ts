import { Injectable, NotFoundException } from "@nestjs/common";
import {
  CreateContactDto,
  CreateEmailDto,
  CreatePhoneNumberDto,
} from "./dto/create-contact.dto";
import { UpdatePhoneNumberDto, UpdateEmailDto } from "./dto/update-contact.dto";
import { ConstactsRepository } from "./repositories/contacts.repository";

@Injectable()
export class ContactService {
  constructor(private contactsRepository: ConstactsRepository) {}

  async create(createContactDto: CreateContactDto, userId: string) {
    return await this.contactsRepository.create(createContactDto, userId);
  }

  async createPhoneNumber(data: CreatePhoneNumberDto, contactId: string) {
    return await this.contactsRepository.createPhoneNumber(data, contactId);
  }

  async createEmail(data: CreateEmailDto, contactId: string) {
    return await this.contactsRepository.createEmail(data, contactId);
  }

  async findAll() {
    return await this.contactsRepository.findAll();
  }

  async findAllByUser(userId: string) {
    return await this.contactsRepository.findAllByUser(userId);
  }

  async updatePhoneNumber(
    contactId: string,
    phoneNumberIdId: string,
    updatePhoneNumberDto: UpdatePhoneNumberDto,
  ) {
    return await this.contactsRepository.updatePhoneNumber(
      contactId,
      phoneNumberIdId,
      updatePhoneNumberDto,
    );
  }

  async updateEmail(
    contactId: string,
    emailId: string,
    updateEmailDto: UpdateEmailDto,
  ) {
    return await this.contactsRepository.updateEmail(
      contactId,
      emailId,
      updateEmailDto,
    );
  }

  async remove(id: string) {
    const findContact = await this.contactsRepository.findOne(id);

    if (!findContact) throw new NotFoundException("Contact not Found!");
    return await this.contactsRepository.remove(id);
  }

  async removeAllPhoneNumbers(id: string) {
    const findContact = await this.contactsRepository.findOne(id);

    if (!findContact) throw new NotFoundException("Contact not Found!");
    return await this.contactsRepository.removeAllPhoneNumbers(id);
  }

  async removeAllEmails(id: string) {
    const findContact = await this.contactsRepository.findOne(id);

    if (!findContact) throw new NotFoundException("Contact not Found!");
    return await this.contactsRepository.removeAllEmails(id);
  }

  async removeAllPhoneNumbersAndEmails(id: string) {
    const findContact = await this.contactsRepository.findOne(id);

    if (!findContact) throw new NotFoundException("Contact not Found!");
    return await this.contactsRepository.removeAllPhoneNumbersAndEmails(id);
  }

  async removePhoneNumber(phoneNumberId: string) {
    const findContact = await this.contactsRepository.findOnePhoneNumber(
      phoneNumberId,
    );

    if (!findContact) throw new NotFoundException("Contact not Found!");
    return await this.contactsRepository.removePhoneNumber(phoneNumberId);
  }

  async removeEmail(emailId: string) {
    const findContact = await this.contactsRepository.findOneEmail(emailId);

    if (!findContact) throw new NotFoundException("Contact not Found!");
    return await this.contactsRepository.removeEmail(emailId);
  }
}
