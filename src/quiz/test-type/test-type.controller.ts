import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiForbiddenResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { TestTypeService } from './test-type.service';
import { CreateTestTypeDto } from './dto/create-test-type.dto';
import { UpdateTestTypeDto } from './dto/update-test-type.dto';
import { TestType } from './entities/test-type.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('TestType')
@Controller('test-type')
export class TestTypeController {
  constructor(private readonly service: TestTypeService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new item' })
  @ApiOkResponse({ description: 'The item was created successfully.' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  async create(@Body() o: CreateTestTypeDto): Promise<TestType> {
    return await this.service.create(o);
  }

  @Get()
  @ApiOperation({ summary: 'List all items' })
  @ApiOkResponse({ description: 'The items were listed successfully.' })
  async findAll(): Promise<TestType[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'List one item by id' })
  @ApiOkResponse({ description: 'The item was found successfully.' })
  @ApiNotFoundResponse({ description: 'The item was not found.' })
  async findOne(@Param('id') id: number): Promise<TestType> {
    return await this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update one item by id' })
  @ApiOkResponse({ description: 'The item was updated successfully.' })
  @ApiNotFoundResponse({ description: 'The item was not found.' })
  async update(
    @Param('id') id: number,
    @Body() o: UpdateTestTypeDto,
  ): Promise<TestType> {
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
