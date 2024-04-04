import { Module } from '@nestjs/common';
import { PurchaseLineDetailService } from './purchase-line-detail.service';
import { PurchaseLineDetailController } from './purchase-line-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseLineDetailEntity } from './entities/purchase-line-detail.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PurchaseLineDetailEntity])
  ],
  controllers: [PurchaseLineDetailController],
  providers: [PurchaseLineDetailService],
  exports: [
    PurchaseLineDetailService
  ]
})
export class PurchaseLineDetailModule {}
