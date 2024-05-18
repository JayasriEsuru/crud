import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { item } from './item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([item])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
