import { Module } from '@nestjs/common';
import { AuxiliaryModule } from './auxiliaries/auxiliary.module';
import { PropertyModule } from './properties/properties.module';

@Module({
  imports: [AuxiliaryModule, PropertyModule],
})
export class RootModule {}
