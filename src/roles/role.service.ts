/* eslint-disable prettier/prettier */
// role.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { roleEntity } from './role.entity';
import { roleDto } from './dto/role.dto';
import { item } from '../items/item.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(roleEntity)
    private readonly roleRepository: Repository<roleEntity>,
    @InjectRepository(item)
    private readonly itemRepository: Repository<item>,
  ) {}

  async create(dto: roleDto) {
    const item = this.roleRepository.create(dto);
    return await this.roleRepository.save(item);
  }

  async findMany() {
    return await this.roleRepository.find();
  }

  async delete(role: string) {
    const existsInRelatedTable = await this.itemRepository.findOne({
      where: { role },
    });

    if (existsInRelatedTable) {
      throw new NotFoundException(
        'role exists in related table, cannot delete.',
      );
    }

    const todo = await this.roleRepository.findOne({
      where: { role },
    });

    if (!todo) {
      throw new NotFoundException('Role not found.');
    }

    console.log('1 Record Deleted');
    return await this.roleRepository.remove(todo);
  }
}
