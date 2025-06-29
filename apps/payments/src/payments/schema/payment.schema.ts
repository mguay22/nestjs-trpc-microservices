import { z } from 'zod';

export const paymentSchema = z.object({
  id: z.string(),
  number: z.number(),
  code: z.number(),
  expiration: z.string(),
});

export type Payment = z.infer<typeof paymentSchema>;
