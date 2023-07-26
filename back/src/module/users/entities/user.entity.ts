import { Exclude } from "class-transformer";
import { randomUUID } from "node:crypto";
import { Contact } from "src/module/contact/entities/contact.entity";

export class User {
  readonly id: string;
  name: string;
  email: string;
  contacts: Contact[];

  @Exclude()
  password: string;

  constructor() {
    this.id = randomUUID();
  }
}
