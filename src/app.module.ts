import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuxiliaryModule } from './modules/auxiliaries/auxiliary.module';

@Module({
  imports: [DatabaseModule, AuxiliaryModule],
})
export class AppModule {}
