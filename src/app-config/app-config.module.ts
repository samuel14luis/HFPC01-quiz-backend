import { Module } from '@nestjs/common';
import { AppConfigService } from './app-config.service';
import { AppConfigController } from './app-config.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfig } from './entities/app-config.entity';
import { Repository } from 'typeorm';

@Module({
  imports: [ TypeOrmModule.forFeature([ AppConfig ]) ],
  controllers: [AppConfigController],
  providers: [AppConfigService]
})
export class AppConfigModule {}
