import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) { }

  create(product: Partial<Product>) {
    return this.productRepository.save(product);
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: number) {
    return this.productRepository.findOneBy({ id });
  }

  update(id: number, product: Partial<Product>) {
    return this.productRepository.update(id, product);
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }

  async findByCategory(categoryId: number): Promise<Product[]> {
    return this.productRepository.find({
      where: { categoryId },
    });
  }

  async findByBrand(brandId: number): Promise<Product[]> {
    return this.productRepository.find({
      where: { brandId }
    })
  }

}
