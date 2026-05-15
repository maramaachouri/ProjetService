import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Notification } from './entities/notification.entity';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification)
    private notificationRepository: Repository<Notification>,
  ) {}

  async create(
    createNotificationDto: CreateNotificationDto,
  ) {
    const notification =
      this.notificationRepository.create(
        createNotificationDto,
      );

    await this.notificationRepository.save(
      notification,
    );

    return {
      message: 'Notification sent successfully',
      notification,
    };
  }

  async findAll() {
    return this.notificationRepository.find();
  }

  async markAsRead(id: number) {
    await this.notificationRepository.update(id, {
      isRead: true,
    });

    return this.notificationRepository.findOne({
      where: { id },
    });
  }
}