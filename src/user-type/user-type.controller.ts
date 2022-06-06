import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserTypeService } from './user-type.service';
import { CreateUserTypeDto } from './dto/create-user-type.dto';
import { UpdateUserTypeDto } from './dto/update-user-type.dto';
import { ApiForbiddenResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserType } from './entities/user-type.entity';

@ApiTags('UserType')
@Controller('user-type')
export class UserTypeController {
  constructor(private readonly service: UserTypeService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new item' })
  @ApiOkResponse({ description: 'The item was created successfully.' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  async create(@Body() o: CreateUserTypeDto): Promise<UserType> {
    return await this.service.create(o);
  }

  @Get()
  @ApiOperation({ summary: 'List all items' })
  @ApiOkResponse({ description: 'The items were listed successfully.' })
  async findAll(): Promise<UserType[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'List one item by id' })
  @ApiOkResponse({ description: 'The item was found successfully.' })
  @ApiNotFoundResponse({ description: 'The item was not found.' })
  async findOne(@Param('id') id: number): Promise<UserType> {
    return await this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update one item by id' })
  @ApiOkResponse({ description: 'The item was updated successfully.' })
  @ApiNotFoundResponse({ description: 'The item was not found.' })
  async update(
    @Param('id') id: number,
    @Body() o: UpdateUserTypeDto,
  ): Promise<UserType> {
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