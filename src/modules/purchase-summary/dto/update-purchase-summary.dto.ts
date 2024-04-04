import { PartialType } from '@nestjs/mapped-types';
import { CreatePurchaseSummaryDto } from './create-purchase-summary.dto';

export class UpdatePurchaseSummaryDto extends PartialType(CreatePurchaseSummaryDto) {}
