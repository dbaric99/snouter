import { Module } from '@nestjs/common';
import { SubcategorySpecificationsService } from './subcategory-specifications.service';
import { SubcategorySpecificationsController } from './subcategory-specifications.controller';

@Module({
  controllers: [SubcategorySpecificationsController],
  providers: [SubcategorySpecificationsService]
})
export class SubcategorySpecificationsModule {}
