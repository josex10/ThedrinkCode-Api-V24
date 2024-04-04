import { PartialType } from '@nestjs/mapped-types';
import { CreateRestaurantDto } from './create-restaurant.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateRestaurantDto extends PartialType(CreateRestaurantDto) {
    @IsNumber()
    @IsNotEmpty()
    clm_id: number;
}
