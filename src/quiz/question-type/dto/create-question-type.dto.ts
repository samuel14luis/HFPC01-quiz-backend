import { ApiProperty } from '@nestjs/swagger';
import { IsPositive, MaxLength } from 'class-validator';
import { User } from './../../../auth/entities/user.entity';

export class CreateQuestionTypeDto {
  @ApiProperty({
    type: String,
    description: 'Question type name',
    default: 'PICK',
  })
  @MaxLength(60)
  name: string;

  @ApiProperty({
    type: Number,
    description: 'Question user creator id',
    default: 1,
  })
  @IsPositive()
  fk_idUserCreator: User;
}