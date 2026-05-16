import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateStatusDto } from './dto/update-status.dto';
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
  updateStatusDto: UpdateStatusDto,
) {

  const incident = await this.incidentRepository.findOne({
    where: { id },
  });

  if (!incident) {
    throw new Error('Incident not found');
  }

  incident.status = updateStatusDto.status;

  return this.incidentRepository.save(incident);
}
}