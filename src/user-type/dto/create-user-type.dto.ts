import { ApiProperty } from '@nestjs/swagger';
import { MaxLength } from 'class-validator';

export class CreateUserTypeDto {
  @ApiProperty({
    type: String,
    description: 'User type name',
    default: 'Admin',
  })
  @MaxLength(60)
  name: string;
}