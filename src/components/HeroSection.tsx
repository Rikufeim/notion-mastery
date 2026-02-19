import notionDashboard from "@/assets/notion-dashboard.jpg";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 px-6 overflow-hidden" style={{ background: "var(--gradient-subtle)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-8">
            




            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground">
              Rakenna elämäsi{" "}
              <span className="gradient-text">järjestelmät</span>{" "}
              valmiilla Notion-templateilla
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Premium-tason Notion-templatet kryptosijoittajille, AI-rakentajille, itsensäkehittäjille ja terveydestä kiinnostuneille. Duplikoi, muokkaa ja aloita heti.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#kategoriat" className="btn-accent text-base px-8 py-4 text-center">
                Selaa templateja →
              </a>
              <a href="#featured" className="btn-outline text-base px-8 py-4 text-center">
                Katso Featured Template
              </a>
            </div>

            {/* Social proof mini */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex -space-x-2">
                {["🧑", "👩", "🧔", "👩‍💼", "🧑‍💻"].map((emoji, i) =>
                <div key={i} className="w-9 h-9 rounded-full border-2 border-background bg-muted flex items-center justify-center text-sm">
                    {emoji}
                  </div>
                )}
              </div>
              <div>
                <div className="flex gap-0.5 star-rating text-sm">★★★★★</div>
                <p className="text-xs text-muted-foreground">4.9/5 — 200+ arvostelua</p>
              </div>
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl blur-3xl opacity-20" style={{ background: "hsl(var(--accent) / 0.3)", transform: "scale(0.9) translate(10px, 20px)" }}></div>
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
              <img
                src={notionDashboard}
                alt="Notion Dashboard Template Preview"
                className="w-full h-auto"
                loading="eager" />

            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;