import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';
import { envs } from './config/envs.js';
import { log } from 'console';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({//es para que en algun archivo donde use un pipe lo haga de manera global 
      whitelist:true,
      forbidNonWhitelisted:true,
    }),
  );
  // await app.listen(process.env.PORT ?? 3000);
  // await app.listen(`{envs.port}`); //para que el puerto lo marque como string y no marque el error de number
  await app.listen(envs.port);//ya configurado con el envs.ts para que de el formato del puerto bien  
console.log(`server sunning on port ${envs.port}`);
//comentario de examen Arriba las Aguilas del America
// ergergsoloconrunstar
  
}
await bootstrap();
