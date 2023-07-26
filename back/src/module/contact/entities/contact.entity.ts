import { randomUUID } from "node:crypto";

export class PhoneNumbers {
  readonly id: string;
  number: string;
  contact: Contact;

  constructor() {
    this.id = randomUUID();
  }
}

export class Email {
  readonly id: string;
  email: string;
  contact: Contact;

  constructor() {
    this.id = randomUUID();
  }
}

export class Contact {
  readonly id: string;
  name: string;
  numbers: PhoneNumbers[];
  emails: Email[];

  constructor() {
    this.id = randomUUID();
  }
}
