import { Module } from '@nestjs/common';
import { RestaurantLegalInfoService } from './restaurant-legal-info.service';
import { RestaurantLegalInfoController } from './restaurant-legal-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantLegalInfoEntity } from './entities/restaurant-legal-info.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([RestaurantLegalInfoEntity])
  ],
  controllers: [RestaurantLegalInfoController],
  providers: [RestaurantLegalInfoService],
  exports: [RestaurantLegalInfoService]
})
export class RestaurantLegalInfoModule {}
