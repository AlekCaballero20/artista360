const STORAGE_KEY = "artista360_v1";
const BACKUP_VERSION = "1.0.0";

const MODULES = {
  songs: {
    title: "Canciones",
    singular: "canción",
    eyebrow: "Catálogo creativo",
    description: "Lleva cada canción desde la primera idea hasta plataformas. Sí, incluso esa demo llamada final_final_ahora_si.wav.",
    empty: "Aún no tienes canciones registradas. Empieza por una idea, una demo o una canción ya publicada.",
    icon: "🎵",
    cardTitle: "title",
    statusKey: "status",
    searchKeys: ["title", "status", "genre", "mood", "platforms", "notes", "lyrics"],
    fields: [
      { key: "title", label: "Título", type: "text", required: true },
      { key: "status", label: "Estado", type: "select", options: ["Idea", "Letra", "Demo", "Arreglo", "Lista para estudio", "Grabada en estudio", "Mezcla", "Master", "Distribuida", "Publicada", "En promoción", "Archivada"] },
      { key: "genre", label: "Género", type: "text", placeholder: "Pop, rock, acústico..." },
      { key: "mood", label: "Mood", type: "text", placeholder: "Nostálgica, energética, íntima..." },
      { key: "keySignature", label: "Tonalidad", type: "text", placeholder: "Re mayor, La menor..." },
      { key: "bpm", label: "BPM", type: "number" },
      { key: "progress", label: "Avance (%)", type: "number", min: 0, max: 100 },
      { key: "releaseDate", label: "Fecha objetivo/publicación", type: "date" },
      { key: "studioRecorded", label: "Grabada en estudio", type: "select", options: ["No", "Sí"] },
      { key: "uploaded", label: "Subida a plataformas", type: "select", options: ["No", "Sí"] },
      { key: "platforms", label: "Plataformas", type: "textarea", placeholder: "Spotify, YouTube, Apple Music..." },
      { key: "links", label: "Links", type: "textarea", placeholder: "Demo, Drive, Spotify, YouTube..." },
      { key: "lyrics", label: "Letra / acordes", type: "textarea" },
      { key: "notes", label: "Notas creativas", type: "textarea" }
    ]
  },
  releases: {
    title: "Lanzamientos",
    singular: "lanzamiento",
    eyebrow: "Publicación y campaña",
    description: "Controla lo que falta antes y después de publicar una canción. Porque lanzar y desaparecer no cuenta como estrategia, aunque sea popular.",
    empty: "No hay lanzamientos creados. Registra uno para activar checklist, links y seguimiento.",
    icon: "🚀",
    cardTitle: "title",
    statusKey: "status",
    searchKeys: ["title", "songName", "status", "distributor", "notes"],
    fields: [
      { key: "title", label: "Nombre del lanzamiento", type: "text", required: true },
      { key: "songName", label: "Canción relacionada", type: "text" },
      { key: "status", label: "Estado", type: "select", options: ["Planeado", "En preparación", "Distribuido", "Publicado", "En promoción", "Cerrado", "Pausado"] },
      { key: "releaseDate", label: "Fecha de lanzamiento", type: "date" },
      { key: "type", label: "Tipo", type: "select", options: ["Sencillo", "EP", "Álbum", "Live session", "Video", "Otro"] },
      { key: "distributor", label: "Distribuidora", type: "text" },
      { key: "smartLink", label: "Smart link", type: "url" },
      { key: "presaveLink", label: "Pre-save", type: "url" },
      { key: "coverReady", label: "Portada lista", type: "select", options: ["No", "Sí"] },
      { key: "creditsReady", label: "Créditos listos", type: "select", options: ["No", "Sí"] },
      { key: "pitchReady", label: "Pitch/playlist enviado", type: "select", options: ["No", "Sí"] },
      { key: "day3Stats", label: "Stats día 3", type: "textarea" },
      { key: "day30Stats", label: "Stats día 30", type: "textarea" },
      { key: "notes", label: "Notas de campaña", type: "textarea" }
    ]
  },
  ideas: {
    title: "Ideas",
    singular: "idea",
    eyebrow: "Bóveda creativa",
    description: "Guarda frases, melodías, conceptos, referencias y futuros impulsos creativos antes de que mueran en una nota del celular.",
    empty: "No hay ideas guardadas. La próxima chispa creativa no tiene que terminar enterrada en WhatsApp.",
    icon: "💡",
    cardTitle: "title",
    statusKey: "status",
    searchKeys: ["title", "type", "status", "description", "linkedSong"],
    fields: [
      { key: "title", label: "Título", type: "text", required: true },
      { key: "type", label: "Tipo", type: "select", options: ["Frase", "Melodía", "Letra", "Concepto visual", "Videoclip", "Reel", "Show", "Colaboración", "Referencia", "Otro"] },
      { key: "status", label: "Estado", type: "select", options: ["Cruda", "Interesante", "En desarrollo", "Usada", "Descartada"] },
      { key: "linkedSong", label: "Canción relacionada", type: "text" },
      { key: "source", label: "Fuente / inspiración", type: "text" },
      { key: "description", label: "Descripción", type: "textarea", required: true },
      { key: "links", label: "Links o referencias", type: "textarea" }
    ]
  },
  content: {
    title: "Contenido",
    singular: "pieza de contenido",
    eyebrow: "Redes y comunidad",
    description: "Planifica reels, posts, historias y videos. No garantiza viralidad, pero al menos organiza el pequeño teatro algorítmico.",
    empty: "Todavía no hay contenido. Crea ideas, prográmalas y mide qué funciona.",
    icon: "📱",
    cardTitle: "title",
    statusKey: "status",
    searchKeys: ["title", "platform", "format", "status", "hook", "copy", "linkedSong", "notes"],
    fields: [
      { key: "title", label: "Título / idea", type: "text", required: true },
      { key: "platform", label: "Plataforma", type: "select", options: ["Instagram", "TikTok", "YouTube", "Facebook", "X", "LinkedIn", "Otra"] },
      { key: "format", label: "Formato", type: "select", options: ["Reel", "TikTok", "Short", "Post", "Carrusel", "Historia", "Live", "Video largo", "Otro"] },
      { key: "status", label: "Estado", type: "select", options: ["Idea", "Guion", "Grabado", "Editado", "Programado", "Publicado", "Analizado", "Descartado"] },
      { key: "publishDate", label: "Fecha", type: "date" },
      { key: "linkedSong", label: "Canción relacionada", type: "text" },
      { key: "hook", label: "Hook inicial", type: "textarea" },
      { key: "copy", label: "Copy / descripción", type: "textarea" },
      { key: "views", label: "Vistas", type: "number" },
      { key: "likes", label: "Likes", type: "number" },
      { key: "comments", label: "Comentarios", type: "number" },
      { key: "shares", label: "Compartidos", type: "number" },
      { key: "saves", label: "Guardados", type: "number" },
      { key: "notes", label: "Aprendizajes", type: "textarea" }
    ]
  },
  events: {
    title: "Eventos",
    singular: "evento",
    eyebrow: "Booking y presentaciones",
    description: "Registra prospectos, eventos confirmados y shows realizados. La agenda no se llena sola, qué sorpresa tan grosera.",
    empty: "Aún no hay eventos. Registra prospectos, contactos o fechas confirmadas.",
    icon: "🎤",
    cardTitle: "name",
    statusKey: "status",
    searchKeys: ["name", "type", "status", "venue", "city", "contactName", "notes"],
    fields: [
      { key: "name", label: "Nombre del evento", type: "text", required: true },
      { key: "type", label: "Tipo", type: "select", options: ["Bar", "Festival", "Privado", "Teatro", "Restaurante", "Corporativo", "Cultural", "Boda", "Streaming", "Otro"] },
      { key: "status", label: "Estado", type: "select", options: ["Prospecto", "Contactado", "Interesado", "Confirmado", "Realizado", "Descartado"] },
      { key: "date", label: "Fecha", type: "date" },
      { key: "venue", label: "Lugar", type: "text" },
      { key: "city", label: "Ciudad", type: "text" },
      { key: "contactName", label: "Contacto", type: "text" },
      { key: "payment", label: "Pago acordado", type: "number" },
      { key: "duration", label: "Duración", type: "text", placeholder: "45 min, 2 horas..." },
      { key: "repertoire", label: "Repertorio", type: "textarea" },
      { key: "techNeeds", label: "Requerimientos técnicos", type: "textarea" },
      { key: "result", label: "Resultado / evaluación", type: "textarea" },
      { key: "notes", label: "Notas", type: "textarea" }
    ]
  },
  contacts: {
    title: "Contactos",
    singular: "contacto",
    eyebrow: "CRM artístico",
    description: "Contactos de bares, medios, estudios, productores, festivales y aliados. Networking, pero con memoria funcional.",
    empty: "No hay contactos. Agrega venues, productores, estudios, managers o aliados.",
    icon: "🤝",
    cardTitle: "name",
    statusKey: "status",
    searchKeys: ["name", "type", "status", "email", "phone", "instagram", "city", "notes"],
    fields: [
      { key: "name", label: "Nombre", type: "text", required: true },
      { key: "type", label: "Tipo", type: "select", options: ["Venue", "Festival", "Productor", "Estudio", "Fotógrafo", "Videógrafo", "Medio", "Playlist", "Manager", "Artista", "Diseñador", "Prensa", "Aliado", "Otro"] },
      { key: "status", label: "Estado", type: "select", options: ["Nuevo", "Contactado", "En conversación", "Aliado", "Pendiente", "Descartado"] },
      { key: "opportunity", label: "Oportunidad", type: "select", options: ["Baja", "Media", "Alta"] },
      { key: "city", label: "Ciudad", type: "text" },
      { key: "email", label: "Email", type: "email" },
      { key: "phone", label: "Teléfono", type: "tel" },
      { key: "instagram", label: "Instagram", type: "text" },
      { key: "lastContact", label: "Último contacto", type: "date" },
      { key: "nextFollowup", label: "Próximo seguimiento", type: "date" },
      { key: "notes", label: "Notas", type: "textarea" }
    ]
  },
  goals: {
    title: "Metas",
    singular: "meta",
    eyebrow: "Objetivos medibles",
    description: "Define metas por mes, trimestre o lanzamiento. La inspiración ayuda, pero una meta con fecha evita el pantano espiritual.",
    empty: "No hay metas activas. Crea una meta de eventos, contenido, canciones o crecimiento.",
    icon: "🎯",
    cardTitle: "title",
    statusKey: "status",
    searchKeys: ["title", "category", "frequency", "status", "notes"],
    fields: [
      { key: "title", label: "Meta", type: "text", required: true },
      { key: "category", label: "Categoría", type: "select", options: ["Canciones", "Lanzamientos", "Contenido", "Eventos", "Contactos", "Finanzas", "Práctica", "Comunidad", "Otra"] },
      { key: "frequency", label: "Frecuencia", type: "select", options: ["Única", "Semanal", "Mensual", "Trimestral", "Anual"] },
      { key: "target", label: "Objetivo numérico", type: "number" },
      { key: "current", label: "Avance actual", type: "number" },
      { key: "dueDate", label: "Fecha límite", type: "date" },
      { key: "status", label: "Estado", type: "select", options: ["Activa", "Completada", "Pausada", "Cancelada"] },
      { key: "notes", label: "Notas", type: "textarea" }
    ]
  },
  tasks: {
    title: "Checklist",
    singular: "tarea",
    eyebrow: "Hábitos y pendientes",
    description: "Tareas recurrentes o puntuales para sostener el proyecto. El arte también necesita rutina, qué tragedia tan útil.",
    empty: "No hay tareas. Crea una checklist semanal o mensual para sostener el crecimiento.",
    icon: "✅",
    cardTitle: "title",
    statusKey: "status",
    searchKeys: ["title", "category", "frequency", "status", "notes"],
    fields: [
      { key: "title", label: "Tarea", type: "text", required: true },
      { key: "category", label: "Categoría", type: "select", options: ["Contenido", "Eventos", "Canciones", "Lanzamientos", "Contactos", "Branding", "Práctica", "Finanzas", "Otra"] },
      { key: "frequency", label: "Frecuencia", type: "select", options: ["Puntual", "Diaria", "Semanal", "Mensual", "Trimestral"] },
      { key: "status", label: "Estado", type: "select", options: ["Pendiente", "En proceso", "Completada", "Pausada"] },
      { key: "dueDate", label: "Fecha límite", type: "date" },
      { key: "importance", label: "Importancia", type: "select", options: ["Baja", "Media", "Alta", "Crítica"] },
      { key: "notes", label: "Notas", type: "textarea" }
    ]
  },
  finances: {
    title: "Finanzas",
    singular: "movimiento",
    eyebrow: "Ingresos y gastos",
    description: "Registra inversión, ingresos por eventos, estudio, publicidad, transporte y demás formas en que el arte dialoga con la billetera.",
    empty: "No hay movimientos financieros. Agrega ingresos o gastos del proyecto.",
    icon: "💸",
    cardTitle: "concept",
    statusKey: "type",
    searchKeys: ["concept", "type", "category", "related", "notes"],
    fields: [
      { key: "concept", label: "Concepto", type: "text", required: true },
      { key: "type", label: "Tipo", type: "select", options: ["Ingreso", "Gasto"] },
      { key: "amount", label: "Valor", type: "number", required: true },
      { key: "date", label: "Fecha", type: "date" },
      { key: "category", label: "Categoría", type: "select", options: ["Evento", "Streaming", "Regalías", "Estudio", "Mezcla", "Master", "Diseño", "Video", "Fotos", "Publicidad", "Transporte", "Instrumentos", "Merch", "Otro"] },
      { key: "related", label: "Relacionado con", type: "text", placeholder: "Canción, evento, campaña..." },
      { key: "notes", label: "Notas", type: "textarea" }
    ]
  }
};

