/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const globalPrefix = 'api';

  if (process.env['APP_ENV'] === 'dev') {
    const options = new DocumentBuilder().addBearerAuth(undefined, 'x-access-token').build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('docs', app, document);
  }
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(new ValidationPipe({ transform: true, validateCustomDecorators: true }));

  await app.listen(process.env.PORT || 3000);
  Logger.log(`🚀 Application is running on: http://localhost:${process.env.PORT}/${globalPrefix}`);
}

bootstrap();
