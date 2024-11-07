import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar o CORS
  app.enableCors({
    origin: 'http://localhost:4200', // Permite o frontend Angular
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type, Accept, Authorization', // Cabeçalhos permitidos, incluindo Authorization
  });

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
