import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({//es para que en algun archivo donde use un pipe lo haga de manera global 
      whitelist:true,
      forbidNonWhitelisted:true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);

  
}
await bootstrap();
