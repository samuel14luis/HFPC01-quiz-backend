import { Module } from '@nestjs/common';
import { BootstrapService } from './bootstrap.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [BootstrapService],
  exports: [BootstrapService]
})
export class BootstrapModule {
}
