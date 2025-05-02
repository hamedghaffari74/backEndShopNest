import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateBrandDto {

    @ApiProperty({ example: "برند 1", required: true })
    @IsString()
    title: string

    @ApiProperty({ example: "برند روسی ", required: false })
    @IsString()
    description: string



}
