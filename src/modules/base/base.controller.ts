import { Body, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { BaseService } from "./base.service";
import { BaseEntity } from "./entities";

export abstract class BaseController<T extends BaseEntity> {

    abstract getService(): BaseService<T>;

    @Get('all')
    async findAll() : Promise<T[]> {
        return await this.getService().findAll();
    }

    @Get('find/:id')
    async findOne(@Param('id') id): Promise<T> {
        return await this.getService().findOneById(id);
    }

    @Post('delete/:id')
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id') id: number, @Body() body: {active: boolean}) {
        const {active} = body;
        return this.getService().disabledOrEnableEntity(id, active);
    }

    // @Post('save')
    // @HttpCode(HttpStatus.CREATED)
    // async save(@Body() entity: T) : Promise<T> {
    //     return await this.getService().save(entity);
    // }

    // @Post('save/many')
    // @HttpCode(HttpStatus.CREATED)
    // async saveMany(@Body() entities: T[]) : Promise<T[]> {
    //     return await this.getService().saveMany(entities);
    // }

    // @Get('count')
    // async count() : Promise<number> {
    //     return await this.getService().count();
    // }
}