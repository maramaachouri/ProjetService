import { IsNotEmpty } from 'class-validator';

export class CreateVehicleDto {
  @IsNotEmpty()
  matricule!: string;

  @IsNotEmpty()
  type!: string;
}