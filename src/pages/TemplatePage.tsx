import { useState } from "react";
import { Check, ArrowLeft, Star, Shield, Zap, Download, ChevronDown, ChevronUp } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import notionDashboard from "@/assets/notion-dashboard.jpg";
import Navbar from "@/components/Navbar";

/* ──────────────── Data ──────────────── */

const allTemplates: Record<string, {
    id: string;
    emoji: string;
    category: string;
    name: string;
    tagline: string;
    price: number;
    originalPrice: number;
    rating: number;
    reviews: number;
    users: number;
    benefits: string[];
    includes: { icon: string; title: string; desc: string }[];
    audiences: string[];
    faqs: { q: string; a: string }[];
}> = {
    "crypto-portfolio-tracker": {
        id: "crypto-portfolio-tracker",
        emoji: "🪙",
        category: "Krypto & Sijoittaminen",
        name: "Crypto Portfolio Tracker",
        tagline: "Seuraa koko salkkuasi reaaliajassa yhdestä Notion-näkymästä",
        price: 19,
        originalPrice: 34,
        rating: 4.9,
        reviews: 214,
        users: 520,
        benefits: [
            "Täydellinen portfolioseurantajärjestelmä kaikille kryptovaluutoille",
            "Automaattiset kaavio-näkymät ja P&L-laskuri",
            "Treidauspäiväkirja psykologian seurantaan",
            "Verolaskuri suomalaiselle kryptosijoittajalle",
            "Ilmaiset päivitykset ikuisesti",
            "Asennusopas suomeksi (video + teksti)",
        ],
        includes: [
            { icon: "📊", title: "Portfolio-dashboard", desc: "Kaikki kryptosi yhdessä selkeässä näkymässä" },
            { icon: "📝", title: "Treidauspäiväkirja", desc: "Kirjaa kauppasi ja analysoi psykologiaasi" },
            { icon: "🧾", title: "Verolaskuri", desc: "Laske myyntivoitot ja -tappiot helposti" },
            { icon: "🔔", title: "Hintahälytysmuistiot", desc: "Merkitse tärkeät hintatasot ja strategiat" },
        ],
        audiences: ["Aktiiviset kryptosijoittajat", "DeFi-harrastajat", "Pitkän aikavälin holdaajat", "Vero-optimoijat"],
        faqs: [
            { q: "Miten saan templaten käyttöön?", a: "Oston jälkeen saat sähköpostiin linkin, jolla duplikoit templaten omaan Notion-tiliisi. Koko prosessi kestää alle 2 minuuttia." },
            { q: "Toimiiko tämä ilmaisella Notion-tilillä?", a: "Kyllä! Kaikki templatet toimivat Notionin ilmaisella henkilökohtaisella tilillä." },
            { q: "Saanko päivitykset ilmaiseksi?", a: "Kyllä, kaikki tulevat päivitykset ovat ilmaisia ikuisesti ostopäivästä lähtien." },
            { q: "Onko tyytyväisyystakuu?", a: "Kyllä! Jos et ole tyytyväinen 30 päivän aikana, palautamme rahat täysimääräisesti — ei kysymyksiä." },
        ],
    },
    "treidauspaivakiri": {
        id: "treidauspaivakiri",
        emoji: "📓",
        category: "Krypto & Sijoittaminen",
        name: "Treidauspäiväkirja",
        tagline: "Analysoi kauppasi, kehitä strategiaasi ja hallitse tunteitasi datan avulla",
        price: 14,
        originalPrice: 24,
        rating: 4.8,
        reviews: 97,
        users: 310,
        benefits: [
            "Kauppakohtainen kirjauspohja strategialle ja psykologialle",
            "Automaattiset win-rate ja R/R -laskennat",
            "Viikko- ja kuukausikatsaukset kehityksen seurantaan",
            "Tunteiden ja mielialan seuranta kauppojen yhteydessä",
            "Ilmaiset päivitykset ikuisesti",
            "Asennusopas suomeksi",
        ],
        includes: [
            { icon: "📝", title: "Kauppaloki", desc: "Kirjaa jokainen kauppa täsmällisesti" },
            { icon: "📈", title: "Kehityskaavioit", desc: "Visualisoi tuloksesi ajan yli" },
            { icon: "🧠", title: "Psykologiaosio", desc: "Tunnista tunnereaktiot ja kehitä niitä" },
            { icon: "📅", title: "Viikkokatsaus", desc: "Reflektoi viikko ja suunnittele seuraava" },
        ],
        audiences: ["Päivätreidaajat", "Swing-treidaajat", "Aloittelevat sijoittajat", "Psykologiasta kiinnostuneet"],
        faqs: [
            { q: "Miten saan templaten käyttöön?", a: "Oston jälkeen saat sähköpostiin linkin, jolla duplikoit templaten omaan Notion-tiliisi." },
            { q: "Toimiiko tämä ilmaisella Notion-tilillä?", a: "Kyllä! Kaikki templatet toimivat Notionin ilmaisella henkilökohtaisella tilillä." },
            { q: "Saanko päivitykset ilmaiseksi?", a: "Kyllä, kaikki tulevat päivitykset ovat ilmaisia ikuisesti." },
            { q: "Onko tyytyväisyystakuu?", a: "Kyllä! 30 päivän tyytyväisyystakuu — täysi palautus ilman kysymyksiä." },
        ],
    },
    "promptikirjasto-pro": {
        id: "promptikirjasto-pro",
        emoji: "🤖",
        category: "AI & Vibe Coding",
        name: "Promptikirjasto Pro",
        tagline: "Hallitse kaikki AI-promptisi järjestelmällisesti ja löydä parhaat aina käden ulottuvilta",
        price: 17,
        originalPrice: 29,
        rating: 4.9,
        reviews: 143,
        users: 440,
        benefits: [
            "Järjestelmällinen kirjasto kaikille AI-prompteillesi",
            "Kategoriointi käyttötarkoituksen mukaan",
            "Hyödyllisyysarviointi ja suosikkimerkinnät",
            "Valmis 50+ prompt -aloituskokoelma",
            "Ilmaiset päivitykset ikuisesti",
            "Asennusopas suomeksi",
        ],
        includes: [
            { icon: "🗂️", title: "Promptikirjasto", desc: "Kategorioitu kokoelma kaikille AI-tarpeillesi" },
            { icon: "⭐", title: "Suosikkijärjestelmä", desc: "Merkitse parhaat promptit helposti löydettäviksi" },
            { icon: "🚀", title: "50+ valmispromptia", desc: "Aloita heti valmiilla kokoelmalla" },
            { icon: "🔍", title: "Hakutoiminto", desc: "Löydä oikea prompti sekunneissa" },
        ],
        audiences: ["AI-käyttäjät", "Content-luojat", "Kehittäjät", "Kiireelliset ammattilaiset"],
        faqs: [
            { q: "Miten saan templaten käyttöön?", a: "Oston jälkeen saat sähköpostiin linkin, jolla duplikoit templaten omaan Notion-tiliisi." },
            { q: "Toimiiko tämä ilmaisella Notion-tilillä?", a: "Kyllä!" },
            { q: "Saanko päivitykset ilmaiseksi?", a: "Kyllä, kaikki päivitykset ovat ilmaisia ikuisesti." },
            { q: "Onko tyytyväisyystakuu?", a: "Kyllä, 30 päivää — täysi palautus." },
        ],
    },
    "ai-builder-os": {
        id: "ai-builder-os",
        emoji: "⚡",
        category: "AI & Vibe Coding",
        name: "AI Builder OS",
        tagline: "Kokonaisvaltainen projektinhallintajärjestelmä AI-projekteillesi ja vibe-coding-sessioillesi",
        price: 24,
        originalPrice: 39,
        rating: 4.9,
        reviews: 76,
        users: 230,
        benefits: [
            "Täydellinen projektinhallinta AI-rakentajille",
            "Ideapankki ja backlog",
            "Sprint-suunnittelu ja tehtäväseuranta",
            "Teknologiapino ja integraatiokirjasto",
            "Ilmaiset päivitykset ikuisesti",
            "Asennusopas suomeksi",
        ],
        includes: [
            { icon: "🗺️", title: "Projektikeskus", desc: "Hallitse kaikkia AI-projektejasi yhdestä paikasta" },
            { icon: "💡", title: "Ideapankki", desc: "Tallenna ja kehitä ideoitasi järjestelmällisesti" },
            { icon: "⚡", title: "Sprint-board", desc: "Ketterä kehitys Notion-tyyliin" },
            { icon: "📚", title: "Resurssikirjasto", desc: "API-dokumentaatiot, kurssit ja linkit" },
        ],
        audiences: ["Indiehackers", "Vibe-koodarit", "AI-startupit", "Freelancerit"],
        faqs: [
            { q: "Miten saan templaten käyttöön?", a: "Oston jälkeen saat sähköpostiin linkin Notion-duplikointia varten." },
            { q: "Toimiiko ilmaisella tilillä?", a: "Kyllä." },
            { q: "Saanko päivitykset ilmaiseksi?", a: "Kyllä." },
            { q: "Tyytyväisyystakuu?", a: "Kyllä, 30 päivää." },
        ],
    },
    "goal-tracker-2025": {
        id: "goal-tracker-2025",
        emoji: "🎯",
        category: "Itsensäkehitys",
        name: "Goal Tracker 2025",
        tagline: "Aseta, visualisoi ja saavuta tavoitteesi systemaattisella Notion-järjestelmällä",
        price: 12,
        originalPrice: 19,
        rating: 4.8,
        reviews: 189,
        users: 670,
        benefits: [
            "Selkeä tavoitteenasetantakehys (vuosi, kvartaali, kuukausi)",
            "Visuaalinen edistymisseuranta",
            "Päivittäinen tarkistuslista ja fokusnäkymä",
            "Reflektiopohjat viikko- ja kuukausikatsauksiin",
            "Ilmaiset päivitykset ikuisesti",
            "Asennusopas suomeksi",
        ],
        includes: [
            { icon: "🎯", title: "Tavoitetaulu", desc: "Kaikki tavoitteesi yhdessä selkeässä näkymässä" },
            { icon: "📅", title: "Kvartaalisuunnitelma", desc: "Pilko isot tavoitteet hallittaviin osiin" },
            { icon: "✅", title: "Päiväfokus", desc: "Tänään tärkeimmät tehtävät yhdellä silmäyksellä" },
            { icon: "🔄", title: "Reflektiopohja", desc: "Opi jokaisesta viikosta ja kuukaudesta" },
        ],
        audiences: ["Ambitioiset opiskelijat", "Yrittäjät", "Itsensäkehittäjät", "Projektihenkilöt"],
        faqs: [
            { q: "Miten saan templaten käyttöön?", a: "Oston jälkeen saat sähköpostiin duplikointilinkin." },
            { q: "Toimiiko ilmaisella Notion-tilillä?", a: "Kyllä!" },
            { q: "Saanko päivitykset ilmaiseksi?", a: "Kyllä." },
            { q: "Tyytyväisyystakuu?", a: "Kyllä, 30 päivää, täysi palautus." },
        ],
    },
};

