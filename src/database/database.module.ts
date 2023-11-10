import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma-service';
import { CategoryRepository } from './prisma/repositories/category-repository';

@Module({
  providers: [PrismaService, CategoryRepository],
  exports: [CategoryRepository],
})
export class DatabaseModule {}
