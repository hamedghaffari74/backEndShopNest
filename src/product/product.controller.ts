import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new product' })
  @ApiResponse({ status: 201, description: 'The product has been successfully created.' })
  create(@Body() product: CreateProductDto) {
    return this.productService.create(product);
  }

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({ status: 200, description: 'List of all products' })
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a product by ID' })
  @ApiResponse({ status: 200, description: 'The product was found' })
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a product by ID' })
  @ApiResponse({ status: 200, description: 'The product has been updated.' })
  update(@Param('id') id: string, @Body() product: Partial<Product>) {
    return this.productService.update(+id, product);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a product by ID' })
  @ApiResponse({ status: 200, description: 'The product has been deleted.' })
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }


  @Get('category/:categoryId')
  @ApiParam({ name: 'categoryId', type: Number })
  @ApiResponse({ status: 200, description: 'محصولات بر اساس categoryId' })
  findByCategory(@Param('categoryId') categoryId: string) {
    return this.productService.findByCategory(+categoryId);
  }

}
