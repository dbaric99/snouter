import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  Length,
  IsArray,
  IsOptional,
} from 'class-validator';
import { CreateCategorySpecificationDto } from 'src/category-specifications/dto/create-category-specification.dto';

export class CreateCategoryDto {
  id: number;

  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  @ApiProperty({ required: true })
  name: string;

  @IsArray()
  @IsOptional()
  @ApiProperty({
    required: false,
    type: [CreateCategorySpecificationDto],
  })
  categorySpecs: CreateCategorySpecificationDto[];
}
