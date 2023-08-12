import { ApiProperty } from '@nestjs/swagger';
import { CreateSubcategorySpecificationDto } from 'src/subcategory-specifications/dto/create-subcategory-specification.dto';
import { IsInt, IsNotEmpty, IsString, Length, IsArray } from 'class-validator';

export class CreateSubcategoryDto {
  id: number;

  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  @ApiProperty({ required: true })
  name: string;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({ required: true })
  categoryId: number;

  @IsArray()
  @ApiProperty({
    required: false,
    type: [CreateSubcategorySpecificationDto],
  })
  subcategorySpecs: CreateSubcategorySpecificationDto[];
}
