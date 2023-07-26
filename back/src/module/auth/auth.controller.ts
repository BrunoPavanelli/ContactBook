import { Body, Controller, Post, UseGuards } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./local-auth.guard";

interface UserLogin {
  email: string;
  password: string;
}

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async login(@Body() user: UserLogin) {
    return this.authService.login(user.email);
  }
}
