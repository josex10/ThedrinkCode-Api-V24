import { Module } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { PurchaseController } from './purchase.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseEntity } from './entities/purchase.entity';
import { ProviderModule } from '../provider/provider.module';
import { PurchaseLineDetailModule } from '../purchase-line-detail/purchase-line-detail.module';
import { PurchaseSummaryModule } from '../purchase-summary/purchase-summary.module';
import { RestaurantLegalInfoModule } from '../restaurant-legal-info/restaurant-legal-info.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PurchaseEntity]), 
    ProviderModule,
    PurchaseLineDetailModule,
    PurchaseSummaryModule,
    RestaurantLegalInfoModule
  ],
  controllers: [PurchaseController],
  providers: [PurchaseService]
})
export class PurchaseModule {}
