import { randomUUID } from "node:crypto";

export class PhoneNumber {
  readonly id: string;
  phoneNumber: string;
  contactId: string;

  constructor() {
    this.id = randomUUID();
  }
}

export class Email {
  readonly id: string;
  email: string;
  contactId: string;

  constructor() {
    this.id = randomUUID();
  }
}

export class Contact {
  readonly id: string;
  name: string;
  userId: string;

  constructor() {
    this.id = randomUUID();
  }
}
