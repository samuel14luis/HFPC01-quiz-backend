import { ApiProperty } from '@nestjs/swagger';
import { IsPositive, MaxLength } from 'class-validator';
import { User } from './../../../auth/entities/user.entity';
import { TestType } from './../../test-type/entities/test-type.entity';

export class CreateTestDto {
  @ApiProperty({
    type: String,
    description: 'Test name',
    default: 'My First Test',
  })
  @MaxLength(60)
  name: string;

  @ApiProperty({
    type: String,
    description: 'Test description',
    default: 'My First Test is really cool!',
  })
  @MaxLength(150)
  description: string;

  @ApiProperty({
    type: Number,
    description: 'Test status',
    default: 1,
  })
  @IsPositive()
  status: number;

  @ApiProperty({
    type: Number,
    description: 'Test type id',
    default: 1,
  })
  @IsPositive()
  fk_idTestType: TestType;

  @ApiProperty({
    type: Number,
    description: 'Test user creator id',
    default: 1,
  })
  @IsPositive()
  fk_idUserCreator: User;

}