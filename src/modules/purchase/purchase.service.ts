import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PurchaseEntity } from './entities/purchase.entity';
import { ProviderService } from '../provider/provider.service';
import { PurchaseLineDetailService } from '../purchase-line-detail/purchase-line-detail.service';
import { PurchaseSummaryService } from '../purchase-summary/purchase-summary.service';
import { parseString } from "xml2js";
import { RestaurantLegalInfoService } from '../restaurant-legal-info/restaurant-legal-info.service';
import { CreateProviderDto } from '../provider/dto/create-provider.dto';
import { ProviderEntity } from '../provider/entities/provider.entity';
import { CreatePurchaseLineDetailDto } from '../purchase-line-detail/dto/create-purchase-line-detail.dto';
import { CreatePurchaseSummaryDto } from '../purchase-summary/dto/create-purchase-summary.dto';

@Injectable()
export class PurchaseService {
  constructor(
    @InjectRepository(PurchaseEntity)
    private purchaseRepository: Repository<PurchaseEntity>,
    private providerService: ProviderService,
    private purchaseLineDetailservice: PurchaseLineDetailService,
    private purchaseSummaryService: PurchaseSummaryService,
    private restLegalInfo: RestaurantLegalInfoService
  ) {}

  createPurchaseFromXml = async(xmlData: string, restId: number): Promise<PurchaseEntity> => {

    const purchaseJson = await this.readXmlData(xmlData);
    const electronicInvoice = purchaseJson.FacturaElectronica;

    if(!purchaseJson)
      throw new HttpException('Error reading the XML', HttpStatus.BAD_REQUEST);

    
    const restLegalInfo = await this.restLegalInfo.findOneByRestaurantId(restId);
    if(!restLegalInfo)
      throw new HttpException('The restaurant has not legal information to store purchases.', HttpStatus.BAD_REQUEST);
    
    const receptor = electronicInvoice.Receptor;
    if(
      receptor.Identificacion.Tipo && 
      receptor.Identificacion.Numero && 
      receptor.Identificacion.Tipo !== restLegalInfo.clm_identification_type &&
      receptor.Identificacion.Numero !== restLegalInfo.clm_identification_number 
      ){
        throw new HttpException('The legal information of the restaurant does not match with the purchase legal information ', HttpStatus.BAD_REQUEST);
      }
    
    const emisor = electronicInvoice.Emisor;

    if(!emisor) throw new HttpException('The purchase XML does not provide the Provider information.', HttpStatus.BAD_REQUEST);
   
    const provider: CreateProviderDto = {
      clm_id_restaurant: restId,
      clm_identification_type: emisor.Identificacion.Tipo,
      clm_identification_number: emisor.Identificacion.Numero,
      clm_fantasy_name:emisor.NombreComercial,
      clm_email: emisor.CorreoElectronico,
      clm_phone_country_code: emisor.Telefono.CodigoPais,
      clm_phone_number: emisor.Telefono.NumTelefono
    }

    const actualProvider = await this.providerService.findOneCustom(
      {where: 
        {
          clm_id_restaurant: provider.clm_id_restaurant, 
          clm_identification_type: provider.clm_identification_type,
          clm_identification_number: provider.clm_identification_number
         }
    });
    
    let newProvider: ProviderEntity;
    (!actualProvider)
      ?newProvider = await this.providerService.create(provider)
      :newProvider = actualProvider;

    


    const summary = electronicInvoice.ResumenFactura;
    const purchaseSummary: CreatePurchaseSummaryDto = {
      clm_currency_code: summary.CodigoTipoMoneda?.CodigoMoneda,
      clm_currency_exchange:  summary.CodigoTipoMoneda?.TipoCambio,
      clm_total_servGravados: summary?.TotalServGravados,
      clm_total_servExentos: summary?.TotalServExentos,
      clm_total_servExonerado: summary?.TotalServExonerado,
      clm_total_mercanciasGravadas: summary?.TotalMercanciasGravadas,
      clm_total_mercanciasExentas: summary?.TotalMercanciasExentas,
      clm_total_mercExonerada: summary?.TotalMercExonerada,
      clm_total_gravado: summary?.TotalGravado,
      clm_total_exento: summary?.TotalExento,
      clm_total_exonerado: summary?.TotalExonerado,
      clm_total_venta: summary.TotalVenta,
      clm_total_descuentos: summary?.TotalDescuentos,
      clm_total_ventaNeta: summary.TotalVentaNeta,
      clm_total_impuesto: summary?.TotalImpuesto,
      clm_total_IVA_devuelto: summary?.TotalIVADevuelto,
      clm_total_otros_cargos: summary?.TotalOtrosCargos,
      clm_total_comprobante: summary.TotalComprobante
    }

    const newSummary = await this.purchaseSummaryService.create(purchaseSummary);

    const purchase: CreatePurchaseDto = {
      clm_id_purchase_summary: newSummary.clm_id,
      clm_id_restaurant: restId,
      clm_id_provider: newProvider.clm_id,
      clm_key: electronicInvoice.Clave,
      clm_activity_code: electronicInvoice.CodigoActividad,
      clm_consecutive_number: electronicInvoice.NumeroConsecutivo,
      clm_issue_date: electronicInvoice.FechaEmision
    }

    const checkPurchaseKey = await this.purchaseRepository.findOne(
      {where: {
        clm_id_restaurant: purchase.clm_id_restaurant,
        clm_key: purchase.clm_key
      }}
    );

    console.log(checkPurchaseKey)
    if(checkPurchaseKey){
      throw new HttpException('Duplicate purchase invoice key for this restaurant.', HttpStatus.BAD_REQUEST);
    }

    const newPurchase = await this.purchaseRepository.save(purchase);

    const lineasDeDetalle = electronicInvoice.DetalleServicio.LineaDetalle;

    const arrayOfnewLineasDetalle: CreatePurchaseLineDetailDto [] = lineasDeDetalle.map(singleLine => {
      return {
        clm_id_purchase: newPurchase.clm_id,
        clm_line_number: singleLine.NumeroLinea,
        clm_code: singleLine.Codigo,
        clm_qty: singleLine.Cantidad,
        clm_measure_unit: singleLine.UnidadMedida,
        clm_detail: singleLine.Detalle,
        clm_unit_price: singleLine.PrecioUnitario,
        clm_total_amount: singleLine.MontoTotal,
        clm_discount_amount: singleLine.Descuento?.MontoDescuento,
        clm_discount_detail: singleLine.Descuento?.NaturalezaDescuento,
        clm_subtotal: singleLine.SubTotal,
        clm_tax_code: singleLine.Impuesto?.Codigo,
        clm_tax_fee_code: singleLine.Impuesto?.CodigoTarifa,
        clm_tax_fee: singleLine.Impuesto?.Tarifa,
        clm_tax_amount: singleLine.Impuesto?.Monto,

        clm_net_tax: singleLine.ImpuestoNeto,
        clm_total_line_amount: singleLine.MontoTotalLinea,
      }
    });

    await this.purchaseLineDetailservice.createBulk(arrayOfnewLineasDetalle);

    return this.purchaseRepository.findOne({where: {clm_id: newPurchase.clm_id}, relations: {provider: true, summary: true, details: true}});
  }
  
