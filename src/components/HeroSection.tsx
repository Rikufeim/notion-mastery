import notionDashboard from "@/assets/notion-dashboard.jpg";

const HeroSection = () => {
  return (
    <section className="pt-40 pb-20 px-6 overflow-hidden" style={{ background: "var(--gradient-subtle)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-8">





            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground">
              Rakenna elämäsi{" "}
              <span className="gradient-text">valmiilla</span>{" "}
              Notion-templateilla
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Premium-tason Notion-templatet suomeksi.<br />
              Duplikoi, muokkaa ja aloita heti.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#kategoriat" className="btn-accent text-base px-8 py-4 text-center justify-center">
                Selaa templateja
              </a>
              <a href="#featured" className="btn-outline text-base px-8 py-4 text-center justify-center">
                Katso Featured Template
              </a>
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