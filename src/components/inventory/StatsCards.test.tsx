import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { StatsCards } from "./StatsCards";
import { InventoryContext } from "@/contexts/InventoryContext";
import { BrowserRouter } from "react-router-dom";

// mock useNavigate so we can inspect calls
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("StatsCards navigation", () => {
  const defaultStats = {
    total: 10,
    available: 3,
    sold: 4,
    ordered: 1,
    pendingDeliveries: 2,
    assistanceCount: 0,
    byUnit: {
      "Shopping Praça Nova": 5,
      Camobi: 3,
      Estoque: 2,
    } as any,
  };

  const mockInventoryValue = {
    // only stats is consumed by the component; everything else can be stubs
    stats: defaultStats,
    products: [],
    addProduct: () => {},
    updateProduct: () => {},
    updateProductStatus: () => {},
    transferProduct: () => {},
    deleteProduct: () => false,
    getProductsByUnit: () => [],
    getProductsByStatus: () => [],
    setDeliveryInfo: () => {},
    markDelivered: () => {},
    scheduleDelivery: () => {},
  } as any;

  beforeEach(() => {
    mockNavigate.mockReset();
  });

  it("renders all cards and navigates correctly when clicked", () => {
    render(
      <InventoryContext.Provider value={mockInventoryValue}>
        <BrowserRouter>
          <StatsCards />
        </BrowserRouter>
      </InventoryContext.Provider>
    );

    // labels to check and their expected paths
    const expectations: Array<[string, string]> = [
      ["Total de Produtos", "/produtos"],
      ["Disponíveis", "/produtos?status=" + encodeURIComponent("Disponível")],
      ["Vendidos", "/produtos?status=Vendido"],
      ["Pedidos (a caminho)", "/produtos?status=Pedido"],
      ["Entregas Pendentes", "/entregas"],
      ["Assistências", "/produtos?status=" + encodeURIComponent("Assistência")],
    ];

    expectations.forEach(([label, expected]) => {
      const card = screen.getByText(label);
      fireEvent.click(card);
      expect(mockNavigate).toHaveBeenLastCalledWith(expected);
    });
  });
});
