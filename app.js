'use strict';

// ===== TRIP DATA =====

const PHASES = [
  { id: 'viaje-ida',     label: 'Vuelo de ida',      icon: '✈️',  color: '#C8D8E8', text: '#2B4A6B', days: 'Días 1–2',   dates: '22–23 Feb' },
  { id: 'hong-kong',     label: 'Hong Kong',          icon: '🏙️',  color: '#E8D4C0', text: '#6B3B2B', days: 'Días 3–4',   dates: '24–25 Feb' },
  { id: 'osaka-llegada', label: 'Osaka (llegada)',    icon: '🏯',  color: '#C8E8D0', text: '#2B6B3B', days: 'Días 5–7',   dates: '26–28 Feb' },
  { id: 'autocaravana',  label: 'Autocaravana',       icon: '🚐',  color: '#F5E6C0', text: '#6B5020', days: 'Días 8–17',  dates: '1–10 Mar'  },
  { id: 'hoteles',       label: 'Hoteles / Airbnbs',  icon: '🏨',  color: '#E0D0E8', text: '#4B2B6B', days: 'Días 18–23', dates: '11–16 Mar' },
  { id: 'regreso',       label: 'Regreso',            icon: '✈️',  color: '#D0DCE8', text: '#2B3B6B', days: 'Días 24–28', dates: '17–21 Mar' },
];

