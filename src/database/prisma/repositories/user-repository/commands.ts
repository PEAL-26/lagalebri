import { Injectable } from '@nestjs/common';

import { User } from '@/domain/entities/user';
import { UserRepositoryCommandAbstraction } from '@/domain/use-cases/abstractions';

import { PrismaService } from '../../prisma-service';
import { UserPrismaMapper } from '../../mappers/user-prisma-mapper';

@Injectable()
export class UserCommandsRepository
  implements UserRepositoryCommandAbstraction
{
  constructor(private prisma: PrismaService) {}

  async create(entity: User): Promise<User> {
    const data = UserPrismaMapper.toPrisma(entity);
    const result = await this.prisma.user.create({
      data: {
        ...data,
        profile: {
          create: {
            name: entity.name,
            notification: entity.notification,
            createAt: entity.createdAt,
            updateAt: entity.updatedAt,
          },
        },
      },
      include: {
        profile: true,
      },
    });

    return UserPrismaMapper.toEntity(result);
  }

  async update(id: string, entity: User): Promise<User> {
    const data = UserPrismaMapper.toPrisma(entity);
    const result = await this.prisma.user.update({
      data: {
        ...data,
        createAt: undefined,
        profile: {
          update: {
            name: entity.name,
            notification: entity.notification,
            updateAt: entity.updatedAt,
          },
        },
      },
      where: { id },
      include: {
        profile: true,
      },
    });

    return UserPrismaMapper.toEntity(result);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
      include: { profile: true },
    });
  }

  async receiveRefuseNotifications(
    id: string,
    notification: boolean,
  ): Promise<void> {
    await this.prisma.profile.update({
      data: {
        notification,
        updateAt: new Date(),
      },
      where: { userId: id },
    });
  }
}
