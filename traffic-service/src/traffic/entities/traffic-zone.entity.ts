import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum TrafficLevel {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

@Entity()
export class TrafficZone {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({
    default: 0,
  })
  density!: number;

  @Column({
    type: 'enum',
    enum: TrafficLevel,
    default: TrafficLevel.LOW,
  })
  level!: TrafficLevel;
}