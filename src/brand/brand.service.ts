import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandService {

  constructor(
    @InjectRepository(Brand)
    private brandRepository: Repository<Brand>
  ) { }

  create(brand :Partial<Brand>) {
    return this.brandRepository.save(brand);
  }

  findAll() {
    return this.brandRepository.find();
  }

  findOne(id: number) {
    return this.brandRepository.findOneBy({id});
  }

  update(id: number, brand: Partial<Brand>) {
    return this.brandRepository.update(id , brand);
  }

  remove(id: number) {
    return this.brandRepository.delete(id);
  }
}
