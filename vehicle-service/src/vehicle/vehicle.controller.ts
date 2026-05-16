import { Body, Controller, Get, Post } from '@nestjs/common';

import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';

import { CreateGpsDto } from './dto/create-gps.dto';

import { UseGuards } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';

import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.gurads';

import { UpdateVehicleDto } from './dto/update-vehicle.dto';

import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
} from '@nestjs/swagger';

import {
  
  Delete,
  
  Param,
  Patch,
 
} from '@nestjs/common';
@ApiTags('Vehicles')
@Controller('vehicles')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}
  @ApiOperation({
  summary: 'Create a new vehicle',
})
  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehicleService.create(createVehicleDto);
  }
  @ApiOperation({
  summary: 'Get all vehicles',
})
  @Get()
  findAll() {
    return this.vehicleService.findAll();
  }

  @Get(':id')
findOne(@Param('id') id: string) {
  return this.vehicleService.findOne(+id);
}

@Patch(':id')
@ApiOperation({
  summary: 'Update vehicle status',
})
update(
  @Param('id') id: string,
  @Body() updateVehicleDto: UpdateVehicleDto,
) {
  return this.vehicleService.update(+id, updateVehicleDto,);
}
@ApiBearerAuth()

@ApiOperation({
  summary: 'Delete vehicle (ADMIN only)',
})
@Delete(':id')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Roles('ADMIN')
remove(@Param('id') id: string) {
  return this.vehicleService.remove(+id);
}

@ApiOperation({
  summary: 'Add GPS position to vehicle',
})
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

@ApiOperation({
  summary: 'Get vehicle GPS history',
})
@Get(':id/gps')
getGpsPositions(@Param('id') id: string) {
  return this.vehicleService.getVehiclePositions(+id);
}
}

