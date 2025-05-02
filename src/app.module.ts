import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { BrandModule } from './brand/brand.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_crud',
      autoLoadEntities: true,
      synchronize: true, // فقط برای توسعه، در production خاموشش کن!
    }),
    ProductModule,
    CategoryModule,
    BrandModule,
  ],
})
export class AppModule {}
