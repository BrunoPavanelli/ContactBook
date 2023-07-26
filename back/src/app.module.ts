import { Module } from "@nestjs/common";
import { UsersModule } from "./module/users/users.module";
import { AuthModule } from "./module/auth/auth.module";
import { ContactModule } from "./module/contact/contact.module";

@Module({
  imports: [UsersModule, AuthModule, ContactModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
