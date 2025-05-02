import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ) { }

  create(category: Partial<Category>) {
    return this.categoryRepository.save(category)
  }

  findAll() {
    return this.categoryRepository.find()
  }

  findOne(id: number) {
    return this.categoryRepository.findOneBy({ id })
  }

  update(id: number, category: Partial<Category>) {
    return this.categoryRepository.update(id, category)
  }


  remove(id: number) {
    return this.categoryRepository.delete(id)
  }
}