const ITINERARY = [
  { date: '2027-02-22', phase: 'viaje-ida',     loc: 'Tenerife → Madrid',  icon: '✈️', note: 'Vuelo TFN→MAD. Noche en Madrid o directamente al aeropuerto T4.' },
  { date: '2027-02-23', phase: 'viaje-ida',     loc: 'Madrid → Hong Kong', icon: '✈️', note: 'Vuelo nocturno Cathay Pacific MAD→HKG. Con puntos Asiamiles. Llegada el día 24.' },
  { date: '2027-02-24', phase: 'hong-kong',     loc: 'Hong Kong',          icon: '🏙️', note: 'Llegada HKG. Transfer a Discovery Bay. Check-in Albush Hotel. Descanso jet lag.' },
  { date: '2027-02-25', phase: 'hong-kong',     loc: 'Hong Kong',          icon: '🏙️', note: 'Día en Discovery Bay. Ver a Giles y Christine. Paseo junto al mar.' },
  { date: '2027-02-26', phase: 'osaka-llegada', loc: 'Hong Kong → Osaka',  icon: '✈️', note: 'Vuelo HKG→KIX (Osaka). Llegada a Japón. Check-in hotel o Airbnb en Osaka.' },
  { date: '2027-02-27', phase: 'osaka-llegada', loc: 'Osaka',              icon: '🏯', note: 'Explorar Dotonbori y Namba. Gestionar reserva y recogida de la autocaravana.' },
  { date: '2027-02-28', phase: 'osaka-llegada', loc: 'Osaka',              icon: '🏯', note: 'Último día antes de la autocaravana. Compras, mapa de ruta y preparación.' },
  { date: '2027-03-01', phase: 'autocaravana',  loc: 'Osaka → Kobe',       icon: '🚐', note: 'Recoger autocaravana por la mañana. Primera parada en Kobe (30 km). ¡Empezamos!' },
  { date: '2027-03-02', phase: 'autocaravana',  loc: 'Kobe',               icon: '🚐', note: '🥩 IMPRESCINDIBLE: Kobe Beef (Wagyu A5). Puerto de Kobe. Kitano Ijinkan.' },
  { date: '2027-03-03', phase: 'autocaravana',  loc: 'Nara',               icon: '🚐', note: '🦌 Nara Park: los ciervos sagrados. Tōdai-ji. Perfecto para los niños. Carrito-friendly.' },
  { date: '2027-03-04', phase: 'autocaravana',  loc: 'Kyoto',              icon: '🚐', note: 'Llegada a Kyoto. Instalarse. Paseo por el barrio Gion al atardecer.' },
  { date: '2027-03-05', phase: 'autocaravana',  loc: 'Kyoto',              icon: '🚐', note: 'Fushimi Inari (temprano — antes de las masas). Kinkaku-ji por la tarde.' },
  { date: '2027-03-06', phase: 'autocaravana',  loc: 'Kyoto',              icon: '🚐', note: 'Arashiyama: bamboo grove y Tenryu-ji. Nishiki Market para comer y comprar.' },
  { date: '2027-03-07', phase: 'autocaravana',  loc: 'Ruta por decidir',   icon: '🚐', note: 'Opciones: Hiroshima + Miyajima, Himeji, costa San\'in... Por decidir.' },
  { date: '2027-03-08', phase: 'autocaravana',  loc: 'Ruta por decidir',   icon: '🚐', note: 'Por decidir según itinerario y estado de los niños.' },
  { date: '2027-03-09', phase: 'autocaravana',  loc: 'Ruta por decidir',   icon: '🚐', note: 'Por decidir según itinerario final.' },
  { date: '2027-03-10', phase: 'autocaravana',  loc: 'Ruta → Osaka',       icon: '🚐', note: 'Última noche en autocaravana. Volver camino a Osaka para devolver el vehículo.' },
  { date: '2027-03-11', phase: 'hoteles',       loc: 'Osaka',              icon: '🏨', note: 'Devolver autocaravana. Check-in hotel o Airbnb en Osaka. ¡A ducharse por fin!' },
  { date: '2027-03-12', phase: 'hoteles',       loc: 'Osaka',              icon: '🏨', note: 'Día libre en Osaka. Shinsaibashi, Tsutenkaku, zonas pendientes de ver.' },
  { date: '2027-03-13', phase: 'hoteles',       loc: 'Osaka',              icon: '🏨', note: 'Por decidir: excursión de día o descanso total en Osaka.' },
  { date: '2027-03-14', phase: 'hoteles',       loc: 'Osaka',              icon: '🏨', note: 'Por decidir.' },
  { date: '2027-03-15', phase: 'hoteles',       loc: 'Osaka',              icon: '🏨', note: 'Por decidir.' },
  { date: '2027-03-16', phase: 'hoteles',       loc: 'Osaka',              icon: '🏨', note: 'Último día en Japón. Compras finales, regalos, empacar maletas.' },
  { date: '2027-03-17', phase: 'regreso',       loc: 'Osaka → Hong Kong',  icon: '✈️', note: 'Vuelo KIX→HKG. Hotel en Hong Kong (aeropuerto o Discovery Bay).' },
  { date: '2027-03-18', phase: 'regreso',       loc: 'Hong Kong',          icon: '🏙️', note: 'Escala en HK. Descanso y preparar el largo vuelo nocturno de vuelta a casa.' },
  { date: '2027-03-19', phase: 'regreso',       loc: 'Hong Kong → Madrid', icon: '✈️', note: 'Vuelo nocturno Cathay Pacific HKG→MAD. Con puntos Asiamiles.' },
  { date: '2027-03-20', phase: 'regreso',       loc: 'Madrid',             icon: '🏨', note: 'Llegada a Madrid de madrugada. Noche en hotel T4 (IBIS, NH o similar).' },
  { date: '2027-03-21', phase: 'regreso',       loc: 'Madrid → Tenerife',  icon: '✈️', note: '¡Vuelo final MAD→TFN! Bienvenidos a casa. Fin del viaje.' },
];

