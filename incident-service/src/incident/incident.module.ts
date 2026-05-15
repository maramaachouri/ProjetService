import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IncidentController } from './incident.controller';
import { IncidentService } from './incident.service';
import { Incident } from './entities/incident.entity';

import { PassportModule } from '@nestjs/passport';

import { JwtStrategy } from '../auth/strategies/jwt.strategy';

@Module({
  imports: [
  PassportModule,
  TypeOrmModule.forFeature([Incident]),
],
  controllers: [IncidentController],
  providers: [IncidentService, JwtStrategy],
})
export class IncidentModule {}