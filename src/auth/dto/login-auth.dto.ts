import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginAuthDto {
  @ApiProperty({
    type: String,
    description: 'Unique identifier for the user.',
    default: 'admin',
  })
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    type: String,
    description: 'Access password.',
    default: 'my_weak_password',
  })
  @IsNotEmpty()
  password: string;
}
