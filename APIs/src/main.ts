import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(process.env.MONGO_CONNECTION_STRING);
  const app = await NestFactory.create(AppModule);
  await app.listen(3344);
}
bootstrap();
