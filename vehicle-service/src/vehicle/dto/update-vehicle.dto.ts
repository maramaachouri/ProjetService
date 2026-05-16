import { ApiProperty } from '@nestjs/swagger';

export class UpdateVehicleDto {

  @ApiProperty({
    example: 'INACTIVE',
  })
  status!: string;
}