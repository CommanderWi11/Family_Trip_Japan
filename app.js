'use strict';

// ===== TRIP DATA =====

const PHASES = [
  { id: 'viaje-ida',     label: 'Outbound Flight',  icon: '✈️',  color: '#C8D8E8', text: '#2B4A6B', days: 'Days 1–2',   dates: '22–23 Feb' },
  { id: 'hong-kong',     label: 'Hong Kong',         icon: '🏙️',  color: '#E8D4C0', text: '#6B3B2B', days: 'Days 3–4',   dates: '24–25 Feb' },
  { id: 'osaka-llegada', label: 'Osaka (Arrival)',   icon: '🏯',  color: '#C8E8D0', text: '#2B6B3B', days: 'Days 5–7',   dates: '26–28 Feb' },
  { id: 'autocaravana',  label: 'Campervan',         icon: '🚐',  color: '#F5E6C0', text: '#6B5020', days: 'Days 8–17',  dates: '1–10 Mar'  },
  { id: 'hoteles',       label: 'Hotels / Airbnbs',  icon: '🏨',  color: '#E0D0E8', text: '#4B2B6B', days: 'Days 18–23', dates: '11–16 Mar' },
  { id: 'regreso',       label: 'Return',            icon: '✈️',  color: '#D0DCE8', text: '#2B3B6B', days: 'Days 24–28', dates: '17–21 Mar' },
];

