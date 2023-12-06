import { Injectable } from '@nestjs/common';

import { User } from '@/domain/entities/user';
import { NotificationError } from '@/helpers/errors';
import {
  UserRepositoryCommandAbstraction,
  UserRepositoryQueryAbstraction,
} from '../../abstractions';

import {
  UserCreateRequest,
  UserUpdateRequest,
} from './interfaces/user-interface';
import { ExistError, NotFoundError } from '@/helpers/errors';
import { QueryProps } from '@/shared/query';
import { isUndefined } from '@/helpers/verify-value';

@Injectable()
export class UserCRUDUseCases {
  constructor(
    private queryRepository: UserRepositoryQueryAbstraction,
    private commandRepository: UserRepositoryCommandAbstraction,
  ) {}

  //#region Create
  async create(request: UserCreateRequest) {
    const user = await this.validateOnCreate(new User(request));
    const userCreated = await this.commandRepository.create(user);
    return { user: userCreated };
  }

  private async validateOnCreate(user: User) {
    if (!user.isValid) throw new NotificationError(user.notifications);

    const userEmailExists = await this.queryRepository.getByEmail(user.email);
    if (userEmailExists) throw new ExistError('Email');

    const userPhoneExists = await this.queryRepository.getByPhone(user.phone);
    if (userPhoneExists) throw new ExistError('Phone');

    return user;
  }
  //#endregion

  //#region Update
  async update(request: UserUpdateRequest) {
    const user = await this.validateOnUpdate(
      request.id,
      new User(request, request.id),
    );

    user.name = request.name;
    if (!isUndefined(request.email)) user.email = request.email;
    if (!isUndefined(request.phone)) user.phone = request.phone;
    if (!isUndefined(request.type)) user.type = request.type;
    if (!isUndefined(request.avatar)) user.avatar = request.avatar;
    if (!isUndefined(request.notification))
      user.notification = request.notification;

    if (!user.isValid) throw new NotificationError(user.notifications);

    user.update();
    const userUpdated = await this.commandRepository.update(request.id, user);

    return { user: userUpdated };
  }

  private async validateOnUpdate(id: string, user: User) {
    const userExists = await this.queryRepository.getById(id);
    if (!userExists) throw new NotFoundError('User');

    const userEmailExists = await this.queryRepository.getByEmail(user.email);

    if (userEmailExists && userEmailExists.id !== id)
      throw new ExistError('Email');

    const userPhoneExists = await this.queryRepository.getByPhone(user.phone);

    if (userPhoneExists && userPhoneExists.id !== id)
      throw new ExistError('Phone');

    return userExists;
  }
  //#endregion

  //#region Delete
  async delete(id: string) {
    const user = await this.queryRepository.getById(id);
    if (!user) throw new NotFoundError('Usuário');
    await this.commandRepository.delete(id);
  }
  //#endregion

  //#region Queries
  async list(query?: QueryProps) {
    const users = await this.queryRepository.list(query);

    return { users };
  }

  async getById(id: string) {
    const user = await this.queryRepository.getById(id);
    if (!user) throw new NotFoundError('Usuário');
    return { user };
  }

  async getByEmail(email: string) {
    const user = await this.queryRepository.getByEmail(email);
    if (!user) throw new NotFoundError('Usuário');
    return { user };
  }

  async getByPhone(phone: string) {
    const user = await this.queryRepository.getByPhone(phone);
    if (!user) throw new NotFoundError('Usuário');
    return { user };
  }
  //#endregion
}