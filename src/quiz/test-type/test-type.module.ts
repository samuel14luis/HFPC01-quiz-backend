import { Module } from '@nestjs/common';
import { TestTypeService } from './test-type.service';
import { TestTypeController } from './test-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestType } from './entities/test-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TestType])],
  controllers: [TestTypeController],
  providers: [TestTypeService]
})

export class TestTypeModule {}