const DESTINATIONS = [
  {
    id: 'hong-kong',
    name: 'Hong Kong',
    subtitle: 'Discovery Bay · Albush Hotel',
    flag: '🇭🇰',
    days: '2 noches — Días 3–4',
    phase: 'hong-kong',
    desc: 'Primera parada. Llegamos tras el vuelo nocturno desde Madrid. Dos noches en Discovery Bay para recuperar el jet lag con los niños antes de entrar a Japón.',
    highlights: [
      'Discovery Bay — tranquilo, sin coches, junto al mar',
      'Albush Hotel — alojamiento (por confirmar)',
      'Reunión con Giles y Christine',
      'Victoria Peak (opcional si hay energía)',
    ],
    kids: 'Ideal — Discovery Bay es llana, sin tráfico, perfecta para recuperarse del viaje con niños pequeños.',
  },
  {
    id: 'osaka',
    name: 'Osaka',
    subtitle: 'Base · Dotonbori · Autocaravana',
    flag: '🇯🇵',
    days: 'Días 5–7 + 18–23',
    phase: 'osaka-llegada',
    desc: 'Ciudad de entrada y salida del tour en autocaravana. Los primeros días nos instalamos y recogemos el vehículo. Al final devolvemos la auto y disfrutamos la ciudad sin prisa.',
    highlights: [
      'Dotonbori — gastronomía callejera y neones por la noche',
      'Osaka Castle — impresionante, con amplio parque alrededor',
      'Namba — el corazón comercial y gastronómico',
      'Base logística para recogida y devolución de autocaravana',
    ],
    kids: 'Muy buena — zonas peatonales amplias, mucha comida accesible para niños. Fácil con carrito.',
  },
  {
    id: 'kobe',
    name: 'Kobe',
    subtitle: 'La carne más famosa del mundo',
    flag: '🇯🇵',
    days: 'Días 8–9 — autocaravana',
    phase: 'autocaravana',
    desc: 'A 30 km de Osaka, Kobe es parada obligatoria del viaje. Razón principal: la auténtica carne de Kobe (Wagyu A5 grado). El puerto y el barrio histórico son un plus inesperado.',
    highlights: [
      '🥩 Kobe Beef (Wagyu A5) — razón suficiente para venir',
      'Puerto de Kobe — paseo agradable junto al mar',
      'Kitano Ijinkan — barrio histórico extranjero',
      'Nunobiki Herb Garden (telecabina con vistas)',
    ],
    kids: 'Buena — ciudad compacta y fácil de recorrer. Entorno portuario agradable con carrito.',
  },
  {
    id: 'nara',
    name: 'Nara',
    subtitle: 'Los ciervos sagrados 🦌',
    flag: '🇯🇵',
    days: 'Día 10 — autocaravana',
    phase: 'autocaravana',
    desc: 'Posiblemente la parada más mágica del viaje para los niños. Cientos de ciervos deambulan libres por el parque y aceptan galletas de mano. Una experiencia que recordarán siempre.',
    highlights: [
      '🦌 Ciervos libres por el parque — dóciles, aceptan galletas',
      'Tōdai-ji — el Gran Buda de bronce más grande del mundo',
      'Nara Park — enorme, llano, perfecto con carrito',
      'A 45 min de Kyoto o Osaka en coche',
    ],
    kids: 'Excelente ⭐ — la mejor parada para los niños. Parque completamente llano. Los ciervos interaccionan directamente. Imprescindible.',
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    subtitle: 'La antigua capital imperial',
    flag: '🇯🇵',
    days: 'Días 11–13 — autocaravana',
    phase: 'autocaravana',
    desc: 'La ciudad más histórica de Japón y una de las más bellas del mundo. Mínimo 2–3 noches para ver lo esencial. Posiblemente una noche en ryokan para la experiencia completa.',
    highlights: [
      'Arashiyama — bamboo grove y templo Tenryu-ji (carrito-friendly)',
      'Gion — barrio geisha al atardecer',
      'Fushimi Inari — los 10.000 toriis naranjas (madrugar)',
      'Kinkaku-ji — el Pabellón Dorado',
      'Nishiki Market — mercado cubierto para comer y comprar',
    ],
    kids: 'Buena con planificación — Arashiyama y Gion accesibles con carrito. Fushimi Inari tiene escaleras: ir temprano o con el mayor en brazos. Evitar calor del mediodía.',
  },
  {
    id: 'tbd',
    name: 'Por explorar',
    subtitle: 'Días 14–17: 4 días libres',
    flag: '❓',
    days: 'Días 14–17 — 4 días libres',
    phase: 'autocaravana',
    desc: '4 días libres en autocaravana para decidir según ánimo, tiempo y los niños. Opciones abiertas — aquí van las más interesantes a valorar antes del viaje.',
    highlights: [
      '🌊 Hiroshima + Miyajima — el torii en el mar, historia, accesible',
      '🏔️ Hakone — Monte Fuji, onsens, ryokans (requiere desvío al este)',
      '🏯 Himeji — el castillo más fotogénico de Japón',
      '🌿 Costa San\'in — sin turistas, paisajes naturales espectaculares',
    ],
    kids: 'Variable por destino. Hiroshima y Miyajima muy accesibles. Hakone requiere más energía. San\'in es naturaleza pura e ideal para desconectar.',
  },
];

