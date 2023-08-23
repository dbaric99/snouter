import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategorySpecificationsService } from './category-specifications.service';
import { CreateCategorySpecificationDto } from './dto/create-category-specification.dto';
import { UpdateCategorySpecificationDto } from './dto/update-category-specification.dto';

@Controller('category-specifications')
export class CategorySpecificationsController {
  constructor(
    private readonly categorySpecificationsService: CategorySpecificationsService,
  ) {}

  @Post()
  create(
    @Body() createCategorySpecificationDto: CreateCategorySpecificationDto,
  ) {
    return this.categorySpecificationsService.create(
      createCategorySpecificationDto,
    );
  }

  @Get()
  findAll() {
    return this.categorySpecificationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categorySpecificationsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategorySpecificationDto: UpdateCategorySpecificationDto,
  ) {
    return this.categorySpecificationsService.update(
      +id,
      updateCategorySpecificationDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categorySpecificationsService.remove(+id);
  }
}
