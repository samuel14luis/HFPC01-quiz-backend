import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './app-config/app-config.module';
import { ConfigCategoryModule } from './config-category/config-category.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UserTypeModule } from './user-type/user-type.module';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { BootstrapService } from './bootstrap/bootstrap.service';
import { TestModule } from './quiz/test/test.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.example'],
    }),
    DatabaseModule,
    AppConfigModule,
    ConfigCategoryModule,
    DatabaseModule,
    AuthModule,
    UserTypeModule,
    BootstrapModule,
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number;
  static apiRoot: string;

  constructor(
      private readonly configService: ConfigService,
      private readonly bootstrap: BootstrapService
    ) {
    AppModule.port = +this.configService.get('QUIZ_SYSTEM_PORT');
    AppModule.apiRoot = 'api';
  }

  async onApplicationBootstrap() {
    await this.bootstrap.loadData();
  }

}