const CAMPERVAN_SECTIONS = [
  {
    id: 'por-que',
    title: '¿Por qué autocaravana en Japón?',
    icon: '🚐',
    content: `Japón en autocaravana con bebés tiene sentido único:

- Flexibilidad total de horarios — crítico con niños pequeños
- La cuna/cama de los niños viaja con nosotros
- Sin maletas en taxis ni con carrito en estaciones
- Cocinar cuando queramos — ahorro y comodidad
- Parar donde y cuando queramos
- Japón tiene excelentes Michi-no-Eki (áreas de descanso) y está bien preparado para campervans

A diferencia de Europa, Japón tiene pocos campings "salvajes" pero las Michi-no-Eki son aparcamientos gratuitos con tiendas, restaurantes y baños — suficiente para pernoctar bien.`,
  },
  {
    id: 'alquiler',
    title: 'Alquiler en Osaka',
    icon: '🔑',
    content: `Empresas a investigar:
- Japan Campers (japancampers.com) — especialistas, inglés, opciones familiares
- Rental Car Japan — mayor flota, opciones variadas
- Nippon Rent-A-Car — fiable, cobertura nacional
- Toyota Rent a Car — amplia red de puntos de recogida

Pedir/verificar:
- Vehículo con espacio para 4 personas + equipaje de 28 días
- Asientos infantiles integrados o alquilados (bebé + niño 3 años)
- GPS en inglés o español
- Seguro completo zero excess
- ETC card para peajes de autopista

Logística clave:
- Recoger: lunes 1 Mar 2027 (mañana, zona Osaka/KIX)
- Devolver: jueves 11 Mar 2027 (mismo punto o Osaka centro)
- Precio estimado: investigar (presupuesto aproximado ~€150-200/día todo incluido)`,
  },
  {
    id: 'ruta',
    title: 'Ruta planificada',
    icon: '🗺️',
    content: `Días 8-10 (1-3 Mar): Osaka → Kobe → Nara
  1 Mar: Osaka → Kobe (30 km, autopista Hanshin)
  2 Mar: Kobe — Kobe Beef + puerto + Kitano
  3 Mar: Kobe → Nara (80 km). Nara Park tarde.

Días 11-13 (4-6 Mar): Nara → Kyoto
  4 Mar: Nara → Kyoto (50 km). Llegada, Gion al atardecer.
  5 Mar: Kyoto — Fushimi Inari (amanecer) + Kinkaku-ji
  6 Mar: Kyoto — Arashiyama + Nishiki Market

Días 14-17 (7-10 Mar): TBD — 4 días libres
  Opciones en orden de preferencia:
  A) Hiroshima + Miyajima: 200 km desde Kyoto, 1-2 noches
  B) Himeji: 100 km desde Kyoto, 1 noche
  C) Costa San'in: al norte, sin turistas
  D) Relajar en algún área con onsen (baño termal)

Km totales aprox: 400-650 km en 10 días (muy manejable)`,
  },
  {
    id: 'practico',
    title: 'Info práctica',
    icon: '📋',
    content: `CONDUCIR EN JAPÓN:
- Conducción por la izquierda (igual que UK — ya lo conocemos)
- Carnet Internacional de Conducir + carnet español — OBLIGATORIO
- Peajes en autopistas: ETC card (pedir al alquilar) o pagar en efectivo
- GPS esencial — señales en japonés. Pedir GPS en inglés al alquilar.
- Velocidad máxima autopista: 100 km/h. Radares frecuentes.

PERNOCTAS:
- Michi-no-Eki: áreas de descanso gratuitas con servicios, muy frecuentes en rutas
- RV Parks (¥1.000-3.000/noche): agua y electricidad incluidos
- Campings (¥2.000-5.000): ducha, lavadora, cocina comunal

CON BEBÉS EN LA AUTOCARAVANA:
- Asientos de coche: llevar los propios o alquilar con el vehículo
- Calentar biberones: combustible de camping o en combini (7-Eleven)
- Pañales: comprar en Japón — marcas Merries/Goon son superiores
- Farmacia japonesa (ドラッグストア): tiene de todo, buscar Matsumoto Kiyoshi
- Carrito: llevar el compacto — aceras japonesas pueden ser estrechas`,
  },
];

