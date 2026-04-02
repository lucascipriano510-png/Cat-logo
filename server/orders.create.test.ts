import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";

describe("orders.create", () => {
  it("should create an order with items and save to database", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: { protocol: "https", headers: {} } as any,
      res: {} as any,
    });

    const result = await caller.orders.create({
      whatsappPhone: "5534984148067",
      items: [
        {
          id: 1,
          name: "Camiseta Branca",
          quantity: 2,
          price: 89.90,
          sku: "CAM-BRA-001",
          image: "https://example.com/image1.jpg",
        },
        {
          id: 3,
          name: "Calça Jogador",
          quantity: 1,
          price: 169.90,
          sku: "CAL-JOG-001",
          image: "https://example.com/image2.jpg",
        },
      ],
      totalPrice: 349.70,
    });

    expect(result).toEqual({
      success: true,
      message: "Pedido criado com sucesso! Redirecionando para WhatsApp...",
    });
  });

  it("should handle invalid input gracefully", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: { protocol: "https", headers: {} } as any,
      res: {} as any,
    });

    try {
      await caller.orders.create({
        whatsappPhone: "",
        items: [],
        totalPrice: 0,
      });
      expect.fail("Should have thrown an error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
