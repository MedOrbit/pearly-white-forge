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

const cases = [
  { name: "Braces", before: bracesBefore.url, after: bracesAfter.url },
  { name: "Invisalign", before: invisalignBefore.url, after: invisalignAfter.url },
  { name: "Porcelain Crowns", before: crownsBefore.url, after: crownsAfter.url },
  { name: "Porcelain Veneers", before: veneersBefore.url, after: veneersAfter.url },
  { name: "Teeth Whitening", before: whiteningBefore.url, after: whiteningAfter.url },
  { name: "Dental Implants", before: implantsBefore.url, after: implantsAfter.url },
  { name: "Composite Veneers", before: compositeBefore.url, after: compositeAfter.url },
];

export default function BeforeAfterShowcase() {
  return (
    <section className="py-16 lg:py-24 px-5 sm:px-6 bg-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {cases.map((c) => (
          <div key={c.name} className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <div className="relative rounded-2xl overflow-hidden">
                <img src={c.before} alt={`${c.name} before`} className="w-full h-auto object-cover" loading="lazy" />
                <span className="absolute top-3 left-3 bg-black/70 text-white text-[10px] font-sans uppercase tracking-widest px-3 py-1.5 rounded-full">
                  Before
                </span>
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <img src={c.after} alt={`${c.name} after`} className="w-full h-auto object-cover" loading="lazy" />
                <span className="absolute top-3 right-3 bg-[#E07A5F] text-white text-[10px] font-sans uppercase tracking-widest px-3 py-1.5 rounded-full">
                  After
                </span>
              </div>
            </div>
            <p className="text-center text-sm font-semibold text-foreground">{c.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
