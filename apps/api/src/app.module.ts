import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { SubcategoriesModule } from './subcategories/subcategories.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CategorySpecificationsModule } from './category-specifications/category-specifications.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client', 'dist'),
    }),
    PrismaModule,
    CategoriesModule,
    ProductsModule,
    SubcategoriesModule,
    UsersModule,
    AuthModule,
    CategorySpecificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
