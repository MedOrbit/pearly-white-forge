import { useRef, useState, useEffect, useCallback } from "react";
import bracesBefore from "@/assets/transformations/braces-before.jpg.asset.json";
import bracesAfter from "@/assets/transformations/braces-after.jpg.asset.json";
import invisalignBefore from "@/assets/transformations/invisalign-before.jpg.asset.json";
import invisalignAfter from "@/assets/transformations/invisalign-after.jpg.asset.json";
import crownsBefore from "@/assets/transformations/crowns-before.jpg.asset.json";
import crownsAfter from "@/assets/transformations/crowns-after.jpg.asset.json";
import veneersBefore from "@/assets/transformations/veneers-before.jpg.asset.json";
import veneersAfter from "@/assets/transformations/veneers-after.jpg.asset.json";
import whiteningBefore from "@/assets/transformations/whitening-before.jpg.asset.json";
import whiteningAfter from "@/assets/transformations/whitening-after.jpg.asset.json";
import implantsBefore from "@/assets/transformations/implants-before.jpg.asset.json";
import implantsAfter from "@/assets/transformations/implants-after.jpg.asset.json";
import compositeBefore from "@/assets/transformations/composite-before.jpg.asset.json";
import compositeAfter from "@/assets/transformations/composite-after.jpg.asset.json";

type Orientation = "vertical" | "horizontal";

const cases: { name: string; before: string; after: string; orientation: Orientation }[] = [
  { name: "Braces", before: bracesBefore.url, after: bracesAfter.url, orientation: "vertical" },
  { name: "Invisalign", before: invisalignBefore.url, after: invisalignAfter.url, orientation: "vertical" },
  { name: "Porcelain Crowns", before: crownsBefore.url, after: crownsAfter.url, orientation: "horizontal" },
  { name: "Teeth Whitening", before: whiteningBefore.url, after: whiteningAfter.url, orientation: "horizontal" },
  { name: "Dental Implants", before: implantsBefore.url, after: implantsAfter.url, orientation: "vertical" },
  { name: "Composite Veneers", before: compositeBefore.url, after: compositeAfter.url, orientation: "vertical" },
];

