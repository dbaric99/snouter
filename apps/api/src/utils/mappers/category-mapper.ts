function subcategoryToDto(data) {
  return {
    name: data.name,
    category: { connect: { id: data.categoryId } },
    subcategorySpecs: {
      create: data.subcategorySpecs.map((spec) => ({
        name: spec.name,
      })),
    },
  };
}

function categoryToDto(data) {
  return {
    name: data.name,
    categorySpecs: {
      create: data.categorySpecs.map((spec) => ({
        name: spec.name,
      })),
    },
  };
}

export const CategoryMapper = {
  subcategoryToDto,
  categoryToDto,
};
