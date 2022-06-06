import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BootstrapService } from './bootstrap.service';
import { CreateBootstrapDto } from './dto/create-bootstrap.dto';
import { UpdateBootstrapDto } from './dto/update-bootstrap.dto';

@Controller('bootstrap')
export class BootstrapController {
  constructor(private readonly bootstrapService: BootstrapService) {}

  @Post()
  create(@Body() createBootstrapDto: CreateBootstrapDto) {
    return this.bootstrapService.create(createBootstrapDto);
  }

  @Get()
  findAll() {
    return this.bootstrapService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bootstrapService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBootstrapDto: UpdateBootstrapDto) {
    return this.bootstrapService.update(+id, updateBootstrapDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bootstrapService.remove(+id);
  }
}