function Card({ c }: { c: (typeof cases)[number] }) {
  const Label = ({ children }: { children: React.ReactNode }) => (
    <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white text-[#1a1a1a] text-[9px] font-sans font-bold uppercase tracking-[0.15em] px-3.5 py-1.5 rounded-full shadow-sm">
      {children}
    </span>
  );

  return (
    <div className="shrink-0 flex flex-col items-center select-none" style={{ touchAction: "pan-y" }}>
      <div className="rounded-[24px] bg-card p-2.5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.05] w-[280px] sm:w-[300px]">
        <div className="h-[320px] sm:h-[340px]">
          {c.orientation === "horizontal" ? (
            <div className="flex flex-col gap-2.5 h-full">
              <div className="relative flex-1 rounded-2xl overflow-hidden ring-1 ring-black/[0.06]">
                <img src={c.before} alt={`${c.name} before`} className="w-full h-full object-cover pointer-events-none" loading="lazy" />
                <Label>Before</Label>
              </div>
              <div className="relative flex-1 rounded-2xl overflow-hidden ring-1 ring-black/[0.06]">
                <img src={c.after} alt={`${c.name} after`} className="w-full h-full object-cover pointer-events-none" loading="lazy" />
                <Label>After</Label>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2.5 h-full">
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-black/[0.06]">
                <img src={c.before} alt={`${c.name} before`} className="w-full h-full object-cover pointer-events-none" loading="lazy" />
                <Label>Before</Label>
              </div>
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-black/[0.06]">
                <img src={c.after} alt={`${c.name} after`} className="w-full h-full object-cover pointer-events-none" loading="lazy" />
                <Label>After</Label>
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="mt-4 text-center text-[15px] font-semibold text-foreground">{c.name}</p>
    </div>
  );
}

export default function BeforeAfterShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const translateRef = useRef(0);
  const dragStartX = useRef(0);
  const dragStartTranslate = useRef(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const autoScrollRafRef = useRef<number | null>(null);
  const isInteractingRef = useRef(false);

  const allCases = [...cases, ...cases, ...cases];
  const totalCards = allCases.length;

  const getCardWidth = useCallback(() => {
    const isDesktop = typeof window !== "undefined" && window.innerWidth >= 640;
    return isDesktop ? 300 + 24 : 280 + 24;
  }, []);

  const getBounds = useCallback(() => {
    const cardW = getCardWidth();
    const totalWidth = totalCards * cardW;
    const containerWidth = containerRef.current?.offsetWidth || (typeof window !== "undefined" ? window.innerWidth : 375);
    const min = -(totalWidth - containerWidth);
    return { min: Math.min(min, 0), max: 0, cardW };
  }, [getCardWidth, totalCards]);

  const clamp = useCallback((value: number) => {
    const { min, max } = getBounds();
    return Math.max(min, Math.min(max, value));
  }, [getBounds]);

  const animateTo = useCallback((target: number, duration = 400) => {
    const start = translateRef.current;
    const diff = target - start;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = start + diff * eased;
      translateRef.current = val;
      setTranslateX(val);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(step);
  }, []);

  const snapToNearest = useCallback(() => {
    const { cardW } = getBounds();
    const snapped = Math.round(translateRef.current / cardW) * cardW;
    animateTo(clamp(snapped), 350);
  }, [getBounds, clamp, animateTo]);

  const startAutoScroll = useCallback(() => {
    if (autoScrollRafRef.current) cancelAnimationFrame(autoScrollRafRef.current);
    let last = performance.now();
    const speed = 0.4;

    const step = (now: number) => {
      if (isInteractingRef.current) {
        last = now;
        autoScrollRafRef.current = requestAnimationFrame(step);
        return;
      }
      const dt = now - last;
      last = now;
      const cardW = getCardWidth();
      const totalWidth = totalCards * cardW;
      const containerWidth = containerRef.current?.offsetWidth || window.innerWidth;
      const min = -(totalWidth - containerWidth);
      let next = translateRef.current - speed * dt;
      if (next < min) next = 0;
      translateRef.current = next;
      setTranslateX(next);
      autoScrollRafRef.current = requestAnimationFrame(step);
    };
    autoScrollRafRef.current = requestAnimationFrame(step);
  }, [getCardWidth, totalCards]);

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (autoScrollRafRef.current) cancelAnimationFrame(autoScrollRafRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [startAutoScroll]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (!trackRef.current) return;
    isInteractingRef.current = true;
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartTranslate.current = translateRef.current;
    lastXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (autoScrollRafRef.current) cancelAnimationFrame(autoScrollRafRef.current);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    const now = performance.now();
    const dt = now - lastTimeRef.current;
    const dx = e.clientX - lastXRef.current;
    if (dt > 0) velocityRef.current = dx / dt;
    lastXRef.current = e.clientX;
    lastTimeRef.current = now;

    const raw = dragStartTranslate.current + (e.clientX - dragStartX.current);
    const clamped = clamp(raw);
    translateRef.current = clamped;
    setTranslateX(clamped);
  }, [isDragging, clamp]);

  const handlePointerUp = useCallback(() => {
    isInteractingRef.current = false;
    setIsDragging(false);
    const velocity = velocityRef.current;
    const momentum = velocity * 250;
    const target = clamp(translateRef.current + momentum);

    if (Math.abs(velocity) > 0.3) {
      animateTo(target, 500);
      setTimeout(() => snapToNearest(), 520);
    } else {
      snapToNearest();
    }
    startAutoScroll();
  }, [clamp, animateTo, snapToNearest, startAutoScroll]);

  return (
    <section className="py-16 lg:py-24 bg-surface overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground">
          Real Smiles, Real Transformations
        </h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
          A glimpse of the results we deliver every day.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] cursor-grab active:cursor-grabbing select-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{ touchAction: "pan-y" }}
      >
        <div
          ref={trackRef}
          className="flex gap-6 px-3 will-change-transform"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: isDragging ? "none" : undefined,
          }}
        >
          {allCases.map((c, i) => (
            <Card key={`${c.name}-${i}`} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
