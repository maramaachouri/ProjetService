import { ApiProperty } from '@nestjs/swagger';

import { IncidentStatus } from '../entities/incident.entity';

export class UpdateStatusDto {

  @ApiProperty({
    example: 'RESOLVED',
    enum: IncidentStatus,
  })

  status!: IncidentStatus;
}