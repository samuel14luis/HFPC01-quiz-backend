import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiForbiddenResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ConfigCategoryService } from './config-category.service';
import { CreateConfigCategoryDto } from './dto/create-config-category.dto';
import { UpdateConfigCategoryDto } from './dto/update-config-category.dto';
import { ConfigCategory } from './entities/config-category.entity';

@ApiTags('ConfigCategory')
@Controller('config-category')
export class ConfigCategoryController {
  constructor(private readonly service: ConfigCategoryService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new item' })
  @ApiOkResponse({ description: 'The item was created successfully.' })
  @ApiForbiddenResponse({ description: "Forbidden" })
  async create(@Body() o: CreateConfigCategoryDto): Promise<ConfigCategory> {
    return await this.service.create(o);
  }

  @Get()
  @ApiOperation({ summary: 'List all items' })
  @ApiOkResponse({ description: 'The items were listed successfully.' })
  async findAll(): Promise<ConfigCategory[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'List one item by id' })
  @ApiOkResponse({ description: 'The item was found successfully.' })
  @ApiNotFoundResponse({ description: 'The item was not found.' })
  async findOne(@Param('id') id: number): Promise<ConfigCategory> {
    return await this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update one item by id' })
  @ApiOkResponse({ description: 'The item was updated successfully.' })
  @ApiNotFoundResponse({ description: 'The item was not found.' })
  async update(@Param('id') id: number, @Body() o: UpdateConfigCategoryDto): Promise<ConfigCategory> {
    return await this.service.update(id, o);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete one item by id' })
  @ApiOkResponse({ description: 'The item was deleted successfully.' })
  @ApiNotFoundResponse({ description: 'The item was not found.' })
  async remove(@Param('id') id: number): Promise<void> {
    return await this.service.remove(id);
  }
}
