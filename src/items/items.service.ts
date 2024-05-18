/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { item } from './item.entity';
import { Repository } from 'typeorm';
import { CreateItemDto } from '../items/dtos/create-todo.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(item) private readonly itemRepository: Repository<item>,
  ) {}

  async create(dto: CreateItemDto) {
    const item = this.itemRepository.create(dto);
    return await this.itemRepository.save(item);
  }
  async findMany() {
    return await this.itemRepository.find();
  }
  async update(id: number, dto: CreateItemDto) {
    const item = await this.itemRepository.findOne({ where: { id } });
    // Check whether record exist or not
    Object.assign(item, dto);
    const result = await this.itemRepository.update(
      { id: id },
      {
        title: dto.title,
        role: dto.role,
        learnedCourse: dto.learnedCourse,
        learningCourse: dto.learningCourse,
        duration: dto.duration,
        status: dto.status,
      },
    );
    return result;
  }

  async delete(id: number) {
    const item = await this.itemRepository.findOne({ where: { id } });
    return await this.itemRepository.remove(item);
  }

  async findOne(id: number) {
    return await this.itemRepository.findOne({ where: { id } });
  }
}
