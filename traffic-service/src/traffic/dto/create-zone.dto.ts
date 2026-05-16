import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateZoneDto {
   @ApiProperty({
    example: 'Centre Ville',
  })
  name!: string;
}