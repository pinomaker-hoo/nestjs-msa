// ** Nest Imports
import { Module } from '@nestjs/common';

// ** Custom Module Imports
import AuthModule from './auth/auth.module';
import AdapterModule from './adapter/adapter.module';

@Module({
  imports: [AuthModule, AdapterModule],
  controllers: [],
  providers: [],
})
export class CoreModule {}
