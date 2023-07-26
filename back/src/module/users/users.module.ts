import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { PrismaService } from "src/database/prisma.service";
import { UsersPrimasRepository } from "./repositories/prisma/users.prisma.repository";
import { UsersRepository } from "./repositories/users.repository";

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    { provide: UsersRepository, useClass: UsersPrimasRepository },
  ],
  exports: [UsersService],
})
export class UsersModule {}
