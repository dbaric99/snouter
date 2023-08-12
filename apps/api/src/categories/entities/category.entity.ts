import { Category } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { CategorySpecificationEntity } from 'src/category-specifications/entities/category-specification.entity';

export class CategoryEntity implements Category {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  categorySpecs: CategorySpecificationEntity[];
}
