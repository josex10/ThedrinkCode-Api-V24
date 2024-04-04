import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreatePurchaseDto {


    @IsNumber()
    @IsNotEmpty()
    clm_id_restaurant: number;

    @IsNumber()
    @IsNotEmpty()
    clm_id_purchase_summary: number;

    @IsNumber()
    @IsNotEmpty()
    clm_id_provider: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(50)
    @MaxLength(50)
    clm_key: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(6)
    clm_activity_code: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(20)
    @MaxLength(20)
    clm_consecutive_number: string;
    

    @IsString()
    @IsNotEmpty()
    clm_issue_date: Date;
}
