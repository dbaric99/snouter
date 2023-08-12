import { PartialType } from '@nestjs/swagger';
import { CreateSubcategorySpecificationDto } from './create-subcategory-specification.dto';

export class UpdateSubcategorySpecificationDto extends PartialType(CreateSubcategorySpecificationDto) {}
