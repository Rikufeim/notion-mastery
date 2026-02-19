const testimonials = [
  {
    name: "Mikael H.",
    role: "Kryptosijoittaja, Tampere",
    avatar: "🧑‍💼",
    rating: 5,
    text: "Crypto Portfolio OS on paras sijoitus mitä olen tehnyt kryptovuotenani. Vihdoin tiedän tarkalleen missä seisoo salkku. Suosittelen kaikille!",
  },
  {
    name: "Aino K.",
    role: "Freelance kehittäjä, Helsinki",
    avatar: "👩‍💻",
    rating: 5,
    text: "AI Builder OS muutti täysin tapani hallita projekteja. Promptikirjasto yksin säästää tunnin päivässä. Loistava template!",
  },
  {
    name: "Juhani L.",
    role: "Hyvinvointicoach, Oulu",
    avatar: "🧔",
    rating: 5,
    text: "Habit System auttoi minua rakentamaan aamurituaalini uudelleen. Yksinkertainen mutta tehokas. Asiakkaanikan käyttää nyt tätä.",
  },
  {
    name: "Sara M.",
    role: "Ravitsemusasiantuntija, Turku",
    avatar: "👩",
    rating: 5,
    text: "Meal Planner on niin hyvin suunniteltu. Säästän joka viikko tunteja ruokasuunnittelussa. Ehdottomasti 5/5 tähteä!",
  },
  {
    name: "Petteri V.",
    role: "Ohjelmistokehittäjä, Espoo",
    avatar: "🧑‍💻",
    rating: 5,
    text: "Ostoin kaikki templatet — paras osto pitkään aikaan. Hinta-laatu-suhde on ylivertainen muihin Notion-templateihin verrattuna.",
  },
  {
    name: "Liisa R.",
    role: "Yrittäjä, Jyväskylä",
    avatar: "👩‍💼",
    rating: 5,
    text: "Goal Tracker 2025 piti minut raiteilla koko vuoden. Visuaaliset näkymät motivoivat jatkamaan. Kiitos mahtavista templateista!",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5 star-rating">
    {Array.from({ length: count }).map((_, i) => <span key={i}>★</span>)}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section id="arvostelut" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="section-label">Asiakasarvostelut</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Mitä asiakkaat sanovat
          </h2>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Stars count={5} />
              <span className="font-bold text-foreground">4.9/5</span>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block"></div>
            <span className="text-muted-foreground">Yli 200 arvostelua</span>
            <div className="h-4 w-px bg-border hidden sm:block"></div>
            <span className="text-muted-foreground">🎉 Yli 1 000 latausta</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card-template space-y-4">
              <Stars count={t.rating} />
              <p className="text-foreground text-sm leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
