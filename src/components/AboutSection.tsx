import creatorPhoto from "@/assets/creator-photo.jpg";
import { Check } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="minusta" className="py-24 px-6" style={{ background: "var(--gradient-subtle)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -inset-6 rounded-3xl opacity-20 blur-2xl" style={{ background: "hsl(var(--primary) / 0.3)" }}></div>
            <div className="relative w-72 h-80 rounded-3xl overflow-hidden border-2 shadow-2xl" style={{ borderColor: "hsl(var(--border))" }}>
              <img src={creatorPhoto} alt="Notion Template Creator" className="w-full h-full object-cover" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-card border border-border rounded-2xl px-5 py-4 shadow-xl">
              <p className="font-black text-2xl text-foreground">1000+</p>
              <p className="text-xs text-muted-foreground font-medium">tyytyväistä käyttäjää</p>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <span className="section-label">Minusta</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Miksi teen näitä templateja?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Olen Mikael — suomalainen digitaalinen nomadi, kryptosijoittaja ja kehittäjä. Muutama vuosi sitten huomasin, että elämäni eri osa-alueet olivat kaaoksessa: kryptosijoitukset, projektit, tavat, ruokailu.
              </p>
              <p>
                Rakensin itselleni järjestelmät Notionissa. Tulokset olivat niin hyvät, että aloin jakaa niitä. Nyt yli tuhat suomalaista käyttää näitä templateja arjessaan.
              </p>
              <p>
                <strong className="text-foreground">Nämä templatet sopivat sinulle, jos:</strong>
              </p>
            </div>
            <div className="space-y-3">
              {[
                "Haluat selkeyttä kaaoksen keskellä",
                "Olet kiinnostunut kryptosta, AI:sta tai hyvinvoinnista",
                "Arvostat laadukasta, suomalaista sisältöä",
                "Haluat aloittaa heti ilman pitkää oppimiskäyrää",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "hsl(var(--accent) / 0.15)" }}>
                    <Check size={12} style={{ color: "hsl(38 70% 40%)" }} />
                  </div>
                  <p className="text-foreground text-sm">{item}</p>
                </div>
              ))}
            </div>
            <a href="#kategoriat" className="btn-primary inline-flex">
              Katso templatet →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
