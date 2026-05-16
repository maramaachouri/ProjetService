import { ApiProperty } from '@nestjs/swagger';

export class CreateGpsDto {

  @ApiProperty({
    example: 36.8065,
  })
  latitude!: number;

  @ApiProperty({
    example: 10.1815,
  })
  longitude!: number;
}