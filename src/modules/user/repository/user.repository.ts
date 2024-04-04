import { Repository } from 'typeorm';
import { BaseRepository } from '../../base/repository';
import { UserEntity } from '../entities';
// import { IRepository } from '../../base/models';
import { InjectRepository } from '@nestjs/typeorm';

export class UserRepository extends BaseRepository<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    userEntityRepository: Repository<UserEntity>,
  ) {
    super(userEntityRepository);
  }
}