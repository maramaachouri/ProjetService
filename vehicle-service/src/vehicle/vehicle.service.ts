import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Vehicle } from './entities/vehicle.entity';
import { CreateVehicleDto } from './dto/create-vehicle.dto';

import { GPSPosition } from './entities/gps-position.entity';
import { CreateGpsDto } from './dto/create-gps.dto';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,

    @InjectRepository(GPSPosition)
private gpsRepository: Repository<GPSPosition>,
  ) {}

  async create(createVehicleDto: CreateVehicleDto) {
    const vehicle = this.vehicleRepository.create(createVehicleDto);

    await this.vehicleRepository.save(vehicle);

    return {
      message: 'Vehicle created successfully',
      vehicle,
    };
  }

  async findAll() {
    return this.vehicleRepository.find();
  }

  async findOne(id: number) {
  return this.vehicleRepository.findOne({
    where: { id },
  });
}

async update(id: number, updateVehicleDto: any) {

  await this.vehicleRepository.update(id, updateVehicleDto);

  return this.vehicleRepository.findOne({
    where: { id },
  });
}

async remove(id: number) {
  await this.gpsRepository.delete({
    vehicle: { id },
  });

  await this.vehicleRepository.delete(id);

  return {
    message: 'Vehicle deleted successfully',
  };
}

async addGpsPosition(
  vehicleId: number,
  createGpsDto: CreateGpsDto,
) {
  const vehicle = await this.findOne(vehicleId);

if (!vehicle) {
  throw new Error('Vehicle not found');
}

  const gpsPosition = this.gpsRepository.create({
    latitude: createGpsDto.latitude,
    longitude: createGpsDto.longitude,
    vehicle,
  });

  await this.gpsRepository.save(gpsPosition);

  return {
    message: 'GPS position added',
    gpsPosition,
  };
}

async getVehiclePositions(vehicleId: number) {
  return this.gpsRepository.find({
    where: {
      vehicle: {
        id: vehicleId,
      },
    },
    relations: ['vehicle'],
  });
}
}