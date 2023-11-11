import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma-service';
import { CategoryRepository } from './prisma/repositories/category-repository';
import {
  PropertyCommandsRepository,
  PropertyQueriesRepository,
} from './prisma/repositories/property-repository';

@Module({
  providers: [
    PrismaService,
    CategoryRepository,
    PropertyCommandsRepository,
    PropertyQueriesRepository,
  ],
  exports: [
    CategoryRepository,
    PropertyCommandsRepository,
    PropertyQueriesRepository,
  ],
})
export class DatabaseModule {}
