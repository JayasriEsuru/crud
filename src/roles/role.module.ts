/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleService } from './role.service';
import { roleEntity } from './role.entity';
import { RoleController } from './role.controller';
import { item } from 'src/items/item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([roleEntity, item])],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