const moduleOrder = Object.keys(MODULES);

const defaultState = () => ({
  version: BACKUP_VERSION,
  createdAt: new Date().toISOString(),
  settings: {
    projectName: "Artista 360",
    artistName: "Mi proyecto artístico",
    tagline: "Sistema de crecimiento artístico",
    description: "Organiza canciones, lanzamientos, contenido, eventos y metas en un solo lugar.",
    genre: "",
    logoDataUrl: "",
    primaryColor: "#6C5CE7",
    secondaryColor: "#00B894",
    accentColor: "#FD79A8",
    backgroundColor: "#F7F4FF",
    monthlyTargets: {
      events: 1,
      reels: 8,
      posts: 4,
      contacts: 10,
      songs: 1
    },
    socials: {
      instagram: "",
      tiktok: "",
      youtube: "",
      spotify: "",
      website: "",
      email: ""
    },
    brand: {
      shortBio: "",
      longBio: "",
      visualIdentity: "",
      audience: "",
      message: "",
      references: "",
      stageRequirements: ""
    },
    customFields: Object.fromEntries(moduleOrder.map(key => [key, []]))
  },
  songs: [],
  releases: [],
  ideas: [],
  content: [],
  events: [],
  contacts: [],
  goals: baseGoals(),
  tasks: baseTasks(),
  finances: []
});

function baseTasks() {
  return [
    makeRecord({ title: "Publicar mínimo 2 reels", category: "Contenido", frequency: "Semanal", status: "Pendiente", importance: "Alta", notes: "Ideal: interpretación, proceso creativo o historia detrás de una canción." }),
    makeRecord({ title: "Contactar 3 lugares o aliados", category: "Eventos", frequency: "Semanal", status: "Pendiente", importance: "Alta", notes: "Bares, cafés, teatros, festivales, marcas o eventos privados." }),
    makeRecord({ title: "Revisar métricas de redes", category: "Contenido", frequency: "Semanal", status: "Pendiente", importance: "Media", notes: "Anotar qué contenido funcionó y por qué." }),
    makeRecord({ title: "Avanzar una canción propia", category: "Canciones", frequency: "Semanal", status: "Pendiente", importance: "Alta", notes: "Letra, demo, arreglo, grabación, mezcla o publicación." }),
    makeRecord({ title: "Actualizar EPK / portafolio", category: "Branding", frequency: "Mensual", status: "Pendiente", importance: "Media", notes: "Bio, fotos, links, shows recientes y material promocional." }),
    makeRecord({ title: "Conseguir o mover 1 evento mensual", category: "Eventos", frequency: "Mensual", status: "Pendiente", importance: "Crítica", notes: "Registrar prospectos, seguimientos y cierres." })
  ];
}

