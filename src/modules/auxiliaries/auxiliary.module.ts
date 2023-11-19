import { Module } from '@nestjs/common';
import { DatabaseModule } from '@/database/database.module';
import { CategoryUseCases } from '@/domain/use-cases/categories';

import { CategoryController } from './categories/category.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoryController],
  providers: [CategoryUseCases],
})
export class AuxiliaryModule {}
