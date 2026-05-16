import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateVehicleDto {

  @ApiProperty({
    example: '123-TUN-456',
  })
  matricule!: string;

  @ApiProperty({
    example: 'Car',
  })
  type!: string;
}