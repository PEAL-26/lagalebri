import { User as UserPrisma } from '@prisma/client';
import { User as UserEntity } from '@/domain/entities/user';
import { camelToSnake } from 'case-naming-converter';

export class UserPrismaMapper {
  static toPrisma(user: UserEntity): UserPrisma {
    return {
      id: user.id,
      email: user.email,
      phone: user.phone,
      type: user.type,
      createAt: user.createdAt,
      updateAt: user.updatedAt,
    };
  }

  static toEntity(data: any) {
    return new UserEntity(
      {
        email: data.email,
        phone: data.phone,
        name: data.name,
        type: data.type,
        createdAt: data.createAt,
        updatedAt: data.updateAt,
      },
      data.id,
    );
  }

  static toController(data: any) {
    return camelToSnake(data) as any;
  }
}