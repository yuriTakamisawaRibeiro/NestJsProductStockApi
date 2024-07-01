// main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NotFoundErrorFilter } from './not-found-error/not-found-error.filter'; // Caminho ajustado conforme sua estrutura de pastas

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Aplica o pipe de validação globalmente
  app.useGlobalPipes(new ValidationPipe({
    errorHttpStatusCode: 422,
    transform: true
  }));

  // Aplica o filtro de exceção NotFoundErrorFilter globalmente
  app.useGlobalFilters(new NotFoundErrorFilter());

  await app.listen(3000);
}
bootstrap();
