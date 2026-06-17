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
  { name: "Porcelain Veneers", before: veneersBefore.url, after: veneersAfter.url, orientation: "vertical" },
  { name: "Teeth Whitening", before: whiteningBefore.url, after: whiteningAfter.url, orientation: "horizontal" },
  { name: "Dental Implants", before: implantsBefore.url, after: implantsAfter.url, orientation: "vertical" },
  { name: "Composite Veneers", before: compositeBefore.url, after: compositeAfter.url, orientation: "vertical" },
];

function Card({ c }: { c: (typeof cases)[number] }) {
  const Label = ({ children }: { children: React.ReactNode }) => (
    <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur text-foreground text-[10px] font-sans font-semibold uppercase tracking-[0.12em] px-4 py-1.5 rounded-full shadow-md ring-1 ring-black/5 whitespace-nowrap">
      {children}
    </span>
  );

  return (
    <div className="shrink-0 flex flex-col gap-4">
      <div className="rounded-[28px] bg-card p-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] ring-1 ring-black/[0.06] w-[300px] sm:w-[340px]">
        {c.orientation === "horizontal" ? (
          <div className="flex flex-col gap-3">
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-black/[0.06]">
              <img src={c.before} alt={`${c.name} before`} className="w-full h-auto object-cover block" loading="lazy" />
              <Label>Before</Label>
            </div>
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-black/[0.06]">
              <img src={c.after} alt={`${c.name} after`} className="w-full h-auto object-cover block" loading="lazy" />
              <Label>After</Label>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-black/[0.06] aspect-[3/4]">
              <img src={c.before} alt={`${c.name} before`} className="w-full h-full object-cover" loading="lazy" />
              <Label>Before</Label>
            </div>
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-black/[0.06] aspect-[3/4]">
              <img src={c.after} alt={`${c.name} after`} className="w-full h-full object-cover" loading="lazy" />
              <Label>After</Label>
            </div>
          </div>
        )}
      </div>
      <p className="text-center text-base font-semibold text-foreground">{c.name}</p>
    </div>
  );
}

export default function BeforeAfterShowcase() {
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

      <div className="group relative [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex gap-6 w-max animate-marquee group-hover:[animation-play-state:paused] px-3">
          {[...cases, ...cases].map((c, i) => (
            <Card key={`${c.name}-${i}`} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
