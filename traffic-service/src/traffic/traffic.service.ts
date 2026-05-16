import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateDensityDto } from './dto/update-density.dto';
import {
  TrafficLevel,
  TrafficZone,
} from './entities/traffic-zone.entity';


import { CreateZoneDto } from './dto/create-zone.dto';

@Injectable()
export class TrafficService {
  constructor(
    @InjectRepository(TrafficZone)
    private trafficRepository: Repository<TrafficZone>,
  ) {}

  async create(createZoneDto: CreateZoneDto) {
    const zone = this.trafficRepository.create(createZoneDto);

    await this.trafficRepository.save(zone);

    return {
      message: 'Traffic zone created',
      zone,
    };
  }

  async findAll() {
    return this.trafficRepository.find();
  }

  async updateDensity(
  id: number,
  updateDensityDto: UpdateDensityDto,
) {

  const zone = await this.trafficRepository.findOne({
    where: { id },
  });

  if (!zone) {
    throw new Error('Zone not found');
  }

  zone.density = updateDensityDto.density;

  if (zone.density <= 5) {
    zone.level = TrafficLevel.LOW;
  } else if (zone.density <= 10) {
    zone.level = TrafficLevel.MEDIUM;;
  } else {
    zone.level = TrafficLevel.HIGH;
  }

  return this.trafficRepository.save(zone);
}
}