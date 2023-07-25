import { JwtService } from "@nestjs/jwt";
import { Injectable } from "@nestjs/common";
import { compareSync } from "bcryptjs";

import { UsersService } from "../users/users.service";

interface User {
  userId: string;
  email: string;
  password: string;
}

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

  async login(user: User) {
    const payload = { email: user.email, sub: user.userId };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
