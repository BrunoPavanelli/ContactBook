import { CreateContactDto } from "../dto/create-contact.dto";
import {
  UpdatePhoneNumberDto,
  UpdateEmailDto,
} from "../dto/update-contact.dto";
import { Contact } from "../entities/contact.entity";

export abstract class ConstactsRepository {
  abstract create(data: CreateContactDto, userId: string): Promise<Contact>;
  abstract findAll(): Promise<Contact[]>;
  abstract findAllByUser(userId: string): Promise<Contact[] | null | undefined>;
  abstract updatePhoneNumber(
    contactId: string,
    phoneNumberId: string,
    data: UpdatePhoneNumberDto,
  ): Promise<Contact>;
  abstract updateEmail(
    contactId: string,
    emailId: string,
    data: UpdateEmailDto,
  ): Promise<Contact>;
  abstract delete(id: string): Promise<void>;
}
