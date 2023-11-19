import { User } from '@/domain/entities/user';
import { RepositoryCommand, RepositoryQuery } from '@/shared/repository';

export abstract class UserRepositoryCommandAbstraction extends RepositoryCommand<User> {}
export abstract class UserRepositoryQueryAbstraction extends RepositoryQuery<User> {}
