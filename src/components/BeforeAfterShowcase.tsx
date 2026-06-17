import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MoveHorizontal } from "lucide-react";

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
  desc: string;
  before: string;
  after: string;
  aspect: string;
};

const cases: Case[] = [
  { name: "Braces", desc: "Fixed orthodontics correcting crowding and bite alignment.", before: bracesBefore.url, after: bracesAfter.url, aspect: "645/1140" },
  { name: "Invisalign", desc: "Discreet clear aligners straightening teeth without metal.", before: invisalignBefore.url, after: invisalignAfter.url, aspect: "645/1140" },
  { name: "Porcelain Crowns", desc: "Custom ceramic crowns restoring strength and natural shade.", before: crownsBefore.url, after: crownsAfter.url, aspect: "500/255" },
  { name: "Porcelain Veneers", desc: "Ultra-thin shells for a brighter, perfectly proportioned smile.", before: veneersBefore.url, after: veneersAfter.url, aspect: "645/1140" },
  { name: "Teeth Whitening", desc: "Dentist-grade whitening for noticeably brighter teeth.", before: whiteningBefore.url, after: whiteningAfter.url, aspect: "500/255" },
  { name: "Dental Implants", desc: "Replacing missing teeth with stable, lifelike implants.", before: implantsBefore.url, after: implantsAfter.url, aspect: "645/1140" },
  { name: "Composite Veneers", desc: "Same-visit composite bonding to reshape and brighten teeth.", before: compositeBefore.url, after: compositeAfter.url, aspect: "645/1140" },
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
      className="relative w-full overflow-hidden rounded-3xl bg-surface select-none touch-none cursor-ew-resize"
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
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt="Before treatment"
          className="absolute inset-0 h-full object-cover"
          style={{ width: `${(100 / Math.max(pos, 0.0001)) * 100}%`, maxWidth: "none" }}
          draggable={false}
        />
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 bg-foreground/80 text-background text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full">
        Before
      </span>
      <span className="absolute top-4 right-4 bg-accent text-accent-foreground text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full">
        After
      </span>

      {/* Divider + handle */}
      <div className="absolute inset-y-0 pointer-events-none" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
        <div className="w-0.5 h-full bg-background shadow-[0_0_0_1px_rgba(0,0,0,0.15)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12 rounded-full bg-background shadow-xl border border-border flex items-center justify-center text-primary">
          <MoveHorizontal className="size-5" />
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfterShowcase() {
  const [active, setActive] = useState(0);
  const current = cases[active];
  const prev = () => setActive((a) => (a - 1 + cases.length) % cases.length);
  const next = () => setActive((a) => (a + 1) % cases.length);

  return (
    <section id="transformations" className="py-20 lg:py-28 px-5 sm:px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">Real transformations</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight max-w-xl leading-tight">
              Drag to see the <span className="italic text-primary">difference.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-pretty">
            Actual patient results across seven of our most-requested treatments. Slide the handle to reveal each smile transformation.
          </p>
        </div>

        {/* Treatment tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {cases.map((c, i) => (
            <button
              key={c.name}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition ${
                i === active
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground border-border hover:border-primary/40"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
          <div className="relative">
            <Slider before={current.before} after={current.after} aspect={current.aspect} />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous transformation"
                className="size-11 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-surface transition"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next transformation"
                className="size-11 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-surface transition"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>

          <div className="bg-background rounded-3xl border border-border p-7">
            <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">
              Case {active + 1} of {cases.length}
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold leading-tight mb-3">{current.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{current.desc}</p>
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition"
            >
              Book a consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
