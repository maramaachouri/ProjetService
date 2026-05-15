import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TrafficController } from './traffic.controller';
import { TrafficService } from './traffic.service';
import { TrafficZone } from './entities/traffic-zone.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TrafficZone])],
  controllers: [TrafficController],
  providers: [TrafficService],
})
export class TrafficModule {}