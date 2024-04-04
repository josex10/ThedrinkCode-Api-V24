import { Module } from '@nestjs/common';
import { PurchaseSummaryService } from './purchase-summary.service';
import { PurchaseSummaryController } from './purchase-summary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseSummaryEntity } from './entities/purchase-summary.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PurchaseSummaryEntity])
  ],
  controllers: [PurchaseSummaryController],
  providers: [PurchaseSummaryService],
  exports: [
    PurchaseSummaryService
  ]
})
export class PurchaseSummaryModule {}
