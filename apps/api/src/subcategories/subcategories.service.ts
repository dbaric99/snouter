import { Injectable } from '@nestjs/common';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryMapper } from 'src/utils/mappers/category-mapper';

@Injectable()
export class SubcategoriesService {
  constructor(private prisma: PrismaService) {}

  create(createSubcategoryDto: CreateSubcategoryDto) {
    return this.prisma.subcategory.create({
      data: CategoryMapper.subcategoryToDto(createSubcategoryDto),
    });
  }

  findAll() {
    return this.prisma.subcategory.findMany({
      include: { category: true, subcategorySpecs: true },
      orderBy: { id: 'asc' },
    });
  }

  findOne(id: number) {
    return this.prisma.subcategory.findUnique({
      where: { id },
      include: { category: true, subcategorySpecs: true },
    });
  }

  getProducts(id: number) {
    return this.prisma.product.findMany({ where: { subcategoryId: id } });
  }

  update(id: number, updateSubcategoryDto: UpdateSubcategoryDto) {
    return this.prisma.subcategory.update({
      where: { id },
      data: CategoryMapper.subcategoryToDto(updateSubcategoryDto),
    });
  }

  remove(id: number) {
    return this.prisma.subcategory.delete({ where: { id } });
  }
}
