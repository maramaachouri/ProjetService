import { Body, Controller, Get, Post } from '@nestjs/common';

import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';

import { CreateGpsDto } from './dto/create-gps.dto';


import {
  
  Delete,
  
  Param,
  Patch,
 
} from '@nestjs/common';
@Controller('vehicles')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehicleService.create(createVehicleDto);
  }

  @Get()
  findAll() {
    return this.vehicleService.findAll();
  }

  @Get(':id')
findOne(@Param('id') id: string) {
  return this.vehicleService.findOne(+id);
}

@Patch(':id')
update(
  @Param('id') id: string,
  @Body() updateData: any,
) {
  return this.vehicleService.update(+id, updateData);
}

@Delete(':id')
remove(@Param('id') id: string) {
  return this.vehicleService.remove(+id);
}

@Post(':id/gps')
addGps(
  @Param('id') id: string,
  @Body() createGpsDto: CreateGpsDto,
) {
  return this.vehicleService.addGpsPosition(
    +id,
    createGpsDto,
  );
}

@Get(':id/gps')
getGpsPositions(@Param('id') id: string) {
  return this.vehicleService.getVehiclePositions(+id);
}
}

