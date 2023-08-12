// npx prisma db seed

import { PrismaClient } from '@prisma/client';
import { SeedData } from './seed-data';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  SeedData.counties.forEach(async (county) => {
    await prisma.county.create({
      data: county,
    });
  });

  SeedData.users.forEach(async (user) => {
    await prisma.user.create({
      data: user,
    });
  });

  SeedData.categories.forEach(async (category) => {
    await prisma.category.create({
      data: category,
    });
  });

  SeedData.categorySpecs.forEach(async (categorySpec) => {
    await prisma.categorySpecification.create({
      data: categorySpec,
    });
  });

  SeedData.subcategories.forEach(async (subcategory) => {
    await prisma.subcategory.create({
      data: subcategory,
    });
  });

  SeedData.cities.forEach(async (city) => {
    await prisma.city.create({
      data: city,
    });
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
