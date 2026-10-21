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

export function getSectionIdFromPath(target: string): string {
  const clean = target.replace(/^#|^\/+|\/+$/g, "").toLowerCase();
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
    top: Math.max(0, Math.round(offsetPosition)),
    behavior: smooth ? "smooth" : "auto",
  });
  return true;
}

export function handleNavClick(target: string, e?: React.MouseEvent) {
  if (e) {
    if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) {
      return;
    }
    e.preventDefault();
  }

  const sectionId = getSectionIdFromPath(target);
  scrollToSection(sectionId, true);

  if (typeof window !== "undefined") {
    const newHash = `#${sectionId}`;
    if (window.location.hash !== newHash) {
      window.history.replaceState(window.history.state, "", newHash);
    }
  }
}

export function initPopStateListener() {
  if (typeof window === "undefined") return () => {};

  const handlePopState = () => {
    const hash = window.location.hash.replace(/^#/, "");
    const path = window.location.pathname.replace(/^\/+|\/+$/g, "");
    const sectionId = getSectionIdFromPath(hash || path);
    scrollToSection(sectionId, true);
  };

  window.addEventListener("popstate", handlePopState);
  window.addEventListener("hashchange", handlePopState);
  return () => {
    window.removeEventListener("popstate", handlePopState);
    window.removeEventListener("hashchange", handlePopState);
  };
}
