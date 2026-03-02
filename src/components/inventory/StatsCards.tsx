import { useInventory } from "@/contexts/InventoryContext";
import {
  Package,
  CheckCircle,
  Clock,
  ShoppingBag,
  MapPin,
  Truck,
  HeadsetIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";

/* ================= MAPA DE ÍCONES ================= */
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
  const { theme } = useTheme();

  const isDark = theme === "dark";

  /* ================= CORES GLOBAIS ================= */
  const COLORS = {
    LIGHT: {
      cardBackground: "#FFFFFF",
      textPrimary: "#111827",
      border: "#E5E7EB",
      iconBg: "#111827",
      iconColor: "#FFFFFF",
    },
    DARK: {
      cardBackground: "#5b5b61",
      textPrimary: "#FFFFFF",
      border: "#5b5b61",
      iconBg: "#000000",
      iconColor: "#FFFFFF",
    },
  };

  const current = isDark ? COLORS.DARK : COLORS.LIGHT;

  /* ================= CARDS PRINCIPAIS ================= */
  const cards = [
    {
      label: "Total de Produtos",
      value: stats.total,
      icon: "total" as const,
      headerLight: "#EDE9FE",
      headerDark: "#3B2F63",
    },
    {
      label: "Disponíveis",
      value: stats.available,
      icon: "available" as const,
      headerLight: "#DCFCE7",
      headerDark: "#14532D",
    },
    {
      label: "Vendidos",
      value: stats.sold,
      icon: "sold" as const,
      headerLight: "#FEF3C7",
      headerDark: "#78350F",
    },
    {
      label: "Pedidos (a caminho)",
      value: stats.ordered,
      icon: "ordered" as const,
      headerLight: "#E0E7FF",
      headerDark: "#1E1B4B",
    },
    {
      label: "Entregas Pendentes",
      value: stats.pendingDeliveries,
      icon: "pendingDeliveries" as const,
      headerLight: "#FEE2E2",
      headerDark: "#7F1D1D",
    },
    {
      label: "Assistências",
      value: stats.assistanceCount,
      icon: "assistance" as const,
      headerLight: "#CFFAFE",
      headerDark: "#083344",
    },
  ];

  /* ================= CARDS DE UNIDADE ================= */
  const unitCards = [
    {
      name: "Shopping Praça Nova",
      headerLight: "#F1FF5C",
      headerDark: "#4A4A00",
      iconBgLight: "#000000",
      iconBgDark: "#FFFFFF",
      iconColorLight: "#F1FF5C",
      iconColorDark: "#000000",
    },
    {
      name: "Camobi",
      headerLight: "#88E7FC",
      headerDark: "#164E63",
      iconBgLight: "#000000",
      iconBgDark: "#FFFFFF",
      iconColorLight: "#88E7FC",
      iconColorDark: "#000000",
    },
    {
      name: "Estoque",
      headerLight: "#DDB4FA",
      headerDark: "#4C1D95",
      iconBgLight: "#000000",
      iconBgDark: "#FFFFFF",
      iconColorLight: "#DDB4FA",
      iconColorDark: "#000000",
    },
  ];

  return (
    <div className="grid gap-3 grid-cols-3 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => {
        const Icon = iconMap[card.icon];
        const headerColor = isDark ? card.headerDark : card.headerLight;

        /* ================= FLUXOS DO CÓDIGO 1 ================= */
        const handleClick = () => {
          if (card.label === "Entregas Pendentes") {
            navigate("/entregas");
            return;
          }

          if (card.label.includes("Total")) {
            navigate("/produtos");
            return;
          }

          const map: Record<string, string> = {
            "Disponíveis": "Disponível",
            "Vendidos": "Vendido",
            "Pedidos (a caminho)": "Pedido",
            "Assistências": "Assistência",
          };

          const status = map[card.label];
          if (status) {
            navigate(`/produtos?status=${encodeURIComponent(status)}`);
          }
        };

        return (
          <div key={card.label} className="relative h-24">
            {/* HEADER GLASS */}
            <div
              className="absolute inset-0 rounded-2xl backdrop-blur-lg"
              style={{
                backgroundColor: isDark
                  ? `${headerColor}80`
                  : `${headerColor}CC`,
                border: "1px solid rgba(255,255,255,0.18)",
                pointerEvents: "none",
              }}
            />

            {/* CARD MENOR */}
            <div
              onClick={handleClick}
              className="absolute left-0 right-0 bottom-0 rounded-2xl pt-3 pb-3 px-4 cursor-pointer transition hover:scale-[1.02]"
              style={{
                backgroundColor: current.cardBackground,
              }}
            >
              <div
                className="absolute -top-7 left-2 right-4 text-xs font-normal break-words leading-tight"
                style={{ color: current.textPrimary }}
              >
                {card.label}
              </div>

              <div className="flex justify-end items-end">
                <p
                  className="font-display text-4xl font-bold"
                  style={{ color: current.textPrimary }}
                >
                  {card.value}
                </p>
              </div>
            </div>

            {/* ÍCONE */}
            <div
              className="absolute right-2 -top-3 w-7 h-7 rounded-lg flex items-center justify-center z-20 pointer-events-none"
              style={{ backgroundColor: current.iconBg }}
            >
              <Icon
                className="h-4 w-4"
                style={{ color: current.iconColor }}
              />
            </div>
          </div>
        );
      })}

      <div className="col-span-full border-t my-2" />

      {/* ================= UNIDADES (fluxo do código 1) ================= */}
      <div className="col-span-full grid gap-3 sm:gap-4 grid-cols-3">
        {unitCards.map((card) => {
          const headerColor = isDark ? card.headerDark : card.headerLight;
          const iconBg = isDark ? card.iconBgDark : card.iconBgLight;
          const iconColor = isDark ? card.iconColorDark : card.iconColorLight;

          return (
            <div key={card.name} className="relative h-24 sm:h-28">
              <div
                className="absolute inset-0 rounded-2xl backdrop-blur-lg"
                style={{
                  backgroundColor: isDark
                    ? `${headerColor}80`
                    : `${headerColor}CC`,
                  border: "1px solid rgba(255,255,255,0.18)",
                  pointerEvents: "none",
                }}
              />

              <div
                onClick={() =>
                  navigate(
                    `/produtos?unit=${encodeURIComponent(card.name)}`
                  )
                }
                className="absolute left-0 right-0 bottom-0 rounded-2xl pt-2 pb-2 px-2 cursor-pointer transition hover:scale-[1.02]"
                style={{
                  backgroundColor: current.cardBackground,
                }}
              >
                <div
                  className="absolute -top-9 left-2 right-4 text-xs font-normal break-words leading-tight"
                  style={{ color: current.textPrimary }}
                >
                  {card.name}
                </div>

                <div className="flex justify-end items-end">
                  <p
                    className="font-display text-3xl sm:text-4xl font-bold"
                    style={{ color: current.textPrimary }}
                  >
                    {stats.byUnit[card.name]}
                  </p>
                </div>
              </div>

              <div
                className="absolute right-2 -top-3 w-7 h-7 rounded-lg flex items-center justify-center z-20 pointer-events-none"
                style={{ backgroundColor: iconBg }}
              >
                <MapPin
                  className="h-4 w-4"
                  style={{ color: iconColor }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}