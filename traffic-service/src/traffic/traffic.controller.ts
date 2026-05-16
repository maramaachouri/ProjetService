import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { UpdateDensityDto } from './dto/update-density.dto';
import { UseGuards } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';

import { Roles } from '../auth/decorators/roles.decorator';

import { RolesGuard } from '../auth/guards/roles.guard';

import { TrafficService } from './traffic.service';
import { CreateZoneDto } from './dto/create-zone.dto';

@ApiTags('Traffic')
@Controller('traffic')
export class TrafficController {
  constructor(private readonly trafficService: TrafficService) {}

  @ApiOperation({
  summary: 'Create traffic zone',
})
  @Post('zones')
  create(@Body() createZoneDto: CreateZoneDto) {
    return this.trafficService.create(createZoneDto);
  }
  
  @ApiOperation({
  summary: 'Get all traffic zones',
})
  @Get('zones')
  findAll() {
    return this.trafficService.findAll();
  }
  
  @ApiBearerAuth()

@ApiOperation({
  summary: 'Update traffic density (ADMIN only)',
})
 @Patch('zones/:id/density')

@UseGuards(AuthGuard('jwt'), RolesGuard)
@Roles('ADMIN')

@ApiBearerAuth()

@ApiOperation({
  summary: 'Update traffic density (ADMIN only)',
})

updateDensity(
  @Param('id') id: string,
  @Body() updateDensityDto: UpdateDensityDto,
) {
  return this.trafficService.updateDensity(
    +id,
    updateDensityDto,
  );
}
}