const ITINERARY = [
  { date: '2027-02-22', phase: 'viaje-ida',     loc: 'Tenerife → Madrid',  icon: '✈️', note: 'Flight TFN→MAD. Night in Madrid or straight to T4 terminal.' },
  { date: '2027-02-23', phase: 'viaje-ida',     loc: 'Madrid → Hong Kong', icon: '✈️', note: 'Overnight Cathay Pacific flight MAD→HKG. Using Asiamiles points. Arrival on the 24th.' },
  { date: '2027-02-24', phase: 'hong-kong',     loc: 'Hong Kong',          icon: '🏙️', note: 'Arrive HKG. Transfer to Discovery Bay. Check-in Auberge Discovery Bay. Rest — jet lag recovery.' },
  { date: '2027-02-25', phase: 'hong-kong',     loc: 'Hong Kong',          icon: '🏙️', note: 'Day in Discovery Bay. Visit Giles and Christine. Walk by the sea.' },
  { date: '2027-02-26', phase: 'osaka-llegada', loc: 'Hong Kong → Osaka',  icon: '✈️', note: 'Flight HKG→KIX (Osaka). Arrival in Japan. Check-in hotel or Airbnb in Osaka.' },
  { date: '2027-02-27', phase: 'osaka-llegada', loc: 'Osaka',              icon: '🏯', note: 'Explore Dotonbori and Namba. Sort campervan booking and pick-up logistics.' },
  { date: '2027-02-28', phase: 'osaka-llegada', loc: 'Osaka',              icon: '🏯', note: 'Last day before the campervan. Shopping, route map and prep.' },
  { date: '2027-03-01', phase: 'autocaravana',  loc: 'Osaka → Kobe',       icon: '🚐', note: "Pick up campervan in the morning. First stop: Kobe (30 km). Let's go!" },
  { date: '2027-03-02', phase: 'autocaravana',  loc: 'Kobe',               icon: '🚐', note: '🥩 UNMISSABLE: Kobe Beef (Wagyu A5). Kobe Harbour. Kitano Ijinkan.' },
  { date: '2027-03-03', phase: 'autocaravana',  loc: 'Nara',               icon: '🚐', note: '🦌 Nara Park: the sacred deer. Tōdai-ji. Perfect for the kids. Buggy-friendly.' },
  { date: '2027-03-04', phase: 'autocaravana',  loc: 'Kyoto',              icon: '🚐', note: 'Arrive in Kyoto. Settle in. Evening stroll through the Gion district.' },
  { date: '2027-03-05', phase: 'autocaravana',  loc: 'Kyoto',              icon: '🚐', note: 'Fushimi Inari (early — before the crowds). Kinkaku-ji in the afternoon.' },
  { date: '2027-03-06', phase: 'autocaravana',  loc: 'Kyoto',              icon: '🚐', note: 'Arashiyama: bamboo grove and Tenryu-ji. Nishiki Market for food and shopping.' },
  { date: '2027-03-07', phase: 'autocaravana',  loc: 'Route TBD',          icon: '🚐', note: "Options: Hiroshima + Miyajima, Himeji, San'in coast... To be decided." },
  { date: '2027-03-08', phase: 'autocaravana',  loc: 'Route TBD',          icon: '🚐', note: 'To be decided based on itinerary and how the kids are doing.' },
  { date: '2027-03-09', phase: 'autocaravana',  loc: 'Route TBD',          icon: '🚐', note: 'To be decided based on the final itinerary.' },
  { date: '2027-03-10', phase: 'autocaravana',  loc: 'Route → Osaka',      icon: '🚐', note: 'Last night in the campervan. Head back towards Osaka to return the vehicle.' },
  { date: '2027-03-11', phase: 'hoteles',       loc: 'Osaka',              icon: '🏨', note: 'Return campervan. Check-in hotel or Airbnb in Osaka. Finally, a proper shower!' },
  { date: '2027-03-12', phase: 'hoteles',       loc: 'Osaka',              icon: '🏨', note: 'Free day in Osaka. Shinsaibashi, Tsutenkaku, spots still to explore.' },
  { date: '2027-03-13', phase: 'hoteles',       loc: 'Osaka',              icon: '🏨', note: 'To decide: day trip or full rest in Osaka.' },
  { date: '2027-03-14', phase: 'hoteles',       loc: 'Osaka',              icon: '🏨', note: 'To be decided.' },
  { date: '2027-03-15', phase: 'hoteles',       loc: 'Osaka',              icon: '🏨', note: 'To be decided.' },
  { date: '2027-03-16', phase: 'hoteles',       loc: 'Osaka',              icon: '🏨', note: 'Last day in Japan. Final shopping, souvenirs, pack up the bags.' },
  { date: '2027-03-17', phase: 'regreso',       loc: 'Osaka → Hong Kong',  icon: '✈️', note: 'Flight KIX→HKG. Hotel in Hong Kong (airport or Discovery Bay).' },
  { date: '2027-03-18', phase: 'regreso',       loc: 'Hong Kong',          icon: '🏙️', note: 'Stopover in HK. Rest and prepare for the long overnight flight home.' },
  { date: '2027-03-19', phase: 'regreso',       loc: 'Hong Kong → Madrid', icon: '✈️', note: 'Overnight Cathay Pacific flight HKG→MAD. Using Asiamiles points.' },
  { date: '2027-03-20', phase: 'regreso',       loc: 'Madrid',             icon: '🏨', note: 'Early morning arrival in Madrid. Night at a T4 hotel (IBIS, NH or similar).' },
  { date: '2027-03-21', phase: 'regreso',       loc: 'Madrid → Tenerife',  icon: '✈️', note: 'Final flight MAD→TFN! Welcome home. End of the trip.' },
];

