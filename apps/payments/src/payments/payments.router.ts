import { Input, Query, Router } from 'nestjs-trpc';
import { PaymentsService } from './payments.service';
import { z } from 'zod';
import { paymentSchema } from './schema/payment.schema';

@Router({ alias: 'payments' })
export class PaymentsRouter {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Query({
    input: z.object({ id: z.string() }),
    output: paymentSchema,
  })
  getPayment(@Input('id') id: string) {
    return this.paymentsService.getPaymentById(id);
  }
}
