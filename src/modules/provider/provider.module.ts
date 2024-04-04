import { Module } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { ProviderController } from './provider.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProviderEntity } from './entities/provider.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProviderEntity])
  ],
  controllers: [ProviderController],
  providers: [ProviderService],
  exports: [ProviderService]
})
export class ProviderModule {}