const DESTINATIONS = [
  {
    id: 'hong-kong',
    name: 'Hong Kong',
    subtitle: 'Discovery Bay · <a href="https://www.aubergediscoverybay.com/en-us" target="_blank" rel="noopener">Auberge Discovery Bay</a>',
    flag: '🇭🇰',
    days: '2 nights — Days 3–4',
    phase: 'hong-kong',
    desc: 'First stop. We arrive after the overnight flight from Madrid. Two nights in Discovery Bay to recover from jet lag with the kids before entering Japan.',
    highlights: [
      'Discovery Bay — quiet, car-free, right by the sea',
      '<a href="https://www.aubergediscoverybay.com/en-us" target="_blank" rel="noopener">Auberge Discovery Bay</a> — accommodation (to confirm)',
      'Visit Giles and Christine',
      'Victoria Peak (optional if we have the energy)',
    ],
    kids: 'Ideal — Discovery Bay is flat, traffic-free, perfect for recovering from the trip with little ones.',
  },
  {
    id: 'osaka',
    name: 'Osaka',
    subtitle: 'Base · Dotonbori · Campervan',
    flag: '🇯🇵',
    days: 'Days 5–7 + 18–23',
    phase: 'osaka-llegada',
    desc: 'Entry and exit city for the campervan tour. The first days we settle in and collect the vehicle. At the end we return the campervan and enjoy the city at our own pace.',
    highlights: [
      'Dotonbori — street food and neon lights at night',
      'Osaka Castle — impressive, with a large park around it',
      'Namba — the commercial and gastronomic heart',
      'Logistics base for campervan pick-up and return',
    ],
    kids: 'Very good — wide pedestrian areas, lots of accessible food for kids. Easy with a buggy.',
  },
  {
    id: 'kobe',
    name: 'Kobe',
    subtitle: "The world's most famous beef",
    flag: '🇯🇵',
    days: 'Days 8–9 — campervan',
    phase: 'autocaravana',
    desc: '30 km from Osaka, Kobe is a must-stop on this trip. Main reason: authentic Kobe Beef (Wagyu A5 grade). The harbour and historic district are an unexpected bonus.',
    highlights: [
      '🥩 Kobe Beef (Wagyu A5) — reason enough to come',
      'Kobe Harbour — lovely waterfront walk',
      'Kitano Ijinkan — historic foreign quarter',
      'Nunobiki Herb Garden (cable car with views)',
    ],
    kids: 'Good — compact city, easy to get around. Pleasant harbour area with a buggy.',
  },
  {
    id: 'nara',
    name: 'Nara',
    subtitle: 'The sacred deer 🦌',
    flag: '🇯🇵',
    days: 'Day 10 — campervan',
    phase: 'autocaravana',
    desc: "Possibly the most magical stop of the trip for the kids. Hundreds of deer roam freely through the park and accept crackers from your hand. An experience they'll remember forever.",
    highlights: [
      '🦌 Free-roaming deer — docile, they accept crackers',
      "Tōdai-ji — the world's largest bronze Great Buddha",
      'Nara Park — huge, flat, perfect with a buggy',
      '45 min from Kyoto or Osaka by car',
    ],
    kids: 'Excellent ⭐ — best stop for the kids. Completely flat park. The deer interact directly. Essential.',
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    subtitle: 'The ancient imperial capital',
    flag: '🇯🇵',
    days: 'Days 11–13 — campervan',
    phase: 'autocaravana',
    desc: "Japan's most historic city and one of the most beautiful in the world. At least 2–3 nights to see the essentials. Possibly one night in a ryokan for the full experience.",
    highlights: [
      'Arashiyama — bamboo grove and Tenryu-ji temple (buggy-friendly)',
      'Gion — geisha district at dusk',
      'Fushimi Inari — the 10,000 orange torii gates (go early)',
      'Kinkaku-ji — the Golden Pavilion',
      'Nishiki Market — covered market for food and shopping',
    ],
    kids: 'Good with planning — Arashiyama and Gion accessible with a buggy. Fushimi Inari has stairs: go early or carry the older one. Avoid midday heat.',
  },
  {
    id: 'tbd',
    name: 'To Explore',
    subtitle: 'Days 14–17: 4 free days',
    flag: '❓',
    days: 'Days 14–17 — 4 free days',
    phase: 'autocaravana',
    desc: '4 free days in the campervan to decide on the day based on mood, weather and the kids. Open options — here are the most interesting ones to consider before the trip.',
    highlights: [
      '🌊 Hiroshima + Miyajima — the torii in the sea, history, accessible',
      '🏔️ Hakone — Mount Fuji, onsens, ryokans (requires a detour east)',
      "🏯 Himeji — Japan's most photogenic castle",
      "🌿 San'in Coast — no tourists, spectacular natural scenery",
    ],
    kids: 'Varies by destination. Hiroshima and Miyajima very accessible. Hakone requires more energy. San\'in is pure nature, ideal for switching off.',
  },
];

