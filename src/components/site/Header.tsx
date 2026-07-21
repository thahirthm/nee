import { useEffect, useState, useRef } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import MainLogo from "@/assets/green-logo.png";
import ScrolledLogo from "@/assets/logo.png";

const NAV = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    dropdown: [
      {
        title: "Company",
        items: [
          { label: "About Us", href: "/about" },
          { label: "Meet the Founder", href: "/founder" },
        ],
      }
    ]
  },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      {
        title: "Our Service Domains",
        items: [
          { label: "Marble & Natural Stones", href: "/services#marble-natural-stones" },
          { label: "New Concrete Polishing", href: "/services#new-concrete-polishing" },
          { label: "Industrial Concrete Finishing", href: "/services#industrial-concrete-finishing" },
          { label: "Industrial Floor Renewal", href: "/services#industrial-floor-renewal" },
          { label: "Tiled Floors (Interior & Exterior)", href: "/services#tiled-floors" },
          { label: "Epoxy & Vinyl Floors", href: "/services#epoxy-vinyl-floors" },
        ],
      }
    ],
  },
  // { label: "Knowledge Hub", href: "/knowledge-hub" },
  { label: "Gallery ", href: "/gallery" },
  // { label: "Capability Statement", href: "/capability-statement" },
  { label: "Shilpa Seva Foundation", href: "/shilpa-seva-foundation" },
  { label: "Contact", href: "/contact" },
];

function DesktopDropdown({ item, isTransparentState }: { item: any, isTransparentState: boolean }) {
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
      <div className={`flex items-center gap-1 cursor-pointer text-sm font-medium transition-colors py-2 ${isTransparentState ? 'text-white hover:text-white/80' : 'text-black hover:text-primary'}`}>
        {item.label} <ChevronDown className="h-4 w-4" />
      </div>
      {isOpen && (
        <div className={`absolute left-0 top-full pt-2 ${item.dropdown.length > 1 ? 'w-[500px]' : 'min-w-[320px]'}`}>
          <div className={`bg-background border border-border rounded-sm shadow-elevated p-6 flex gap-8 ${item.dropdown.length === 1 ? 'flex-col' : ''}`}>
            {item.dropdown.map((section: any, idx: number) => (
              <div key={idx} className="flex-1">
                <div className="text-xs font-semibold text-gold uppercase tracking-wider mb-3">
                  {section.title}
                </div>
                <ul className="space-y-3">
                  {section.items.map((subItem: any) => (
                    <li key={subItem.href}>
                      <Link
                        to={subItem.href.split('#')[0]}
                        hash={subItem.href.split('#')[1]}
                        className="text-sm text-black hover:text-primary transition-colors block"
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
  const [isVisible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isShilpaSeva = location.pathname === "/shilpa-seva-foundation";
  const isAbout = location.pathname === "/about";
  const isTransparentState = (isHomePage || isShilpaSeva || isAbout) && !scrolled;

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 24);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }
      
      lastScrollY = currentScrollY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isTransparentState
          ? "bg-transparent"
          : "bg-background/95 backdrop-blur-md border-b border-border shadow-soft"
      } ${!isVisible && !open ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-20" : "h-[120px]"
        }`}
      >
        <Link to="/" className="flex items-center gap-3 group h-full py-2">
          <img src={MainLogo} alt="Logo" className="h-full w-auto object-contain transition-all duration-300" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) =>
            n.dropdown ? (
              <DesktopDropdown key={n.label} item={n} isTransparentState={isTransparentState} />
            ) : (
              <Link
                key={n.href}
                to={n.href}
                className={`text-sm font-medium transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold hover:after:w-full after:transition-all ${isTransparentState ? 'text-white hover:text-white/80' : 'text-black hover:text-primary'}`}
              >
                {n.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919600040155"
            className="inline-flex items-center gap-2 rounded-sm px-5 py-2.5 text-sm font-semibold transition-colors bg-gold hover:bg-gold/90 text-white"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className={`lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-sm ${isTransparentState ? 'text-white' : 'text-primary'}`}
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
                                  to={subItem.href.split('#')[0]}
                                  hash={subItem.href.split('#')[1]}
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

          </div>
        </div>
      )}
    </header>
  );
}
