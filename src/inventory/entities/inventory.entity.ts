import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cheeseType: string;

  @Column()
  stock: number;
}
