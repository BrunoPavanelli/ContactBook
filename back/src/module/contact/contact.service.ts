import { Injectable } from "@nestjs/common";
import { CreateContactDto } from "./dto/create-contact.dto";
import { UpdateContactDto } from "./dto/update-contact.dto";
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

  async update(id: number, updateContactDto: UpdateContactDto) {
    return `This action updates a #${id} contact`;
  }

  async remove(id: number) {
    return `This action removes a #${id} contact`;
  }
}
