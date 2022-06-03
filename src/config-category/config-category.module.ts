import { Module } from '@nestjs/common';
import { ConfigCategoryService } from './config-category.service';
import { ConfigCategoryController } from './config-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigCategory } from './entities/config-category.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([ ConfigCategory ]) ],
  controllers: [ConfigCategoryController],
  providers: [ConfigCategoryService]
})
export class ConfigCategoryModule {}
