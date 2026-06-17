import { useCallback, useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

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

type Case = {
  name: string;
  before: string;
  after: string;
  aspect: string;
};

const cases: Case[] = [
  { name: "Braces", before: bracesBefore.url, after: bracesAfter.url, aspect: "645/1140" },
  { name: "Invisalign", before: invisalignBefore.url, after: invisalignAfter.url, aspect: "645/1140" },
  { name: "Porcelain Crowns", before: crownsBefore.url, after: crownsAfter.url, aspect: "500/255" },
  { name: "Porcelain Veneers", before: veneersBefore.url, after: veneersAfter.url, aspect: "645/1140" },
  { name: "Teeth Whitening", before: whiteningBefore.url, after: whiteningAfter.url, aspect: "500/255" },
  { name: "Dental Implants", before: implantsBefore.url, after: implantsAfter.url, aspect: "645/1140" },
  { name: "Composite Veneers", before: compositeBefore.url, after: compositeAfter.url, aspect: "645/1140" },
];

function Slider({ before, after, aspect }: { before: string; after: string; aspect: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, next)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      updateFromClientX(e.clientX);
    };
    const onUp = () => { draggingRef.current = false; };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [updateFromClientX]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-2xl bg-surface select-none touch-none cursor-ew-resize"
      style={{ aspectRatio: aspect }}
      onPointerDown={(e) => {
        draggingRef.current = true;
        (e.target as Element).setPointerCapture?.(e.pointerId);
        updateFromClientX(e.clientX);
      }}
    >
      {/* After (full) */}
      <img src={after} alt="After treatment" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      {/* Before (clipped) */}
      <img
        src={before}
        alt="Before treatment"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        draggable={false}
      />

      {/* Labels */}
      <span className="absolute top-3 left-3 bg-foreground/80 text-background text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full">
        Before
      </span>
      <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full">
        After
      </span>

      {/* Divider + handle */}
      <div className="absolute inset-y-0 pointer-events-none" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
        <div className="w-0.5 h-full bg-background shadow-[0_0_0_1px_rgba(0,0,0,0.15)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-10 rounded-full bg-background shadow-xl border border-border flex items-center justify-center text-primary">
          <MoveHorizontal className="size-4" />
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfterShowcase() {
  return (
    <section className="py-16 lg:py-24 px-5 sm:px-6 bg-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {cases.map((c) => (
          <div key={c.name} className="flex flex-col gap-3">
            <Slider before={c.before} after={c.after} aspect={c.aspect} />
            <p className="text-center text-sm font-semibold text-foreground">{c.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
