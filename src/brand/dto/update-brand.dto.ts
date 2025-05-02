import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBrandDto } from './create-brand.dto';
import { IsString } from 'class-validator';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {

    @ApiProperty({ example: "برند 1", required: true })
    @IsString()
    title: string;

    @ApiProperty({ example: "برند روسی", required: false })
    @IsString()
    description?: string | undefined;
}
