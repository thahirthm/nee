import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import MainLogo from "@/assets/main_logo.jpg";
const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/85 backdrop-blur-md border-b border-border shadow-soft"
        : "bg-transparent"
        }`}
    >
      <div
        className={`mx-auto max-w-7xl mt-5 px-6 lg:px-10 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-20 lg:h-24"
          }`}
      >
        <a href="/" className="flex items-center gap-3 group ">
          {/* <span
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-primary text-primary-foreground font-serif text-lg"
            aria-hidden
          >
            N
          </span> */}
          {/* <div className="leading-tight">
            <div className="font-serif text-lg text-primary tracking-tight">
              NKE Floors
            </div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-gold font-semibold">
              Since 1999
            </div>
          </div> */}
          <img
            src={MainLogo}
            alt="Logo" className="h-20 w-20" />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <Link
              key={n.href}
              to={n.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold hover:after:w-full after:transition-all"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+10000000000"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-gold transition-colors"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get Consultation
          </Link>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-sm text-primary"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.href}
                to={n.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-base font-medium text-primary"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
