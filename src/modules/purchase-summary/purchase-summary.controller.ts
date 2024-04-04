import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchaseSummaryService } from './purchase-summary.service';
import { CreatePurchaseSummaryDto } from './dto/create-purchase-summary.dto';
import { UpdatePurchaseSummaryDto } from './dto/update-purchase-summary.dto';

@Controller('purchase-summary')
export class PurchaseSummaryController {
  constructor(private readonly purchaseSummaryService: PurchaseSummaryService) {}

  // @Post()
  // create(@Body() createPurchaseSummaryDto: CreatePurchaseSummaryDto) {
  //   return this.purchaseSummaryService.create(createPurchaseSummaryDto);
  // }

  // @Get()
  // findAll() {
  //   return this.purchaseSummaryService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.purchaseSummaryService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePurchaseSummaryDto: UpdatePurchaseSummaryDto) {
  //   return this.purchaseSummaryService.update(+id, updatePurchaseSummaryDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.purchaseSummaryService.remove(+id);
  // }
}
