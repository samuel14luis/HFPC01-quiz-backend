import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse, ApiForbiddenResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { AppConfigService } from './app-config.service';
import { CreateAppConfigDto } from './dto/create-app-config.dto';
import { UpdateAppConfigDto } from './dto/update-app-config.dto';
import { AppConfig } from './entities/app-config.entity';

@ApiTags('AppConfig')
@Controller('app/config')
export class AppConfigController {
  constructor(private readonly service: AppConfigService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new item' })
  @ApiOkResponse({ description: 'The item was created successfully.' })
  @ApiForbiddenResponse({ description: "Forbidden" })
  async create(@Body() o: CreateAppConfigDto): Promise<AppConfig> {
    return await this.service.create(o);
  }

  @Get()
  @ApiOperation({ summary: 'List all items' })
  @ApiOkResponse({ description: 'The items were listed successfully.' })
  async findAll(): Promise<AppConfig[]> {
    return await this.service.findAll();
  }

  @Get(':key')
  @ApiOperation({ summary: 'List one item by key' })
  @ApiOkResponse({ description: 'The item was found successfully.' })
  @ApiNotFoundResponse({ description: 'The item was not found.' })
  async findOne(@Param('key') key: string): Promise<AppConfig> {
    return await this.service.findOne(key);
  }

  @Patch(':key')
  @ApiOperation({ summary: 'Update one item by key' })
  @ApiOkResponse({ description: 'The item was updated successfully.' })
  @ApiNotFoundResponse({ description: 'The item was not found.' })
  async update(@Param('key') key: string, @Body() o: UpdateAppConfigDto): Promise<AppConfig> {
    return await this.service.update(key, o);
  }

  @Delete(':key')
  @ApiOperation({ summary: 'Delete one item by key' })
  @ApiOkResponse({ description: 'The item was deleted successfully.' })
  @ApiNotFoundResponse({ description: 'The item was not found.' })
  async remove(@Param('key') key: string): Promise<void> {
    return await this.service.remove(key);
  }
}
