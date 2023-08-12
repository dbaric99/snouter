import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryMapper } from 'src/utils/mappers/category-mapper';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.category.create({
      data: CategoryMapper.categoryToDto(createCategoryDto),
    });
  }

  findAll() {
    return this.prisma.category.findMany({
      include: { categorySpecs: true },
      orderBy: { id: 'asc' },
    });
  }

  findOne(id: number) {
    return this.prisma.category.findUnique({
      where: { id },
      include: { categorySpecs: true },
    });
  }

  getProducts(id: number) {
    return this.prisma.product.findMany({
      where: { subcategory: { categoryId: id } },
    });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: { id },
      data: CategoryMapper.categoryToDto(updateCategoryDto),
    });
  }

  remove(id: number) {
    return this.prisma.category.delete({ where: { id } });
  }
}
