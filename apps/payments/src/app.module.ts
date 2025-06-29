import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';
import { TRPCModule } from 'nestjs-trpc';

@Module({
  imports: [
    PaymentsModule,
    TRPCModule.forRoot({
      autoSchemaFile: '../../packages/trpc/src/routers/payments',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
