import { Injectable } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RestaurantEntity } from './entities';
import { Repository } from 'typeorm';

@Injectable()
export class RestaurantService {

  constructor(
    @InjectRepository(RestaurantEntity)
    private restaurantEntityRepository: Repository<RestaurantEntity>,
  ) {}
  
  create(createRestaurantDto: CreateRestaurantDto) {
    return 'This action adds a new restaurant';
  }

  findAll = async()=>  {
    return await this.restaurantEntityRepository.find();
  }

  findOneById = async(clm_id: number) => {
    return await this.restaurantEntityRepository.findOne({where: {clm_id}});
  }

  findOneByName = async(clm_name: string) => {
    return await this.restaurantEntityRepository.findOne({where: {clm_name}});
  }

  findOneByEmail = async(clm_email: string) => {
    return await this.restaurantEntityRepository.findOne({where: {clm_email}});
  }

  update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    return `This action updates a #${id} restaurant`;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurant`;
  }
}
