import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuxiliaryModule } from './auxiliaries/auxiliary.module';
import { PropertyModule } from './properties/properties.module';

@Module({
  imports: [AuxiliaryModule, PropertyModule, UsersModule],
})
export class RootModule {}
