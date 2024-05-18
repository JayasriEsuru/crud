/* eslint-disable prettier/prettier */
import { ItemsService } from './items.service';
import { Body, Controller, Param, Post } from '@nestjs/common';
import { CreateItemDto } from '../items/dtos/create-todo.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Post('/create')
  create(@Body() dto: CreateItemDto) {
    return this.itemsService.create(dto);
  }
  @Post('readAll')
  async findMany() {
    return await this.itemsService.findMany();
  }

  @Post('update/:id')
  async update(@Param('id') id: number, @Body() createItemDto: CreateItemDto) {
    return await this.itemsService.update(id, createItemDto);
  }
  @Post('delete/:id')
  async delete(@Param('id') id: number) {
    return await this.itemsService.delete(id);
  }
  @Post('findOne/:id')
  async findOne(@Param('id') id: number) {
    return await this.itemsService.findOne(id);
  }
}
