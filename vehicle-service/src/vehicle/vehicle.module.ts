import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VehicleController } from './vehicle.controller';
import { VehicleService } from './vehicle.service';
import { Vehicle } from './entities/vehicle.entity';

import { PassportModule } from '@nestjs/passport';

import { JwtStrategy } from '../auth/strategies/jwt.strategy';
import { GPSPosition } from './entities/gps-position.entity';
@Module({
  imports: [
  PassportModule,
  TypeOrmModule.forFeature([Vehicle, GPSPosition]),
],
  controllers: [VehicleController],
  providers: [VehicleService, JwtStrategy],
})
export class VehicleModule {}