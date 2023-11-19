import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../../prisma-service';
import { UserRepositoryCommandAbstraction } from '@/domain/use-cases/abstractions';
import { User } from '@/domain/entities/user';

@Injectable()
export class UserCommandsRepository
  implements UserRepositoryCommandAbstraction
{
  constructor(private prisma: PrismaService) {}

  create(entity: User): Promise<User> {
    throw new Error('Method not implemented.');
    //   return this.prisma.user.create({ data });
  }
  update(id: string, entity: User): Promise<User> {
    throw new Error('Method not implemented.');
    //   return this.prisma.user.update({ data, where: { id } });
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
    //   return this.prisma.user.delete({ where: { id } });
  }
}