function baseGoals() {
  return [
    makeRecord({ title: "Conseguir 1 evento este mes", category: "Eventos", frequency: "Mensual", target: 1, current: 0, status: "Activa", notes: "Meta base editable para booking mensual." }),
    makeRecord({ title: "Publicar 12 contenidos este mes", category: "Contenido", frequency: "Mensual", target: 12, current: 0, status: "Activa", notes: "Suma reels, posts, historias importantes y shorts." }),
    makeRecord({ title: "Contactar 10 oportunidades", category: "Contactos", frequency: "Mensual", target: 10, current: 0, status: "Activa", notes: "Venues, festivales, marcas, medios o aliados." })
  ];
}

function makeRecord(data = {}) {
  return {
    id: createId(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...data
  };
}

function createId() {
  return (crypto && crypto.randomUUID) ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

let state = loadState();
let currentView = "dashboard";
let currentFilter = "";
let activeQuickModule = "songs";

const appView = document.getElementById("appView");
const viewTitle = document.getElementById("viewTitle");
const viewEyebrow = document.getElementById("viewEyebrow");
const quickAddBtn = document.getElementById("quickAddBtn");
const modalBackdrop = document.getElementById("modalBackdrop");
const recordForm = document.getElementById("recordForm");
const modalTitle = document.getElementById("modalTitle");
const modalEyebrow = document.getElementById("modalEyebrow");
const closeModalBtn = document.getElementById("closeModalBtn");
const exportBtn = document.getElementById("exportBtn");
const importInput = document.getElementById("importInput");
const seedBtn = document.getElementById("seedBtn");
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

init();

function init() {
  applyTheme();
  bindEvents();
  renderShell();
  renderView("dashboard");
}

function bindEvents() {
  document.getElementById("mainNav").addEventListener("click", event => {
    const button = event.target.closest(".nav-item");
    if (!button) return;
    renderView(button.dataset.view);
    sidebar.classList.remove("open");
  });

  quickAddBtn.addEventListener("click", () => {
    const moduleKey = MODULES[currentView] ? currentView : activeQuickModule;
    openRecordModal(moduleKey);
  });

  closeModalBtn.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", event => {
    if (event.target === modalBackdrop) closeModal();
  });

  exportBtn.addEventListener("click", exportBackup);
  importInput.addEventListener("change", importBackup);
  seedBtn.addEventListener("click", loadDemoData);

  menuBtn.addEventListener("click", () => sidebar.classList.toggle("open"));

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeModal();
  });
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return normalizeState(parsed);
  } catch (error) {
    console.error(error);
    return defaultState();
  }
}

function normalizeState(input) {
  const base = defaultState();
  const merged = {
    ...base,
    ...input,
    settings: {
      ...base.settings,
      ...(input.settings || {}),
      monthlyTargets: {
        ...base.settings.monthlyTargets,
        ...((input.settings || {}).monthlyTargets || {})
      },
      socials: {
        ...base.settings.socials,
        ...((input.settings || {}).socials || {})
      },
      brand: {
        ...base.settings.brand,
        ...((input.settings || {}).brand || {})
      },
      customFields: {
        ...base.settings.customFields,
        ...((input.settings || {}).customFields || {})
      }
    }
  };
  moduleOrder.forEach(key => {
    merged[key] = Array.isArray(input[key]) ? input[key] : base[key];
    merged.settings.customFields[key] = Array.isArray(merged.settings.customFields[key]) ? merged.settings.customFields[key] : [];
  });
  return merged;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  renderShell();
}

function applyTheme() {
  const root = document.documentElement;
  root.style.setProperty("--primary", state.settings.primaryColor || "#6C5CE7");
  root.style.setProperty("--secondary", state.settings.secondaryColor || "#00B894");
  root.style.setProperty("--accent", state.settings.accentColor || "#FD79A8");
  root.style.setProperty("--bg", state.settings.backgroundColor || "#F7F4FF");
}

function renderShell() {
  const { settings } = state;
  document.title = `${settings.projectName || "Artista 360"} · Artista 360`;
  document.getElementById("sidebarProjectName").textContent = settings.projectName || "Artista 360";
  document.getElementById("sidebarTagline").textContent = settings.tagline || "Sistema de crecimiento artístico";
  document.getElementById("heroProjectName").textContent = settings.projectName || "Artista 360";
  document.getElementById("heroDescription").textContent = settings.description || "Organiza canciones, lanzamientos, contenido, eventos y metas.";

  const logo = document.getElementById("appLogo");
  if (settings.logoDataUrl) {
    logo.innerHTML = `<img src="${escapeAttr(settings.logoDataUrl)}" alt="Logo del proyecto" />`;
  } else {
    logo.textContent = initials(settings.projectName || "A360");
  }

  const score = calculateHealthScore();
  const scoreEl = document.getElementById("healthScore");
  scoreEl.textContent = score;
  document.querySelector(".score-widget").style.setProperty("--score-angle", `${score * 3.6}deg`);
}

function renderView(view) {
  currentView = view;
  currentFilter = "";
  document.querySelectorAll(".nav-item").forEach(btn => btn.classList.toggle("active", btn.dataset.view === view));

  if (MODULES[view]) {
    activeQuickModule = view;
    const module = MODULES[view];
    viewTitle.textContent = module.title;
    viewEyebrow.textContent = module.eyebrow;
    quickAddBtn.classList.remove("hidden");
    quickAddBtn.textContent = `+ ${capitalize(module.singular)}`;
    renderModule(view);
    return;
  }

  quickAddBtn.classList.toggle("hidden", ["settings", "brandkit"].includes(view));

  const renderers = {
    dashboard: renderDashboard,
    brandkit: renderBrandKit,
    settings: renderSettings
  };

  renderers[view]?.();
}

function renderDashboard() {
  viewTitle.textContent = "Inicio";
  viewEyebrow.textContent = "Panel general";
  quickAddBtn.classList.remove("hidden");
  quickAddBtn.textContent = "+ Crear";

  const monthLabel = new Intl.DateTimeFormat("es-CO", { month: "long", year: "numeric" }).format(new Date());
  const metrics = getDashboardMetrics();
  const nextActions = getNextActions();
  const pipeline = getSongPipeline();
  const money = getFinanceSummary();

  appView.innerHTML = `
    <section class="grid cards-4">
      ${metricCard("Canciones", metrics.songsTotal, `${metrics.songsPublished} publicadas · ${metrics.songsStudio} en estudio`, "🎵")}
      ${metricCard("Contenido este mes", metrics.contentPublishedMonth, `Meta: ${metrics.contentTarget} · ${monthLabel}`, "📱")}
      ${metricCard("Eventos este mes", metrics.eventsMonth, `Meta: ${metrics.eventsTarget} confirmados o realizados`, "🎤")}
      ${metricCard("Balance del mes", formatMoney(money.balance), `${formatMoney(money.income)} ingresos · ${formatMoney(money.expenses)} gastos`, "💸")}
    </section>

    <section class="grid cards-2">
      <article class="panel">
        <div class="panel-header">
          <div>
            <h3>Progreso del mes</h3>
            <p>Indicadores automáticos según tus metas base. El numerito no reemplaza el criterio humano, pero mira cómo lo intenta.</p>
          </div>
        </div>
        <div class="progress-list">
          ${progressItem("Eventos", metrics.eventsMonth, metrics.eventsTarget)}
          ${progressItem("Contenido publicado", metrics.contentPublishedMonth, metrics.contentTarget)}
          ${progressItem("Contactos movidos", metrics.contactsMonth, metrics.contactsTarget)}
          ${progressItem("Canciones publicadas", metrics.songsPublishedMonth, metrics.songsTarget)}
        </div>
      </article>

      <article class="panel">
        <div class="panel-header">
          <div>
            <h3>Próximas acciones</h3>
            <p>Tareas, seguimientos, eventos y lanzamientos que piden atención antes de convertirse en ruina organizada.</p>
          </div>
        </div>
        <div class="action-list">
          ${nextActions.length ? nextActions.map(actionItem).join("") : `<div class="empty-state"><h3>Todo despejado</h3><p>No hay vencimientos cercanos. Sospechoso, pero agradable.</p></div>`}
        </div>
      </article>
    </section>

    <section class="grid cards-2">
      <article class="panel">
        <div class="panel-header">
          <div>
            <h3>Pipeline de canciones</h3>
            <p>Dónde está parado el catálogo propio.</p>
          </div>
          <button class="secondary-btn" data-action="open-module" data-module="songs">Ver canciones</button>
        </div>
        <div class="progress-list">
          ${pipeline.map(item => progressItem(item.label, item.count, Math.max(metrics.songsTotal, 1))).join("")}
        </div>
      </article>

      <article class="panel">
        <div class="panel-header">
          <div>
            <h3>Resumen estratégico</h3>
            <p>Lectura rápida del estado actual del proyecto.</p>
          </div>
        </div>
        ${renderStrategicSummary(metrics, money)}
      </article>
    </section>
  `;

  appView.querySelectorAll("[data-action='open-module']").forEach(btn => {
    btn.addEventListener("click", () => renderView(btn.dataset.module));
  });
}

