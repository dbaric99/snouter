import { Subcategory } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { SubcategorySpecificationEntity } from 'src/subcategory-specifications/entities/subcategory-specification.entity';

export class SubcategoryEntity implements Subcategory {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  categoryId: number;

  @ApiProperty()
  subcategorySpecs: SubcategorySpecificationEntity[];
}
