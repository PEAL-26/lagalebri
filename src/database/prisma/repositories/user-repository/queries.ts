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

  list(query?: QueryProps): Promise<PaginationDataOutput<User>> {
    throw new Error('Method not implemented.');
  }
}
