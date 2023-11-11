import { CategoryRepository } from '@/database/prisma/repositories/category-repository';
import { Injectable } from '@nestjs/common';
import { Category } from '../../../domain/entities/category';

import { ExistError, NotFoundError } from '@/helpers/errors';
import { NotificationError } from '@/helpers/notification-error';
import { CreateRequest, UpdateRequest } from './types';
import { ListQuery } from '@/database/prisma/repositories/types';

@Injectable()
export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  //#region Create
  async create(request: CreateRequest) {
    const category = await this.validateOnCreate(new Category(request));

    const response = await this.categoryRepository.create({
      id: category.id,
      name: category.name.trim(),
      description: category.description.trim(),
    });

    return { category: response };
  }

  private async validateOnCreate(category: Category) {
    if (!category.isValid) throw new NotificationError(category.notifications);

    const categoryExists = await this.categoryRepository.getByName(
      category.name,
    );

    if (categoryExists) throw new ExistError('Category');

    return category;
  }
  //#endregion

  //#region Update
  async update(request: UpdateRequest, id: string) {
    const category = await this.validateOnUpdate(id, new Category(request, id));

    const response = await this.categoryRepository.update(
      {
        name: category.name,
        description: category.description,
        updateAt: new Date(),
      },
      id,
    );

    return { category: response };
  }

  private async validateOnUpdate(id: string, category: Category) {
    if (!category.isValid) throw new NotificationError(category.notifications);

    const categoryExists = await this.categoryRepository.getById(id);
    if (!categoryExists) throw new NotFoundError('Category');

    const categoryNameExists = await this.categoryRepository.getByName(
      category.name,
    );

    if (categoryNameExists && categoryNameExists.id !== id)
      throw new ExistError('Category');

    return category;
  }
  //#endregion

  //#region Delete
  async delete(id: string) {
    const category = await this.categoryRepository.getById(id);
    if (!category) throw new NotFoundError('Categoria');
    await this.categoryRepository.delete(id);
  }
  //#endregion

  //#region Queries
  async list(query?: ListQuery) {
    const categories = await this.categoryRepository.list(query);

    return { categories };
  }

  async getById(id: string) {
    const category = await this.categoryRepository.getById(id);
    if (!category) throw new NotFoundError('Categoria');
    return { category: category.toController() };
  }

  async getByName(name: string) {
    const category = await this.categoryRepository.getByName(name);
    if (!category) throw new NotFoundError('Categoria');
    return { category: category.toController() };
  }
  //#endregion
}
