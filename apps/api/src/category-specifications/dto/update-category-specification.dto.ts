import { PartialType } from '@nestjs/swagger';
import { CreateCategorySpecificationDto } from './create-category-specification.dto';

export class UpdateCategorySpecificationDto extends PartialType(
  CreateCategorySpecificationDto,
) {}
