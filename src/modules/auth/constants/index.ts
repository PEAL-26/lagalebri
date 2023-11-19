import { SetMetadata } from '@nestjs/common';

export const jwt = {
  secret: process.env.JWT_SECRET,
};

export const IS_PUBLIC_KEY = 'isPublic';
export const IS_ADMIN = 'isAdmin';

export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
export const Admin = () => SetMetadata(IS_ADMIN, true);
