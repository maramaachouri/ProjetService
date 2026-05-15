import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum IncidentType {
  ACCIDENT = 'ACCIDENT',
  ROADWORK = 'ROADWORK',
  ROAD_CLOSED = 'ROAD_CLOSED',
  TRAFFIC_JAM = 'TRAFFIC_JAM',
}

export enum IncidentStatus {
  REPORTED = 'REPORTED',
  IN_PROGRESS = 'IN_PROGRESS',
  RESOLVED = 'RESOLVED',
}

@Entity()
export class Incident {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'enum',
    enum: IncidentType,
  })
  type!: IncidentType;

  @Column()
  description!: string;

  @Column()
  location!: string;

  @Column({
    type: 'enum',
    enum: IncidentStatus,
    default: IncidentStatus.REPORTED,
  })
  status!: IncidentStatus;
}