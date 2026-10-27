"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Direction = "up" | "left" | "right" | "scale";

const hidden: Record<Direction, string> = {
  up: "translate-y-10 opacity-0",
  left: "-translate-x-10 opacity-0",
  right: "translate-x-10 opacity-0",
  scale: "scale-95 opacity-0",
};

let sharedObserver: IntersectionObserver | null = null;
const observerCallbacks = new Map<Element, () => void>();

function observeElement(el: Element, callback: () => void) {
  if (typeof window === "undefined") return () => {};
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const cb = observerCallbacks.get(entry.target);
            if (cb) {
              cb();
              observerCallbacks.delete(entry.target);
              sharedObserver?.unobserve(entry.target);
            }
          }
        }
      },
      { threshold: 0.15 },
    );
  }
  observerCallbacks.set(el, callback);
  sharedObserver.observe(el);
  return () => {
    observerCallbacks.delete(el);
    sharedObserver?.unobserve(el);
  };
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cleanup: (() => void) | undefined;
    const rafId = requestAnimationFrame(() => {
      cleanup = observeElement(el, () => setShown(true));
    });
    return () => {
      cancelAnimationFrame(rafId);
      cleanup?.();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        shown ? "translate-x-0 translate-y-0 scale-100 opacity-100" : hidden[direction],
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Counter({
  to,
  suffix = "",
  duration = 1600,
}: {
  to: number;
  suffix?: React.ReactNode;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return observeElement(el, () => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, [to, duration]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}