function renderModule(moduleKey) {
  const module = MODULES[moduleKey];
  const allRecords = [...state[moduleKey]].sort(sortRecords(moduleKey));
  const records = filterRecords(moduleKey, allRecords, currentFilter);

  appView.innerHTML = `
    <section class="filter-bar">
      <div class="inline-actions">
        <input class="search-input" id="moduleSearch" type="search" placeholder="Buscar en ${module.title.toLowerCase()}..." value="${escapeAttr(currentFilter)}" />
        <button class="chip-btn active" data-filter="">Todo</button>
        ${statusFilterButtons(moduleKey)}
      </div>
      <div class="inline-actions">
        <button class="secondary-btn" data-action="export-csv">Exportar CSV</button>
        <button class="primary-btn" data-action="create">+ ${capitalize(module.singular)}</button>
      </div>
    </section>

    ${moduleKey === "finances" ? renderFinanceHeader() : ""}

    <section class="panel">
      <div class="panel-header">
        <div>
          <h3>${module.icon} ${module.title}</h3>
          <p>${module.description}</p>
        </div>
        <span class="tag secondary">${records.length} de ${allRecords.length}</span>
      </div>
      ${records.length ? `<div class="record-grid">${records.map(record => renderRecordCard(moduleKey, record)).join("")}</div>` : emptyState(module.empty, moduleKey)}
    </section>
  `;

  const searchInput = document.getElementById("moduleSearch");
  searchInput.addEventListener("input", event => {
    currentFilter = event.target.value;
    renderModule(moduleKey);
  });
  searchInput.focus();
  searchInput.setSelectionRange(searchInput.value.length, searchInput.value.length);

  appView.querySelector("[data-action='create']").addEventListener("click", () => openRecordModal(moduleKey));
  appView.querySelector("[data-action='export-csv']").addEventListener("click", () => exportModuleCsv(moduleKey));

  appView.querySelectorAll("[data-edit]").forEach(btn => btn.addEventListener("click", () => openRecordModal(moduleKey, btn.dataset.edit)));
  appView.querySelectorAll("[data-delete]").forEach(btn => btn.addEventListener("click", () => deleteRecord(moduleKey, btn.dataset.delete)));
  appView.querySelectorAll("[data-duplicate]").forEach(btn => btn.addEventListener("click", () => duplicateRecord(moduleKey, btn.dataset.duplicate)));
  appView.querySelectorAll("[data-filter]").forEach(btn => btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter || "";
    renderModule(moduleKey);
  }));
}

function statusFilterButtons(moduleKey) {
  const key = MODULES[moduleKey].statusKey;
  const statuses = [...new Set(state[moduleKey].map(item => item[key]).filter(Boolean))].slice(0, 6);
  return statuses.map(status => `<button class="chip-btn" data-filter="${escapeAttr(status)}">${escapeHtml(status)}</button>`).join("");
}

function renderRecordCard(moduleKey, record) {
  const module = MODULES[moduleKey];
  const title = record[module.cardTitle] || `Sin título`;
  const status = record[module.statusKey] || "Sin estado";
  const details = getRecordDetails(moduleKey, record);
  const progress = moduleKey === "goals" ? goalProgress(record) : clamp(Number(record.progress || 0), 0, 100);
  const showProgress = moduleKey === "songs" || moduleKey === "goals";

  return `
    <article class="card record-card">
      <div class="record-title-row">
        <div>
          <span class="status-pill">${escapeHtml(status)}</span>
          <h3>${escapeHtml(title)}</h3>
        </div>
      </div>
      <div class="record-meta">${details.tags.map(tag => `<span class="tag ${tag.kind || ""}">${escapeHtml(tag.text)}</span>`).join("")}</div>
      ${showProgress ? progressItem("Avance", progress, 100) : ""}
      <p>${escapeHtml(details.description || "Sin notas todavía.")}</p>
      ${details.extra ? `<small>${escapeHtml(details.extra)}</small>` : ""}
      <div class="card-actions">
        <button class="secondary-btn" data-edit="${record.id}">Editar</button>
        <button class="ghost-btn" data-duplicate="${record.id}">Duplicar</button>
        <button class="danger-btn" data-delete="${record.id}">Eliminar</button>
      </div>
    </article>
  `;
}

function getRecordDetails(moduleKey, record) {
  const tags = [];
  const add = (text, kind = "") => { if (text !== undefined && text !== null && String(text).trim() !== "") tags.push({ text: String(text), kind }); };
  let description = record.notes || record.description || "";
  let extra = "";

  switch (moduleKey) {
    case "songs":
      add(record.genre, "secondary"); add(record.mood); add(record.releaseDate ? formatDate(record.releaseDate) : "");
      description = record.notes || record.lyrics || "";
      extra = [record.studioRecorded === "Sí" ? "Grabada en estudio" : "", record.uploaded === "Sí" ? "Subida a plataformas" : ""].filter(Boolean).join(" · ");
      break;
    case "releases":
      add(record.type, "secondary"); add(record.releaseDate ? formatDate(record.releaseDate) : ""); add(record.distributor);
      description = record.notes || record.day30Stats || "";
      extra = [record.smartLink ? "Smart link guardado" : "", record.presaveLink ? "Pre-save guardado" : ""].filter(Boolean).join(" · ");
      break;
    case "ideas":
      add(record.type, "secondary"); add(record.linkedSong); add(record.source);
      description = record.description || record.notes || "";
      break;
    case "content":
      add(record.platform, "secondary"); add(record.format); add(record.publishDate ? formatDate(record.publishDate) : "");
      description = record.hook || record.copy || record.notes || "";
      extra = `Vistas: ${number(record.views)} · Likes: ${number(record.likes)} · Guardados: ${number(record.saves)}`;
      break;
    case "events":
      add(record.type, "secondary"); add(record.date ? formatDate(record.date) : ""); add(record.city || record.venue);
      description = record.notes || record.result || record.repertoire || "";
      extra = record.payment ? `Pago: ${formatMoney(record.payment)}` : "";
      break;
    case "contacts":
      add(record.type, "secondary"); add(record.opportunity ? `Oportunidad ${record.opportunity}` : ""); add(record.nextFollowup ? `Seguimiento ${formatDate(record.nextFollowup)}` : "");
      description = record.notes || [record.email, record.phone, record.instagram].filter(Boolean).join(" · ");
      extra = record.city || "";
      break;
    case "goals":
      add(record.category, "secondary"); add(record.frequency); add(record.dueDate ? formatDate(record.dueDate) : "");
      description = record.notes || "";
      extra = `${number(record.current)} / ${number(record.target)} de avance`;
      break;
    case "tasks":
      add(record.category, "secondary"); add(record.frequency); add(record.importance ? `Importancia ${record.importance}` : "");
      description = record.notes || "";
      extra = record.dueDate ? `Fecha límite: ${formatDate(record.dueDate)}` : "";
      break;
    case "finances":
      add(record.category, "secondary"); add(record.date ? formatDate(record.date) : ""); add(record.related);
      description = record.notes || "";
      extra = `${record.type || "Movimiento"}: ${formatMoney(record.amount)}`;
      break;
  }
  return { tags, description, extra };
}

function renderFinanceHeader() {
  const summary = getFinanceSummary(false);
  return `
    <section class="grid cards-3">
      ${metricCard("Ingresos", formatMoney(summary.income), "Mes actual", "📈")}
      ${metricCard("Gastos", formatMoney(summary.expenses), "Mes actual", "📉")}
      ${metricCard("Balance", formatMoney(summary.balance), "Mes actual", "🧾")}
    </section>
  `;
}

