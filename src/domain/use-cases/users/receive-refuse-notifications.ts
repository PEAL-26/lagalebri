import { Injectable } from '@nestjs/common';

import {
  UserRepositoryCommandAbstraction,
  UserRepositoryQueryAbstraction,
} from '../../abstractions';
import { NotFoundError } from '@/helpers/errors';

@Injectable()
export class ReceiveRefuseNotificationsUseCase {
  constructor(
    private commandsRepository: UserRepositoryCommandAbstraction,
    private queriesRepository: UserRepositoryQueryAbstraction,
  ) {}

  async receive(id: string) {
    const user = await this.queriesRepository.getById(id);
    if (!user) throw new NotFoundError('Usuário');
    await this.commandsRepository.changeStateNotifications(id, true);
  }

  async refuse(id: string) {
    const user = await this.queriesRepository.getById(id);
    if (!user) throw new NotFoundError('Usuário');
    await this.commandsRepository.changeStateNotifications(id, false);
  }
}
