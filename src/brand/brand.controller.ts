import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) { }

  @Post()
  @ApiResponse({ status: 200 })
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandService.create(createBrandDto);
  }

  @Get()
  @ApiResponse({ status: 200 })
  findAll() {
    return this.brandService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200 })
  findOne(@Param('id') id: string) {
    return this.brandService.findOne(+id);
  }

  @Put(':id')
  @ApiResponse({ status: 200 })
  update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brandService.update(+id, updateBrandDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200 })
  remove(@Param('id') id: string) {
    return this.brandService.remove(+id);
  }
}
