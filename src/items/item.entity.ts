/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'items' })
export class item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  role: string;

  @Column()
  learnedCourse: string;

  @Column()
  learningCourse: string;

  @Column()
  duration: number;

  @Column()
  status: string;
}
