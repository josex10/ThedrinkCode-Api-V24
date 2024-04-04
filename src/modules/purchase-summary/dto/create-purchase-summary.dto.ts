import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreatePurchaseSummaryDto {

    // @IsNumber()
    // @IsNotEmpty()
    // clm_id_purchase:number;

    @IsNumber()
    @IsOptional()
    clm_currency_code?:number;

    @IsNumber()
    @IsOptional()
    clm_currency_exchange?:number;

    @IsNumber()
    @IsOptional()
    clm_total_servGravados?:number;

    @IsNumber()
    @IsOptional()
    clm_total_servExentos?:number;

    @IsNumber()
    @IsOptional()
    clm_total_servExonerado?:number;

    @IsNumber()
    @IsOptional()
    clm_total_mercanciasGravadas?:number;

    @IsNumber()
    @IsOptional()
    clm_total_mercanciasExentas?:number;

    @IsNumber()
    @IsOptional()
    clm_total_mercExonerada?:number;
    
    @IsNumber()
    @IsOptional()
    clm_total_gravado?:number;

    @IsNumber()
    @IsOptional()
    clm_total_exento?:number;
    
    @IsNumber()
    @IsOptional()
    clm_total_exonerado?:number;

    @IsNumber()
    @IsNotEmpty()
    clm_total_venta:number;

    @IsNumber()
    @IsOptional()
    clm_total_descuentos?:number;

    @IsNumber()
    @IsNotEmpty()
    clm_total_ventaNeta:number;

    @IsNumber()
    @IsOptional()
    clm_total_impuesto?:number;

    @IsNumber()
    @IsOptional()
    clm_total_IVA_devuelto?:number;

    @IsNumber()
    @IsOptional()
    clm_total_otros_cargos?:number;

    @IsNumber()
    @IsNotEmpty()
    clm_total_comprobante:number;
}
