import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';

import { Vehicle } from './vehicle.entity';

@Entity()
export class GPSPosition {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('float')
  latitude!: number;

  @Column('float')
  longitude!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @ManyToOne(() => Vehicle)
  vehicle!: Vehicle;
}