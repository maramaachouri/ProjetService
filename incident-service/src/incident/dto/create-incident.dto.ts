import { IsEnum, IsNotEmpty } from 'class-validator';

import { IncidentType } from '../entities/incident.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IncidentStatus } from '../entities/incident.entity';
export class CreateIncidentDto {

  @ApiProperty({
    example: 'ACCIDENT',
    enum:  IncidentStatus,
  })
  type!: IncidentType;

  @ApiProperty({
    example: 'Big accident near downtown',
  })
  description!: string;

  @ApiProperty({
    example: 'Centre Ville',
  })
  location!: string;
}