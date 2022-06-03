import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAppConfigDto } from './dto/create-app-config.dto';
import { UpdateAppConfigDto } from './dto/update-app-config.dto';
import { AppConfig } from './entities/app-config.entity';

@Injectable()
export class AppConfigService {

  constructor(@InjectRepository(AppConfig) private readonly repository: Repository<AppConfig>){}

  async create(o: CreateAppConfigDto): Promise<AppConfig> {
    const config: AppConfig = await this.repository.create(o);
    return this.repository.save(config);
  }

  async findAll(): Promise<AppConfig[]> {
    return await this.repository.find();
  }

  async findOne(key: string): Promise<AppConfig> {
    const config = await this.repository.findOneBy({ key });

    if(!config) throw new NotFoundException(`Cannot find the App Config with key ${key}.`);

    return config;
  }

  async update(key: string, o: UpdateAppConfigDto) {
    const { category, value } = o;
    const config: AppConfig = await this.repository.preload({
      key,
      category,
      value
    })

    if(!config) throw new NotFoundException(`Cannot find the App Config with key ${key}.`);

    return config;
  }

  async remove(key: string): Promise<void> {
    const config: AppConfig = await this.repository.findOneBy({ key });

    if(!config) throw new NotFoundException(`Cannot find the App Config with key ${key}.`);

    this.repository.remove(config);
  }
}