const LOGISTICA_SECTIONS = [
  {
    id: 'vuelos',
    title: 'Vuelos',
    icon: '✈️',
    type: 'flights',
    flights: [
      { from: 'TFN', to: 'MAD', date: '22 Feb 2027', note: 'Binter o Iberia — por reservar' },
      { from: 'MAD', to: 'HKG', date: '22–23 Feb 2027', note: 'Cathay Pacific · puntos Asiamiles · RESERVAR PRONTO' },
      { from: 'HKG', to: 'KIX (Osaka)', date: '26 Feb 2027', note: 'Cathay Pacific o Peach — por reservar' },
      { from: 'KIX (Osaka)', to: 'HKG', date: '17 Mar 2027', note: 'Peach o Cathay Pacific — por reservar' },
      { from: 'HKG', to: 'MAD', date: '18–19 Mar 2027', note: 'Cathay Pacific · puntos Asiamiles · RESERVAR PRONTO' },
      { from: 'MAD', to: 'TFN', date: '21 Mar 2027', note: 'Binter o Iberia — por reservar' },
    ],
  },
  {
    id: 'alojamiento',
    title: 'Alojamiento',
    icon: '🏨',
    type: 'notes',
    content: `HONG KONG (2 noches):
  Albush Hotel, Discovery Bay — Check-in: 24 Feb · Check-out: 26 Feb

OSAKA — LLEGADA (3 noches):
  Hotel o Airbnb cerca de Namba o Shinsaibashi
  Check-in: 26 Feb · Check-out: 1 Mar

AUTOCARAVANA (10 noches):
  1 Mar → 11 Mar (ver sección Autocaravana)

OSAKA — VUELTA (6 noches):
  Hotel o Airbnb zona similar
  Check-in: 11 Mar · Check-out: 17 Mar

HONG KONG — ESCALA (1 noche):
  Hotel aeropuerto o zona Discovery Bay
  Check-in: 18 Mar · Check-out: 19 Mar

MADRID — ESCALA (1 noche):
  Hotel Terminal T4 (IBIS, AC Airport o NH Madrid)
  Check-in: 20 Mar · Check-out: 21 Mar`,
  },
  {
    id: 'docs',
    title: 'Documentación',
    icon: '📄',
    type: 'checklist',
    items: [
      'Pasaportes (4) — verificar que no caducan antes de Sep 2027',
      'Carnet de conducir Internacional (Papá) — tramitar en DGT',
      'Tarjeta sanitaria europea (EHIC) — revisión de vigencia',
      'Seguro médico de viaje — cubrir a los 4, zona Asia',
      'Póliza de cancelación de vuelos',
      'Visado Japón — verificar requisitos para pasaporte español',
      'Vacunas de viaje — consultar médico 60 días antes',
      'Contactos de emergencia impresos y en Drive',
      'Copia digital de todos los documentos (carpeta Drive "Japón 2027")',
    ],
  },
  {
    id: 'equipaje',
    title: 'Equipaje — Lista base',
    icon: '🧳',
    type: 'checklist',
    items: [
      'Maletas (2) + mochilas de mano',
      'Carrito compacto / silla de paseo',
      'Portabebés ergonómico (Ergobaby o similar)',
      'Asientos de coche infantiles (bebé + niño 3 años)',
      'Adaptador de corriente japonés (tipo A — igual que USA)',
      'Tarjeta SIM japonesa — reservar en Amazon JP o comprar en aeropuerto HKG/KIX',
      'Tarjeta IC de transporte (Suica o ICOCA) — comprar al llegar',
      'Ropa: finales invierno / principios primavera Kansai (5–15°C)',
      'Impermeables ligeros (lluvia de primavera en Japón)',
      'Medicamentos: fiebre, diarrea, alergia, dolor — para adultos y niños',
    ],
  },
  {
    id: 'ninos',
    title: 'Japón con bebés — lo que hay que saber',
    icon: '👶',
    type: 'notes',
    content: `PAÑALES Y PRODUCTOS:
  - Pañales japoneses son los mejores del mundo: Merries, Goon, Moony
  - Comprar allí — no traer muchos de Tenerife
  - Farmacia local: buscar Matsumoto Kiyoshi o Sugi Pharmacy (ドラッグストア)
  - Fórmula láctea: llevar la habitual o verificar equivalencia Meiji/Morinaga

TRANSPORTE:
  - Trenes japoneses MUY cómodos con carrito — ascensores en casi todas las estaciones
  - Taxis sin asientos de bebé integrados — autocaravana lo soluciona
  - Combinis (7-Eleven, Lawson, FamilyMart): calentadores de biberones, cambiadores

RESTAURANTES:
  - Los japoneses adoran a los bebés — bienvenidos en prácticamente todos lados
  - Family restaurants (ファミレス) tienen tronas y menú infantil
  - Family rooms en centros comerciales y estaciones grandes

TEMPERATURA FEB-MAR EN KANSAI:
  - Febrero: 5–12°C. Abrigos necesarios.
  - Marzo: 8–16°C. Variable, llevar capas.
  - Lluvia de primavera: impermeables ligeros

SAKURA (CEREZOS):
  - Floración típica: finales de marzo / principios de abril en Kansai
  - En 2027 podría haber early bloom a finales de marzo — posible ver algo al final del viaje
  - No garantizado pero posible bonus`,
  },
];

