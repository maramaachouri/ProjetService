import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VehicleController } from './vehicle.controller';
import { VehicleService } from './vehicle.service';
import { Vehicle } from './entities/vehicle.entity';

import { GPSPosition } from './entities/gps-position.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Vehicle, GPSPosition])],
  controllers: [VehicleController],
  providers: [VehicleService],
})
export class VehicleModule {}