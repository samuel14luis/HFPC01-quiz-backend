import { ApiProperty } from '@nestjs/swagger';
import { IsPositive, MaxLength } from 'class-validator';
import { User } from 'src/auth/entities/user.entity';

export class CreateTestTypeDto {
  @ApiProperty({
    type: String,
    description: 'Test type name',
    default: 'Generic',
  })
  @MaxLength(60)
  name: string;

  @ApiProperty({
    type: Number,
    description: "Id of the user who creates the test type.",
    default: 1,
  })
  @IsPositive()
  fk_idUserCreator: User;

}