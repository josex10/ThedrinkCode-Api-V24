import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RestaurantLegalInfoService } from './restaurant-legal-info.service';
import { CreateRestaurantLegalInfoDto } from './dto/create-restaurant-legal-info.dto';
import { UpdateRestaurantLegalInfoDto } from './dto/update-restaurant-legal-info.dto';

@Controller('restaurant-legal-info')
export class RestaurantLegalInfoController {
  constructor(private readonly restaurantLegalInfoService: RestaurantLegalInfoService) {}

  @Post()
  create(@Body() createRestaurantLegalInfoDto: CreateRestaurantLegalInfoDto) {
    return this.restaurantLegalInfoService.create(createRestaurantLegalInfoDto);
  }

  @Get()
  findAll() {
    return this.restaurantLegalInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restaurantLegalInfoService.findOneById(+id);
  }

  @Get('restaurant/:id')
  findOneByRestaurantId(@Param('id') id: string) {
    return this.restaurantLegalInfoService.findOneByRestaurantId(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRestaurantLegalInfoDto: UpdateRestaurantLegalInfoDto) {
    return this.restaurantLegalInfoService.update(+id, updateRestaurantLegalInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Body() body: {active: boolean}) {
    const {active} = body;
    return this.restaurantLegalInfoService.disabledOrEnableEntity(+id, active);
  }
}
