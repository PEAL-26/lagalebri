import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuxiliaryModule } from './auxiliaries/auxiliary.module';
import { PropertyModule } from './properties/properties.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, AuxiliaryModule, PropertyModule, UsersModule],
})
export class RootModule {}
