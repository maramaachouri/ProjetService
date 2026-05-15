import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { firstValueFrom } from 'rxjs';

@Injectable()
export class GatewayService {
  constructor(private httpService: HttpService) {}

  async getVehicles() {
    const response = await firstValueFrom(
      this.httpService.get(
        'http://localhost:3002/vehicles',
      ),
    );

    return response.data;
  }

  async getIncidents() {
  const response = await firstValueFrom(
    this.httpService.get(
      'http://localhost:3004/incidents',
    ),
  );

  return response.data;
}

async getTrafficZones() {
  const response = await firstValueFrom(
    this.httpService.get(
      'http://localhost:3003/traffic/zones',
    ),
  );

  return response.data;
}

async getNotifications() {
  const response = await firstValueFrom(
    this.httpService.get(
      'http://localhost:3005/notifications',
    ),
  );

  return response.data;
}
}