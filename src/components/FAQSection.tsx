import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Tarvitsenko maksullisen Notion-tilin?",
    a: "Ei! Kaikki templatet toimivat Notionin ilmaisella Free-planilla. Jotkut edistyneet ominaisuudet vaativat Plus-tilin (noin 10 €/kk), mutta perusversio toimii aina ilmaiseksi.",
  },
  {
    q: "Voinko muokata templatea omaan käyttöön?",
    a: "Ehdottomasti! Templatet on suunniteltu personoitaviksi. Voit muuttaa värit, rakenteet, ominaisuudet ja sisällöt täysin omaksesi. Template on lähtökohta, ei lopputulos.",
  },
  {
    q: "Saanko päivitykset automaattisesti?",
    a: "Kyllä! Kaikki päivitykset ovat ilmaisia ikuisesti. Kun päivitän templatea, saat sähköpostia uudesta versiosta ja linkin, jonka voit duplikoida uudelleen.",
  },
  {
    q: "Miten maksaminen toimii?",
    a: "Maksaminen tapahtuu turvallisesti Gumroad-palvelun kautta. Hyväksymme korttimaksut, PayPalin ja useita muita maksutapoja. Maksu on kertaluontoinen — ei tilauksia.",
  },
  {
    q: "Onko saatavilla suomenkielinen tuki?",
    a: "Kyllä! Tarjoan tukea suomeksi sähköpostitse. Vastailen yleensä 24 tunnin sisällä arkipäivisin. Lisäksi kaikissa templateissa on suomenkieliset ohjeet.",
  },
  {
    q: "Entä jos template ei sovi minulle?",
    a: "Tarjoan 30 päivän tyytyväisyystakuun. Jos et ole tyytyväinen, palautan rahat ilman kysymyksiä. Minulle on tärkeää, että saat oikeasti arvoa tuotteistani.",
  },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card" style={{ boxShadow: "var(--shadow-card)" }}>
      <button
        className="w-full flex items-center justify-between p-6 text-left font-semibold text-foreground hover:bg-muted transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span>{q}</span>
        <ChevronDown
          size={20}
          className="flex-shrink-0 transition-transform duration-200 text-muted-foreground"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      {open && (
        <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
          {a}
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 px-6" style={{ background: "var(--gradient-subtle)" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="section-label">Usein kysyttyä</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Onko sinulla kysyttävää?
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>

        <div className="text-center mt-12 space-y-3">
          <p className="text-muted-foreground">Ei löytynyt vastausta?</p>
          <a href="mailto:hei@notionshop.fi" className="btn-outline inline-flex">
            Ota yhteyttä →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
