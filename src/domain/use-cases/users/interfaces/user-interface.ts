import { UserTypeEnum } from '@/domain/entities/user';

export interface UserCreateRequest {
  name: string;
  email?: string;
  phone?: string;
  type?: UserTypeEnum;
  notification?: boolean;
  avatar?: string;
}

export interface UserUpdateRequest {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  type?: UserTypeEnum;
  notification?: boolean;
  avatar?: string;
}
