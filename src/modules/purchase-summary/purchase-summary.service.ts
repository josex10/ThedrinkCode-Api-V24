import { Injectable } from '@nestjs/common';
import { CreatePurchaseSummaryDto } from './dto/create-purchase-summary.dto';
import { UpdatePurchaseSummaryDto } from './dto/update-purchase-summary.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PurchaseSummaryEntity } from './entities/purchase-summary.entity';

@Injectable()
export class PurchaseSummaryService {

  constructor(
    @InjectRepository(PurchaseSummaryEntity)
    private repository: Repository<PurchaseSummaryEntity>,
  ) {}
  
  create = async(createPurchaseSummaryDto: CreatePurchaseSummaryDto) => {
    return this.repository.save(createPurchaseSummaryDto)
  }

  
}
