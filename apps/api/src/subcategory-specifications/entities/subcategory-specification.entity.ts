import { ApiProperty } from '@nestjs/swagger';
import { SubcategorySpecification } from '@prisma/client';

export class SubcategorySpecificationEntity
  implements SubcategorySpecification
{
  id: number;
  @ApiProperty()
  name: string;
  subcategoryId: number;
  specificationId: number;
}
