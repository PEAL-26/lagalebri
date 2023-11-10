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
import { CategoryService } from './category.service';
import { toSnakeCase } from '@/helpers/converter-property-case';
import {
  UpdateCategoryDto,
  CreateCategoryDto,
  ListCategoryQuery,
} from './dtos';
import { VerifyError } from '@/helpers/errors';

@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

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
      VerifyError(error);
    }
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    try {
      const { category } = await this.categoryService.getById(id);
      return category;
    } catch (error) {
      VerifyError(error);
    }
  }

  @Get()
  async getByName(@Query('name') name: string) {
    try {
      const { category } = await this.categoryService.getByName(name);

      return category;
    } catch (error) {
      VerifyError(error);
    }
  }

  @Post()
  async create(@Body() input: CreateCategoryDto) {
    try {
      const { category } = await this.categoryService.create({
        name: input.name,
        description: input.description,
      });

      return toSnakeCase(category);
    } catch (error) {
      VerifyError(error);
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

      return toSnakeCase(category);
    } catch (error) {
      VerifyError(error);
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      await this.categoryService.delete(id);
      return { message: 'Registo removido com sucessor!' };
    } catch (error) {
      VerifyError(error);
    }
  }
}
