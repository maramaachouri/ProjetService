import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { TrafficService } from './traffic.service';
import { CreateZoneDto } from './dto/create-zone.dto';

@Controller('traffic')
export class TrafficController {
  constructor(private readonly trafficService: TrafficService) {}

  @Post('zones')
  create(@Body() createZoneDto: CreateZoneDto) {
    return this.trafficService.create(createZoneDto);
  }

  @Get('zones')
  findAll() {
    return this.trafficService.findAll();
  }

  @Patch('zones/:id/density')
  updateDensity(
    @Param('id') id: string,
    @Body('density') density: number,
  ) {
    return this.trafficService.updateDensity(
      +id,
      density,
    );
  }
}