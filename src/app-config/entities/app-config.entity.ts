import { ConfigCategory } from './../../config-category/entities/config-category.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({})
export class AppConfig {
  @PrimaryColumn()
  key: string;

  @Column()
  value: string;

  @ManyToOne((type) => ConfigCategory, (category) => category.configs, {
    cascade: true,
  })
  @JoinColumn({ name: 'fk_idCategory' })
  category: ConfigCategory;
}
