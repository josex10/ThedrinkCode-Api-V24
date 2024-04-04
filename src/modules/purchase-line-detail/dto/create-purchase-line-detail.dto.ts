import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreatePurchaseLineDetailDto {

    @IsNumber()
    @IsNotEmpty()
    clm_id_purchase:number;

    @IsNumber()
    @IsNotEmpty()
    clm_line_number: number;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(13)
    @MaxLength(13)
    clm_code: string;

    @IsNumber()
    @IsNotEmpty()
    clm_qty: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(12)
    clm_measure_unit: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    clm_detail: string;

    @IsNumber()
    @IsNotEmpty()
    clm_unit_price: number;

    @IsNumber()
    @IsNotEmpty()
    clm_total_amount: number;

    @IsNumber()
    @IsOptional()
    clm_discount_amount?: number;

    @IsString()
    @MaxLength(200)
    @IsOptional()
    clm_discount_detail?: string;

    @IsNumber()
    @IsNotEmpty()
    clm_subtotal: number;

    @IsString()
    @MaxLength(4)
    @IsOptional()
    clm_tax_code?: string;

    @IsString()
    @MaxLength(4)
    @IsOptional()
    clm_tax_fee_code?: string;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    clm_tax_fee?: number;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    clm_tax_amount?: number;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    clm_net_tax?: number;

    @IsNumber()
    @IsNotEmpty()
    clm_total_line_amount: number;
}
