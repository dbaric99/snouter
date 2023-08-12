import { Injectable } from '@nestjs/common';
import { CreateSubcategorySpecificationDto } from './dto/create-subcategory-specification.dto';
import { UpdateSubcategorySpecificationDto } from './dto/update-subcategory-specification.dto';

@Injectable()
export class SubcategorySpecificationsService {
  create(createSubcategorySpecificationDto: CreateSubcategorySpecificationDto) {
    return 'This action adds a new subcategorySpecification';
  }

  findAll() {
    return `This action returns all subcategorySpecifications`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subcategorySpecification`;
  }

  update(id: number, updateSubcategorySpecificationDto: UpdateSubcategorySpecificationDto) {
    return `This action updates a #${id} subcategorySpecification`;
  }

  remove(id: number) {
    return `This action removes a #${id} subcategorySpecification`;
  }
}
