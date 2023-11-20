import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { corsConfig } from './config/cors-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableShutdownHooks();
  app.enableCors(corsConfig);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(4444);
}
bootstrap();
