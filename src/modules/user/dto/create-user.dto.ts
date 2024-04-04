import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

    @IsNumber()
    @IsNotEmpty()
    clm_id_restaurant: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(80)
    clm_name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(80)
    clm_username: string;

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(160)
    clm_email: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    clm_password: string;
}
