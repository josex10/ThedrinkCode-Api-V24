import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchaseLineDetailService } from './purchase-line-detail.service';
import { CreatePurchaseLineDetailDto } from './dto/create-purchase-line-detail.dto';
import { UpdatePurchaseLineDetailDto } from './dto/update-purchase-line-detail.dto';

@Controller('purchase-line-detail')
export class PurchaseLineDetailController {
  constructor(private readonly purchaseLineDetailService: PurchaseLineDetailService) {}

  // @Post()
  // create(@Body() createPurchaseLineDetailDto: CreatePurchaseLineDetailDto) {
  //   return this.purchaseLineDetailService.create(createPurchaseLineDetailDto);
  // }

  // @Get()
  // findAll() {
  //   return this.purchaseLineDetailService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.purchaseLineDetailService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePurchaseLineDetailDto: UpdatePurchaseLineDetailDto) {
  //   return this.purchaseLineDetailService.update(+id, updatePurchaseLineDetailDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.purchaseLineDetailService.remove(+id);
  // }
}
