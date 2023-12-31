import {
  ConflictException,
  Delete,
  Get,
  Injectable,
  NotFoundException,
  Patch,
  Post,
} from "@nestjs/common";

import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersRepository } from "./repositories/users.repository";

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  @Post()
  async create(createUserDto: CreateUserDto) {
    const checkEmail = await this.usersRepository.findOneByEmail(
      createUserDto.email,
    );
    if (checkEmail) throw new ConflictException("Email already in use");

    return await this.usersRepository.create(createUserDto);
  }

  @Get()
  async findAll() {
    return await this.usersRepository.findAll();
  }

  @Get(":id")
  async findOne(id: string) {
    const findUser = await this.usersRepository.findOne(id);
    if (!findUser) throw new NotFoundException("User not Found!");

    return findUser;
  }

  @Get()
  findOneByEmail(email: string) {
    const findUser = this.usersRepository.findOneByEmail(email);
    if (!findUser) {
      throw new NotFoundException("User not Found!");
    }

    return findUser;
  }

  @Patch(":id")
  async update(id: string, updateUserDto: UpdateUserDto) {
    const findUser = await this.usersRepository.findOne(id);
    if (!findUser) throw new NotFoundException("User not Found!");

    return await this.usersRepository.update(id, updateUserDto);
  }

  @Delete(":id")
  async remove(id: string) {
    const findUser = await this.usersRepository.findOne(id);
    if (!findUser) throw new NotFoundException("User not Found!");

    return await this.usersRepository.delete(id);
  }
}