// ===== PHASE MAP =====
const phaseMap = Object.fromEntries(PHASES.map(p => [p.id, p]));

// ===== LOCALSTORAGE =====
function getNote(key)    { return localStorage.getItem('japan2027_' + key) || ''; }
function saveNote(key, v){ localStorage.setItem('japan2027_' + key, v); flashToast(); }
function getCheck(key)   { return localStorage.getItem('japan2027_chk_' + key) === '1'; }
function setCheck(key, v){ localStorage.setItem('japan2027_chk_' + key, v ? '1' : '0'); }

let _toastTimer;
function flashToast() {
  const t = document.getElementById('save-toast');
  if (!t) return;
  t.classList.add('visible');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => t.classList.remove('visible'), 2200);
}

function wireEditable(el, key) {
  el.addEventListener('blur', () => saveNote(key, el.textContent.trim()));
  el.addEventListener('keydown', e => {
    if (e.key === 's' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); saveNote(key, el.textContent.trim()); }
    if (e.key === 'Escape') el.blur();
  });
}

// ===== COUNTDOWN =====
function updateCountdown() {
  const diff = new Date('2027-02-22T00:00:00') - new Date();
  if (diff <= 0) {
    ['cd-days','cd-hours','cd-mins'].forEach(id => { const e = document.getElementById(id); if (e) e.textContent = '0'; });
    const hd = document.getElementById('header-days');
    if (hd) hd.textContent = '¡YA!';
    return;
  }
  const days  = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins  = Math.floor((diff % 3600000)  / 60000);
  const set = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
  set('cd-days',  days);
  set('cd-hours', String(hours).padStart(2,'0'));
  set('cd-mins',  String(mins).padStart(2,'0'));
  set('header-days', days);
}

