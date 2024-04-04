import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { ProviderEntity } from './entities/provider.entity';

@Injectable()
export class ProviderService {

  constructor(
    @InjectRepository(ProviderEntity)
    private repository: Repository<ProviderEntity>,
  ) {}
  
  create = async(entity: CreateProviderDto): Promise<ProviderEntity> => {
    const actualProvider = await this.repository.findOne({
      where: {
        clm_id_restaurant: entity.clm_id_restaurant,
        clm_identification_type: entity.clm_identification_type,
        clm_identification_number: entity.clm_identification_number
      }
    });

    if(actualProvider)
      throw new HttpException('The provider already exist.', HttpStatus.BAD_REQUEST)

    return await this.repository.save(entity);
  }

  findAll = async() : Promise<ProviderEntity[]> => {
    return await this.repository.find();
  }

  findAllByRestId = async(clm_id_restaurant: number) : Promise<ProviderEntity[]> => {
    return await this.repository.find({where: {clm_id_restaurant}});
  }

  findOneById = async(clm_id: number): Promise<ProviderEntity> => {
    return await this.repository.findOne({where: {clm_id}})
  }

  update = async(clm_id: number, entity: UpdateProviderDto): Promise<ProviderEntity> => {
    
      const provider = await this.findOneById(clm_id)
  
      if(!provider)
        throw new HttpException('Not record found with the ID provided.', HttpStatus.BAD_REQUEST);
    
      return await this.repository.save({...entity, clm_id});
  }

  disabledOrEnableEntity = async (clm_id: number, active: boolean): Promise<ProviderEntity> => {

    const entity = await this.findOneById(clm_id)

    if(!entity) throw new Error('Not record found with the ID provided.');

    entity.clm_active = active; 
    
    return await this.repository.save(entity)
  }

  findOneCustom(options: FindManyOptions<ProviderEntity>) : Promise<ProviderEntity> {
    return this.repository.findOne(options);
  }


}
