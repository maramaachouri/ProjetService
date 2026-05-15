import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { GatewayResolver } from './gateway.resolver';
import { GatewayService } from './gateway.service';

@Module({
  imports: [HttpModule],
  providers: [GatewayResolver, GatewayService],
})
export class GatewayModule {}