import { Product } from "src/product/entities/product.entity";
import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class Brand {

    @OneToMany(() => Product, (product) => product.brand)
    product: Product[]

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description?: string

}
