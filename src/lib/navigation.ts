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
    const newPath = sectionId === "home" ? "/" : `/${sectionId}`;
    if (window.location.pathname !== newPath || window.location.hash) {
      window.history.pushState(null, "", newPath);
    }
  }
}

export function initPopStateListener() {
  if (typeof window === "undefined") return () => {};

  const handleNavigationChange = () => {
    // If incoming with old hash like /#membership, clean it up to /membership
    if (window.location.hash) {
      const hashId = window.location.hash.replace(/^#/, "");
      const cleanPath = hashId === "home" ? "/" : `/${hashId}`;
      window.history.replaceState(null, "", cleanPath);
      scrollToSection(hashId, true);
      return;
    }

    const path = window.location.pathname.replace(/^\/+|\/+$/g, "");
    const sectionId = getSectionIdFromPath(path);
    scrollToSection(sectionId, true);
  };

  window.addEventListener("popstate", handleNavigationChange);
  window.addEventListener("hashchange", handleNavigationChange);
  return () => {
    window.removeEventListener("popstate", handleNavigationChange);
    window.removeEventListener("hashchange", handleNavigationChange);
  };
}
