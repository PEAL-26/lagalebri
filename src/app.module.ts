import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { RootModule } from './modules/root.module';

@Module({
  imports: [DatabaseModule, RootModule],
})
export class AppModule {}
