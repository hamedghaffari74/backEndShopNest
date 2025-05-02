import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {

    @ApiProperty({ example: 'کفش', description: 'نام دسته بندی ' })
    @IsString()
    title: string

    @ApiProperty({ example: 'برند تایوانی', description: 'توضیحات دسته بندی ' })
    @IsString()
    description?: string
    
}
