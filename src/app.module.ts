import { Module } from '@nestjs/common';
import { RestaurantModule } from './modules/restaurant/restaurant.module';
import { UserModule } from './modules/user/user.module';
import { ProviderModule } from './modules/provider/provider.module';
import { ExpenseModule } from './modules/expense/expense.module';
import { RestaurantLegalInfoModule } from './modules/restaurant-legal-info/restaurant-legal-info.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config';
// import { BaseModule } from './modules/base/base.module';
import { PurchaseModule } from './modules/purchase/purchase.module';
import { PurchaseLineDetailModule } from './modules/purchase-line-detail/purchase-line-detail.module';
import { PurchaseSummaryModule } from './modules/purchase-summary/purchase-summary.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'src/env/.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfig,
    }),
    RestaurantModule, 
    UserModule, 
    ProviderModule, 
    ExpenseModule, 
    RestaurantLegalInfoModule, PurchaseModule, PurchaseLineDetailModule, PurchaseSummaryModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
