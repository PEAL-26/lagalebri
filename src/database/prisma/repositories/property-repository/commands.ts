import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../../prisma-service';
import { PropertyRepositoryCommandAbstraction } from '@/domain/use-cases/abstractions';
import { Property } from '@/domain/entities/property';

@Injectable()
export class PropertyCommandsRepository
  implements PropertyRepositoryCommandAbstraction
{
  constructor(private prisma: PrismaService) {}

  create(entity: Property): Promise<Property> {
    throw new Error('Method not implemented.');
    //   return this.prisma.property.create({ data });
  }
  update(id: string, entity: Property): Promise<Property> {
    throw new Error('Method not implemented.');
    //   return this.prisma.property.update({ data, where: { id } });
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
    //   return this.prisma.property.delete({ where: { id } });
  }
}
