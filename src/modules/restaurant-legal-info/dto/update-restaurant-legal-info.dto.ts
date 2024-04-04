import { PartialType } from '@nestjs/mapped-types';
import { CreateRestaurantLegalInfoDto } from './create-restaurant-legal-info.dto';

export class UpdateRestaurantLegalInfoDto extends PartialType(CreateRestaurantLegalInfoDto) {}
