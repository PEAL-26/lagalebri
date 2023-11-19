import { Module } from '@nestjs/common';
import { DatabaseModule } from '@/database/database.module';
import {
  CreateUserController,
  DeleteUserController,
  ListUserController,
  UpdateUserController,
  GetsUserController,
  NotificationsUserController,
} from './controllers';
import {
  ReceiveRefuseNotificationsUseCase,
  UserCRUDUseCases,
} from '@/domain/use-cases/users';

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateUserController,
    UpdateUserController,
    DeleteUserController,
    ListUserController,
    GetsUserController,
    NotificationsUserController,
  ],
  providers: [UserCRUDUseCases, ReceiveRefuseNotificationsUseCase],
})
export class UsersModule {}
