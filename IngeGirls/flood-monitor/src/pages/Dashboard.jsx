// src/pages/Dashboard.jsx
import { useState, useMemo } from "react";
import { useTelemetry, REGIONS } from "../hooks/useTelemetry.js";
import StatCard from "../components/StatCard.jsx";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
  ReferenceArea,
} from "recharts";

/* ========= Paleta local (solo Dashboard) ========= */
const palette = {
  primary:  "#6ea3ff", // azul claro
  secondary:"#1e4fab", // azul profundo
  accent:   "#39c1d7", // cian
  warn:     "#ffc857", // amarillo/umbral
  danger:   "#e30613", // rojo (Cruz Roja)
  peak:     "#ff4d8d", // rosa para picos semanales
  grid:     "rgba(255,255,255,0.08)",
};

function TooltipBox({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background:"#0f2740", color:"#eaf2fa", border:"1px solid rgba(255,255,255,.12)",
      padding:"8px 10px", borderRadius:8, fontSize:12
    }}>
      <strong style={{ display:"block", marginBottom:4 }}>{label}</strong>
      {payload.map((p) => (
        <div key={p.dataKey} style={{ opacity: p.stroke ? 1 : 0.9 }}>
          {p.name ?? p.dataKey}: <b>{typeof p.value === "number" ? p.value : String(p.value)}</b>
        </div>
      ))}
    </div>
  );
}

function RiskBands({ yAxisId = "left", pct = false }) {
  const s = pct ? 100 : 1;
  return (
    <>
      <ReferenceArea yAxisId={yAxisId} y1={0.60 * s} y2={0.80 * s} fill="rgba(255,193,7,0.12)" />
      <ReferenceArea yAxisId={yAxisId} y1={0.80 * s} y2={1.00 * s} fill="rgba(227,6,19,0.12)" />
    </>
  );
}

