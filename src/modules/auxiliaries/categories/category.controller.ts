import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { verifyError } from '@/helpers/errors';
import { CategoryUseCases } from '@/domain/use-cases/categories/category-use-cases';

import {
  UpdateCategoryDto,
  CreateCategoryDto,
  ListCategoryQuery,
} from './dtos';
import { CategoryViewModel } from './category-view-model';
import { Admin } from '@/modules/auth/constants';

@Controller('categories')
@Admin()
export class CategoryController {
  constructor(private categoryService: CategoryUseCases) {}

  @Get()
  async list(@Query() query: ListCategoryQuery) {
    try {
      const { size, page, q } = query;

      const { categories } = await this.categoryService.list({
        size,
        page,
        query: q,
      });

      return categories;
    } catch (error) {
      verifyError(error);
    }
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    try {
      const { category } = await this.categoryService.getById(id);
      return CategoryViewModel.toHTTP(category);
    } catch (error) {
      verifyError(error);
    }
  }

  @Get()
  async getByName(@Query('name') name: string) {
    try {
      const { category } = await this.categoryService.getByName(name);

      return CategoryViewModel.toHTTP(category);
    } catch (error) {
      verifyError(error);
    }
  }

  @Post()
  async create(@Body() input: CreateCategoryDto) {
    try {
      const { category } = await this.categoryService.create({
        name: input.name,
        description: input.description,
      });

      return CategoryViewModel.toHTTP(category);
    } catch (error) {
      verifyError(error);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() input: UpdateCategoryDto) {
    try {
      const { category } = await this.categoryService.update(
        {
          name: input.name,
          description: input.description,
        },
        id,
      );

      return CategoryViewModel.toHTTP(category);
    } catch (error) {
      verifyError(error);
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      await this.categoryService.delete(id);
      return { message: 'Registo removido com sucessor!' };
    } catch (error) {
      verifyError(error);
    }
  }
}
