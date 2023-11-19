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
      avatar: user.avatar,
      createAt: user.createdAt,
      updateAt: user.updatedAt,
    };
  }

  static toEntity(data: any) {
    return new UserEntity(
      {
        email: data.email,
        phone: data.phone,
        name: data.profile?.name,
        notification: data.profile?.notification,
        type: data.type,
        avatar: data.avatar,
        createdAt: data.createAt,
        updatedAt: data.updateAt,
      },
      data.id,
    );
  }

  static toController(data: any) {
    return camelToSnake({
      ...data,
      name: data.profile?.name || '',
      profile: undefined,
    }) as any;
  }
}
