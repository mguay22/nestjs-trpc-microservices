import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
const publicProcedure = t.procedure;

const appRouter = t.router({
  payments: t.router({
    getPayment: publicProcedure.input(z.object({ id: z.string() })).output(z.object({
      id: z.string(),
      number: z.number(),
      code: z.number(),
      expiration: z.string(),
    })).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  })
});
export type AppRouter = typeof appRouter;

