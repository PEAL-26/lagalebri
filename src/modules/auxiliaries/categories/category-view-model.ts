import { Category } from '@/domain/entities/category';

export class CategoryViewModel {
  static toHTTP(category: Category) {
    return {
      id: category.id,
      name: category.name,
      description: category.description,
      created_at: category.createdAt,
      updated_at: category.updatedAt,
    };
  }
}
