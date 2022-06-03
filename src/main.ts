import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger("Main");
  const port = AppModule.port;
  const apiRoot = AppModule.apiRoot;

  //SETUP
  app.setGlobalPrefix(apiRoot);
  app.use(cors());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true
    })
  )
  
  const document = SwaggerModule.createDocument(app, swaggerConfig());  
  SwaggerModule.setup(`${apiRoot}/docs`, app, document, swaggerOptions());

  logger.log(`Server running on http://localhost:${port}/${apiRoot}`);
  logger.log(`Swagger UI running on http://localhost:${port}/${apiRoot}/docs`);

  await app.listen(port);
}

function swaggerConfig() {
  return new DocumentBuilder()
    .setTitle('Quiz App')
    .setDescription('The Quiz App API documentation')
    .setVersion('1.0')
    //.addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'jwt-bearer')
    .build();
}

function swaggerOptions() {
  return {
    explorer: true,
    swaggerOptions: {
      filter: true,
      showRequestDuration: true,
    }
  };
}

bootstrap();
