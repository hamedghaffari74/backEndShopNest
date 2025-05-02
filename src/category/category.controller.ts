import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Category } from './entities/category.entity';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Post()
  // @ApiOperation({ summary: "لطفا یک دسته بندی اضافه کنید" })
  @ApiResponse({ status: 200, description: "با موفقیت ثبت شد" })
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  // @ApiOperation({ summary: "گرفتن تمام دسته بندی ها" })
  @ApiResponse({ status: 200, description: "لیست تمام دسته بندی ها" })
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  // @ApiOperation({ summary: 'Get a product by ID' })
  @ApiResponse({ status: 200, description: 'The product was found' })
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @Put(':id')
  @ApiResponse({ status: 200 })
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'The product has been deleted.' })
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
