// src/pages/Alerts.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { useTelemetry, REGIONS } from "../hooks/useTelemetry.js";
import { ShieldAlert, Megaphone, Flame, Building2, Ambulance, Landmark, Shield, Phone } from "lucide-react";

/* Paleta local (coincide con Dashboard) */
const palette = {
  primary:  "#6ea3ff",
  secondary:"#1e4fab",
  accent:   "#39c1d7",
  warn:     "#ffc857",
  danger:   "#e30613",
};

/* === Modelo de probabilidad: misma lógica que en Dashboard/telemetry === */
const sigmoid = (z) => 1/(1+Math.exp(-z));
function floodProbability({ volume, precipitation, velocity, turbidity, vuln }) {
  const w = { bias:-2.2, vol:0.28, precip:1.05, vel:0.45, turb:0.12, vuln:1.15 };
  const v = Math.min(volume/15,1), p = Math.min(precipitation/5,1), u = Math.min(velocity/3,1), t = Math.min(turbidity/250,1);
  return Number(sigmoid(w.bias + w.vol*v + w.precip*p + w.vel*u + w.turb*t + w.vuln*vuln).toFixed(3));
}
function levelFromProb(prob){
  if (prob>=0.80) return { level:"red",    label:"Emergencia" };
  if (prob>=0.60) return { level:"orange", label:"Alerta" };
  if (prob>=0.35) return { level:"yellow", label:"Vigilancia" };
  return { level:"green", label:"Normal" };
}

/* Entidades + contactos demo */
const ENTITIES = [
  { id:"alcaldia", name:"Alcaldía Municipal de Tocancipá", role:"Plan Municipal de Gestión del Riesgo", icon:Building2, color:"#6ea3ff",
    contacts:[{label:"PBX", value:"(+57) 601 555 0101", href:"tel:+576015550101"}] },
  { id:"bomberos", name:"Cuerpo de Bomberos", role:"Atención inmediata", icon:Flame, color:"#e30613",
    contacts:[{label:"Emergencias", value:"123", href:"tel:123"}] },
  { id:"gobierno", name:"Secretaría de Gobierno", role:"Logística y orden público", icon:Shield, color:"#ffc857",
    contacts:[{label:"PBX", value:"(+57) 601 555 0303", href:"tel:+576015550303"}] },
  { id:"salud", name:"Hospital / 911", role:"Atención médica", icon:Ambulance, color:"#9ec5ff",
    contacts:[{label:"Emergencias", value:"123", href:"tel:123"}] },
  { id:"gobernacion", name:"Gobernación de Cundinamarca", role:"Coordinación intermunicipal", icon:Landmark, color:"#1e4fab",
    contacts:[{label:"CRUE", value:"(+57) 601 555 0505", href:"tel:+576015550505"}] },
  { id:"altavoces", name:"Altavoces Comunitarios", role:"Difusión comunitaria", icon:Megaphone, color:"#6ea3ff",
    contacts:[{label:"Operador", value:"(+57) 601 555 0606", href:"tel:+576015550606"}] },
];

/* Acciones locales + sugerencia ambiental */
function localEntityActions({ region, prob, level, features }) {
  const { volume, precipitation, velocity, turbidity } = features;
  const recAmbiental = "🌱 Sugerencia ambiental: priorizar franjas riparias (15–30 m) y siembra de vetiver/guadua/sauces en taludes y puntos de mayor escorrentía.";
  const base = {
    alcaldia: ["Emitir boletín municipal y PMU activo", "Cierres de vías bajas y puntos de encuentro"],
    bomberos: ["Preposicionar en puentes/vados críticos", "Equipo de rescate acuático listo"],
    gobierno: ["Control de acceso a riberas y desvíos", "Señalización temporal"],
    salud: ["Triage en alerta y ambulancias disponibles", "Rutas sanitarias preparadas"],
    gobernacion: ["Notificar CRUE y apoyo intermunicipal", "Prever motobombas y maquinaria"],
    altavoces: ["Mensajes claros a la comunidad (evitar puentes bajos, rutas a puntos seguros)"],
  };
  if (turbidity>80) base.alcaldia.push("Solicitar muestreo por posible arrastre minero");
  if (velocity>1.8) base.bomberos.push("Precaución por corrientes fuertes en pasos peatonales");
  if (precipitation>3) base.gobierno.push("Priorizar vías con historial de encharcamiento");
  if (volume>12) base.gobernacion.push("Evaluar encauzamiento temporal con maquinaria");
  if (level==="orange" || level==="red") base.alcaldia.unshift(recAmbiental);

  return Object.entries(base).map(([id, actions]) => ({
    id,
    actions,
    message:
      level==="red"
        ? `Región ${region}. Riesgo muy alto (${Math.round(prob*100)}%). Ejecutar plan de emergencia.`
        : `Región ${region}. Riesgo elevado (${Math.round(prob*100)}%). Activar plan preventivo.`,
  }));
}

