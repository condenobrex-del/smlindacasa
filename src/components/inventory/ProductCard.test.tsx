import React from "react";
import { render, screen } from "@testing-library/react";
import { ProductCard } from "./ProductCard";
import { Product } from "@/types/inventory";
import { InventoryContext } from "@/contexts/InventoryContext";

// simple stub with minimum required fields
const makeProduct = (): Product => ({
  id: "1",
  sku: "X123",
  name: "Test Product",
  category: "Outros" as any,
  color: "red",
  price: 0,
  unit: "Camobi" as any,
  status: "Disponível" as any,
  image: "",
  sofaDetails: {
    size: "",
    fabric: "",
    manufacturer: "Tokstok",
    seats: 1,
  } as any,
  createdAt: "",
  updatedAt: "",
  createdBy: "ADMIN" as any,
  history: [],
});

describe("ProductCard layout", () => {
  it("always positions the edit button in the bottom right with standard padding", () => {
    render(
      <InventoryContext.Provider value={{
        stats: { total:0, available:0, sold:0, ordered:0, pendingDeliveries:0, assistanceCount:0, byUnit:{} } as any,
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
      } as any}>
        <ProductCard product={makeProduct()} />
      </InventoryContext.Provider>
    );

    // trigger element text changes depending on viewport size, but "editar" should always be visible
    const editTrigger = screen.getByRole("button", { name: /editar/i });
    expect(editTrigger).toBeInTheDocument();

    const container = editTrigger.closest("div.absolute");
    expect(container).toBeTruthy();

    // verify the utility classes for padding offset are present
    expect(container).toHaveClass("bottom-3");
    expect(container).toHaveClass("right-3");
  });

  it("renders unit, color and size in a single horizontal row", () => {
    const product = makeProduct();
    product.color = "blue";
    product.category = "Sofá" as any;
    product.sofaDetails.size = "2m";

    render(
      <InventoryContext.Provider value={{
        stats: { total:0, available:0, sold:0, ordered:0, pendingDeliveries:0, assistanceCount:0, byUnit:{} } as any,
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
      } as any}>
        <ProductCard product={product} />
      </InventoryContext.Provider>
    );

    // verify all three attributes appear
    expect(screen.getByText("Camobi")).toBeInTheDocument();
    expect(screen.getByText("blue")).toBeInTheDocument();
    expect(screen.getByText("2m")).toBeInTheDocument();

    // container should have flex and gap classes for inline layout
    const attrContainer = screen.getByText("Camobi").closest("div");
    expect(attrContainer).toHaveClass("flex");
    expect(attrContainer).toHaveClass("gap-2");
  });
});
