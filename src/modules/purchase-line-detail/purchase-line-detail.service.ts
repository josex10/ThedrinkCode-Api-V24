import { Injectable } from '@nestjs/common';
import { CreatePurchaseLineDetailDto } from './dto/create-purchase-line-detail.dto';
import { UpdatePurchaseLineDetailDto } from './dto/update-purchase-line-detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PurchaseLineDetailEntity } from './entities/purchase-line-detail.entity';

@Injectable()
export class PurchaseLineDetailService {

  constructor(
    @InjectRepository(PurchaseLineDetailEntity)
    private repository: Repository<PurchaseLineDetailEntity>,
  ) {}

  createBulk = async(groupOfLineDetail: CreatePurchaseLineDetailDto[]) => {
    return await this.repository.save(groupOfLineDetail);
  }
}