/* TTS (altavoces) */
function speak(text){
  try{
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "es-CO";
    u.rate = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }catch{}
}

export default function Alerts(){
  const [region, setRegion] = useState("Tramo Medio");
  const { now, hourly } = useTelemetry(region);

  /* Probabilidad actual (a partir de datos) */
  const vuln = 0.6; // aproximación por tramo
  const currentProb = floodProbability({
    volume: now.volume, precipitation: now.precipitation, velocity: now.velocity, turbidity: now.turbidity, vuln
  });

  /* Proyección a 60 min (base desde hook o incremento) */
  const predictedBase = hourly?.[hourly.length-1]?.risk ?? Math.min(1, currentProb + 0.15);

  /* === Simulación automática de subida de riesgo (sin clicks) === */
  const [projRisk, setProjRisk] = useState(predictedBase);
  const [demoOn, setDemoOn] = useState(false);
  const alarmDone = useRef(false);

  useEffect(() => {
    // espera 4 s y simula rampa hasta ~0.92 en 12 s
    const t1 = setTimeout(() => {
      setDemoOn(true);
      const target = 0.92;
      const steps = 24;
      let i = 0;
      const start = projRisk;
      const tick = setInterval(() => {
        i++;
        const v = start + (target-start)*(i/steps);
        setProjRisk(Math.min(1, Number(v.toFixed(3))));
        if (i>=steps) clearInterval(tick);
      }, 500);
    }, 4000);
    return () => clearTimeout(t1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { level, label } = levelFromProb(projRisk);
  const entityRecs = useMemo(
    () => localEntityActions({ region, prob: projRisk, level, features: { ...now, vuln } }),
    [region, projRisk, level, now]
  );

  /* Mensaje comunidad y TTS (solo 1 vez al cruzar umbral) */
  useEffect(() => {
    if (!alarmDone.current && projRisk >= 0.80) {
      alarmDone.current = true;
      speak(`Atención ${region}. Proyección de inundación alta en la próxima hora. Se están alertando a la comunidad mediante altavoces. Diríjanse a los puntos seguros y sigan las rutas establecidas.`);
    }
  }, [projRisk, region]);

  /* Estados operativos por entidad (chips) */
  const opStatuses = useMemo(() => {
    // Texto corto y claro según nivel
    const mk = (short, alerted) => ({
      short,
      variant: alerted ? "hot" : "warm"
    });
    return [
      {
        id:"altavoces",
        name:"Altavoces",
        icon:Megaphone,
        color:palette.primary,
        info:
          level==="red"    ? mk("ALERTANDO A LA COMUNIDAD", true)
        : level==="orange" ? mk("Pre-alerta comunitaria", false)
                           : mk("Listos", false)
      },
      {
        id:"bomberos",
        name:"Bomberos",
        icon:Flame,
        color:palette.danger,
        info:
          level==="red"    ? mk("Movilizando a puentes/vados", true)
        : level==="orange" ? mk("Entidad informada", false)
                           : mk("En vigilancia", false)
      },
      {
        id:"alcaldia",
        name:"Alcaldía",
        icon:Building2,
        color:palette.primary,
        info:
          level==="red"    ? mk("PMU coordinando cierres", true)
        : level==="orange" ? mk("Entidad informada", false)
                           : mk("En vigilancia", false)
      },
      {
        id:"salud",
        name:"Salud / 911",
        icon:Ambulance,
        color:"#9ec5ff",
        info:
          level==="red"    ? mk("Triage en alerta y ambulancias", true)
        : level==="orange" ? mk("Entidad informada", false)
                           : mk("En vigilancia", false)
      },
      {
        id:"gobierno",
        name:"Gobierno",
        icon:Shield,
        color:palette.warn,
        info:
          level==="red"    ? mk("Gestión de cierres y desvíos", true)
        : level==="orange" ? mk("Entidad informada", false)
                           : mk("En vigilancia", false)
      },
      {
        id:"gobernacion",
        name:"Gobernación",
        icon:Landmark,
        color:palette.secondary,
        info:
          level==="red"    ? mk("CRUE y apoyo intermunicipal", true)
        : level==="orange" ? mk("Entidad informada", false)
                           : mk("En vigilancia", false)
      },
    ];
  }, [level]);

  /* Estilos rápidos (banner + nudge) */
  const bannerStyle = {
    background: level==="red" ? "rgba(227,6,19,.18)" : level==="orange" ? "rgba(255,193,7,.16)" : "rgba(110,163,255,.12)",
    border: `1px solid ${level==="red" ? palette.danger : level==="orange" ? palette.warn : palette.primary}`,
    color: level==="red" ? palette.danger : level==="orange" ? palette.warn : palette.primary,
    padding: "12px 16px",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    gap: 12,
  };

  return (
    <section className="page">
      {/* keyframes locales para el nudge */}
      <style>{`
        @keyframes nudgeY { 0%{transform:translateY(0)} 50%{transform:translateY(-3px)} 100%{transform:translateY(0)} }
        @keyframes nudgeYStrong { 0%{transform:translateY(0)} 50%{transform:translateY(-7px)} 100%{transform:translateY(0)} }
        .nudge       { animation: nudgeY 1.6s ease-in-out infinite; }
        .nudgeStrong { animation: nudgeYStrong 1.0s ease-in-out infinite; }
        .chip-op {
          display:inline-flex; align-items:center; gap:8px;
          padding:6px 10px; border-radius:999px; border:1px solid rgba(255,255,255,.14);
          background: rgba(15,39,64,.4); font-size:12px;
        }
        .chip-op.hot  { box-shadow: 0 0 0 3px rgba(227,6,19,.15) inset; }
        .chip-op.warm { box-shadow: 0 0 0 3px rgba(255,200,87,.12) inset; }
      `}</style>

      <header className="page-header">
        <div>
          <h2>Alertas</h2>
          <p className="muted">Activación automática de alerta temprana · Quebrada Esmeralda</p>
        </div>
        <div className="controls">
          <label className="select">
            <span>Región</span>
            <select value={region} onChange={(e)=>setRegion(e.target.value)}>
              {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </label>
        </div>
      </header>

      {/* Banner de alerta temprana (sube solo) */}
      <div
        className={`card ${projRisk>=0.80 ? "nudgeStrong" : projRisk>=0.60 ? "nudge" : ""}`}
        style={bannerStyle}
      >
        <ShieldAlert size={22}/>
        <div style={{flex:1}}>
          <strong>
            {label} — Proyección 60 min: {Math.round(projRisk*100)}%
          </strong>
          <div className="muted" style={{fontSize:13, marginTop:4}}>
            {projRisk>=0.80
              ? "Alertando a la comunidad por altavoces. Coordinando entidades para respuesta inmediata."
              : demoOn
                ? "Simulación activa: el modelo elevó la proyección por incremento de lluvia/caudal."
                : "Monitoreando condiciones…"}
          </div>
        </div>
        <span style={{fontSize:12, opacity:.9}}>
          Altavoces: <b>{projRisk>=0.80 ? "ALERTANDO A LA COMUNIDAD" : projRisk>=0.60 ? "PRE-ALERTA" : "Normal"}</b>
        </span>
      </div>

      {/* KPIs esenciales */}
      <div className="grid-3" style={{marginTop:16}}>
        <KPI label="Riesgo actual" value={`${Math.round(currentProb*100)}%`} color={palette.primary} />
        <KPI label="Proyección 60 min" value={`${Math.round(projRisk*100)}%`} color={palette.danger} />
        <KPI label="Estado" value={label} color={level==="red"?palette.danger:level==="orange"?palette.warn:palette.primary} />
      </div>

      {/* Estado operativo (chips) */}
      <div className="card" style={{marginTop:16}}>
        <div className="card-header"><h3>Estado operativo</h3></div>
        <div style={{display:"flex", flexWrap:"wrap", gap:10, padding:"8px 12px 14px"}}>
          {opStatuses.map(s => {
            const Icon = s.icon;
            return (
              <span key={s.id} className={`chip-op ${s.info.variant}`} style={{color:s.color}}>
                <Icon size={14}/> <b>{s.name}:</b> <span style={{color:"rgba(234,242,250,.95)"}}>{s.info.short}</span>
              </span>
            );
          })}
        </div>
      </div>

      {/* Sugerencia ambiental destacada */}
      {(level==="orange" || level==="red") && (
        <div className="card" style={{marginTop:16, borderColor:"rgba(227,6,19,.25)"}}>
          <div className="card-header"><h3>Sugerencia ambiental prioritaria</h3></div>
          <div style={{padding:12}}>
            🌱 <b>Siembra de especies de alta absorción</b> (vetiver, guadua, sauces) en taludes y bordes con mayor escorrentía,
            con <b>franjas riparias 15–30 m</b>. Esto reduce pico de caudal y estabiliza suelos cercanos a viviendas y vías.
          </div>
        </div>
      )}

      {/* Acciones por entidad (click para ver detalle) */}
      <div className="entity-list" style={{marginTop:16, display:"grid", gap:12}}>
        {ENTITIES.map((meta) => {
          const rec = entityRecs.find(r => r.id === meta.id);
          return (
            <EntityCard key={meta.id} meta={meta} rec={rec} level={level} />
          );
        })}
      </div>
    </section>
  );
}

/* ===== Subcomponentes ===== */
function KPI({ label, value, color }){
  return (
    <div className="card" style={{padding:12, borderTop:`4px solid ${color}`}}>
      <div style={{fontSize:12, opacity:.8}}>{label}</div>
      <div style={{fontSize:24, fontWeight:700, color}}>{value}</div>
    </div>
  );
}

function EntityCard({ meta, rec, level }){
  const [open, setOpen] = useState(false);
  const Icon = meta.icon || Shield;

  const chipColor = level==="red" ? palette.danger : level==="orange" ? palette.warn : palette.primary;
  const chipBg = level==="red" ? "rgba(227,6,19,.16)" : level==="orange" ? "rgba(255,200,87,.16)" : "rgba(110,163,255,.16)";

  return (
    <div className="card" style={{overflow:"hidden"}}>
      {/* fila principal (clickeable) */}
      <button
        onClick={()=>setOpen(o=>!o)}
        style={{
          all:"unset", cursor:"pointer", display:"flex", alignItems:"center", gap:12,
          padding:12, width:"100%",
        }}
      >
        <span style={{background:meta.color, color:"#0b192a", width:34, height:34, borderRadius:8, display:"grid", placeItems:"center"}}>
          <Icon size={18}/>
        </span>
        <div style={{flex:1}}>
          <div style={{fontWeight:600}}>{meta.name}</div>
          <div className="muted" style={{fontSize:12}}>{meta.role}</div>
        </div>
        <span style={{padding:"4px 10px", borderRadius:999, background:chipBg, color:chipColor, fontSize:12}}>
          {level==="red" ? "Emergencia" : level==="orange" ? "Alerta" : "Seguimiento"}
        </span>
      </button>

      {/* detalle */}
      {open && (
        <div style={{padding:"0 12px 12px"}}>
          <section style={{marginTop:8}}>
            <h4 style={{margin:"6px 0"}}>Sugerencias</h4>
            <ul style={{margin:0, paddingLeft:18}}>
              {(rec?.actions || []).map((a,i)=> <li key={i}>{a}</li>)}
            </ul>
          </section>

          <section style={{marginTop:10}}>
            <h4 style={{margin:"6px 0"}}>Contactos</h4>
            <ul style={{margin:0, paddingLeft:18}}>
              {(meta.contacts||[]).map((c,i)=>(
                <li key={i}>
                  <Phone size={14} style={{marginRight:6}}/>
                  {c.href ? <a href={c.href}>{c.label}: {c.value}</a> : <span>{c.label}: {c.value}</span>}
                </li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </div>
  );
}
