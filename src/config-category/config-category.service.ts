import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateConfigCategoryDto } from './dto/create-config-category.dto';
import { UpdateConfigCategoryDto } from './dto/update-config-category.dto';
import { ConfigCategory } from './entities/config-category.entity';

@Injectable()
export class ConfigCategoryService {

  constructor(@InjectRepository(ConfigCategory) private readonly repository: Repository<ConfigCategory>){}

  async create(dto: CreateConfigCategoryDto): Promise<ConfigCategory> {
    const o: ConfigCategory = await this.repository.create(dto);
    return this.repository.save(o);
  }

  async findAll(): Promise<ConfigCategory[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<ConfigCategory> {
    const o = await this.repository.findOneBy({ id });

    if(!o) throw new NotFoundException(`Cannot find an item with id ${id}.`);

    return o;
  }

  async update(id: number, dto: UpdateConfigCategoryDto) {
    const { name } = dto;
    const o: ConfigCategory = await this.repository.preload({
      id,
      name
    })

    if(!o) throw new NotFoundException(`Cannot find an item with id ${id}.`);

    return this.repository.save(o);
  }

  async remove(id: number): Promise<void> {
    const o: ConfigCategory = await this.repository.findOneBy({ id });

    if(!o) throw new NotFoundException(`Cannot find an item with id ${id}.`);

    this.repository.remove(o);
  }
}