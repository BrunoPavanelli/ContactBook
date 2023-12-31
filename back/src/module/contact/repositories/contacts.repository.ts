import { Email, PhoneNumber } from "@prisma/client";
import {
  CreateContactDto,
  CreateEmailDto,
  CreatePhoneNumberDto,
} from "../dto/create-contact.dto";
import {
  UpdatePhoneNumberDto,
  UpdateEmailDto,
} from "../dto/update-contact.dto";
import { Contact } from "../entities/contact.entity";

export abstract class ConstactsRepository {
  abstract create(data: CreateContactDto, userId: string): Promise<Contact>;
  abstract findAll(): Promise<Contact[]>;
  abstract findAllByUser(userId: string): Promise<Contact[] | null | undefined>;
  abstract findOne(id: string): Promise<Contact | null | undefined>;
  abstract findOnePhoneNumber(
    phoneNumberId: string,
  ): Promise<PhoneNumber | null | undefined>;
  abstract findOneEmail(emailId: string): Promise<Email | null | undefined>;
  abstract createPhoneNumber(
    data: CreatePhoneNumberDto,
    contactId: string,
  ): Promise<PhoneNumber>;
  abstract createEmail(data: CreateEmailDto, contactId: string): Promise<Email>;
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
  abstract remove(id: string): Promise<void>;
  abstract removeAllPhoneNumbersAndEmails(id: string): Promise<void>;
  abstract removeAllPhoneNumbers(id: string): Promise<void>;
  abstract removeAllEmails(id: string): Promise<void>;
  abstract removePhoneNumber(phoneNumberId: string): Promise<void>;
  abstract removeEmail(emailId: string): Promise<void>;
}
