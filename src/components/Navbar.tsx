import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Templatet", href: "#kategoriat" },
    { label: "Featured", href: "#featured" },
    { label: "Minusta", href: "#minusta" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-xl text-foreground">
          <span className="w-8 h-8 rounded-lg flex items-center justify-center text-primary-foreground text-sm font-black" style={{ background: "hsl(var(--primary))" }}>N</span>
          NotionShop
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#kategoriat" className="btn-accent text-sm px-5 py-2.5">
            Selaa templateja →
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#kategoriat" className="btn-accent text-sm text-center" onClick={() => setOpen(false)}>
            Selaa templateja →
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