// ===== DATE UTILS =====
function fmtShort(s) {
  const d = new Date(s + 'T12:00:00');
  return d.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
}
function fmtWeekday(s) {
  return new Date(s + 'T12:00:00').toLocaleDateString('es-ES', { weekday: 'long' });
}

// ===== RENDER: PHASES OVERVIEW =====
function renderPhasesOverview() {
  const el = document.getElementById('phases-list');
  if (!el) return;
  el.innerHTML = PHASES.map(p => `
    <div class="phase-row" style="background:${p.color}28;border-left-color:${p.color};">
      <span class="phase-dot" style="background:${p.color};"></span>
      <span class="phase-row-icon">${p.icon}</span>
      <span class="phase-row-label" style="color:${p.text};">${p.label}</span>
      <span class="phase-row-days">${p.days}</span>
      <span class="phase-row-dates">${p.dates}</span>
    </div>
  `).join('');
}

// ===== RENDER: PHASE LEGEND =====
function renderPhaseLegend() {
  const el = document.getElementById('phase-legend');
  if (!el) return;
  el.innerHTML = PHASES.map(p => `
    <div class="legend-item" style="background:${p.color}40;">
      <span class="legend-dot" style="background:${p.color};"></span>
      <span style="color:${p.text};">${p.icon} ${p.label}</span>
    </div>
  `).join('');
}

// ===== RENDER: ITINERARY =====
function renderItinerary() {
  const el = document.getElementById('day-grid');
  if (!el) return;
  el.innerHTML = ITINERARY.map((day, i) => {
    const p    = phaseMap[day.phase];
    const key  = 'day_' + day.date;
    const note = getNote(key) || day.note;
    return `
      <div class="day-card" style="border-top-color:${p ? p.color : '#ccc'};">
        <div class="day-header">
          <span class="day-num">${String(i + 1).padStart(2, '0')}</span>
          <div class="day-date-col">
            <span class="day-date">${fmtShort(day.date)}</span>
            <span class="day-weekday">${fmtWeekday(day.date)}</span>
          </div>
        </div>
        <div class="day-loc">${day.icon} ${day.loc}</div>
        ${p ? `<span class="day-phase-badge" style="background:${p.color}55;color:${p.text};">${p.label}</span>` : ''}
        <div class="day-note" contenteditable="true" data-key="${key}" spellcheck="false">${note}</div>
      </div>
    `;
  }).join('');

  el.querySelectorAll('.day-note').forEach(div => wireEditable(div, div.dataset.key));
}

// ===== RENDER: DESTINATIONS =====
function renderDestinations() {
  const el = document.getElementById('dest-grid');
  if (!el) return;
  const phaseBg = { 'hong-kong': '#E8D4C0', 'osaka-llegada': '#C8E8D0', 'autocaravana': '#F5E6C0' };
  el.innerHTML = DESTINATIONS.map(d => {
    const key  = 'dest_' + d.id;
    const note = getNote(key);
    const bg   = phaseBg[d.phase] || '#F0EDE8';
    return `
      <div class="dest-card">
        <div class="dest-header">
          <span class="dest-flag">${d.flag}</span>
          <div class="dest-meta">
            <div class="dest-name">${d.name}</div>
            <div class="dest-subtitle">${d.subtitle}</div>
            <span class="dest-days-badge" style="background:${bg}99;color:#555;">${d.days}</span>
          </div>
        </div>
        <div class="dest-body">
          <p class="dest-desc">${d.desc}</p>
          <ul class="dest-highlights">${d.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
          <div class="dest-kids">${d.kids}</div>
          <div class="dest-notes-label">Notas de investigación</div>
          <div class="dest-notes" contenteditable="true" data-key="${key}" data-placeholder="Añade aquí links, restaurantes, horarios, precios..." spellcheck="false">${note || ''}</div>
        </div>
      </div>
    `;
  }).join('');

  el.querySelectorAll('.dest-notes').forEach(div => {
    wireEditable(div, div.dataset.key);
    div.addEventListener('focus', () => {
      if (!div.textContent.trim()) div.textContent = '';
    });
    if (!getNote('dest_' + div.dataset.key.replace('dest_',''))) {
      div.textContent = '';
    }
  });
}

