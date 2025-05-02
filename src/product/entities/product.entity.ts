import { Brand } from 'src/brand/entities/brand.entity';
import { Category } from 'src/category/entities/category.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Product {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column({ nullable: true })
  description?: string;

  @Column()
  categoryId: number;

  @Column()
  brandId: number

  @ManyToOne(() => Category, (category) => category.product, {
    nullable: false,
    onDelete: 'CASCADE',
  })

  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @ManyToOne(() => Brand, (brand) => brand.product, {
    nullable: false,
    onDelete: 'CASCADE',
  })

  @JoinColumn({ name: 'brandId' })
  brand: Brand;

}

