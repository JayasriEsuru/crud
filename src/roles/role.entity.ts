/* eslint-disable prettier/prettier */
// role.entity.ts
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'role' })
export class roleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role: string;
}
