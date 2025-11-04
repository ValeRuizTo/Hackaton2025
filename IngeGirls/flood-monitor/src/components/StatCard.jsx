// src/components/StatCard.jsx
// Card compacto para KPIs con color de acento.
// Props:
// - title, value, unit, subtitle
// - status: "ok" | "watch" | "warn" | "danger" (opcional)
// - color: color principal del KPI (ej. "#6ea3ff")

export default function StatCard({
  title,
  value,
  unit,
  subtitle,
  status = "ok",
  color = "#6ea3ff",
}) {
  const statusLabel =
    status === "danger"
      ? "Emergencia"
      : status === "warn"
      ? "Alerta"
      : status === "watch"
      ? "Vigilancia"
      : "Normal";

  const chipBg =
    status === "danger"
      ? "rgba(227,6,19,.16)"
      : status === "warn"
      ? "rgba(255,138,61,.16)"
      : status === "watch"
      ? "rgba(255,217,101,.14)"
      : "rgba(16,185,129,.12)";

  const chipFg =
    status === "danger"
      ? "#e30613"
      : status === "warn"
      ? "#ff8a3d"
      : status === "watch"
      ? "#ffd965"
      : "#10b981";

  return (
    <div
      className="card stat-card"
      style={{
        border: "1px solid rgba(255,255,255,.10)",
        boxShadow: "0 6px 18px rgba(0,0,0,.24)",
        overflow: "hidden",
      }}
    >
      {/* Barra superior con color de acento */}
      <div style={{ height: 4, background: color, opacity: 0.9 }} />

      <div style={{ padding: 14, display: "grid", gap: 6 }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <div>
            <h4 style={{ margin: 0 }}>{title}</h4>
            {subtitle && (
              <p className="muted" style={{ margin: 0, fontSize: 12 }}>
                {subtitle}
              </p>
            )}
          </div>

          <span
            className="chip"
            style={{
              borderRadius: 999,
              padding: "4px 10px",
              background: chipBg,
              color: chipFg,
              border: "1px solid rgba(255,255,255,.10)",
              fontSize: 12,
              whiteSpace: "nowrap",
            }}
          >
            {statusLabel}
          </span>
        </div>

        <div
          style={{
            fontSize: 26,
            fontWeight: 700,
            color,
            display: "flex",
            alignItems: "baseline",
            gap: 6,
          }}
        >
          <span>{typeof value === "number" ? value : String(value)}</span>
          <small style={{ color: "rgba(255,255,255,.75)" }}>{unit}</small>
        </div>
      </div>
    </div>
  );
}
