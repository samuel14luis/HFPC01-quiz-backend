import { PickType } from '@nestjs/swagger';
import { CreateConfigCategoryDto } from './create-config-category.dto';

export class UpdateConfigCategoryDto extends PickType(CreateConfigCategoryDto, ['name'] as const) { }
