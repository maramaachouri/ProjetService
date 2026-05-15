import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  Incident,
  IncidentStatus,
} from './entities/incident.entity';

import { CreateIncidentDto } from './dto/create-incident.dto';

@Injectable()
export class IncidentService {
  constructor(
    @InjectRepository(Incident)
    private incidentRepository: Repository<Incident>,
  ) {}

  async create(createIncidentDto: CreateIncidentDto) {
    const incident = this.incidentRepository.create(
      createIncidentDto,
    );

    await this.incidentRepository.save(incident);

    return {
      message: 'Incident created successfully',
      incident,
    };
  }

  async findAll() {
    return this.incidentRepository.find();
  }

  async updateStatus(
    id: number,
    status: IncidentStatus,
  ) {
    await this.incidentRepository.update(id, {
      status,
    });

    return this.incidentRepository.findOne({
      where: { id },
    });
  }
}