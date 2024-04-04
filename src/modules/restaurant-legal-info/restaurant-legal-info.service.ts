import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRestaurantLegalInfoDto } from './dto/create-restaurant-legal-info.dto';
import { UpdateRestaurantLegalInfoDto } from './dto/update-restaurant-legal-info.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RestaurantLegalInfoEntity } from './entities/restaurant-legal-info.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RestaurantLegalInfoService {

  constructor(
    @InjectRepository(RestaurantLegalInfoEntity)
    private repository: Repository<RestaurantLegalInfoEntity>,
  ) {}
  
  
  create = async(entity: CreateRestaurantLegalInfoDto): Promise<RestaurantLegalInfoEntity> => {

    const actualLegalInfo = await this.findOneByRestaurantId(entity.clm_id_restaurant);

    if(actualLegalInfo)
      throw new HttpException('The restaurarant already has a legal info.', HttpStatus.BAD_REQUEST)

    return await this.repository.save(entity);
  }

  findAll = async() : Promise<RestaurantLegalInfoEntity[]> => {
    return await this.repository.find();
  }

  findOneById = async(clm_id: number): Promise<RestaurantLegalInfoEntity> => {
    return await this.repository.findOne({where: {clm_id}})
  }

  findOneByRestaurantId = async(clm_id_restaurant: number): Promise<RestaurantLegalInfoEntity> => {
    return await this.repository.findOne({where: {clm_id_restaurant}})
  }

  update = async(clm_id: number, entity: UpdateRestaurantLegalInfoDto): Promise<RestaurantLegalInfoEntity> => {
    
    const legalInfo = await this.findOneById(clm_id)

    if(!legalInfo)
      throw new HttpException('Not record found with the ID provided.', HttpStatus.BAD_REQUEST);
  
    return await this.repository.save({...entity, clm_id});
  }

  disabledOrEnableEntity = async (clm_id: number, active: boolean): Promise<RestaurantLegalInfoEntity> => {

    const entity = await this.findOneById(clm_id)

    if(!entity) throw new Error('Not record found with the ID provided.');

    entity.clm_active = active; 
    
    return await this.repository.save(entity)
  }
}
