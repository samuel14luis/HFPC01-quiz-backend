import { Module } from '@nestjs/common';
import { UserTypeService } from './user-type.service';
import { UserTypeController } from './user-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserType } from './entities/user-type.entity';
import { UserTypeBootstrap } from './user-type.bootstrap';

@Module({
  imports: [TypeOrmModule.forFeature([UserType])],
  controllers: [UserTypeController],
  providers: [UserTypeService, UserTypeBootstrap],
  exports: [UserTypeBootstrap]
})
export class UserTypeModule {}
