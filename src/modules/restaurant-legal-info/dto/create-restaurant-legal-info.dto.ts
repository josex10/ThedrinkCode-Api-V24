import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateRestaurantLegalInfoDto {
    @IsNumber()
    @IsNotEmpty()
    clm_id_restaurant: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(10)
    clm_identification_type: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(12)
    clm_identification_number: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(80)
    clm_fantasy_name: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @MinLength(1)
    @MaxLength(160)
    clm_email: string;

    @IsString()
    @IsOptional()
    @MaxLength(3)
    clm_phone_country_code?: string;

    @IsString()
    @IsOptional()
    @MaxLength(20)
    clm_phone_number?: string;
}
