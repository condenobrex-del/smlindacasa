import { useState } from "react";
import { Product } from "@/types/inventory";
import { StatusBadge } from "./StatusBadge";
import { ProductActions } from "./ProductActions";
import { ProductDetailDialog } from "./ProductDetailDialog";
import { ImageViewer } from "./ImageViewer";
import { Package, MapPin, Palette, Ruler } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [detailOpen, setDetailOpen] = useState(false);

  const { theme } = useTheme();
  const isDark = theme === "dark";

  // background/icon colors used for the small badges next to attributes
  const iconBg = isDark ? "#FFFFFF" : "#111827"; // solid background
  const iconColor = isDark ? "#111827" : "#FFFFFF";

  // Proporção áurea: 1.618:1 para distribuição do espaço
  return (
    <>
      <div
        onClick={() => setDetailOpen(true)}
        className="relative group animate-fade-in cursor-pointer rounded-xl border bg-card/70 backdrop-blur-md shadow-sm border-white/20 dark:border-white/10 transition-smooth hover:shadow-md hover:border-primary/30"
      >
        {/* Layout mobile otimizado com proporção áurea */}
        {/* Grid layout: 3 colunas, 2 linhas com altura compacta */}
        <div className="grid gap-2 sm:gap-3 p-3 sm:p-4 items-start" style={{ gridTemplateColumns: 'auto 1fr auto', gridAutoRows: 'max-content' }}>
          {/* Miniatura - Coluna 1, Linhas 1-2 */}
          <div className="row-span-2 shrink-0">
            {product.image ? (
              <ImageViewer
                src={product.image}
                alt={product.name}
                className="h-20 w-20 sm:h-24 sm:w-24 lg:h-32 lg:w-32 rounded-lg object-cover"
              />
            ) : (
              <div className="flex h-20 w-20 sm:h-24 sm:w-24 lg:h-32 lg:w-32 items-center justify-center rounded-lg bg-muted">
                <Package className="h-8 w-8 sm:h-10 sm:w-10 text-muted-foreground" />
              </div>
            )}
          </div>

          {/* Info - Coluna 2, Linha 1 */}
          <div className="min-w-0 space-y-1">
            <div className="flex-1 min-w-0">
              <span className="text-xs font-mono text-muted-foreground block truncate">{product.sku}</span>
              <h3 className="mt-0.5 font-display font-semibold text-sm sm:text-base line-clamp-2 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
            </div>

            {/* Main attributes: unidade, cor e medidas em linha com espaçamento */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin
                  className="h-4 w-4 rounded p-1"
                  style={{
                    backgroundColor: iconBg,
                    color: iconColor,
                  }}
                />
                {product.unit}
              </span>

              {product.color && (
                <span className="flex items-center gap-1">
                  <Palette
                    className="h-4 w-4 rounded p-1"
                    style={{
                      backgroundColor: iconBg,
                      color: iconColor,
                    }}
                  />
                  {product.color}
                </span>
              )}

              {product.category === "Sofá" && product.sofaDetails?.size && (
                <span className="flex items-center gap-1">
                  <Ruler
                    className="h-4 w-4 rounded p-1"
                    style={{
                      backgroundColor: iconBg,
                      color: iconColor,
                    }}
                  />
                  {product.sofaDetails.size}
                </span>
              )}
            </div>
          </div>

          {/* Status - Coluna 3, Linha 1 (canto superior direito) */}
          <div className="shrink-0 flex justify-end">
            <StatusBadge status={product.status} />
          </div>

          {/* Sold info - Coluna 2, Linha 2 */}
          {product.status === "Vendido" && product.soldBy && (
            <div className="rounded-md bg-sold/10 px-2 py-1 text-xs text-sold line-clamp-1">
              Vendido por <strong>{product.soldBy}</strong>
            </div>
          )}

          {/* Ações placeholder: moved out of grid in order to fix bottom-right spacing */}
          <div className="sr-only" />
        </div>
        {/* absolutely positioned actions button container placed inside card */}
        <div
          className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex"
          onClick={e => e.stopPropagation()}
        >
          <ProductActions product={product} />
        </div>
      </div>

      <ProductDetailDialog
        product={product}
        open={detailOpen}
        onOpenChange={setDetailOpen}
      />
    </>
  );
}
