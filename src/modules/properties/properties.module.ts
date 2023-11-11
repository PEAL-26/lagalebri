import { Module } from '@nestjs/common';
import { DatabaseModule } from '@/database/database.module';

import { CreatePropertyUseCase, ListAllPropertyUseCase } from './use-cases';
import {
  CreatePropertyController,
  ListPropertyController,
} from './controllers';

@Module({
  imports: [DatabaseModule],
  controllers: [CreatePropertyController, ListPropertyController],
  providers: [CreatePropertyUseCase, ListAllPropertyUseCase],
})
export class PropertyModule {}
