import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  matricule!: string;

  @Column()
  type!: string;

  @Column({
    default: 'ACTIVE',
  })
  status!: string;
}