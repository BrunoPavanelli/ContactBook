import { randomUUID } from "node:crypto";

export class Numbers {
  readonly id: string;
  number: string;

  constructor() {
    this.id = randomUUID();
  }
}

export class Email {
  readonly id: string;
  email: string;

  constructor() {
    this.id = randomUUID();
  }
}

export class Contact {
  readonly id: string;
  name: string;
  numbers: string[];
  emails: string[];

  constructor() {
    this.id = randomUUID();
  }
}
