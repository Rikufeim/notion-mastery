const steps = [
  {
    number: "01",
    emoji: "🛒",
    title: "Osta template",
    description: "Valitse sinulle sopiva template ja maksa turvallisesti. Kertamaksu, ei tilauksia.",
  },
  {
    number: "02",
    emoji: "📧",
    title: "Saat linkin heti",
    description: "Saat sähköpostiisi Notion-linkin välittömästi ostoksen jälkeen. Ei odottelua.",
  },
  {
    number: "03",
    emoji: "🚀",
    title: "Duplikoi Notioniin",
    description: "Klikkaa 'Duplicate' ja template on suoraan omassa Notionissasi. Aloita käyttö heti!",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="miten" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="section-label">Prosessi</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Miten se toimii?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Kolme yksinkertaista vaihetta — template käyttöön alle 5 minuutissa.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden sm:block absolute top-12 left-1/4 right-1/4 h-px" style={{ background: "linear-gradient(90deg, hsl(var(--border)), hsl(var(--accent) / 0.5), hsl(var(--border)))" }}></div>

          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center space-y-5">
              {/* Step circle */}
              <div
                className="w-24 h-24 rounded-2xl flex flex-col items-center justify-center border-2 bg-card relative z-10 shadow-lg"
                style={{ borderColor: i === 1 ? "hsl(var(--accent))" : "hsl(var(--border))" }}
              >
                <span className="text-3xl">{step.emoji}</span>
                <span className="text-xs font-bold mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>{step.number}</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-lg text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#kategoriat" className="btn-accent text-base px-10 py-4">
            Aloita nyt →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
