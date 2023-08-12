import { CategorySpecification } from '@prisma/client';

export class CategorySpecificationEntity implements CategorySpecification {
  id: number;
  name: string;
  categoryId: number;
  specificationId: number;
}
