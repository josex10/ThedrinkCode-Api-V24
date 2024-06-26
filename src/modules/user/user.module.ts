import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity])
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
