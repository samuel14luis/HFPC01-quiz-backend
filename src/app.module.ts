import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AppConfigModule } from './app-config/app-config.module';
import { ConfigCategoryModule } from './config-category/config-category.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ 
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        '.env.local',
        '.env', 
        '.env.example'],
    }),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'quizusr',
    password: 'nttl@nd315%aLz',
    database: 'quizappdb',
    autoLoadEntities: true,
    synchronize: true,
    ssl: {
      ca: process.env.SSL_CERT,
      rejectUnauthorized: false
    }
  }), AppConfigModule, ConfigCategoryModule ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {

  static port: number;
  static apiRoot: string;

  constructor(private readonly configService: ConfigService) {
    AppModule.port = +this.configService.get('QUIZ_SYSTEM_PORT');
    AppModule.apiRoot = 'api';
  }
}
