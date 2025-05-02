import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Mobile Phone', description: 'Name of the product' })
  name: string;

  @ApiProperty({ example: "200000", description: 'Price of the product' })
  price: string;

  @ApiProperty({ example: 'A great smartphone', required: false })
  description?: string;

  @ApiProperty({ example: '1', required: true })
  categoryId: number
  
  @ApiProperty({ example: '1', required: true })
  brandId: number
}
