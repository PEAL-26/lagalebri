import { UserTypeEnum } from '@/domain/entities/user';
import { IsNotEmpty, IsBoolean, IsEnum } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty()
  name: string;

  email: string;

  phone: string;

  @IsBoolean()
  notification: boolean;

  @IsEnum(UserTypeEnum)
  type: UserTypeEnum;
}
