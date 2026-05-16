import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNotificationDto {

  @ApiProperty({
    example: 'Heavy traffic in downtown',
  })

  message!: string;
}