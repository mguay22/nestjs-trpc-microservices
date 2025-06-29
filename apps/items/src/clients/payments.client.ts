import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { AppRouter } from '@repo/trpc/PaymentsRouter';

export const createPaymentsClient = (url: string) =>
  createTRPCProxyClient<AppRouter>({
    links: [httpBatchLink({ url })],
  });
