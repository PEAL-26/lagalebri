import { Injectable } from '@nestjs/common';
import {
  PaginationDataOutput,
  paginationData,
  setPagination,
} from '@/helpers/pagination';
import { PrismaService } from '@/database/prisma/prisma-service';

import { UserRepositoryQueryAbstraction } from '@/domain/use-cases/abstractions';
import { User } from '@/domain/entities/user';
import { QueryProps } from '@/shared/query';
import { UserPrismaMapper } from '../../mappers/user-prisma-mapper';

@Injectable()
export class UserQueriesRepository implements UserRepositoryQueryAbstraction {
  constructor(private prisma: PrismaService) {}

  async getById(id: string): Promise<User | null> {
    const property = await this.prisma.user.findUnique({
      where: { id },
    });

    return property ? UserPrismaMapper.toEntity(property) : null;
  }

  async getByEmail(email: string): Promise<User | null> {
    if (!email) return null;

    const property = await this.prisma.user.findUnique({
      where: { email },
    });

    return property ? UserPrismaMapper.toEntity(property) : null;
  }

  async getByPhone(phone: string): Promise<User | null> {
    if (!phone) return null;

    const property = await this.prisma.user.findUnique({
      where: { phone },
    });

    return property ? UserPrismaMapper.toEntity(property) : null;
  }

  whereList(query: string): any {
    return {
      OR: [
        {
          email: {
            contains: query,
            mode: 'insensitive',
          },
        },
        {
          phone: {
            contains: query,
            mode: 'insensitive',
          },
        },
        {
          profile: {
            name: {
              contains: query,
              mode: 'insensitive',
            },
          },
        },
      ],
    };
  }

  async list(query?: QueryProps): Promise<PaginationDataOutput<User>> {
    const { query: q = '', page, size } = query ?? {};
    const { limit, offset } = setPagination({ page, size });

    const where = this.whereList(q);
    const [total, users] = await Promise.all([
      this.prisma.user.count({
        where: where,
      }),
      await this.prisma.user.findMany({
        select: {
          id: true,
          profile: { select: { name: true } },
          email: true,
          phone: true,
          type: true,
        },
        where: where,
        skip: offset,
        take: limit,
      }),
    ]);

    const rows = users.map((user) => UserPrismaMapper.toController(user));

    return paginationData({ rows, total, limit, page });
  }
}
