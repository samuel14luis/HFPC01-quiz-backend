import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, MaxLength, Min } from 'class-validator';
import { ConfigCategory } from './../../config-category/entities/config-category.entity';

export class CreateAppConfigDto {
  @ApiProperty({
    type: String,
    description: 'App Config Key',
    default: 'QUIZ_KEY',
  })
  @IsNotEmpty()
  @MaxLength(100)
  key: string;

  @ApiProperty({
    type: String,
    description: 'App Config Value',
    default: 'CONFIG_VALUE',
  })
  @IsNotEmpty()
  @MaxLength(100)
  value: string;

  @ApiProperty({
    type: Number,
    description: 'App Config Category id',
    default: 1,
  })
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  category: ConfigCategory;
}
