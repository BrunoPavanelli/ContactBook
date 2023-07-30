import { Module } from "@nestjs/common";
import { ContactService } from "./contact.service";
import { ContactController } from "./contact.controller";
import { UsersModule } from "../users/users.module";
import { PrismaService } from "src/database/prisma.service";
import { ConstactsRepository } from "./repositories/contacts.repository";
import { ContactsPrismaRepository } from "./repositories/prisma/contacts.prisma.repository";

@Module({
  imports: [UsersModule],
  controllers: [ContactController],
  providers: [
    ContactService,
    PrismaService,
    {
      provide: ConstactsRepository,
      useClass: ContactsPrismaRepository,
    },
  ],
})
export class ContactModule {}