/* ──────────────── FAQ Item ──────────────── */

const FAQItem = ({ q, a }: { q: string; a: string }) => {
    const [open, setOpen] = useState(false);
    return (
        <div
            className="border rounded-xl overflow-hidden transition-all duration-200"
            style={{ borderColor: "hsl(var(--border))" }}
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-sm text-foreground hover:bg-secondary transition-colors"
            >
                {q}
                {open ? <ChevronUp size={16} className="flex-shrink-0 text-muted-foreground" /> : <ChevronDown size={16} className="flex-shrink-0 text-muted-foreground" />}
            </button>
            {open && (
                <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border">
                    <p className="pt-3">{a}</p>
                </div>
            )}
        </div>
    );
};

/* ──────────────── Main Page ──────────────── */

const TemplatePage = () => {
    const { slug } = useParams<{ slug: string }>();
    const template = slug ? allTemplates[slug] : null;

    if (!template) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6 text-center px-6">
                <Navbar />
                <div className="pt-24">
                    <p className="text-6xl mb-4">🔍</p>
                    <h1 className="text-3xl font-bold text-foreground mb-2">Templatea ei löydy</h1>
                    <p className="text-muted-foreground mb-8">Tarkista URL tai palaa kategoriasivulle.</p>
                    <Link to="/" className="btn-accent px-8 py-3">← Takaisin etusivulle</Link>
                </div>
            </div>
        );
    }

    const discount = Math.round((1 - template.price / template.originalPrice) * 100);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Breadcrumb */}
            <div className="pt-24 pb-0 px-6 max-w-6xl mx-auto">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    <ArrowLeft size={14} />
                    {template.category}
                </Link>
            </div>

            {/* Hero Product Section */}
            <section className="py-12 px-6" style={{ background: "var(--gradient-subtle)" }}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-14 items-start">
                        {/* Preview Image */}
                        <div className="relative">
                            <div
                                className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
                                style={{ background: "hsl(var(--primary) / 0.3)" }}
                            />
                            <div
                                className="relative rounded-2xl overflow-hidden border-2 shadow-2xl"
                                style={{ borderColor: "hsl(var(--primary) / 0.2)" }}
                            >
                                <img
                                    src={notionDashboard}
                                    alt={`${template.name} preview`}
                                    className="w-full h-auto"
                                />
                                <div
                                    className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold text-primary-foreground"
                                    style={{ background: "hsl(var(--primary))" }}
                                >
                                    {template.emoji} {template.category}
                                </div>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-7">
                            <div className="space-y-3">
                                <span className="section-label">{template.emoji} {template.category}</span>
                                <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
                                    {template.name}
                                </h1>
                                <p className="text-lg text-muted-foreground leading-relaxed">{template.tagline}</p>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-4">
                                <div className="flex gap-0.5 star-rating text-base">
                                    {"★".repeat(Math.floor(template.rating))}
                                </div>
                                <span className="text-sm font-semibold text-foreground">{template.rating}/5</span>
                                <span className="text-sm text-muted-foreground">({template.reviews} arvostelua)</span>
                                <span className="text-sm text-muted-foreground">·</span>
                                <span className="text-sm text-muted-foreground">{template.users}+ käyttäjää</span>
                            </div>

                            {/* Price */}
                            <div className="p-5 rounded-2xl border space-y-4" style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--card))" }}>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-5xl font-black text-foreground">{template.price} €</span>
                                    <span className="text-muted-foreground line-through text-xl">{template.originalPrice} €</span>
                                    <span
                                        className="px-2.5 py-1 rounded-lg text-sm font-bold text-white"
                                        style={{ background: "hsl(var(--destructive))" }}
                                    >
                                        −{discount}%
                                    </span>
                                </div>
                                <p className="text-sm text-muted-foreground">Kertamaksu · Ei kuukausimaksua · Ilmaiset päivitykset</p>

                                <button className="btn-accent w-full text-base py-4 justify-center rounded-xl font-bold">
                                    <Download size={18} />
                                    Osta nyt — {template.price} € →
                                </button>

                                {/* Trust badges */}
                                <div className="grid grid-cols-3 gap-3 pt-1">
                                    {[
                                        { icon: <Shield size={14} />, text: "30 pv takuu" },
                                        { icon: <Zap size={14} />, text: "Välitön toimitus" },
                                        { icon: <Star size={14} />, text: "Ilmaiset päivitykset" },
                                    ].map((b) => (
                                        <div
                                            key={b.text}
                                            className="flex flex-col items-center gap-1 p-2 rounded-xl text-center"
                                            style={{ background: "hsl(var(--secondary))" }}
                                        >
                                            <span style={{ color: "hsl(var(--primary))" }}>{b.icon}</span>
                                            <span className="text-xs text-muted-foreground font-medium">{b.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Benefits quick list */}
                            <div className="space-y-2.5">
                                {template.benefits.map((b) => (
                                    <div key={b} className="flex items-start gap-3">
                                        <div
                                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                            style={{ background: "hsl(var(--primary) / 0.1)" }}
                                        >
                                            <Check size={12} style={{ color: "hsl(var(--primary))" }} />
                                        </div>
                                        <p className="text-sm text-foreground">{b}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-20 px-6 bg-background">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12 space-y-3">
                        <span className="section-label">📦 Mitä saat</span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Kaikki mitä tarvitset</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {template.includes.map((item) => (
                            <div
                                key={item.title}
                                className="card-template p-6 space-y-3 text-center"
                            >
                                <div className="text-4xl">{item.icon}</div>
                                <h3 className="font-bold text-foreground">{item.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* For Whom */}
            <section className="py-16 px-6" style={{ background: "var(--gradient-subtle)" }}>
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="space-y-3">
                        <span className="section-label">👤 Kenelle</span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Tämä sopii sinulle jos olet…</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {template.audiences.map((a) => (
                            <span
                                key={a}
                                className="px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all hover:shadow-md"
                                style={{
                                    borderColor: "hsl(var(--primary) / 0.3)",
                                    color: "hsl(var(--primary))",
                                    background: "hsl(var(--primary) / 0.05)",
                                }}
                            >
                                {a}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-6 bg-background">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12 space-y-3">
                        <span className="section-label">❓ UKK</span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Usein kysytyt kysymykset</h2>
                    </div>
                    <div className="space-y-3">
                        {template.faqs.map((faq) => (
                            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Bottom */}
            <section className="py-20 px-6" style={{ background: "hsl(var(--primary))" }}>
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "hsl(var(--primary-foreground))" }}>
                        Valmis aloittamaan?
                    </h2>
                    <p className="text-lg" style={{ color: "hsl(var(--primary-foreground) / 0.75)" }}>
                        Liity {template.users}+ käyttäjän joukkoon. Välitön toimitus, 30 pv takuu.
                    </p>
                    <button
                        className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:-translate-y-1"
                        style={{
                            background: "hsl(var(--primary-foreground))",
                            color: "hsl(var(--primary))",
                            boxShadow: "0 6px 24px -4px hsl(0 0% 0% / 0.3)",
                        }}
                    >
                        <Download size={18} />
                        Osta nyt — {template.price} € →
                    </button>
                    <p className="text-sm" style={{ color: "hsl(var(--primary-foreground) / 0.5)" }}>
                        Kertamaksu · Ei tilauksia · Ilmaiset päivitykset ikuisesti
                    </p>
                </div>
            </section>

            {/* Mini footer */}
            <footer className="bg-background border-t border-border py-8 px-6 text-center">
                <p className="text-sm text-muted-foreground">
                    © 2025 NotionShop · <Link to="/" className="hover:text-foreground transition-colors">Etusivu</Link> · Tehty 🇫🇮 Suomessa
                </p>
            </footer>
        </div>
    );
};

export default TemplatePage;