function emptyState(text, moduleKey) {
  return `
    <div class="empty-state">
      <h3>Sin registros todavía</h3>
      <p>${escapeHtml(text)}</p>
      <button class="primary-btn" data-action="create">+ Crear ${MODULES[moduleKey].singular}</button>
    </div>
  `;
}

function openRecordModal(moduleKey, recordId = null) {
  const module = MODULES[moduleKey];
  const record = recordId ? state[moduleKey].find(item => item.id === recordId) : null;
  const fields = getModuleFields(moduleKey);

  modalEyebrow.textContent = module.eyebrow;
  modalTitle.textContent = record ? `Editar ${module.singular}` : `Crear ${module.singular}`;

  recordForm.innerHTML = fields.map(field => renderField(field, record?.[field.key])).join("") + `
    <div class="form-actions">
      <button type="button" class="secondary-btn" id="cancelFormBtn">Cancelar</button>
      <button type="submit" class="primary-btn">Guardar</button>
    </div>
  `;

  recordForm.onsubmit = event => {
    event.preventDefault();
    const formData = new FormData(recordForm);
    const payload = {};
    fields.forEach(field => {
      const value = formData.get(field.key);
      payload[field.key] = field.type === "number" ? (value === "" ? "" : Number(value)) : String(value || "").trim();
    });

    if (record) {
      Object.assign(record, payload, { updatedAt: new Date().toISOString() });
      toast(`${capitalize(module.singular)} actualizada.`);
    } else {
      state[moduleKey].unshift(makeRecord(payload));
      toast(`${capitalize(module.singular)} creada.`);
    }

    saveState();
    applyTheme();
    closeModal();
    renderView(moduleKey);
  };

  document.getElementById("cancelFormBtn").addEventListener("click", closeModal);
  modalBackdrop.classList.remove("hidden");
  const first = recordForm.querySelector("input, select, textarea");
  if (first) first.focus();
}

function getModuleFields(moduleKey) {
  const custom = (state.settings.customFields[moduleKey] || []).map(field => ({
    key: `custom_${slugify(field.name)}`,
    label: field.name,
    type: field.type || "text",
    placeholder: "Campo personalizado"
  }));
  return [...MODULES[moduleKey].fields, ...custom];
}

