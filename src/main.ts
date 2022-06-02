import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger("Main");
  //const configService = app.get(ConfigService); TODO: config module
  const port = 3000; //configService.get("RYS_SYSTEM_PORT")
  const apiRoot = "api";

  //SETUP
  const document = SwaggerModule.createDocument(app, swaggerConfig());
  SwaggerModule.setup(`${apiRoot}/docs`, app, document, swaggerOptions());
  app.setGlobalPrefix(apiRoot);
  app.use(cors());

  logger.log(`Server running on http://localhost:${port}/${apiRoot}`);
  logger.log(`Swagger UI running on http://localhost:${port}/${apiRoot}/docs`);

  await app.listen(3000);
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
