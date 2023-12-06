import { User } from '@/domain/entities/user';
import { RepositoryCommand, RepositoryQuery } from '@/shared/repository';

export abstract class UserRepositoryCommandAbstraction extends RepositoryCommand<User> {
  abstract changeStateNotifications(
    id: string,
    notification: boolean,
  ): Promise<void>;
}

export abstract class UserRepositoryQueryAbstraction extends RepositoryQuery<User> {
  abstract getByEmail(email: string): Promise<User | null>;
  abstract getByPhone(phone: string): Promise<User | null>;
}
