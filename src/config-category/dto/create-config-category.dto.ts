import { ApiProperty } from '@nestjs/swagger';
import { MaxLength } from 'class-validator';

export class CreateConfigCategoryDto {
  @ApiProperty({
    type: String,
    description: 'App config category name',
    default: 'EXAMPLE CATEGORY',
  })
  @MaxLength(80)
  name: string;
}