export default function Dashboard() {
  const [region, setRegion] = useState("Tramo Medio");
  const { now, risk, hourly, weekly } = useTelemetry(region);

  // Serie corta “últimos minutos”
  const chartData = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      t: i + 1,
      volume: +(now.volume + (Math.random() - 0.5) * 0.8 + i * 0.05).toFixed(2),
      velocity: +(now.velocity + (Math.random() - 0.5) * 0.1 + i * 0.01).toFixed(2),
      precipitation: Math.max(0, +(now.precipitation + (Math.random() - 0.5) * 0.2 + i * 0.02).toFixed(2)),
      turbidity: Math.max(0, +(now.turbidity + (Math.random() - 0.5) * 3 + i * 0.6).toFixed(2)),
    }));
  }, [now]);

  // Semanal decorado: separar picos ≥ 0.80 en otra serie para colorearlos distinto
  const weeklyDecorated = useMemo(
    () =>
      (weekly || []).map((d) => ({
        ...d,
        riskBase: d.risk,
        riskPeak: d.risk >= 0.80 ? d.risk : null,
      })),
    [weekly]
  );

  const statusFor = (k) => {
    switch (k) {
      case "volume": return now.volume > 10 ? "warn" : "ok";
      case "velocity": return now.velocity > 1.8 ? "warn" : "ok";
      case "turbidity": return now.turbidity > 50 ? "warn" : "ok";
      case "precipitation": return now.precipitation > 3.5 ? "warn" : "ok";
      default: return "ok";
    }
  };

  return (
    <section className="page">
      <header className="page-header">
        <div>
          <h2>Dashboard</h2>
          <p className="muted">Datos en vivo y pronósticos — Quebrada Esmeralda</p>
        </div>
        <div className="controls">
          <label className="select">
            <span>Región</span>
            <select value={region} onChange={(e) => setRegion(e.target.value)}>
              {REGIONS.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </label>
          <div className={`risk-chip ${risk.level}`}>
            Riesgo actual: <strong>{(risk.score * 100).toFixed(0)}%</strong>
          </div>
        </div>
      </header>

      {/* KPIs (con colores de paleta) */}
      <div className="grid-4">
        <StatCard
          title="Volumen"
          value={now.volume}
          unit="m³/s"
          subtitle="Caudal instantáneo"
          status={statusFor("volume")}
          color={palette.secondary}
        />
        <StatCard
          title="Precipitación"
          value={now.precipitation}
          unit="mm/h"
          subtitle="Meteo"
          status={statusFor("precipitation")}
          color={palette.primary}
        />
        <StatCard
          title="Velocidad del agua"
          value={now.velocity}
          unit="m/s"
          subtitle="Punto crítico"
          status={statusFor("velocity")}
          color={palette.accent}
        />
        <StatCard
          title="Turbidez"
          value={now.turbidity}
          unit="NTU"
          subtitle="Sedimentos / minería"
          status={statusFor("turbidity")}
          color={palette.warn}
        />
      </div>

      {/* === Fila 1: Mapa (1/2) + Volumen/Velocidad (1/2) === */}
      <div className="grid-2">
        {/* Card MAPA (mitad de pantalla y más arriba) */}
        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          <div className="card-header" style={{ padding: "12px 12px 0 12px" }}>
            <h3>Mapa — Vereda La Esmeralda</h3>
            <span className="hint">App oficial de Cundinamarca (ArcGIS)</span>
          </div>
          <iframe
            title="Cundinamarca Web App"
            src="https://cundinamarca-map.maps.arcgis.com/apps/webappviewer/index.html?id=467db1a17fa54990bf3ad5d2893b04dc"
            style={{ width: "100%", height: "40vh", border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Volumen (área) + Velocidad (línea) */}
        <div className="card chart">
          <div className="card-header">
            <h3>Volumen y Velocidad (últimos minutos)</h3>
            <span className="hint">Umbrales marcados · Unidades en ejes</span>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <ComposedChart data={chartData}>
              <CartesianGrid stroke={palette.grid} strokeDasharray="3 3" />
              <XAxis dataKey="t" />
              <YAxis yAxisId="left" label={{ value: "m³/s", angle: -90, position: "insideLeft" }} />
              <YAxis yAxisId="right" orientation="right" label={{ value: "m/s", angle: 90, position: "insideRight" }} />
              <Tooltip content={<TooltipBox />} />
              <Legend />
              <ReferenceLine yAxisId="left" y={10} stroke={palette.warn} strokeDasharray="6 4" />
              <ReferenceLine yAxisId="left" y={12} stroke={palette.danger} strokeDasharray="6 4" />
              <ReferenceLine yAxisId="right" y={1.8} stroke={palette.warn} strokeDasharray="6 4" />
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="volume"
                name="Volumen (m³/s)"
                stroke={palette.secondary}
                fill={palette.secondary}
                fillOpacity={0.22}
                strokeWidth={2}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="velocity"
                name="Velocidad (m/s)"
                stroke={palette.primary}
                strokeWidth={2}
                dot={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* === Fila 2: Precip/Turbidez (1/2) + Pronóstico 24h (1/2) === */}
      <div className="grid-2">
        <div className="card chart">
          <div className="card-header">
            <h3>Precipitación y Turbidez (últimos minutos)</h3>
            <span className="hint">Lluvia en barras · Turbidez como tendencia</span>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <ComposedChart data={chartData}>
              <CartesianGrid stroke={palette.grid} strokeDasharray="3 3" />
              <XAxis dataKey="t" />
              <YAxis yAxisId="left" label={{ value: "mm/h", angle: -90, position: "insideLeft" }} />
              <YAxis yAxisId="right" orientation="right" label={{ value: "NTU", angle: 90, position: "insideRight" }} />
              <Tooltip content={<TooltipBox />} />
              <Legend />
              <ReferenceLine yAxisId="right" y={50} stroke={palette.warn} strokeDasharray="6 4" />
              <Bar yAxisId="left" dataKey="precipitation" name="Precipitación (mm/h)" fill={palette.secondary} />
              <Line yAxisId="right" type="monotone" dataKey="turbidity" name="Turbidez (NTU)" stroke={palette.warn} strokeWidth={2} dot={false} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div className="card chart">
          <div className="card-header"><h3>Pronóstico 24 h — Riesgo y Lluvia</h3></div>
          <ResponsiveContainer width="100%" height={280}>
            <ComposedChart data={hourly}>
              <CartesianGrid stroke={palette.grid} strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis yAxisId="left" domain={[0, 1]} tickFormatter={(v) => `${Math.round(v * 100)}%`} label={{ value: "Riesgo (%)", angle: -90, position: "insideLeft" }} />
              <YAxis yAxisId="right" orientation="right" label={{ value: "mm/h", angle: 90, position: "insideRight" }} />
              <Tooltip content={<TooltipBox />} />
              <Legend />
              <RiskBands yAxisId="left" />
              <Area yAxisId="left" type="monotone" dataKey="risk" name="Riesgo (0–1)" stroke={palette.danger} fill={palette.danger} fillOpacity={0.18} strokeWidth={2} />
              <Line yAxisId="right" type="monotone" dataKey="precipitation" name="Lluvia (mm/h)" stroke={palette.primary} strokeWidth={2} dot={false} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pronóstico semanal (ancho completo) con picos resaltados */}
      <div className="card chart">
        <div className="card-header"><h3>Pronóstico semanal (7 días)</h3></div>
        <ResponsiveContainer width="100%" height={280}>
          <ComposedChart data={weeklyDecorated}>
            <CartesianGrid stroke={palette.grid} strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis yAxisId="left" label={{ value: "mm/h", angle: -90, position: "insideLeft" }} />
            <YAxis
              yAxisId="right"
              domain={[0, 1]}
              orientation="right"
              tickFormatter={(v) => `${Math.round(v * 100)}%`}
              label={{ value: "Riesgo (%)", angle: 90, position: "insideRight" }}
            />
            <Tooltip content={<TooltipBox />} />
            <Legend />
            <RiskBands yAxisId="right" />
            {/* Lluvia */}
            <Bar yAxisId="left" dataKey="precipitation" name="Lluvia (mm/h)" fill={palette.secondary} />
            {/* Riesgo base */}
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="riskBase"
              name="Riesgo (0–1)"
              stroke={palette.danger}
              strokeWidth={2}
              dot
              connectNulls
            />
            {/* Picos ≥80% en otro color */}
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="riskPeak"
              name="Picos ≥80%"
              stroke={palette.peak}
              strokeWidth={3}
              dot={{ r: 6 }}
              activeDot={{ r: 7 }}
              connectNulls
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
