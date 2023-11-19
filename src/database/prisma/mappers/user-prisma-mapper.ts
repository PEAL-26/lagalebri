import { User as UserPrisma } from '@prisma/client';
import { User as UserEntity } from '@/domain/entities/user';
import { toSnakeCase } from '@/helpers/converter-property-case';

export class UserPrismaMapper {
  static toPrisma(user: UserEntity): UserPrisma {
    return {
      id: user.id,
      email: user.email,
      phone: user.phone,
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
        createdAt: data.createAt,
        updatedAt: data.updateAt,
      },
      data.id,
    );
  }

  static toController(data: UserPrisma) {
    return toSnakeCase(data);
  }
}
