import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../../prisma-service';

@Injectable()
export class PropertyCommandsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.PropertyCreateInput) {
    return this.prisma.property.create({ data });
  }

  async update(data: Prisma.PropertyUpdateInput, id: string) {
    return this.prisma.property.update({ data, where: { id } });
  }

  async delete(id: string) {
    return this.prisma.property.delete({ where: { id } });
  }
}
