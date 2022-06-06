import { Module } from '@nestjs/common';
import { BootstrapService } from './bootstrap.service';
import { AuthModule } from 'src/auth/auth.module';
import { UserTypeModule } from 'src/user-type/user-type.module';

@Module({
  imports: [AuthModule, UserTypeModule],
  controllers: [],
  providers: [BootstrapService],
  exports: [BootstrapService]
})
export class BootstrapModule {
}
