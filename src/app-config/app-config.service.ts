import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAppConfigDto } from './dto/create-app-config.dto';
import { UpdateAppConfigDto } from './dto/update-app-config.dto';
import { AppConfig } from './entities/app-config.entity';

@Injectable()
export class AppConfigService {

  constructor(@InjectRepository(AppConfig) private readonly repository: Repository<AppConfig>){}

  async create(dto: CreateAppConfigDto): Promise<AppConfig> {
    const o: AppConfig = await this.repository.create(dto);
    return this.repository.save(o);
  }

  async findAll(): Promise<AppConfig[]> {
    return await this.repository.find();
  }

  async findOne(key: string): Promise<AppConfig> {
    const o = await this.repository.findOneBy({ key });

    if(!o) throw new NotFoundException(`Cannot find an item with id ${key}.`);

    return o;
  }

  async update(key: string, dto: UpdateAppConfigDto) {
    const { category, value } = dto;
    const o: AppConfig = await this.repository.preload({
      key,
      category,
      value
    })

    if(!o) throw new NotFoundException(`Cannot find an item with id ${key}.`);

    return this.repository.save(o);
  }

  async remove(key: string): Promise<void> {
    const o: AppConfig = await this.repository.findOneBy({ key });

    if(!o) throw new NotFoundException(`Cannot find an item with id ${key}.`);

    this.repository.remove(o);
  }
}
