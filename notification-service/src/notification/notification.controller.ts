import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Controller('notifications')
export class NotificationController {
  constructor(
    private readonly notificationService: NotificationService,
  ) {}

  @Post()
  create(
    @Body()
    createNotificationDto: CreateNotificationDto,
  ) {
    return this.notificationService.create(
      createNotificationDto,
    );
  }

  @Get()
  findAll() {
    return this.notificationService.findAll();
  }

  @Patch(':id/read')
  markAsRead(@Param('id') id: string) {
    return this.notificationService.markAsRead(+id);
  }
}