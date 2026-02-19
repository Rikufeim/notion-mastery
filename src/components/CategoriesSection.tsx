const categories = [
  {
    emoji: "🪙",
    title: "Krypto & Sijoittaminen",
    color: "hsl(38 90% 54% / 0.08)",
    borderColor: "hsl(38 90% 54% / 0.25)",
    templates: [
      { name: "Crypto Portfolio Tracker", benefit: "Seuraa salkkuasi reaaliajassa", price: "19 €" },
      { name: "Treidauspäiväkirja", benefit: "Analysoi kauppasi ja kehity", price: "14 €" },
    ],
  },
  {
    emoji: "🤖",
    title: "AI & Vibe Coding",
    color: "hsl(222 52% 14% / 0.06)",
    borderColor: "hsl(222 52% 14% / 0.2)",
    templates: [
      { name: "Promptikirjasto Pro", benefit: "Hallitse kaikki AI-promptisi", price: "17 €" },
      { name: "AI Builder OS", benefit: "Projektihallinta AI-rakentajille", price: "24 €" },
    ],
  },
  {
    emoji: "🧠",
    title: "Itsensäkehitys",
    color: "hsl(260 60% 56% / 0.08)",
    borderColor: "hsl(260 60% 56% / 0.25)",
    templates: [
      { name: "Goal Tracker 2025", benefit: "Aseta, seuraa ja saavuta tavoitteesi", price: "12 €" },
      { name: "Habit System", benefit: "Rakenna voittavat tavat 66 päivässä", price: "15 €" },
    ],
  },
  {
    emoji: "🥗",
    title: "Ravinto & Hyvinvointi",
    color: "hsl(142 60% 44% / 0.08)",
    borderColor: "hsl(142 60% 44% / 0.25)",
    templates: [
      { name: "Meal Planner Weekly", benefit: "Suunnittele viikon ateriat helposti", price: "12 €" },
      { name: "Treeni & Ruokapäiväkirja", benefit: "Optimoi tuloksesi datalla", price: "17 €" },
    ],
  },
];

const CategoriesSection = () => {
  return (
    <section id="kategoriat" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="section-label">Tuotekategoriat</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Valitse sinulle sopiva kategoria
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Jokaiselle elämänalueelle on oma templatepakettinsa. Kaikki valmiina käyttöön — duplikoi Notioniin minuuteissa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border p-6 space-y-5"
              style={{
                background: cat.color,
                borderColor: cat.borderColor,
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div className="text-4xl">{cat.emoji}</div>
              <h3 className="font-bold text-lg text-foreground">{cat.title}</h3>

              <div className="space-y-4">
                {cat.templates.map((t) => (
                  <div key={t.name} className="card-template p-4 space-y-2">
                    <p className="font-semibold text-sm text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.benefit}</p>
                    <div className="flex items-center justify-between pt-1">
                      <span className="badge-price">{t.price}</span>
                      <button className="text-xs font-semibold text-primary hover:text-accent transition-colors" style={{ color: "hsl(var(--primary))" }}>
                        Katso lisää →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
