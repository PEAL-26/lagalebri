import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { paginationData, setPagination } from '@/helpers/pagination/pagination';

import { ListQuery } from './types';
import { PrismaService } from '../prisma-service';
import { CategoryPrismaMapper } from '../mappers/category-prisma-mapper';

@Injectable()
export class CategoryRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CategoryCreateInput) {
    return this.prisma.category.create({ data });
  }

  async update(data: Prisma.CategoryUpdateInput, id: string) {
    return this.prisma.category.update({ data, where: { id } });
  }

  async delete(id: string) {
    return this.prisma.category.delete({ where: { id } });
  }

  async list(props?: ListQuery) {
    const { query = '', page, size } = props ?? {};
    const { limit, offset } = setPagination({ page, size });

    const [total, categories] = await Promise.all([
      this.prisma.category.count({
        where: {
          name: {
            contains: query,
            mode: 'insensitive',
          },
        },
      }),
      await this.prisma.category.findMany({
        select: { id: true, name: true },
        where: {
          name: {
            contains: query,
            mode: 'insensitive',
          },
        },
        skip: offset,
        take: limit,
      }),
    ]);

    const rows = categories.map(CategoryPrismaMapper.toController);

    return paginationData({ rows, total, limit, page });
  }

  async getById(id: string) {
    const category = await this.prisma.category.findUnique({
      where: { id },
    });

    return category ? CategoryPrismaMapper.toEntity(category) : null;
  }

  async getByName(name: string) {
    const category = await this.prisma.category.findUnique({
      where: { name },
    });

    return category ? CategoryPrismaMapper.toEntity(category) : null;
  }
}