function renderField(field, value = "") {
  const isFull = ["textarea", "url"].includes(field.type) || ["lyrics", "notes", "description", "hook", "copy", "links"].includes(field.key);
  const required = field.required ? "required" : "";
  const label = `${escapeHtml(field.label)}${field.required ? " *" : ""}`;
  const hint = field.hint ? `<span class="form-hint">${escapeHtml(field.hint)}</span>` : "";
  const commonAttrs = `name="${escapeAttr(field.key)}" id="field_${escapeAttr(field.key)}" ${required}`;

  let input = "";
  if (field.type === "select") {
    input = `<select class="form-control" ${commonAttrs}>${(field.options || []).map(option => `<option value="${escapeAttr(option)}" ${String(value) === option ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select>`;
  } else if (field.type === "textarea") {
    input = `<textarea class="form-control" ${commonAttrs} placeholder="${escapeAttr(field.placeholder || "")}">${escapeHtml(value || "")}</textarea>`;
  } else {
    input = `<input class="form-control" type="${field.type || "text"}" ${commonAttrs} value="${escapeAttr(value || "")}" placeholder="${escapeAttr(field.placeholder || "")}" ${field.min !== undefined ? `min="${field.min}"` : ""} ${field.max !== undefined ? `max="${field.max}"` : ""} />`;
  }

  return `<div class="form-field ${isFull ? "full-width" : ""}"><label for="field_${escapeAttr(field.key)}">${label}</label>${input}${hint}</div>`;
}

function closeModal() {
  modalBackdrop.classList.add("hidden");
  recordForm.innerHTML = "";
  recordForm.onsubmit = null;
}

function deleteRecord(moduleKey, recordId) {
  const module = MODULES[moduleKey];
  const record = state[moduleKey].find(item => item.id === recordId);
  if (!record) return;
  const title = record[module.cardTitle] || module.singular;
  const confirmed = confirm(`¿Eliminar “${title}”? Esta acción no se puede deshacer desde la app. Dramático, pero cierto.`);
  if (!confirmed) return;
  state[moduleKey] = state[moduleKey].filter(item => item.id !== recordId);
  saveState();
  renderView(moduleKey);
  toast(`${capitalize(module.singular)} eliminada.`);
}

function duplicateRecord(moduleKey, recordId) {
  const record = state[moduleKey].find(item => item.id === recordId);
  if (!record) return;
  const clone = { ...record, id: createId(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
  const titleKey = MODULES[moduleKey].cardTitle;
  clone[titleKey] = `${clone[titleKey] || "Copia"} (copia)`;
  state[moduleKey].unshift(clone);
  saveState();
  renderView(moduleKey);
  toast("Registro duplicado.");
}

function filterRecords(moduleKey, records, query) {
  const clean = normalize(query);
  if (!clean) return records;
  const keys = MODULES[moduleKey].searchKeys;
  return records.filter(record => keys.some(key => normalize(record[key]).includes(clean)));
}

function sortRecords(moduleKey) {
  const dateKeys = {
    releases: "releaseDate",
    content: "publishDate",
    events: "date",
    contacts: "nextFollowup",
    goals: "dueDate",
    tasks: "dueDate",
    finances: "date",
    songs: "releaseDate",
    ideas: "createdAt"
  };
  const key = dateKeys[moduleKey] || "createdAt";
  return (a, b) => String(b[key] || b.updatedAt || "").localeCompare(String(a[key] || a.updatedAt || ""));
}

function renderBrandKit() {
  viewTitle.textContent = "Brand Kit";
  viewEyebrow.textContent = "Identidad artística";
  const { settings } = state;
  appView.innerHTML = `
    <section class="grid cards-3">
      ${metricCard("Proyecto", escapeHtml(settings.projectName || "Sin nombre"), settings.genre || "Género no definido", "✨")}
      ${metricCard("Canciones publicadas", state.songs.filter(song => song.status === "Publicada" || song.uploaded === "Sí").length, "Catálogo visible", "🎵")}
      ${metricCard("Eventos realizados", state.events.filter(event => event.status === "Realizado").length, "Historial escénico", "🎤")}
    </section>

    <section class="grid cards-2">
      <article class="panel">
        <div class="panel-header">
          <div>
            <h3>Bio corta</h3>
            <p>Para Instagram, convocatorias o portafolios rápidos.</p>
          </div>
          <button class="secondary-btn" data-copy="shortBio">Copiar</button>
        </div>
        <p>${escapeHtml(settings.brand.shortBio || "Aún no has escrito una bio corta.")}</p>
      </article>

      <article class="panel">
        <div class="panel-header">
          <div>
            <h3>Bio larga</h3>
            <p>Para prensa, EPK o dossier.</p>
          </div>
          <button class="secondary-btn" data-copy="longBio">Copiar</button>
        </div>
        <p>${escapeHtml(settings.brand.longBio || "Aún no has escrito una bio larga.")}</p>
      </article>
    </section>

    <section class="panel">
      <div class="panel-header">
        <div>
          <h3>Identidad y materiales</h3>
          <p>Lo esencial para presentarse sin improvisar cada vez que alguien pide “una descripción cortica del proyecto”.</p>
        </div>
        <button class="primary-btn" id="editBrandBtn">Editar Brand Kit</button>
      </div>
      <div class="grid cards-2">
        ${brandBlock("Mensaje artístico", settings.brand.message)}
        ${brandBlock("Público objetivo", settings.brand.audience)}
        ${brandBlock("Identidad visual", settings.brand.visualIdentity)}
        ${brandBlock("Referencias", settings.brand.references)}
        ${brandBlock("Requerimientos técnicos", settings.brand.stageRequirements)}
        ${brandBlock("Redes", socialSummary(settings.socials))}
      </div>
    </section>
  `;

  document.getElementById("editBrandBtn").addEventListener("click", openBrandModal);
  appView.querySelectorAll("[data-copy]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const text = state.settings.brand[btn.dataset.copy] || "";
      await navigator.clipboard?.writeText(text);
      toast("Texto copiado.");
    });
  });
}

function brandBlock(title, content) {
  return `<article class="card"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(content || "Pendiente por completar.")}</p></article>`;
}

function socialSummary(socials) {
  return Object.entries(socials).filter(([, value]) => value).map(([key, value]) => `${key}: ${value}`).join("\n") || "Sin redes registradas.";
}

function openBrandModal() {
  modalEyebrow.textContent = "Identidad artística";
  modalTitle.textContent = "Editar Brand Kit";
  const fields = [
    { key: "shortBio", label: "Bio corta", type: "textarea" },
    { key: "longBio", label: "Bio larga", type: "textarea" },
    { key: "message", label: "Mensaje artístico", type: "textarea" },
    { key: "audience", label: "Público objetivo", type: "textarea" },
    { key: "visualIdentity", label: "Identidad visual", type: "textarea" },
    { key: "references", label: "Referencias", type: "textarea" },
    { key: "stageRequirements", label: "Requerimientos técnicos", type: "textarea" }
  ];
  recordForm.innerHTML = fields.map(field => renderField(field, state.settings.brand[field.key])).join("") + `
    <div class="form-actions">
      <button type="button" class="secondary-btn" id="cancelFormBtn">Cancelar</button>
      <button type="submit" class="primary-btn">Guardar Brand Kit</button>
    </div>
  `;
  recordForm.onsubmit = event => {
    event.preventDefault();
    const formData = new FormData(recordForm);
    fields.forEach(field => state.settings.brand[field.key] = String(formData.get(field.key) || "").trim());
    saveState();
    closeModal();
    renderBrandKit();
    toast("Brand Kit actualizado.");
  };
  document.getElementById("cancelFormBtn").addEventListener("click", closeModal);
  modalBackdrop.classList.remove("hidden");
}

function renderSettings() {
  viewTitle.textContent = "Ajustes";
  viewEyebrow.textContent = "Personalización";
  const s = state.settings;

  appView.innerHTML = `
    <section class="grid cards-2">
      <article class="panel">
        <div class="panel-header">
          <div>
            <h3>Proyecto</h3>
            <p>Nombre, descripción, colores, logo y metas mensuales base.</p>
          </div>
        </div>
        <form id="settingsForm" class="record-form">
          ${settingsField("projectName", "Nombre de la app/proyecto", s.projectName)}
          ${settingsField("artistName", "Nombre artístico", s.artistName)}
          ${settingsField("tagline", "Lema", s.tagline)}
          ${settingsField("genre", "Género principal", s.genre)}
          ${settingsTextArea("description", "Descripción", s.description)}
          ${colorField("primaryColor", "Color principal", s.primaryColor)}
          ${colorField("secondaryColor", "Color secundario", s.secondaryColor)}
          ${colorField("accentColor", "Color acento", s.accentColor)}
          ${colorField("backgroundColor", "Color de fondo", s.backgroundColor)}
          ${settingsNumber("target_events", "Meta mensual de eventos", s.monthlyTargets.events)}
          ${settingsNumber("target_reels", "Meta mensual de reels", s.monthlyTargets.reels)}
          ${settingsNumber("target_posts", "Meta mensual de posts", s.monthlyTargets.posts)}
          ${settingsNumber("target_contacts", "Meta mensual de contactos", s.monthlyTargets.contacts)}
          ${settingsNumber("target_songs", "Meta mensual de canciones publicadas", s.monthlyTargets.songs)}
          <div class="form-field full-width">
            <label for="logoInput">Logo / foto del proyecto</label>
            <input class="form-control" type="file" id="logoInput" accept="image/*" />
            <span class="form-hint">Se guarda como imagen local dentro del navegador. No se sube a ninguna parte, porque aquí no estamos invocando servidores misteriosos.</span>
          </div>
          <div class="form-actions">
            <button type="button" class="secondary-btn" id="resetLogoBtn">Quitar logo</button>
            <button type="submit" class="primary-btn">Guardar ajustes</button>
          </div>
        </form>
      </article>

      <article class="panel">
        <div class="panel-header">
          <div>
            <h3>Redes y links</h3>
            <p>Guarda los enlaces principales del proyecto.</p>
          </div>
        </div>
        <form id="socialForm" class="record-form">
          ${socialField("instagram", "Instagram", s.socials.instagram)}
          ${socialField("tiktok", "TikTok", s.socials.tiktok)}
          ${socialField("youtube", "YouTube", s.socials.youtube)}
          ${socialField("spotify", "Spotify", s.socials.spotify)}
          ${socialField("website", "Sitio web", s.socials.website)}
          ${socialField("email", "Email", s.socials.email)}
          <div class="form-actions">
            <button type="submit" class="primary-btn">Guardar redes</button>
          </div>
        </form>
      </article>
    </section>

    <section class="grid cards-2">
      <article class="panel">
        <div class="panel-header">
          <div>
            <h3>Campos personalizados</h3>
            <p>Agrega campos extra por módulo. Así cada artista ajusta la app a su forma de trabajar, porque aparentemente nadie podía ser normal.</p>
          </div>
        </div>
        <form id="customFieldForm" class="record-form">
          <div class="form-field">
            <label for="customModule">Módulo</label>
            <select class="form-control" id="customModule" name="module">${moduleOrder.map(key => `<option value="${key}">${MODULES[key].title}</option>`).join("")}</select>
          </div>
          <div class="form-field">
            <label for="customName">Nombre del campo</label>
            <input class="form-control" id="customName" name="name" required placeholder="Ej: Productor, Ciudad objetivo..." />
          </div>
          <div class="form-field">
            <label for="customType">Tipo</label>
            <select class="form-control" id="customType" name="type">
              <option value="text">Texto</option>
              <option value="textarea">Texto largo</option>
              <option value="number">Número</option>
              <option value="date">Fecha</option>
              <option value="url">Link</option>
            </select>
          </div>
          <div class="form-actions">
            <button type="submit" class="primary-btn">Agregar campo</button>
          </div>
        </form>
        <div class="timeline" id="customFieldList">${renderCustomFieldsList()}</div>
      </article>

      <article class="panel">
        <div class="panel-header">
          <div>
            <h3>Datos locales</h3>
            <p>Exporta, importa o reinicia. Haz backup antes de tocar botones con cara de desastre.</p>
          </div>
        </div>
        <div class="import-export-box">
          <button class="secondary-btn" id="downloadBackupBtn">Exportar backup JSON</button>
          <button class="secondary-btn" id="downloadAllCsvBtn">Exportar todo en CSV</button>
          <label class="ghost-btn file-label">Importar backup JSON<input type="file" id="settingsImportInput" accept="application/json" /></label>
          <button class="danger-btn" id="resetAppBtn">Reiniciar app</button>
        </div>
      </article>
    </section>
  `;

  bindSettingsForms();
}

function settingsField(key, label, value) {
  return `<div class="form-field"><label for="${key}">${label}</label><input class="form-control" id="${key}" name="${key}" value="${escapeAttr(value || "")}" /></div>`;
}

function settingsTextArea(key, label, value) {
  return `<div class="form-field full-width"><label for="${key}">${label}</label><textarea class="form-control" id="${key}" name="${key}">${escapeHtml(value || "")}</textarea></div>`;
}

function settingsNumber(key, label, value) {
  return `<div class="form-field"><label for="${key}">${label}</label><input class="form-control" type="number" min="0" id="${key}" name="${key}" value="${escapeAttr(value || 0)}" /></div>`;
}

function colorField(key, label, value) {
  return `<div class="form-field"><label for="${key}">${label}</label><input class="form-control" type="color" id="${key}" name="${key}" value="${escapeAttr(value || "#6C5CE7")}" /></div>`;
}

function socialField(key, label, value) {
  return `<div class="form-field"><label for="social_${key}">${label}</label><input class="form-control" id="social_${key}" name="${key}" value="${escapeAttr(value || "")}" /></div>`;
}

function bindSettingsForms() {
  document.getElementById("settingsForm").addEventListener("submit", async event => {
    event.preventDefault();
    const fd = new FormData(event.target);
    Object.assign(state.settings, {
      projectName: String(fd.get("projectName") || "").trim(),
      artistName: String(fd.get("artistName") || "").trim(),
      tagline: String(fd.get("tagline") || "").trim(),
      genre: String(fd.get("genre") || "").trim(),
      description: String(fd.get("description") || "").trim(),
      primaryColor: fd.get("primaryColor"),
      secondaryColor: fd.get("secondaryColor"),
      accentColor: fd.get("accentColor"),
      backgroundColor: fd.get("backgroundColor")
    });
    state.settings.monthlyTargets = {
      events: Number(fd.get("target_events") || 0),
      reels: Number(fd.get("target_reels") || 0),
      posts: Number(fd.get("target_posts") || 0),
      contacts: Number(fd.get("target_contacts") || 0),
      songs: Number(fd.get("target_songs") || 0)
    };

    const logoFile = document.getElementById("logoInput").files[0];
    if (logoFile) state.settings.logoDataUrl = await fileToDataUrl(logoFile);

    saveState();
    applyTheme();
    renderView("settings");
    toast("Ajustes guardados.");
  });

  document.getElementById("resetLogoBtn").addEventListener("click", () => {
    state.settings.logoDataUrl = "";
    saveState();
    renderView("settings");
    toast("Logo removido.");
  });

  document.getElementById("socialForm").addEventListener("submit", event => {
    event.preventDefault();
    const fd = new FormData(event.target);
    Object.keys(state.settings.socials).forEach(key => state.settings.socials[key] = String(fd.get(key) || "").trim());
    saveState();
    toast("Redes guardadas.");
  });

  document.getElementById("customFieldForm").addEventListener("submit", event => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const module = fd.get("module");
    const name = String(fd.get("name") || "").trim();
    const type = fd.get("type");
    if (!name || !MODULES[module]) return;
    const exists = state.settings.customFields[module].some(field => slugify(field.name) === slugify(name));
    if (exists) {
      toast("Ese campo ya existe en el módulo.");
      return;
    }
    state.settings.customFields[module].push({ name, type });
    saveState();
    renderView("settings");
    toast("Campo personalizado agregado.");
  });

  document.getElementById("downloadBackupBtn").addEventListener("click", exportBackup);
  document.getElementById("downloadAllCsvBtn").addEventListener("click", exportAllCsvZipless);
  document.getElementById("settingsImportInput").addEventListener("change", importBackup);
  document.getElementById("resetAppBtn").addEventListener("click", resetApp);

  document.querySelectorAll("[data-remove-field]").forEach(btn => {
    btn.addEventListener("click", () => removeCustomField(btn.dataset.module, btn.dataset.removeField));
  });
}

