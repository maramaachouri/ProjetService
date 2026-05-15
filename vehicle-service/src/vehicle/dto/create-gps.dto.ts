import { IsNumber } from 'class-validator';

export class CreateGpsDto {
  @IsNumber()
  latitude!: number;

  @IsNumber()
  longitude!: number;
}