const CAMPERVAN_SECTIONS = [
  {
    id: 'por-que',
    title: 'Why a campervan in Japan?',
    icon: '🚐',
    content: `Campervanning in Japan with babies makes unique sense:

- Total schedule flexibility — critical with young children
- The kids' cot/bed travels with us
- No luggage in taxis or manoeuvring a buggy through stations
- Cook whenever we want — saving money and convenience
- Stop wherever and whenever we want
- Japan has excellent Michi-no-Eki (roadside rest areas) and is well set up for campervans

Unlike Europe, Japan has few "wild" camping spots but the Michi-no-Eki are free car parks with shops, restaurants and toilets — more than enough for a comfortable overnight stop.`,
  },
  {
    id: 'alquiler',
    title: 'Rental in Osaka',
    icon: '🔑',
    content: `Companies to research:
- Japan Campers (japancampers.com) — specialists, English, family options
- Rental Car Japan — largest fleet, varied options
- Nippon Rent-A-Car — reliable, national coverage
- Toyota Rent a Car — wide pick-up point network

Ask/verify:
- Vehicle with space for 4 people + 28 days of luggage
- Child seats included or rented (baby + 3-year-old)
- GPS in English or Spanish
- Full insurance, zero excess
- ETC card for motorway tolls

Key logistics:
- Pick up: Monday 1 Mar 2027 (morning, Osaka/KIX area)
- Return: Thursday 11 Mar 2027 (same point or central Osaka)
- Estimated price: research needed (rough budget ~€150–200/day all-in)`,
  },
  {
    id: 'ruta',
    title: 'Planned Route',
    icon: '🗺️',
    content: `Days 8–10 (1–3 Mar): Osaka → Kobe → Nara
  1 Mar: Osaka → Kobe (30 km, Hanshin motorway)
  2 Mar: Kobe — Kobe Beef + harbour + Kitano
  3 Mar: Kobe → Nara (80 km). Nara Park in the afternoon.

Days 11–13 (4–6 Mar): Nara → Kyoto
  4 Mar: Nara → Kyoto (50 km). Arrive, Gion at dusk.
  5 Mar: Kyoto — Fushimi Inari (dawn) + Kinkaku-ji
  6 Mar: Kyoto — Arashiyama + Nishiki Market

Days 14–17 (7–10 Mar): TBD — 4 free days
  Options in order of preference:
  A) Hiroshima + Miyajima: 200 km from Kyoto, 1–2 nights
  B) Himeji: 100 km from Kyoto, 1 night
  C) San'in Coast: to the north, no tourists
  D) Relax at an area with an onsen (hot spring bath)

Total km approx: 400–650 km over 10 days (very manageable)`,
  },
  {
    id: 'practico',
    title: 'Practical Info',
    icon: '📋',
    content: `DRIVING IN JAPAN:
- Drive on the left (same as UK — we know this)
- International Driving Licence + Spanish licence — MANDATORY
- Motorway tolls: ETC card (request when hiring) or pay cash
- GPS essential — signs in Japanese. Request English GPS when hiring.
- Motorway speed limit: 100 km/h. Speed cameras frequent.

OVERNIGHT STOPS:
- Michi-no-Eki: free roadside rest areas with facilities, very common on routes
- RV Parks (¥1,000–3,000/night): water and electricity included
- Campgrounds (¥2,000–5,000): shower, laundry, communal kitchen

WITH BABIES IN THE CAMPERVAN:
- Car seats: bring our own or hire with the vehicle
- Warming bottles: camping gas or at a combini (7-Eleven)
- Nappies: buy in Japan — Merries/Goon brands are superior
- Japanese pharmacy (ドラッグストア): has everything, look for Matsumoto Kiyoshi
- Buggy: bring the compact one — Japanese pavements can be narrow`,
  },
];

