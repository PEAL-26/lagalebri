import { Category as CategoryPrisma } from '@prisma/client';
import { Category as CategoryEntity } from '@/domain/entities/category';
import { toSnakeCase } from '@/helpers/converter-property-case';

export class CategoryPrismaMapper {
  static toPrisma(category: CategoryEntity): CategoryPrisma {
    return {
      id: category.id,
      name: category.name,
      description: category.description,
      createAt: category.createdAt,
      updateAt: category.updatedAt,
    };
  }

  static toEntity(data: CategoryPrisma) {
    return new CategoryEntity(
      {
        name: data.name,
        description: data.description,
        createdAt: data.createAt,
        updatedAt: data.updateAt,
      },
      data.id,
    );
  }

  static toController(data: CategoryPrisma) {
    return toSnakeCase(data);
  }
}
