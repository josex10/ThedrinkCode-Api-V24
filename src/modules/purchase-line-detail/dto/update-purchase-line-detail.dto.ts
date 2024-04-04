import { PartialType } from '@nestjs/mapped-types';
import { CreatePurchaseLineDetailDto } from './create-purchase-line-detail.dto';

export class UpdatePurchaseLineDetailDto extends PartialType(CreatePurchaseLineDetailDto) {}
