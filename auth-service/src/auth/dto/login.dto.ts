import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {

  @ApiProperty({
    example: 'admin@test.com',
    description: 'User email',
  })
  email!: string;

  @ApiProperty({
    example: '123456',
    description: 'User password',
  })
  password!: string;
}