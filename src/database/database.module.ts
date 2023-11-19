import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma-service';
import { CategoryRepository } from './prisma/repositories/category-repository';
import {
  PropertyCommandsRepository,
  PropertyQueriesRepository,
  UserCommandsRepository,
  UserQueriesRepository,
} from './prisma/repositories';
import {
  PropertyRepositoryCommandAbstraction,
  PropertyRepositoryQueryAbstraction,
  UserRepositoryCommandAbstraction,
  UserRepositoryQueryAbstraction,
} from '@/domain/use-cases/abstractions';

@Module({
  providers: [
    PrismaService,
    CategoryRepository,
    {
      provide: PropertyRepositoryCommandAbstraction,
      useClass: PropertyCommandsRepository,
    },
    {
      provide: PropertyRepositoryQueryAbstraction,
      useClass: PropertyQueriesRepository,
    },
    {
      provide: UserRepositoryCommandAbstraction,
      useClass: UserCommandsRepository,
    },
    {
      provide: UserRepositoryQueryAbstraction,
      useClass: UserQueriesRepository,
    },
  ],
  exports: [
    CategoryRepository,
    PropertyRepositoryCommandAbstraction,
    PropertyRepositoryQueryAbstraction,
    UserRepositoryQueryAbstraction,
    UserRepositoryCommandAbstraction,
  ],
})
export class DatabaseModule {}
