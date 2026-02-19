import { Link } from "react-router-dom";

/* SVG-ikonit kategorioille – kuvan tyylisiä yksinkertaisia väri-ikoneja */
const IconCalendar = ({ color }: { color: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="2" y="5" width="28" height="24" rx="4" fill={color} fillOpacity="0.15" />
    <rect x="2" y="5" width="28" height="24" rx="4" stroke={color} strokeWidth="2" />
    <rect x="2" y="5" width="28" height="8" rx="2" fill={color} fillOpacity="0.25" />
    <rect x="8" y="1" width="3" height="8" rx="1.5" fill={color} />
    <rect x="21" y="1" width="3" height="8" rx="1.5" fill={color} />
    <rect x="7" y="18" width="4" height="4" rx="1" fill={color} />
    <rect x="14" y="18" width="4" height="4" rx="1" fill={color} />
    <rect x="21" y="18" width="4" height="4" rx="1" fill={color} />
  </svg>
);

const IconCrypto = ({ color }: { color: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="13" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="2" />
    <path d="M16 8v16M12 11h5.5a2.5 2.5 0 0 1 0 5H12m0 0h6a2.5 2.5 0 0 1 0 5H12" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconAI = ({ color }: { color: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="4" y="8" width="24" height="16" rx="4" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="2" />
    <circle cx="10" cy="16" r="2.5" fill={color} />
    <circle cx="16" cy="16" r="2.5" fill={color} />
    <circle cx="22" cy="16" r="2.5" fill={color} />
    <path d="M16 4v4M10 28v-4M22 28v-4" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconGoal = ({ color }: { color: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="13" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="2" />
    <circle cx="16" cy="16" r="7" stroke={color} strokeWidth="2" />
    <circle cx="16" cy="16" r="3" fill={color} />
    <path d="M16 3v4M16 25v4M3 16h4M25 16h4" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconFood = ({ color }: { color: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M8 4v10a6 6 0 0 0 12 0V4" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M14 4v10" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M22 4c0 0 2 4 2 8s-2 8-2 8" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M8 28h16" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M16 24v4" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconTravel = ({ color }: { color: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M16 3C10.477 3 6 7.477 6 13c0 7 10 16 10 16s10-9 10-16c0-5.523-4.477-10-10-10z" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="2" />
    <circle cx="16" cy="13" r="3.5" fill={color} />
  </svg>
);

const IconHabit = ({ color }: { color: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="3" y="3" width="12" height="12" rx="3" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2" />
    <rect x="17" y="3" width="12" height="12" rx="3" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2" />
    <rect x="3" y="17" width="12" height="12" rx="3" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2" />
    <rect x="17" y="17" width="12" height="12" rx="3" fill={color} fillOpacity="0.6" stroke={color} strokeWidth="2" />
    <path d="M21 23l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPrompt = ({ color }: { color: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="3" y="6" width="26" height="20" rx="4" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="2" />
    <path d="M9 12h6M9 16h10M9 20h8" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <circle cx="25" cy="25" r="5" fill={color} />
    <path d="M23 25h4M25 23v4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconBook = ({ color }: { color: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M6 5h14a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z" fill={color} fillOpacity="0.13" stroke={color} strokeWidth="2" />
    <path d="M23 5h3v22h-3" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M10 11h8M10 16h8M10 21h5" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconFinance = ({ color }: { color: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="3" y="8" width="26" height="18" rx="4" fill={color} fillOpacity="0.13" stroke={color} strokeWidth="2" />
    <path d="M3 14h26" stroke={color} strokeWidth="2" />
    <circle cx="10" cy="20" r="2" fill={color} />
    <path d="M16 5v3M22 5v3M10 5v3" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M16 20h6" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconWork = ({ color }: { color: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="2" y="11" width="28" height="18" rx="4" fill={color} fillOpacity="0.13" stroke={color} strokeWidth="2" />
    <path d="M10 11V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M2 19c7-3 21-3 28 0" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <rect x="14" y="17" width="4" height="4" rx="1" fill={color} />
  </svg>
);

const categories = [
  {
    id: "viikkosuunnitelma",
    icon: <IconCalendar color="#e07b39" />,
    iconBg: "hsl(25 80% 55% / 0.1)",
    title: "Viikkosuunnitelma",
    count: 3,
    slug: "#kategoriat",
  },
  {
    id: "kuukausisuunnitelma",
    icon: <IconCalendar color="#3b82f6" />,
    iconBg: "hsl(217 91% 60% / 0.1)",
    title: "Kuukausisuunnitelma",
    count: 2,
    slug: "#kategoriat",
  },
  {
    id: "matkasuunnitelma",
    icon: <IconTravel color="#10b981" />,
    iconBg: "hsl(160 84% 39% / 0.1)",
    title: "Matkasuunnitelma",
    count: 2,
    slug: "#kategoriat",
  },
  {
    id: "krypto",
    icon: <IconCrypto color="#f59e0b" />,
    iconBg: "hsl(38 92% 50% / 0.1)",
    title: "Krypto & Sijoittaminen",
    count: 4,
    slug: "#kategoriat",
  },
  {
    id: "ai",
    icon: <IconAI color="#8b5cf6" />,
    iconBg: "hsl(263 70% 58% / 0.1)",
    title: "AI & Vibe Coding",
    count: 3,
    slug: "#kategoriat",
  },
  {
    id: "tavoitteet",
    icon: <IconGoal color="#ef4444" />,
    iconBg: "hsl(0 84% 60% / 0.1)",
    title: "Tavoitteet & Kehitys",
    count: 5,
    slug: "#kategoriat",
  },
  {
    id: "tavat",
    icon: <IconHabit color="#06b6d4" />,
    iconBg: "hsl(192 91% 36% / 0.1)",
    title: "Tavat & Rutiinit",
    count: 3,
    slug: "#kategoriat",
  },
  {
    id: "ravinto",
    icon: <IconFood color="#22c55e" />,
    iconBg: "hsl(142 71% 45% / 0.1)",
    title: "Ravinto & Hyvinvointi",
    count: 4,
    slug: "#kategoriat",
  },
  {
    id: "promptit",
    icon: <IconPrompt color="#3b82f6" />,
    iconBg: "hsl(217 91% 60% / 0.1)",
    title: "AI-promptit",
    count: 2,
    slug: "#kategoriat",
  },
  {
    id: "opiskelu",
    icon: <IconBook color="#f97316" />,
    iconBg: "hsl(24 95% 53% / 0.1)",
    title: "Opiskelu & Muistiinpanot",
    count: 5,
    slug: "#kategoriat",
  },
  {
    id: "talous",
    icon: <IconFinance color="#16a34a" />,
    iconBg: "hsl(142 72% 29% / 0.1)",
    title: "Talous & Budjetointi",
    count: 4,
    slug: "#kategoriat",
  },
  {
    id: "tyo",
    icon: <IconWork color="#7c3aed" />,
    iconBg: "hsl(263 70% 50% / 0.1)",
    title: "Työ & Projektit",
    count: 6,
    slug: "#kategoriat",
  },
];

const CategoriesSection = () => {
  return (
    <section id="kategoriat" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <span className="section-label">Tuotekategoriat</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Valitse sinulle sopiva kategoria
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Jokaiselle elämänalueelle on oma templatepakettinsa. Kaikki valmiina käyttöön — duplikoi Notioniin minuuteissa.
          </p>
        </div>

        {/* Category grid – compact Notion-style cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={cat.slug}
              className="group flex flex-col gap-3 p-5 rounded-2xl border bg-card transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              style={{
                borderColor: "hsl(var(--border))",
                boxShadow: "var(--shadow-card)",
              }}
            >
              {/* Icon container */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                style={{ background: cat.iconBg }}
              >
                {cat.icon}
              </div>

              {/* Text */}
              <div>
                <p className="font-bold text-sm text-foreground leading-snug group-hover:text-primary transition-colors">
                  {cat.title}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {cat.count} templat{cat.count === 1 ? "e" : "ea"}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
