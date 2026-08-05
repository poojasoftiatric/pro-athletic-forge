import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Programs", "#programs"],
  ["Membership", "#membership"],
  ["Trainers", "#trainers"],
  ["Testimonials", "#testimonials"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 py-3 shadow-card backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8"
      >
        <a href="#home" className="display text-2xl tracking-widest">
          PRO<span className="text-primary">ATHLETIC</span>
        </a>

        <ul className="hidden items-center gap-7 xl:flex">
          {links.map(([label, href]) => (
            <li key={label}>
              <a
                href={href}
                className="relative text-sm font-medium text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-foreground hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#membership"
            className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow-red hover:brightness-110 sm:inline-flex"
          >
            Join Now
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-glass-border p-2.5 xl:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mt-3 border-t border-glass-border bg-background/98 px-5 py-4 backdrop-blur-xl xl:hidden">
          <ul className="grid gap-1">
            {links.map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
