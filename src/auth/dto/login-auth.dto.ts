import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginAuthDto {
  @ApiProperty({
    type: String,
    description: 'Unique identifier for the user.',
    default: 'mycool5',
  })
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    type: String,
    description: 'Access password.',
    default: 'my$tr0ngP@ssword',
  })
  @IsNotEmpty()
  password: string;
}
