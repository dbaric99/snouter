import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubcategorySpecificationsService } from './subcategory-specifications.service';
import { CreateSubcategorySpecificationDto } from './dto/create-subcategory-specification.dto';
import { UpdateSubcategorySpecificationDto } from './dto/update-subcategory-specification.dto';

@Controller('subcategory-specifications')
export class SubcategorySpecificationsController {
  constructor(private readonly subcategorySpecificationsService: SubcategorySpecificationsService) {}

  @Post()
  create(@Body() createSubcategorySpecificationDto: CreateSubcategorySpecificationDto) {
    return this.subcategorySpecificationsService.create(createSubcategorySpecificationDto);
  }

  @Get()
  findAll() {
    return this.subcategorySpecificationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subcategorySpecificationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubcategorySpecificationDto: UpdateSubcategorySpecificationDto) {
    return this.subcategorySpecificationsService.update(+id, updateSubcategorySpecificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subcategorySpecificationsService.remove(+id);
  }
}
