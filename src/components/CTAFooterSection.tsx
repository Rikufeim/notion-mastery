const CTAFooterSection = () => {
  return (
    <>
      {/* CTA Section */}
      <section className="py-24 px-6" style={{ background: "hsl(var(--primary))" }}>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border" style={{ borderColor: "hsl(var(--primary-foreground) / 0.2)", color: "hsl(var(--primary-foreground) / 0.7)" }}>
            🇫🇮 Tehty suomalaisille suomalaisilla arvoilla
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight" style={{ color: "hsl(var(--primary-foreground))" }}>
            Rakenna selkeämpi arki<br />
            <span style={{ color: "hsl(var(--accent))" }}>jo tänään Notionilla.</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "hsl(var(--primary-foreground) / 0.7)" }}>
            Yli 1000 suomalaista on jo ottanut elämänsä haltuun näillä templateilla. Sinun vuorosi on nyt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#kategoriat" className="btn-accent text-base px-10 py-4 text-center">
              Aloita nyt →
            </a>
            <a href="#miten" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-200 text-center" style={{ color: "hsl(var(--primary-foreground))", border: "2px solid hsl(var(--primary-foreground) / 0.25)" }}>
              Miten se toimii?
            </a>
          </div>
          <p className="text-sm" style={{ color: "hsl(var(--primary-foreground) / 0.5)" }}>
            30 päivän tyytyväisyystakuu · Suomenkielinen tuki · Ei tilauksia
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4 sm:col-span-2">
              <a href="#" className="flex items-center gap-2 font-bold text-xl text-foreground">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center text-primary-foreground text-sm font-black" style={{ background: "hsl(var(--primary))" }}>N</span>
                NotionShop
              </a>
              <p className="text-sm text-muted-foreground max-w-xs">
                Premium Notion-templatet suomalaisille. Krypto, AI, itsensäkehitys ja hyvinvointi — kaikki yhdestä paikasta.
              </p>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-sm text-foreground">Tuotteet</p>
              {["Krypto & Sijoittaminen", "AI & Vibe Coding", "Itsensäkehitys", "Ravinto & Hyvinvointi"].map((l) => (
                <a key={l} href="#kategoriat" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a>
              ))}
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-sm text-foreground">Info</p>
              {["FAQ", "Minusta", "Ota yhteyttä", "Tietosuoja"].map((l) => (
                <a key={l} href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a>
              ))}
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2025 NotionShop. Kaikki oikeudet pidätetään.</p>
            <p className="text-sm text-muted-foreground">Tehty 🇫🇮 Suomessa</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CTAFooterSection;
