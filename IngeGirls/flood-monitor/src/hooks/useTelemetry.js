// src/hooks/useTelemetry.js
// Un solo estado global para Dashboard y Alertas (sin librerías externas)

import { useEffect, useState } from "react";

/* ===== Config ===== */
export const REGIONS = ["Tramo Alto", "Tramo Medio", "Tramo Bajo"];
const BASES = {
  "Tramo Alto":  { volume: 5.5,  precipitation: 0.6, velocity: 0.9, turbidity: 15, vuln: 0.45 },
  "Tramo Medio": { volume: 6.2,  precipitation: 0.8, velocity: 1.2, turbidity: 22, vuln: 0.60 },
  "Tramo Bajo":  { volume: 7.1,  precipitation: 1.0, velocity: 1.4, turbidity: 28, vuln: 0.75 },
};

/* ===== Riesgo (misma fórmula para ambos módulos) ===== */
function sigmoid(z){ return 1/(1+Math.exp(-z)); }
function floodProb({ volume, precipitation, velocity, turbidity, vuln }){
  const w = { bias:-2.2, vol:0.28, precip:1.05, vel:0.45, turb:0.12, vuln:1.15 };
  const v = Math.min(volume/15,1), p = Math.min(precipitation/5,1),
        u = Math.min(velocity/3,1), t = Math.min(turbidity/250,1);
  return sigmoid(w.bias + w.vol*v + w.precip*p + w.vel*u + w.turb*t + w.vuln*vuln);
}
function levelFromProb(p){
  if (p>=0.8) return {level:"danger", label:"Emergencia"};
  if (p>=0.6) return {level:"warn", label:"Alerta"};
  if (p>=0.35) return {level:"watch", label:"Vigilancia"};
  return {level:"ok", label:"Normal"};
}

/* ===== Estado global (singleton) ===== */
let started = false;
let state = init("Tramo Medio");
const subs = new Set();

function init(region){
  const base = BASES[region];
  const now = { ...base };
  const risk = wrapRisk(now);
  const hourly = makeHourly(now, region);
  const weekly = makeWeekly(now, region);
  return { region, now, risk, hourly, weekly };
}
function wrapRisk(now){
  const p = floodProb(now);
  const meta = levelFromProb(p);
  return { score: p, ...meta };
}
function jitter(x, amp){ return x + (Math.random()-0.5)*amp; }

function makeHourly(now, region){
  // 24 puntos (cada 1h) con leve tendencia; si región = Tramo Bajo, algo más de lluvia
  const bias = region==="Tramo Bajo" ? 0.2 : region==="Tramo Medio" ? 0.1 : 0.0;
  const arr = [];
  for(let h=1; h<=24; h++){
    const drift = (h/24) * (0.15 + bias); // leve subida en el día
    const item = {
      hour: h,
      precipitation: Math.max(0, +(jitter(now.precipitation + drift*0.6, 0.25)).toFixed(2)),
      volume: +(jitter(now.volume + drift*0.8, 0.6)).toFixed(2),
      velocity: Math.max(0, +(jitter(now.velocity + drift*0.15, 0.08)).toFixed(2)),
      turbidity: Math.max(0, +(jitter(now.turbidity + drift*4, 3)).toFixed(2)),
    };
    item.risk = floodProb({ ...item, vuln: BASES[region].vuln });
    arr.push(item);
  }
  return arr;
}
function makeWeekly(now, region){
  // 7 días con patrón de eventos (subida a mitad de semana)
  const days = ["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"];
  return days.map((d,i) => {
    const pulse = i===2 || i===3 ? 0.35 : i===4 ? 0.2 : 0; // Mié/Jue más lluvioso
    const precipitation = Math.max(0, +(jitter(now.precipitation + pulse, 0.35)).toFixed(2));
    const volume = +(jitter(now.volume + pulse*1.2, 0.6)).toFixed(2);
    const velocity = Math.max(0, +(jitter(now.velocity + pulse*0.2, 0.1)).toFixed(2));
    const turbidity = Math.max(0, +(jitter(now.turbidity + pulse*6, 3)).toFixed(2));
    const risk = floodProb({ volume, precipitation, velocity, turbidity, vuln: BASES[region].vuln });
    return { day:d, precipitation, volume, velocity, turbidity, risk };
  });
}

/* Ticker: actualiza cada 3 s (suave) + refresco de pronósticos cada 15 s */
function start(){
  if (started) return; started = true;
  setInterval(() => {
    const base = BASES[state.region];
    const now = {
      volume: +(jitter(state.now.volume, 0.35)).toFixed(2),
      precipitation: Math.max(0, +(jitter(state.now.precipitation, 0.15)).toFixed(2)),
      velocity: Math.max(0, +(jitter(state.now.velocity, 0.05)).toFixed(2)),
      turbidity: Math.max(0, +(jitter(state.now.turbidity, 2.5)).toFixed(2)),
    };
    const risk = wrapRisk({ ...now, vuln: base.vuln });
    state = { ...state, now, risk };
    subs.forEach(fn => fn(state));
  }, 3000);

  setInterval(() => {
    const hourly = makeHourly(state.now, state.region);
    const weekly = makeWeekly(state.now, state.region);
    state = { ...state, hourly, weekly };
    subs.forEach(fn => fn(state));
  }, 15000);
}

/* API del hook */
export function useTelemetry(region){
  // inicia los timers
  useEffect(() => { start(); }, []);
  // cambia región si lo piden
  useEffect(() => {
    if (region && region !== state.region){
      state = init(region);
      subs.forEach(fn => fn(state));
    }
  }, [region]);

  const [snap, setSnap] = useState(state);
  useEffect(() => {
    const fn = (s) => setSnap({ ...s });
    subs.add(fn);
    return () => subs.delete(fn);
  }, []);

  return snap; // { region, now, risk, hourly[24], weekly[7] }
}
