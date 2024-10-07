import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { promMiddleware } from 'express-red-middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(promMiddleware({}));

  await app.listen(3003);
}

bootstrap();
