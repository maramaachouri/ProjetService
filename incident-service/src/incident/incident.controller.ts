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
import { UpdateStatusDto } from './dto/update-status.dto';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
} from '@nestjs/swagger';

import { UseGuards } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';

import { Roles } from '../auth/decorators/roles.decorator';

import { RolesGuard } from '../auth/guards/roles.guard';

@ApiTags('Incidents')
@Controller('incidents')
export class IncidentController {
  constructor(
    private readonly incidentService: IncidentService,
  ) {}
  
  @ApiOperation({
  summary: 'Create traffic incident',
})
  @Post()
  create(
    @Body() createIncidentDto: CreateIncidentDto,
  ) {
    return this.incidentService.create(
      createIncidentDto,
    );
  }
  
  @ApiOperation({
  summary: 'Get all incidents',
})
  @Get()
  findAll() {
    return this.incidentService.findAll();
  }
  
  @ApiBearerAuth()

@ApiOperation({
  summary: 'Update incident status (ADMIN only)',
})
  @Patch(':id/status')

@UseGuards(AuthGuard('jwt'), RolesGuard)
@Roles('ADMIN')

@ApiBearerAuth()

@ApiOperation({
  summary: 'Update incident status (ADMIN only)',
})

updateStatus(
  @Param('id') id: string,
  @Body() updateStatusDto: UpdateStatusDto,
) {
  return this.incidentService.updateStatus(
    +id,
    updateStatusDto,
  );
}
}