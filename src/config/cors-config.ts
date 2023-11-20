import { ForbiddenException } from '@nestjs/common';

interface Callback {
  (err: Error | null, origin?: boolean): void;
}

const whiteListReplace = process.env.WHITE_LIST?.replace(/[[\] ]|/g, '')
  .replace(/'/g, '')
  .trim();
const whiteList = whiteListReplace?.split(',') || [];

export const corsConfig = {
  origin: (origin: string, callback: Callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      throw new ForbiddenException(`${origin} - Não autorizado pelo CORS`);
    }
  },
  credentials: true,
};
