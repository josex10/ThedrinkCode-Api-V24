import {
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
    MinLength,
  } from 'class-validator';
  
  export class CreateRestaurantDto {  
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(80)
    clm_name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(80)
    clm_admin_name: string;

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(160)
    clm_email: string;
  
    @IsString()
    @MaxLength(20)
    @IsOptional()
    clm_phone?: string;
  }
