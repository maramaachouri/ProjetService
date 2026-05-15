import {
  Body,
  Controller,
 Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { IncidentService } from './incident.service';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { IncidentStatus } from './entities/incident.entity';

@Controller('incidents')
export class IncidentController {
  constructor(
    private readonly incidentService: IncidentService,
  ) {}

  @Post()
  create(
    @Body() createIncidentDto: CreateIncidentDto,
  ) {
    return this.incidentService.create(
      createIncidentDto,
    );
  }

  @Get()
  findAll() {
    return this.incidentService.findAll();
  }

  @Patch(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body('status') status: IncidentStatus,
  ) {
    return this.incidentService.updateStatus(
      +id,
      status,
    );
  }
}