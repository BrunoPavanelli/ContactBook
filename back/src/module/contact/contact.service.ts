import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateContactDto } from "./dto/create-contact.dto";
import { UpdatePhoneNumberDto, UpdateEmailDto } from "./dto/update-contact.dto";
import { ConstactsRepository } from "./repositories/contacts.repository";

@Injectable()
export class ContactService {
  constructor(private contactsRepository: ConstactsRepository) {}

  async create(createContactDto: CreateContactDto, userId: string) {
    return await this.contactsRepository.create(createContactDto, userId);
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
}
