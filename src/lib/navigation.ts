export const SECTION_ROUTES = [
  "home",
  "about",
  "programs",
  "membership",
  "trainers",
  "testimonials",
  "gallery",
  "contact",
] as const;

export type SectionRoute = (typeof SECTION_ROUTES)[number];

export function getSectionIdFromPath(pathname: string): string {
  const clean = pathname.replace(/^\/+|\/+$/g, "").toLowerCase();
  if (!clean || clean === "home") return "home";
  return clean;
}

export function scrollToSection(sectionId: string, smooth: boolean = true) {
  if (typeof window === "undefined") return false;
  const el = document.getElementById(sectionId);
  if (!el) return false;

  const headerOffset = 70;
  const elementPosition = el.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: Math.max(0, offsetPosition),
    behavior: smooth ? "smooth" : "auto",
  });
  return true;
}

export function handleNavClick(path: string, e?: React.MouseEvent) {
  if (e) {
    if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) {
      return;
    }
    e.preventDefault();
  }

  const sectionId = getSectionIdFromPath(path);
  const targetPath = path.startsWith("/") ? path : `/${path}`;

  if (typeof window !== "undefined") {
    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, "", targetPath);
    }
    scrollToSection(sectionId, true);
  }
}

export function initPopStateListener() {
  if (typeof window === "undefined") return () => {};

  const handlePopState = () => {
    const sectionId = getSectionIdFromPath(window.location.pathname);
    scrollToSection(sectionId, true);
  };

  window.addEventListener("popstate", handlePopState);
  return () => window.removeEventListener("popstate", handlePopState);
}
