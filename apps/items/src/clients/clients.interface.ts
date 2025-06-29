import { createTRPCProxyClient } from '@trpc/client';
import { AppRouter as PaymentsRouter } from '@repo/trpc/PaymentsRouter';

export interface Clients {
  paymentsClient: ReturnType<typeof createTRPCProxyClient<PaymentsRouter>>;
}
