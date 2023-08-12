import { Injectable } from '@nestjs/common';
import { CreateCategorySpecificationDto } from './dto/create-category-specification.dto';
import { UpdateCategorySpecificationDto } from './dto/update-category-specification.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategorySpecificationsService {
  constructor(private prisma: PrismaService) {}
  create(createCategorySpecificationDto: CreateCategorySpecificationDto) {
    return 'This action adds a new categorySpecification';
  }

  findAll() {
    return `This action returns all categorySpecifications`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categorySpecification`;
  }

  update(
    id: number,
    updateCategorySpecificationDto: UpdateCategorySpecificationDto,
  ) {
    return `This action updates a #${id} categorySpecification`;
  }

  remove(id: number) {
    return `This action removes a #${id} categorySpecification`;
  }
}
