import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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

  async updateDensity(id: number, density: number) {
    let level = TrafficLevel.LOW;

    if (density > 5 && density <= 10) {
      level = TrafficLevel.MEDIUM;
    }

    if (density > 10) {
      level = TrafficLevel.HIGH;
    }

    await this.trafficRepository.update(id, {
      density,
      level,
    });

    return this.trafficRepository.findOne({
      where: { id },
    });
  }
}