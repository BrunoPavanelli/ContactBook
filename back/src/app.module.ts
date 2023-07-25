import { Module } from "@nestjs/common";
import { UsersModule } from "./module/users/users.module";
import { AuthModule } from "./module/auth/auth.module";

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
