import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConfigCategoryService } from './config-category.service';
import { CreateConfigCategoryDto } from './dto/create-config-category.dto';
import { UpdateConfigCategoryDto } from './dto/update-config-category.dto';

@Controller('config-category')
export class ConfigCategoryController {
  constructor(private readonly configCategoryService: ConfigCategoryService) {}

  @Post()
  create(@Body() createConfigCategoryDto: CreateConfigCategoryDto) {
    return this.configCategoryService.create(createConfigCategoryDto);
  }

  @Get()
  findAll() {
    return this.configCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.configCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConfigCategoryDto: UpdateConfigCategoryDto) {
    return this.configCategoryService.update(+id, updateConfigCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.configCategoryService.remove(+id);
  }
}
