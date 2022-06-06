import { AppConfig } from './../../app-config/entities/app-config.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({})
export class ConfigCategory {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @OneToMany((type) => AppConfig, (config) => config.category)
  configs: AppConfig;
}
