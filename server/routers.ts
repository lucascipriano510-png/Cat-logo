import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { getDb } from "./db";
import { orders } from "../drizzle/schema";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  orders: router({
    create: publicProcedure
      .input(z.object({
        whatsappPhone: z.string(),
        items: z.array(z.object({
          id: z.number(),
          name: z.string(),
          quantity: z.number(),
          price: z.number(),
          sku: z.string(),
          image: z.string(),
        })),
        totalPrice: z.number(),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) {
          throw new Error("Database not available");
        }

        // Save order to database
        await db.insert(orders).values({
          whatsappPhone: input.whatsappPhone,
          items: input.items as any,
          totalPrice: input.totalPrice.toString() as any,
          status: "pending",
        });

        return {
          success: true,
          message: "Pedido criado com sucesso! Redirecionando para WhatsApp...",
        };
      }),
  }),
});

export type AppRouter = typeof appRouter;
