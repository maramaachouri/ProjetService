import { ApiProperty } from '@nestjs/swagger';

export class UpdateDensityDto {

  @ApiProperty({
    example: 12,
  })
  density!: number;
}