function renderCustomFieldsList() {
  const entries = [];
  moduleOrder.forEach(module => {
    (state.settings.customFields[module] || []).forEach(field => entries.push({ module, ...field }));
  });
  if (!entries.length) return `<div class="empty-state"><h3>Sin campos extra</h3><p>Agrega uno para adaptar cualquier módulo.</p></div>`;
  return entries.map(field => `
    <div class="list-item">
      <div>
        <strong>${escapeHtml(field.name)}</strong>
        <small>${MODULES[field.module].title} · ${escapeHtml(field.type)}</small>
      </div>
      <button class="danger-btn" data-module="${field.module}" data-remove-field="${escapeAttr(field.name)}">Eliminar</button>
    </div>
  `).join("");
}

function removeCustomField(moduleKey, name) {
  const confirmed = confirm(`¿Eliminar el campo “${name}”? Los datos ya guardados no se borran del backup, pero dejarán de verse en el formulario.`);
  if (!confirmed) return;
  state.settings.customFields[moduleKey] = state.settings.customFields[moduleKey].filter(field => field.name !== name);
  saveState();
  renderView("settings");
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function exportBackup() {
  const payload = JSON.stringify({ ...state, exportedAt: new Date().toISOString() }, null, 2);
  downloadText(`artista-360-backup-${dateStamp()}.json`, payload, "application/json");
  toast("Backup exportado.");
}

function importBackup(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);
      if (!imported.settings) throw new Error("Archivo inválido");
      const confirmed = confirm("Esto reemplazará los datos actuales de esta app. Hazlo solo si el backup es el correcto, no uno llamado prueba_final_real_definitivo.json por fe ciega.");
      if (!confirmed) return;
      state = normalizeState(imported);
      saveState();
      applyTheme();
      renderView("dashboard");
      toast("Backup importado.");
    } catch (error) {
      console.error(error);
      toast("No se pudo importar el archivo. Revisa que sea un backup JSON de Artista 360.");
    } finally {
      event.target.value = "";
    }
  };
  reader.readAsText(file);
}

function exportModuleCsv(moduleKey) {
  const records = state[moduleKey];
  const fields = getModuleFields(moduleKey).map(field => field.key);
  const csv = toCsv(records, ["id", "createdAt", "updatedAt", ...fields]);
  downloadText(`artista-360-${moduleKey}-${dateStamp()}.csv`, csv, "text/csv;charset=utf-8");
  toast("CSV exportado.");
}

function exportAllCsvZipless() {
  const parts = moduleOrder.map(moduleKey => {
    const fields = getModuleFields(moduleKey).map(field => field.key);
    return `### ${MODULES[moduleKey].title}\n${toCsv(state[moduleKey], ["id", "createdAt", "updatedAt", ...fields])}`;
  }).join("\n\n");
  downloadText(`artista-360-todos-los-csv-${dateStamp()}.txt`, parts, "text/plain;charset=utf-8");
  toast("Archivo de CSVs exportado.");
}

function toCsv(records, columns) {
  const header = columns.map(csvCell).join(",");
  const rows = records.map(record => columns.map(column => csvCell(record[column])).join(","));
  return [header, ...rows].join("\n");
}

function csvCell(value) {
  const clean = value === undefined || value === null ? "" : String(value);
  return `"${clean.replace(/"/g, '""')}"`;
}

