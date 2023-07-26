import {
  IsNotEmpty,
  IsString,
  IsArray,
  MaxLength,
  MinLength,
  IsEmail,
  Matches,
} from "class-validator";

class CreatePhoneNumberDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(11)
  @MaxLength(13)
  @Matches(/^[0-9]/)
  phoneNumber: number;
}

class CreateEmailDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(50)
  name: string;

  @IsArray()
  @IsNotEmpty()
  phoneNumbers: CreatePhoneNumberDto;

  @IsArray()
  @IsNotEmpty()
  emails: CreateEmailDto;
}
