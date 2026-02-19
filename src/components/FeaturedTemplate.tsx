import { Check } from "lucide-react";
import notionDashboard from "@/assets/notion-dashboard.jpg";

const benefits = [
  "Täydellinen portfolioseurantajärjestelmä kaikille kryptovaluutoille",
  "Automaattiset kaavio-näkymät ja P&L-laskuri",
  "Treidauspäiväkirja psykologian seurantaan",
  "Verolaskuri suomalaiselle kryptosijoittajalle",
  "Ilmaiset päivitykset ikuisesti",
  "Asennusopas suomeksi (video + teksti)",
];

const audiences = ["Aktiiviset kryptosijoittajat", "DeFi-harrastajat", "Pitkän aikavälin holdaajat", "Vero-optimoijat"];

const FeaturedTemplate = () => {
  return (
    <section id="featured" className="py-24 px-6" style={{ background: "var(--gradient-subtle)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="section-label">⭐ Featured Template</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Crypto Portfolio OS
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Kaiken kattava kryptosijoittajan järjestelmä Notionissa. Yli 500 käyttäjää.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl" style={{ background: "hsl(var(--accent) / 0.3)" }}></div>
            <div className="relative rounded-2xl overflow-hidden border-2 shadow-2xl" style={{ borderColor: "hsl(var(--accent) / 0.4)" }}>
              <img src={notionDashboard} alt="Crypto Portfolio OS Template" className="w-full h-auto" />
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold" style={{ background: "hsl(var(--accent))", color: "hsl(var(--accent-foreground))" }}>
                🔥 Myydyin
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl font-black text-foreground">29 €</span>
                <span className="text-muted-foreground line-through text-lg">49 €</span>
                <span className="px-2 py-1 rounded-lg text-xs font-bold text-primary-foreground" style={{ background: "hsl(var(--destructive))" }}>−41%</span>
              </div>
              <p className="text-sm text-muted-foreground">Kertamaksu · Ei kuukausimaksua · Ilmaiset päivitykset</p>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-foreground">Mitä saat:</p>
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "hsl(var(--accent) / 0.15)" }}>
                    <Check size={12} style={{ color: "hsl(38 70% 40%)" }} />
                  </div>
                  <p className="text-sm text-foreground">{b}</p>
                </div>
              ))}
            </div>

            <div>
              <p className="font-semibold text-foreground mb-3">Kenelle tämä sopii:</p>
              <div className="flex flex-wrap gap-2">
                {audiences.map((a) => (
                  <span key={a} className="px-3 py-1.5 rounded-full text-sm bg-secondary text-secondary-foreground border border-border">
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <button className="btn-accent w-full text-base py-4 justify-center rounded-xl font-bold">
              Osta nyt — 29 € →
            </button>
            <p className="text-center text-xs text-muted-foreground">30 päivän tyytyväisyystakuu · Välitön toimitus</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTemplate;
