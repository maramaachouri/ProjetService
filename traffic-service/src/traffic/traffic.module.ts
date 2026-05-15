import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TrafficController } from './traffic.controller';
import { TrafficService } from './traffic.service';
import { TrafficZone } from './entities/traffic-zone.entity';
import { PassportModule } from '@nestjs/passport';

import { JwtStrategy } from '../auth/strategies/jwt.strategy';
@Module({
  imports: [
  PassportModule,
  TypeOrmModule.forFeature([TrafficZone]),
],
  controllers: [TrafficController],
  providers: [TrafficService, JwtStrategy],
})
export class TrafficModule {}