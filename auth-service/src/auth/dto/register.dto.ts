import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {

  @ApiProperty({
    example: 'Maram',
    description: 'User name',
  })
  name!: string;

  @ApiProperty({
    example: 'admin@test.com',
    description: 'User email address',
  })
  email!: string;

  @ApiProperty({
    example: '123456',
    description: 'User password',
  })
  password!: string;
}