import { Module } from '@nestjs/common';
import { CategorySpecificationsService } from './category-specifications.service';
import { CategorySpecificationsController } from './category-specifications.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CategorySpecificationsController],
  providers: [CategorySpecificationsService],
  imports: [PrismaModule],
})
export class CategorySpecificationsModule {}
