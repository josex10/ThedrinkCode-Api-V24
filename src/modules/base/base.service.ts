import { FindManyOptions, FindOneOptions, Repository } from "typeorm";
import { BaseEntity } from "./entities";

export abstract class BaseService<T extends BaseEntity> {
    abstract getRepository() : Repository<T>;

    findAll = async() : Promise<T[]> => {
        return await this.getRepository().find();
    }

    findOneById = async(clm_id: any): Promise<T > => {
        return await this.getRepository().findOne({where: {clm_id}})
    }

    disabledOrEnableEntity = async (clm_id: number, active: boolean): Promise<T> => {

        const entity = await this.findOneById(clm_id);

        if(!entity) throw new Error('Invalid Entity ID');

        entity.clm_active = active; 
        
        return await this.getRepository().save(entity)
    }

    // private save(entity: T) : Promise<T> {
    //     return this.getRepository().save(entity);
    // }

    // saveMany(entities: T[]) : Promise<T[]> {
    //     return this.getRepository().save(entities);
    // }

    

    // count(options?: FindManyOptions<T>) : Promise<number> {
    //     return this.getRepository().count(options);
    // }
}