import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseGuards,
} from "@nestjs/common";
import { ContactService } from "./contact.service";
import { CreateContactDto } from "./dto/create-contact.dto";
import { UpdateEmailDto, UpdatePhoneNumberDto } from "./dto/update-contact.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller("contact")
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createContactDto: CreateContactDto, @Request() req) {
    const userId = req.user.id;
    return this.contactService.create(createContactDto, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.contactService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get("/token")
  findAllByUser(@Request() req) {
    const userId = req.user.id;
    return this.contactService.findAllByUser(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch("phone/:contactId/:phoneNumberId")
  updatePhoneNumber(
    @Param("contactId", ParseUUIDPipe) contactId: string,
    @Param("phoneNumberId", ParseUUIDPipe) phoneNumberId: string,
    @Body() updateContactDto: UpdatePhoneNumberDto,
  ) {
    return this.contactService.updatePhoneNumber(
      contactId,
      phoneNumberId,
      updateContactDto,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Patch("email/:contactId/:emailId")
  updateEmail(
    @Param("contactId", ParseUUIDPipe) contactId: string,
    @Param("emailId", ParseUUIDPipe) emailId: string,
    @Body() updateContactDto: UpdateEmailDto,
  ) {
    return this.contactService.updateEmail(
      contactId,
      emailId,
      updateContactDto,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  remove(@Param("id", ParseUUIDPipe) id: string) {
    return this.contactService.remove(id);
  }
}
