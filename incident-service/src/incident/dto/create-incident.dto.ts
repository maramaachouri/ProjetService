import { IsEnum, IsNotEmpty } from 'class-validator';

import { IncidentType } from '../entities/incident.entity';

export class CreateIncidentDto {
  @IsEnum(IncidentType)
  type!: IncidentType;

  @IsNotEmpty()
  description!: string;

  @IsNotEmpty()
  location!: string;
}