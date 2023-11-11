import { DatabaseModule } from '@/database/database.module';
import { Module } from '@nestjs/common';
import { CategoryController } from './categories/category.controller';
import { CategoryService } from './categories/category.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class AuxiliaryModule {}
