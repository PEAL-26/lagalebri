import { UserTypeEnum } from '@/domain/entities/user';
import { IsNotEmpty } from 'class-validator';

export class UpdateUserBody {
  @IsNotEmpty()
  name: string;

  email: string;

  phone: string;

  notification: boolean;

  type: UserTypeEnum;

  avatar: string;
}
