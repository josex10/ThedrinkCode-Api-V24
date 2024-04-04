import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, ParseFilePipe, HttpStatus, ParseFilePipeBuilder } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { parseString } from "xml2js";

@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}




  @Post('uploadXMLPurchase/:restId')
  @UseInterceptors(FileInterceptor('file'))
  uploadXMLPurchase(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: 'application/xml' })
        .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
    )
      file: Express.Multer.File,
      @Param('restId') restId: string
    ) {
    const xmlData = file.buffer.toString('utf-8');
    return this.purchaseService.createPurchaseFromXml(xmlData, +restId);
  }


  // @Get()
  // findAll() {
  //   return this.purchaseService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.purchaseService.findOneById(+id);
  // }
  
  // @Get('restaurant/:id')
  // findByRestId(@Param('id') id: string) {
  //   return this.purchaseService.findAllByRestId(+id);
  // }

  // @Get('key/:id')
  // findByKey(
  //   @Param('restaurant_id') restaurant_id: string, 
  //   @Param('key') key: string
  // ) {
  //   return this.purchaseService.findByKey(+restaurant_id, key);
  // }
}