// ===== RENDER: CAMPERVAN =====
function renderCampervan() {
  const el = document.getElementById('autocaravana-sections');
  if (!el) return;
  el.innerHTML = CAMPERVAN_SECTIONS.map(s => {
    const key  = 'rv_' + s.id;
    const note = getNote(key) || s.content;
    return `
      <div class="notes-block">
        <div class="notes-block-header">
          <span class="notes-block-icon">${s.icon}</span>
          <span class="notes-block-title">${s.title}</span>
        </div>
        <div class="notes-block-body">
          <div class="notes-field" contenteditable="true" data-key="${key}" spellcheck="false">${note}</div>
        </div>
      </div>
    `;
  }).join('');
  el.querySelectorAll('.notes-field').forEach(div => wireEditable(div, div.dataset.key));
}

// ===== RENDER: LOGISTICS =====
function renderLogistica() {
  const el = document.getElementById('logistica-sections');
  if (!el) return;
  el.innerHTML = LOGISTICA_SECTIONS.map(s => {
    let body = '';
    if (s.type === 'flights') {
      body = s.flights.map(f => `
        <div class="flight-row">
          <div class="flight-route">
            <div class="flight-from-to">${f.from} <span class="flight-arrow">→</span> ${f.to}</div>
            <div class="flight-date">${f.date}</div>
          </div>
          <span class="flight-note">${f.note}</span>
        </div>
      `).join('');
    } else if (s.type === 'checklist') {
      body = `<ul class="checklist">
        ${s.items.map((item, i) => {
          const key = s.id + '_' + i;
          const chk = getCheck(key);
          return `<li class="${chk ? 'done' : ''}">
            <input type="checkbox" id="c-${key}" ${chk ? 'checked' : ''}>
            <label for="c-${key}">${item}</label>
          </li>`;
        }).join('')}
      </ul>`;
    } else {
      const key  = 'log_' + s.id;
      const note = getNote(key) || s.content;
      body = `<div class="notes-field" contenteditable="true" data-key="${key}" spellcheck="false">${note}</div>`;
    }
    return `
      <div class="notes-block">
        <div class="notes-block-header">
          <span class="notes-block-icon">${s.icon}</span>
          <span class="notes-block-title">${s.title}</span>
        </div>
        <div class="notes-block-body">${body}</div>
      </div>
    `;
  }).join('');

  el.querySelectorAll('.notes-field').forEach(div => wireEditable(div, div.dataset.key));

  el.querySelectorAll('.checklist input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', () => {
      const key = cb.id.replace('c-', '');
      setCheck(key, cb.checked);
      cb.closest('li').classList.toggle('done', cb.checked);
    });
  });
}

// ===== TAB NAV =====
function initTabs() {
  const btns     = document.querySelectorAll('.tab-btn');
  const sections = document.querySelectorAll('.tab-section');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      btns.forEach(b => b.classList.toggle('active', b === btn));
      sections.forEach(s => s.classList.toggle('active', s.id === 'tab-' + tab));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  updateCountdown();
  setInterval(updateCountdown, 30000);
  renderPhasesOverview();
  renderPhaseLegend();
  renderItinerary();
  renderDestinations();
  renderCampervan();
  renderLogistica();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').catch(() => {});
  }
});
