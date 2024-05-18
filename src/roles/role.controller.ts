/* eslint-disable prettier/prettier */
// role.controller.ts
import { Body, Controller, Param, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { roleEntity } from './role.entity';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post('create')
  create(@Body() dto: roleEntity) {
    return this.roleService.create(dto);
  }

  @Post('readAll')
  async findMany() {
    return await this.roleService.findMany();
  }

  @Post('delete/:role')
  async delete(@Param('role') role: string) {
    return await this.roleService.delete(role);
  }
}
