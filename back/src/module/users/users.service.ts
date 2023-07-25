import {
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
