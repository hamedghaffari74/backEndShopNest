import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCategoryDto } from './create-category.dto';
import { IsString } from 'class-validator';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {

    @ApiProperty({ example: "کفش" })
    @IsString()
    title: string;
    @ApiProperty({ example: "کفش" })
    @IsString()
    description?: string | undefined;
}
