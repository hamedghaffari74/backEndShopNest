import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // تنظیمات Swagger
  const config = new DocumentBuilder()
    .setTitle('Store API')
    .setDescription('The API documentation for the store project')
    .setVersion('1.0')
    .addTag('products')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // مسیر Swagger '/api'

  await app.listen(3000);
}

bootstrap();
