import { Controller, Get, Post, Body, HttpCode, HttpStatus} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities';
import { BaseController } from '../base/base.controller';
import { BaseService } from '../base/base.service';

@Controller('user')
export class UserController extends BaseController<UserEntity>{
  constructor(private readonly userService: UserService) {
    super();
  }

  getService(): BaseService<UserEntity> {
    return this.userService;
  }
  
  @Post('save')
  @HttpCode(HttpStatus.CREATED)
  async save(@Body() entity: CreateUserDto) : Promise<UserEntity> {
      return await this.userService.saveUser(entity);
  }

  @Get('custom')
  async custom(): Promise<string> {
    return this.userService.custom();
  }
}
