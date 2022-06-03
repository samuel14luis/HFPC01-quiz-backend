import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AppConfigModule } from './app-config/app-config.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
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
  }), AppConfigModule ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
