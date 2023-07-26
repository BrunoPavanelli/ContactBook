import { JwtService } from "@nestjs/jwt";
import { Injectable } from "@nestjs/common";
import { compareSync } from "bcryptjs";

import { UsersService } from "../users/users.service";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findOneByEmail(email);
    if (user && compareSync(password, user.password)) {
      const { id, email } = user;
      return { id, email };
    }
    return null;
  }

  async login(email: string) {
    const user = await this.usersService.findOneByEmail(email);
    const payload = { email: user.email, sub: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
