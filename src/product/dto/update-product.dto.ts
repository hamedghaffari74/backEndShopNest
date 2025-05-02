import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto extends PartialType(CreateProductDto) {
      @ApiProperty({ example: 'Mobile Phone', description: 'Name of the product' })
      name: string;
    
      @ApiProperty({ example: "200000", description: 'Price of the product' })
      price: string;
    
      @ApiProperty({ example: 'A great smartphone', required: false })
      description?: string;
}
