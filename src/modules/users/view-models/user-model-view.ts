import { User } from '@/domain/entities/user';

export class UserViewModel {
  static toHTTP(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      notification: user.notification,
      type: user.type,
      created_at: user.createdAt,
      updated_at: user.updatedAt,
    };
  }
}