function downloadText(filename, text, type) {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function resetApp() {
  const confirmed = confirm("¿Reiniciar Artista 360? Esto borra los datos locales de este navegador. Exporta backup antes si te queda una neurona de supervivencia digital.");
  if (!confirmed) return;
  localStorage.removeItem(STORAGE_KEY);
  state = defaultState();
  saveState();
  applyTheme();
  renderView("dashboard");
  toast("App reiniciada.");
}

function loadDemoData() {
  const confirmed = state.songs.length || state.content.length || state.events.length
    ? confirm("Esto agregará datos de ejemplo sin borrar lo actual. ¿Continuar?")
    : true;
  if (!confirmed) return;

  state.songs.unshift(
    makeRecord({ title: "Ciudad Interior", status: "Demo", genre: "Pop alternativo", mood: "Íntima", keySignature: "La menor", bpm: 92, progress: 45, studioRecorded: "No", uploaded: "No", notes: "Trabajar segunda estrofa y puente." }),
    makeRecord({ title: "Luz de Domingo", status: "Publicada", genre: "Acústico", mood: "Cálida", keySignature: "Re mayor", bpm: 78, progress: 100, releaseDate: thisMonthDate(5), studioRecorded: "Sí", uploaded: "Sí", platforms: "Spotify, YouTube", notes: "Revisar contenido post-lanzamiento." })
  );
  state.releases.unshift(
    makeRecord({ title: "Luz de Domingo", songName: "Luz de Domingo", status: "En promoción", releaseDate: thisMonthDate(5), type: "Sencillo", distributor: "Distribuidora", coverReady: "Sí", creditsReady: "Sí", pitchReady: "Sí", notes: "Crear reels con fragmentos acústicos y detrás de cámaras." })
  );
  state.ideas.unshift(
    makeRecord({ title: "Reel: cómo nació el coro", type: "Reel", status: "Interesante", linkedSong: "Ciudad Interior", description: "Contar en 20 segundos de dónde salió la frase principal del coro." })
  );
  state.content.unshift(
    makeRecord({ title: "Verso acústico en sala", platform: "Instagram", format: "Reel", status: "Publicado", publishDate: thisMonthDate(6), linkedSong: "Luz de Domingo", views: 1200, likes: 130, comments: 8, shares: 12, saves: 24, hook: "Esta canción nació de un domingo rarísimo...", notes: "Funcionó el tono íntimo." }),
    makeRecord({ title: "Proceso de arreglo", platform: "TikTok", format: "TikTok", status: "Guion", publishDate: thisMonthDate(12), linkedSong: "Ciudad Interior", hook: "Así cambia una canción cuando le agregas un bajo sencillo." })
  );
  state.events.unshift(
    makeRecord({ name: "Show acústico Café Central", type: "Restaurante", status: "Confirmado", date: thisMonthDate(22), venue: "Café Central", city: "Bogotá", payment: 350000, duration: "60 minutos", repertoire: "Propias + covers acústicos", notes: "Confirmar sonido y hora de prueba." })
  );
  state.contacts.unshift(
    makeRecord({ name: "Programador Cultural", type: "Festival", status: "Contactado", opportunity: "Alta", city: "Bogotá", instagram: "@festivaldemo", lastContact: thisMonthDate(2), nextFollowup: thisMonthDate(14), notes: "Enviar EPK actualizado y video en vivo." })
  );
  state.finances.unshift(
    makeRecord({ concept: "Pago show Café Central", type: "Ingreso", amount: 350000, date: thisMonthDate(22), category: "Evento", related: "Show acústico Café Central" }),
    makeRecord({ concept: "Diseño portada", type: "Gasto", amount: 90000, date: thisMonthDate(4), category: "Diseño", related: "Luz de Domingo" })
  );

  saveState();
  renderView("dashboard");
  toast("Datos demo cargados.");
}

function getDashboardMetrics() {
  const targets = state.settings.monthlyTargets;
  const contentTarget = Number(targets.reels || 0) + Number(targets.posts || 0);
  return {
    songsTotal: state.songs.length,
    songsPublished: state.songs.filter(song => song.status === "Publicada" || song.uploaded === "Sí").length,
    songsStudio: state.songs.filter(song => song.studioRecorded === "Sí" || song.status === "Grabada en estudio").length,
    songsPublishedMonth: state.songs.filter(song => (song.status === "Publicada" || song.uploaded === "Sí") && isThisMonth(song.releaseDate)).length,
    songsTarget: Number(targets.songs || 1),
    contentPublishedMonth: state.content.filter(item => item.status === "Publicado" && isThisMonth(item.publishDate)).length,
    contentTarget: contentTarget || 1,
    eventsMonth: state.events.filter(event => ["Confirmado", "Realizado"].includes(event.status) && isThisMonth(event.date)).length,
    eventsTarget: Number(targets.events || 1),
    contactsMonth: state.contacts.filter(contact => isThisMonth(contact.lastContact)).length,
    contactsTarget: Number(targets.contacts || 1)
  };
}

function calculateHealthScore() {
  const m = getDashboardMetrics();
  const taskTotal = state.tasks.length || 1;
  const taskScore = state.tasks.filter(task => task.status === "Completada").length / taskTotal;
  const components = [
    ratio(m.eventsMonth, m.eventsTarget),
    ratio(m.contentPublishedMonth, m.contentTarget),
    ratio(m.contactsMonth, m.contactsTarget),
    ratio(m.songsPublishedMonth, m.songsTarget),
    taskScore
  ];
  return Math.round((components.reduce((sum, value) => sum + value, 0) / components.length) * 100);
}

function getSongPipeline() {
  const groups = ["Idea", "Letra", "Demo", "Grabada en estudio", "Master", "Distribuida", "Publicada"];
  return groups.map(label => ({ label, count: state.songs.filter(song => song.status === label || (label === "Publicada" && song.uploaded === "Sí")).length }));
}

function getNextActions() {
  const today = startOfDay(new Date());
  const soon = new Date(today);
  soon.setDate(soon.getDate() + 30);
  const items = [];

  state.tasks.filter(task => task.status !== "Completada" && task.dueDate && withinRange(task.dueDate, today, soon))
    .forEach(task => items.push({ title: task.title, meta: `Checklist · vence ${formatDate(task.dueDate)}`, view: "tasks" }));
  state.contacts.filter(contact => contact.nextFollowup && withinRange(contact.nextFollowup, today, soon))
    .forEach(contact => items.push({ title: `Seguimiento: ${contact.name}`, meta: `Contacto · ${formatDate(contact.nextFollowup)}`, view: "contacts" }));
  state.events.filter(event => event.date && withinRange(event.date, today, soon))
    .forEach(event => items.push({ title: event.name, meta: `Evento · ${formatDate(event.date)} · ${event.status || ""}`, view: "events" }));
  state.releases.filter(release => release.releaseDate && withinRange(release.releaseDate, today, soon))
    .forEach(release => items.push({ title: release.title, meta: `Lanzamiento · ${formatDate(release.releaseDate)} · ${release.status || ""}`, view: "releases" }));

  return items.sort((a, b) => extractDate(a.meta).localeCompare(extractDate(b.meta))).slice(0, 8);
}

function actionItem(item) {
  return `
    <button class="list-item" data-action="open-module" data-module="${item.view}">
      <div><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.meta)}</small></div>
      <span>→</span>
    </button>
  `;
}

function getFinanceSummary(thisMonthOnly = true) {
  const records = thisMonthOnly ? state.finances.filter(item => isThisMonth(item.date)) : state.finances;
  const income = records.filter(item => item.type === "Ingreso").reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const expenses = records.filter(item => item.type === "Gasto").reduce((sum, item) => sum + Number(item.amount || 0), 0);
  return { income, expenses, balance: income - expenses };
}

function renderStrategicSummary(metrics, money) {
  const lines = [
    ["Catálogo", metrics.songsTotal ? `${metrics.songsPublished}/${metrics.songsTotal} canciones publicadas` : "Aún no hay canciones"],
    ["Contenido", `${metrics.contentPublishedMonth}/${metrics.contentTarget} publicaciones este mes`],
    ["Eventos", `${metrics.eventsMonth}/${metrics.eventsTarget} eventos confirmados o realizados`],
    ["Contactos", `${metrics.contactsMonth}/${metrics.contactsTarget} contactos movidos este mes`],
    ["Finanzas", `Balance mensual: ${formatMoney(money.balance)}`]
  ];
  return lines.map(([key, value]) => `<div class="kpi-line"><strong>${key}</strong><span>${value}</span></div>`).join("");
}

function metricCard(label, value, hint, emoji) {
  return `<article class="metric-card"><span>${emoji} ${label}</span><strong>${value}</strong><small>${escapeHtml(hint || "")}</small></article>`;
}

function progressItem(label, current, target) {
  const percent = Math.round(ratio(Number(current || 0), Number(target || 1)) * 100);
  return `
    <div class="progress-item">
      <div class="progress-meta"><span>${escapeHtml(label)}</span><span>${number(current)} / ${number(target)} · ${percent}%</span></div>
      <div class="progress-track"><div class="progress-fill" style="width:${clamp(percent, 0, 100)}%"></div></div>
    </div>
  `;
}

function goalProgress(goal) {
  return Math.round(ratio(Number(goal.current || 0), Number(goal.target || 1)) * 100);
}

function ratio(current, target) {
  if (!target || target <= 0) return current > 0 ? 1 : 0;
  return clamp(current / target, 0, 1);
}

function clamp(value, min, max) {
  return Math.min(Math.max(Number(value) || 0, min), max);
}

function isThisMonth(dateString) {
  if (!dateString) return false;
  const date = new Date(`${dateString}T12:00:00`);
  const now = new Date();
  return date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth();
}

function withinRange(dateString, start, end) {
  if (!dateString) return false;
  const date = startOfDay(new Date(`${dateString}T12:00:00`));
  return date >= start && date <= end;
}

function startOfDay(date) {
  const copy = new Date(date);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function extractDate(text) {
  const match = text.match(/\d{1,2}\s\w+\s\d{4}/);
  return match ? match[0] : text;
}

function thisMonthDate(day) {
  const now = new Date();
  const date = new Date(now.getFullYear(), now.getMonth(), day);
  return date.toISOString().slice(0, 10);
}

function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(`${dateString}T12:00:00`);
  return new Intl.DateTimeFormat("es-CO", { day: "2-digit", month: "short", year: "numeric" }).format(date);
}

function formatMoney(value) {
  return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(Number(value || 0));
}

function number(value) {
  return new Intl.NumberFormat("es-CO", { maximumFractionDigits: 0 }).format(Number(value || 0));
}

function dateStamp() {
  return new Date().toISOString().slice(0, 10);
}

function initials(text) {
  const words = String(text).trim().split(/\s+/).filter(Boolean);
  if (!words.length) return "A360";
  if (words.length === 1) return words[0].slice(0, 4).toUpperCase();
  return words.slice(0, 2).map(word => word[0]).join("").toUpperCase();
}

function normalize(value) {
  return String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function capitalize(text) {
  return String(text || "").charAt(0).toUpperCase() + String(text || "").slice(1);
}

function slugify(text) {
  return normalize(text).replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "").slice(0, 42) || createId().slice(0, 8);
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" }[char]));
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}

function toast(message) {
  const toastEl = document.getElementById("toast");
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toastEl.classList.remove("show"), 2600);
}
