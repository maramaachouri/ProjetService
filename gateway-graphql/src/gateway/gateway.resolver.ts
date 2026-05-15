import { Query, Resolver } from '@nestjs/graphql';

import { GatewayService } from './gateway.service';
import { VehicleType } from './types/vehicle.type';
import { IncidentType } from './types/incident.type';
import { TrafficZoneType } from './types/traffic-zone.type';
import { NotificationType } from './types/notification.type';

@Resolver()
export class GatewayResolver {
  constructor(
    private readonly gatewayService: GatewayService,
  ) {}

  @Query(() => [VehicleType])
  async vehicles() {
    return this.gatewayService.getVehicles();
  }

  @Query(() => [IncidentType])
async incidents() {
  return this.gatewayService.getIncidents();
}

@Query(() => [TrafficZoneType])
async trafficZones() {
  return this.gatewayService.getTrafficZones();
}

@Query(() => [NotificationType])
async notifications() {
  return this.gatewayService.getNotifications();
}
}