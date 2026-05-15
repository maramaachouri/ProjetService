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

import { UseGuards } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';

import { Roles } from '../auth/decorators/roles.decorator';

import { RolesGuard } from '../auth/guards/roles.guard';

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
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Roles('ADMIN')
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