import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from '../base/base.service';
import { Repository } from "typeorm";
import { UserEntity } from './entities';
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService extends BaseService<UserEntity> {

    constructor(@InjectRepository(UserEntity) private userRepo : Repository<UserEntity>) {
        super();
    }

    getRepository(): Repository<UserEntity> {
        return this.userRepo;
    }

    custom = () => {
      return 'message custom'
    }

    saveUser = async (user: CreateUserDto) : Promise<UserEntity> => {
        return await this.userRepo.save(user)
    }

}