  private readXmlData = async(xmlData: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      parseString(xmlData, { explicitArray: false }, function(error, result) {
        (null) ? reject():resolve(result)
      });
    });
  }


  
  // create = async(entity: CreatePurchaseDto): Promise<PurchaseEntity> => {
  //   const actualPurchase = await this.repository.findOne({
  //     where: {
  //       clm_id_restaurant: entity.clm_id_restaurant,
  //       clm_key: entity.clm_key
  //     }
  //   });

  //   if(actualPurchase)
  //     throw new HttpException('Duplicate purchase key', HttpStatus.BAD_REQUEST)

  //   return await this.repository.save(entity);
  // }

  // findAll = async() : Promise<PurchaseEntity[]> => {
  //   return await this.repository.find();
  // }

  // findAllByRestId = async(clm_id_restaurant: number) : Promise<PurchaseEntity[]> => {
  //   return await this.repository.find({where: {clm_id_restaurant}});
  // }

  // findOneById = async(clm_id: number): Promise<PurchaseEntity> => {
  //   return await this.repository.findOne({where: {clm_id}})
  // }

  // findByKey = async(clm_id_restaurant, clm_key: string) : Promise<PurchaseEntity> => {
  //   return await this.repository.findOne({where: {clm_key, clm_id_restaurant}});
  // }
}
