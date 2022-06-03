import { Injectable } from '@nestjs/common';
import { CreateConfigCategoryDto } from './dto/create-config-category.dto';
import { UpdateConfigCategoryDto } from './dto/update-config-category.dto';

@Injectable()
export class ConfigCategoryService {
  create(createConfigCategoryDto: CreateConfigCategoryDto) {
    return 'This action adds a new configCategory';
  }

  findAll() {
    return `This action returns all configCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} configCategory`;
  }

  update(id: number, updateConfigCategoryDto: UpdateConfigCategoryDto) {
    return `This action updates a #${id} configCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} configCategory`;
  }
}
