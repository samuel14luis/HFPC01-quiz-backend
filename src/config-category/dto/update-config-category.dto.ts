import { PartialType } from '@nestjs/swagger';
import { CreateConfigCategoryDto } from './create-config-category.dto';

export class UpdateConfigCategoryDto extends PartialType(CreateConfigCategoryDto) {}
