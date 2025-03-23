import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // add swagger
  const options = new DocumentBuilder().addBearerAuth(undefined, 'x-access-token').build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  app.enableCors({
    origin: '*',
    allowedHeaders: ['x-access-token', 'Content-Type'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
  });
  await app.listen(process.env.PORT || 3040);
  console.log(`Server is running on: http://localhost:${process.env.PORT || 3040}`);
}
bootstrap();
