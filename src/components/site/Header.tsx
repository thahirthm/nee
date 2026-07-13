import { useEffect, useState, useRef } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import MainLogo from "@/assets/logo.png";

const NAV = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      {
        title: "Four Core Verticals",
        items: [
          { label: "Natural Stone Restoration", href: "/services/natural-stone-restoration" },
          { label: "Industrial Concrete Flooring & Restoration", href: "/services/industrial-concrete-flooring" },
          { label: "Hotel Floorcare Programs", href: "/services/hotel-floorcare-programs" },
          { label: "Decorative Concrete Systems", href: "/services/decorative-concrete-systems" },
        ],
      },
      {
        title: "Complementary Flooring Services",
        items: [
          { label: "Ceramic & Vitrified Floor Restoration", href: "/services/ceramic-vitrified-floor-restoration" },
          { label: "Deep Cleaning & Grout Cleaning", href: "/services/deep-cleaning-grout-cleaning" },
          { label: "Exterior Concrete Tile Enhancement", href: "/services/exterior-concrete-tile-enhancement" },
          { label: "Slip-Resistant Coatings", href: "/services/slip-resistant-coatings" },
        ],
      },
    ],
  },
  // { label: "Knowledge Hub", href: "/knowledge-hub" },
  { label: "Projects ", href: "/projects" },
  // { label: "Capability Statement", href: "/capability-statement" },
  { label: "Shilpa Seva Foundation", href: "/shilpa-seva-foundation" },
  { label: "About / Company", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function DesktopDropdown({ item }: { item: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 200);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center gap-1 cursor-pointer text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2">
        {item.label} <ChevronDown className="h-4 w-4" />
      </div>
      {isOpen && (
        <div className="absolute left-0 top-full pt-2 w-[500px]">
          <div className="bg-background border border-border rounded-sm shadow-elevated p-6 flex gap-8">
            {item.dropdown.map((section: any, idx: number) => (
              <div key={idx} className="flex-1">
                <div className="text-xs font-semibold text-gold uppercase tracking-wider mb-3">
                  {section.title}
                </div>
                <ul className="space-y-3">
                  {section.items.map((subItem: any) => (
                    <li key={subItem.href}>
                      <Link
                        to={subItem.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-background/80 backdrop-blur-md"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl mt-2 px-6 lg:px-10 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-20" : "h-20 lg:h-24"
        }`}
      >
        <Link to="/" className="flex items-center gap-3 group">
          <img src={MainLogo} alt="Logo" className="h-16 w-16 md:h-30 md:w-[140px] object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) =>
            n.dropdown ? (
              <DesktopDropdown key={n.label} item={n} />
            ) : (
              <Link
                key={n.href}
                to={n.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold hover:after:w-full after:transition-all"
              >
                {n.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
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
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background max-h-[calc(100vh-80px)] overflow-y-auto shadow-xl">
          <div className="px-6 py-4 flex flex-col gap-2">
            {NAV.map((n) => (
              <div key={n.label}>
                {n.dropdown ? (
                  <div className="py-2">
                    <button
                      onClick={() => setExpandedMobile(expandedMobile === n.label ? null : n.label)}
                      className="flex items-center justify-between w-full text-left text-base font-medium text-primary"
                    >
                      {n.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${expandedMobile === n.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expandedMobile === n.label && (
                      <div className="mt-3 pl-4 flex flex-col gap-4 border-l-2 border-border ml-2">
                        {n.dropdown.map((section, idx) => (
                          <div key={idx}>
                            <div className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">
                              {section.title}
                            </div>
                            <div className="flex flex-col gap-2 pl-2">
                              {section.items.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  to={subItem.href}
                                  onClick={() => setOpen(false)}
                                  className="text-sm text-muted-foreground"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={n.href}
                    onClick={() => setOpen(false)}
                    className="py-2 block text-base font-medium text-primary"
                  >
                    {n.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