const LOGISTICA_SECTIONS = [
  {
    id: 'vuelos',
    title: 'Flights',
    icon: '✈️',
    type: 'flights',
    flights: [
      { from: 'TFN', to: 'MAD', date: '22 Feb 2027', note: 'Binter or Iberia — to book' },
      { from: 'MAD', to: 'HKG', date: '22–23 Feb 2027', note: 'Cathay Pacific · Asiamiles points · BOOK SOON' },
      { from: 'HKG', to: 'KIX (Osaka)', date: '26 Feb 2027', note: 'Cathay Pacific or Peach — to book' },
      { from: 'KIX (Osaka)', to: 'HKG', date: '17 Mar 2027', note: 'Peach or Cathay Pacific — to book' },
      { from: 'HKG', to: 'MAD', date: '18–19 Mar 2027', note: 'Cathay Pacific · Asiamiles points · BOOK SOON' },
      { from: 'MAD', to: 'TFN', date: '21 Mar 2027', note: 'Binter or Iberia — to book' },
    ],
  },
  {
    id: 'alojamiento',
    title: 'Accommodation',
    icon: '🏨',
    type: 'notes',
    content: `HONG KONG (2 nights):
  Auberge Discovery Bay — Check-in: 24 Feb · Check-out: 26 Feb

OSAKA — ARRIVAL (3 nights):
  Hotel or Airbnb near Namba or Shinsaibashi
  Check-in: 26 Feb · Check-out: 1 Mar

CAMPERVAN (10 nights):
  1 Mar → 11 Mar (see Campervan section)

OSAKA — RETURN (6 nights):
  Hotel or Airbnb, similar area
  Check-in: 11 Mar · Check-out: 17 Mar

HONG KONG — STOPOVER (1 night):
  Airport hotel or Discovery Bay area
  Check-in: 18 Mar · Check-out: 19 Mar

MADRID — STOPOVER (1 night):
  Hotel at T4 terminal (IBIS, AC Airport or NH Madrid)
  Check-in: 20 Mar · Check-out: 21 Mar`,
  },
  {
    id: 'docs',
    title: 'Documents',
    icon: '📄',
    type: 'checklist',
    items: [
      "Passports (4) — check they don't expire before Sep 2027",
      'International Driving Licence (Daddey) — apply at DGT',
      'European Health Insurance Card (EHIC) — check validity',
      'Travel health insurance — cover all 4, Asia zone',
      'Flight cancellation policy',
      'Japan visa — check requirements for Spanish passport',
      'Travel vaccinations — see a doctor 60 days before',
      'Emergency contacts printed and in Drive',
      'Digital copy of all documents (Drive folder "Japan 2027")',
    ],
  },
  {
    id: 'equipaje',
    title: 'Packing — Base List',
    icon: '🧳',
    type: 'checklist',
    items: [
      'Suitcases (2) + hand luggage bags',
      'Compact buggy / pushchair',
      'Ergonomic baby carrier (Ergobaby or similar)',
      'Child car seats (baby + 3-year-old)',
      'Japanese plug adapter (Type A — same as USA)',
      'Japanese SIM card — order on Amazon JP or buy at HKG/KIX airport',
      'IC transport card (Suica or ICOCA) — buy on arrival',
      'Clothes: late winter / early spring Kansai (5–15°C)',
      'Light waterproofs (spring rain in Japan)',
      'Medicines: fever, diarrhoea, allergy, pain — for adults and children',
    ],
  },
  {
    id: 'ninos',
    title: 'Babies in Japan — what you need to know',
    icon: '👶',
    type: 'notes',
    content: `NAPPIES AND PRODUCTS:
  - Japanese nappies are the best in the world: Merries, Goon, Moony
  - Buy there — don't bring too many from Tenerife
  - Local pharmacy: look for Matsumoto Kiyoshi or Sugi Pharmacy (ドラッグストア)
  - Baby formula: bring the usual or verify equivalence with Meiji/Morinaga

TRANSPORT:
  - Japanese trains VERY comfortable with a buggy — lifts in almost all stations
  - Taxis without integrated baby seats — the campervan solves this
  - Combinis (7-Eleven, Lawson, FamilyMart): bottle warmers, changing tables

RESTAURANTS:
  - Japanese people love babies — welcome in practically everywhere
  - Family restaurants (ファミレス) have high chairs and a children's menu
  - Family rooms in large shopping centres and stations

TEMPERATURE FEB–MAR IN KANSAI:
  - February: 5–12°C. Coats needed.
  - March: 8–16°C. Variable, layer up.
  - Spring rain: light waterproofs

CHERRY BLOSSOM:
  - Typical bloom: late March / early April in Kansai
  - In 2027 there could be an early bloom at the end of March — possible to catch some at the end of the trip
  - Not guaranteed but a possible bonus`,
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
    if (hd) hd.textContent = 'NOW!';
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
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}
function fmtWeekday(s) {
  return new Date(s + 'T12:00:00').toLocaleDateString('en-GB', { weekday: 'long' });
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
          <div class="dest-notes-label">Research notes</div>
          <div class="dest-notes" contenteditable="true" data-key="${key}" data-placeholder="Add links, restaurants, hours, prices..." spellcheck="false">${note || ''}</div>
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
