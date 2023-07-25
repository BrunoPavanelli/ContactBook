import { hashSync } from "bcryptjs";
import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @Transform(({ value }: { value: string }) => hashSync(value), {
    groups: ["transform"],
  })
  password: string;
}
