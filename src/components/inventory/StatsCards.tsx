import { useInventory } from "@/contexts/InventoryContext";
import { Package, CheckCircle, Clock, ShoppingBag, MapPin, Truck, HeadsetIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";

const iconMap = {
  total: Package,
  available: CheckCircle,
  sold: ShoppingBag,
  ordered: Clock,
  pendingDeliveries: Truck,
  assistance: HeadsetIcon,
};

export function StatsCards() {
  const { stats } = useInventory();
  const navigate = useNavigate();

  // configuration for the three small unit cards; colors are hex so they can be
  // changed easily in one place. headerBg affects the top strip, iconBg the
  // little square behind the map pin and iconColor sets the pin color itself.
  const unitCards = [
    {
      name: "Shopping Praça Nova",
      headerBg: "#f1ff5c",
      iconBg: "#000000",
      iconColor: "#f1ff5c",
    },
    {
      name: "Camobi",
      headerBg: "#88e7fc",
      iconBg: "#000000",
      iconColor: "#88e7fc",
    },
    {
      name: "Estoque",
      headerBg: "#ddb4fa",
      iconBg: "#000000",
      iconColor: "#ddb4fa",
    },
  ];


  const cards = [
    { label: "Total de Produtos", value: stats.total, icon: "total" as const, color: "text-foreground" },
    { label: "Disponíveis", value: stats.available, icon: "available" as const, color: "text-available" },
    { label: "Vendidos", value: stats.sold, icon: "sold" as const, color: "text-sold" },
    { label: "Pedidos (a caminho)", value: stats.ordered, icon: "ordered" as const, color: "text-ordered" },
    { label: "Entregas Pendentes", value: stats.pendingDeliveries, icon: "pendingDeliveries" as const, color: "text-warning" },
    { label: "Assistências", value: stats.assistanceCount, icon: "assistance" as const, color: "text-info" },
  ];

  return (
    <div className="grid gap-3 grid-cols-3 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map(card => {
        const Icon = iconMap[card.icon];
        // tornar alguns cards clicáveis (status filters ou navegação)
        const isClickable = ["Disponíveis", "Vendidos", "Pedidos (a caminho)", "Entregas Pendentes"].includes(card.label);
        const handleClick = () => {
          if (card.label === "Entregas Pendentes") {
            navigate(`/entregas`);
            return;
          }
          if (card.label.includes("Total")) {
            navigate(`/produtos`);
            return;
          }
          // mapear label para status query
          const map: Record<string, string> = {
            "Disponíveis": "Disponível",
            "Vendidos": "Vendido",
            "Pedidos (a caminho)": "Pedido",
          };
          const status = map[card.label];
          navigate(`/produtos?status=${encodeURIComponent(status)}`);
        };

        return (
          <div
            key={card.label}
            role={isClickable ? "button" : undefined}
            tabIndex={isClickable ? 0 : undefined}
            onClick={isClickable ? handleClick : undefined}
            onKeyDown={isClickable ? (e: React.KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") handleClick(); } : undefined}
            className={`animate-fade-in relative rounded-xl border bg-card/70 backdrop-blur-md p-2 sm:p-3 shadow-sm border-white/20 dark:border-white/10 transition-smooth h-24 sm:h-28 flex flex-col justify-between ${isClickable ? "cursor-pointer hover:shadow-md focus:outline-none focus:ring-2 focus:ring-ring" : ""}`}
          >
            <span className="text-xs sm:text-sm font-medium text-muted-foreground line-clamp-2">{card.label}</span>
            <div className="flex justify-between items-center">
              <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${card.color}`} />
              <p className={`font-display text-3xl sm:text-5xl font-bold ${card.color}`}>{card.value}</p>
            </div>
          </div>
        );
      })}
      <div className="col-span-full border-t border-white/10 dark:border-white/5 my-2"></div>
      <div className="col-span-full grid gap-3 sm:gap-4 grid-cols-3">
        {unitCards.map(card => {
          const unit = card.name;
          return (
            <div
              key={unit}
              role="button"
              tabIndex={0}
              onClick={() => navigate(`/produtos?unit=${encodeURIComponent(unit)}`)}
              onKeyDown={e => { if (e.key === "Enter" || e.key === " ") navigate(`/produtos?unit=${encodeURIComponent(unit)}`); }}
              className="animate-fade-in relative cursor-pointer transition-smooth h-24 sm:h-28"
            >
              {/* header strip with solid color, full width, rounded top corners and slight overlap */}
              <div
                className="absolute inset-x-0 top-0 h-10 rounded-t-xl z-10 flex items-center px-2"
                style={{ backgroundColor: card.headerBg }}
              >
                <p className="text-[10px] sm:text-xs font-medium text-accent-foreground leading-tight">
                  {unit === "Shopping Praça Nova" ? (
                    <>
                      Shopping<br />Praça Nova
                    </>
                  ) : (
                    unit
                  )}
                </p>
              </div>

              {/* small container inside header; only its top part peeks out, now right-aligned */}
              <div
                className="absolute right-4 top-0 w-6 sm:w-7 h-6 sm:h-7 rounded-lg transform -translate-y-1/2 flex items-center justify-center z-20"
                style={{ backgroundColor: card.iconBg }}
              >
                <MapPin
                  className="h-3 w-3 sm:h-4 sm:w-4"
                  style={{ color: card.iconColor }}
                />
              </div>

              {/* body with neutral background, fully rounded corners and light shadow */}
              <div className="relative h-full bg-card/70 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl shadow-sm p-2 sm:p-3 pt-12 flex items-center justify-end">
                <p className="font-display text-3xl sm:text-4xl font-bold text-right">
                  {stats.byUnit[unit]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
