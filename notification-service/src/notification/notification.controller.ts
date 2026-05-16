import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import {
  ApiTags,
  ApiOperation,
} from '@nestjs/swagger';

import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';

@ApiTags('Notifications')
@Controller('notifications')
export class NotificationController {
  constructor(
    private readonly notificationService: NotificationService,
  ) {}
@Post()

 @ApiOperation({
  summary: 'Create notification',
})
  create(
    @Body()
    createNotificationDto: CreateNotificationDto,
  ) {
    return this.notificationService.create(
      createNotificationDto,
    );
  }

  @ApiOperation({
  summary: 'Get all notifications',
})
  @Get()
  findAll() {
    return this.notificationService.findAll();
  }

  @ApiOperation({
  summary: 'Mark notification as read',
})
  @Patch(':id/read')
  markAsRead(@Param('id') id: string) {
    return this.notificationService.markAsRead(+id);
  }
}