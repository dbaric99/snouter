import { ApiProperty } from '@nestjs/swagger';
import { Length, IsString, IsNotEmpty } from 'class-validator';

export class CreateCategorySpecificationDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  @ApiProperty({ required: true })
  name: string;
}
