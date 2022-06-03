import { Module } from '@nestjs/common';
import { ConfigCategoryService } from './config-category.service';
import { ConfigCategoryController } from './config-category.controller';

@Module({
  controllers: [ConfigCategoryController],
  providers: [ConfigCategoryService]
})
export class ConfigCategoryModule {}
