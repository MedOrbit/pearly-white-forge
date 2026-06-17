import { useState } from "react";
import {
  Phone,
  CalendarCheck,
  Sparkles,
  MapPin,
  Mail,
  Star,
  ChevronDown,
  ArrowRight,
  Quote,
  CheckCircle2,
  Clock3,
  Scan,
  Microscope,
  Wand2,
  Activity,
  ShieldCheck,
  CreditCard,
  Award,
  HeartHandshake,
  MessageCircle,
  Navigation,
  Bone,
  Users,
  Smile,
  Syringe,
  CalendarDays,
  Building2,
  BadgeCheck,
  MessagesSquare,
} from "lucide-react";

import heroPatientAsset from "@/assets/clinic/dr-henny-hero-transparent.png.asset.json";
const heroPatient = heroPatientAsset.url;
const heroPatientMobile = heroPatientAsset.url;

import drHenryAsset from "@/assets/clinic/dr-henry.png.asset.json";
const drHenry = drHenryAsset.url;

import logoAsset from "@/assets/clinic/logo-gorgeous-smiles.png.asset.json";
const logoUrl = logoAsset.url;

import doctorMale from "@/assets/doctor-male.jpg";
import clinicInteriorAsset from "@/assets/clinic/reception.png.asset.json";
const clinicInterior = clinicInteriorAsset.url;
import clinicTreatmentRoomAsset from "@/assets/clinic/treatment-room.png.asset.json";
import clinicOperatoryAsset from "@/assets/clinic/operatory.png.asset.json";
import clinicXrayAsset from "@/assets/clinic/xray-suite.png.asset.json";
import clinicPediatricAsset from "@/assets/clinic/pediatric-room.png.asset.json";
const clinicTreatmentRoom = clinicTreatmentRoomAsset.url;
const clinicConsultation = clinicOperatoryAsset.url;
const clinicSterilization = clinicXrayAsset.url;
const clinicExterior = clinicPediatricAsset.url;
import familySmile from "@/assets/family-smile.jpg";
import reviewPriya from "@/assets/review-priya.jpg";
import reviewRahul from "@/assets/review-rahul.jpg";
import reviewAnjali from "@/assets/review-anjali.jpg";
import txImplants from "@/assets/tx-implants.jpg";
import txRootcanal from "@/assets/tx-rootcanal.jpg";
import txWhitening from "@/assets/tx-whitening.jpg";
import txAligners from "@/assets/tx-aligners.jpg";
import txSmile from "@/assets/tx-smile.jpg";
import txCrowns from "@/assets/tx-crowns.jpg";
import txFillings from "@/assets/tx-fillings.jpg";
import txPediatric from "@/assets/tx-pediatric.jpg";
import txLaser from "@/assets/tx-laser.jpg";
import txGums from "@/assets/tx-gums.jpg";
import txExtraction from "@/assets/tx-extraction.jpg";
import txDentures from "@/assets/tx-dentures.jpg";
import txBraces from "@/assets/tx-braces.jpg";
import txFacial from "@/assets/tx-facial.jpg";
import txCheckup from "@/assets/tx-checkup.jpg";
import txScaling from "@/assets/tx-scaling.jpg";
import txNightguard from "@/assets/tx-nightguard.jpg";
import txFullmouth from "@/assets/tx-fullmouth.jpg";
import txSedation from "@/assets/tx-sedation.jpg";
import txVeneers from "@/assets/tx-veneers.jpg";

// ─── Clinic constants ──────────────────────────────────────────────────────
const PHONE_PRIMARY = "+91 95103 97046";
const PHONE_PRIMARY_TEL = "+919510397046";
const PHONE_SECONDARY = "+91 76009 09077";
const PHONE_SECONDARY_TEL = "+917600909077";
const WHATSAPP_LINK = "https://wa.me/919510397046?text=Hi%20Patel%20Dental%20Hospital%2C%20I%27d%20like%20to%20book%20an%20appointment.";
const EMAIL = "info@pateldentalhospital.com";

const treatments = [
  { img: txCheckup, name: "Dental Consultation", desc: "Detailed oral check-up with Dr. Vipul Patel. Just ₹100 — transparent, no hidden charges." },
  { img: txImplants, name: "Dental Implants", desc: "Single tooth to full-mouth implants, performed by FICOI-certified implantologist since 2012." },
  { img: txFullmouth, name: "Full Mouth Rehabilitation", desc: "Complete reconstruction for worn, broken or missing teeth — function plus aesthetics restored." },
  { img: txRootcanal, name: "Single-Visit Root Canal", desc: "Painless RCT completed in one sitting using rotary endodontics. Save your natural tooth." },
  { img: txLaser, name: "Laser Dentistry", desc: "Sutureless gum treatments, faster healing, less bleeding — laser-assisted modern care." },
  { img: txSmile, name: "Smile Designing", desc: "Cosmetic makeovers customised to your face — designed to make you smile with confidence." },
  { img: txWhitening, name: "Teeth Whitening & Bleaching", desc: "Visibly brighter teeth in one in-clinic session — safe, dentist-grade, long-lasting." },
  { img: txCrowns, name: "Zirconia & BruxZir Crowns", desc: "Premium zirconia and ceramic crowns/bridges — natural-looking, metal-free, ultra-durable." },
  { img: txVeneers, name: "Porcelain Veneers", desc: "Ultra-thin shells that instantly fix chips, gaps and stains — Hollywood smile, no compromise." },
  { img: txAligners, name: "Clear Aligners", desc: "Invisible orthodontics for adults and teens — straighten teeth without metal braces." },
  { img: txBraces, name: "Braces & Orthodontics", desc: "Metal, ceramic and lingual braces for misaligned teeth — for kids, teens and adults." },
  { img: txPediatric, name: "Pediatric Dentistry", desc: "Gentle, child-friendly care — pulpectomy, sealants, fluoride and first-visit comfort." },
  { img: txScaling, name: "Scaling & Polishing", desc: "Professional cleaning to remove plaque, stains and tartar — fresher breath in one visit." },
  { img: txFillings, name: "Tooth-Coloured Fillings", desc: "Composite fillings that match your natural tooth — mercury-free and long-lasting." },
  { img: txExtraction, name: "Tooth & Wisdom Extraction", desc: "Surgical removal of decayed, broken or impacted wisdom teeth — safe and quick recovery." },
  { img: txDentures, name: "Dentures (incl. Batrisi)", desc: "Custom complete and partial dentures, including implant-supported Batrisi denture." },
  { img: txGums, name: "Gum Treatments", desc: "Flap surgery, gingivectomy, depigmentation and bleeding-gum care by specialists." },
  { img: txNightguard, name: "Apicoectomy & Surgery", desc: "Endodontic micro-surgery, removal of cysts, tumours and impacted teeth — done in-house." },
  { img: txFacial, name: "Dental Jewellery", desc: "Add a tasteful sparkle to your smile — safe, painless, removable dental jewellery." },
  { img: txSedation, name: "Oral Cancer Screening", desc: "Early-stage detection of OSMF and oral cancer through biopsy and clinical exam." },
];

const faqs = [
  { q: "How much does a consultation cost at Patel Dental Hospital?", a: "A complete consultation with Dr. Vipul Patel is just ₹100 — including a detailed oral examination and a transparent treatment plan with no hidden charges." },
  { q: "Where are your clinics located in Rajkot?", a: "We have two branches: the main Bhaktinagar clinic at 1st Floor, Rameshwar Complex, Gayatri Nagar Main Road (Opp. SBI Bank, Jalaram Chowk) and our second branch at Sahjanand Complex, Mavdi, Rajkot. Choose whichever is closer." },
  { q: "Are your treatments really painless?", a: "Yes. We use modern painless anaesthesia, single-visit rotary RCT and laser dentistry wherever possible. Most patients describe their visit as surprisingly comfortable — see our verified Google reviews." },
  { q: "Do you really finish root canals in a single visit?", a: "Yes. Using rotary endodontics and apex locators, Dr. Vipul Patel completes most root canals in one 60–90 minute appointment without compromising on quality." },
  { q: "Can dental implants replace a full mouth of missing teeth?", a: "Absolutely. We've been performing full-mouth implants since 2016. Dr. Vipul Patel is FICOI-certified (Fellowship of the International Congress of Oral Implantologists) and has placed thousands of implants for Rajkot patients." },
  { q: "How long will my first appointment take?", a: "Plan for 45–60 minutes for your first visit — examination, digital X-rays if required, and a clear discussion of your treatment options and pricing before anything begins." },
  { q: "Do you treat children and senior citizens?", a: "Yes — from a child's first dental visit (we have a dedicated pediatric setup with pulpectomy, sealants and fluoride) to advanced prosthodontic care like Batrisi dentures for seniors." },
  { q: "What payment methods do you accept?", a: "We accept Cash, UPI and all major debit/credit cards. EMI options on larger treatments are available — please ask our front desk." },
  { q: "What sterilisation protocols do you follow?", a: "Every instrument is autoclaved between patients, single-use disposables are used wherever required, and our clinic is centrally air-conditioned with strict hygiene SOPs." },
  { q: "How long do dental implants last?", a: "With good oral hygiene and regular check-ups, implants placed at Patel Dental Hospital can last 20+ years — often a lifetime. We use globally trusted implant systems." },
  { q: "Do you offer emergency dental appointments?", a: "Yes. For severe pain, swelling, broken teeth or knocked-out teeth, call +91 95103 97046 and we will fit you in the same day wherever possible." },
  { q: "How can I book an appointment quickly?", a: "Call or WhatsApp us on +91 95103 97046, or fill the form on this page — our team will confirm your slot within minutes during clinic hours (Mon–Sat, 9:00 AM – 9:00 PM)." },
];

const testimonials = [
  { name: "Govani Ashok", treatment: "Single-Visit Root Canal", img: reviewRahul, quote: "Painless procedure. Doctor is humble and the treatment was done in a single visit. I'm so happy with the result." },
  { name: "Harsha Shingala", treatment: "Implant-Supported Bridge", img: reviewAnjali, quote: "I had no teeth in my upper jaw. They placed implants and gave me a ceramic bridge. I can chew anything now — the doctor is so good." },
  { name: "Dhiraj Bhimani", treatment: "Dental Implant", img: reviewPriya, quote: "Nice experience. Dr. Vipul Patel is good in nature, reasonable in price, and gives quality treatment. Highly recommended." },
  { name: "Khushal Vaghela", treatment: "Root Canal Treatment", img: reviewRahul, quote: "Painless, single visit and time-saving. Humble and honorable doctors and staff. Best dental hospital in Rajkot." },
  { name: "Manubhai Shangani", treatment: "Full Mouth Restoration", img: reviewPriya, quote: "They changed my smile completely and gave me beautiful white teeth. Thank you Patel Dental Hospital team." },
  { name: "Barkatbhai Dharani", treatment: "Batrisi Denture", img: reviewAnjali, quote: "Dr. Vipul Patel made a complete denture for me. It's comfortable and I can chew everything — finally smiling again." },
];

const trustLogos = [
  "Dental Council of India",
  "Gujarat State Dental Council (A7495)",
  "FICOI Certified Implantologist",
  "4.9★ on Google · 492+ Reviews",
  "Established 2012",
  "Centrally Air-Conditioned Clinic",
];

function ToothIcon({ className, fill = "currentColor", strokeWidth = 1.5 }: { className?: string; fill?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={fill}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2.5c-2.2 0-3.5.9-4.8.9-1.5 0-3.7-.6-4.7 1.4-1 2-.4 5.6.6 8.6.7 2.1 1 3.7 1.3 5.4.3 1.6.6 3.2 1.7 3.2 1.3 0 1.6-1.8 2-3.9.4-2 .9-4.1 1.9-4.1s1.5 2.1 1.9 4.1c.4 2.1.7 3.9 2 3.9 1.1 0 1.4-1.6 1.7-3.2.3-1.7.6-3.3 1.3-5.4 1-3 1.6-6.6.6-8.6-1-2-3.2-1.4-4.7-1.4-1.3 0-2.6-.9-4.8-.9z" />
    </svg>
  );
}



function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="space-y-3"
    >
      <div className="grid sm:grid-cols-2 gap-3">
        <input required maxLength={80} type="text" placeholder="Full name"
          className="w-full px-4 py-3 bg-background rounded-xl border border-foreground/10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition" />
        <input required maxLength={20} type="tel" placeholder="Phone / WhatsApp number"
          className="w-full px-4 py-3 bg-background rounded-xl border border-foreground/10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition" />
      </div>
      <select required defaultValue=""
        className="w-full px-4 py-3 bg-background rounded-xl border border-foreground/10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition">
        <option value="" disabled>Select treatment you need</option>
        {treatments.map((t) => <option key={t.name}>{t.name}</option>)}
      </select>
      <select required defaultValue=""
        className="w-full px-4 py-3 bg-background rounded-xl border border-foreground/10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition">
        <option value="" disabled>Preferred branch</option>
        <option>Bhaktinagar (Main) — Gayatri Nagar</option>
        <option>Mavdi Branch — Sahjanand Complex</option>
      </select>
      <textarea maxLength={500} placeholder="Anything we should know? (optional)" rows={3}
        className="w-full px-4 py-3 bg-background rounded-xl border border-foreground/10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none" />
      <button type="submit"
        className="w-full bg-accent text-accent-foreground py-3.5 rounded-xl font-semibold text-sm hover:opacity-95 transition shadow-lg shadow-accent/20">
        {submitted ? "Thanks — we'll call you back shortly" : "Request a callback"}
      </button>
      <p className="text-[11px] text-muted-foreground text-center">
        Your details stay private. We never share your information.
      </p>
    </form>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-background rounded-2xl border border-border overflow-hidden">
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between p-5 text-left gap-4">
        <span className="text-sm sm:text-base font-medium text-foreground">{q}</span>
        <ChevronDown className={`size-4 text-muted-foreground shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  );
}

export default function DentalLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pb-24 md:pb-0">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img src={logoUrl} alt="Gorgeous Smiles" className="h-10 sm:h-12 w-auto object-contain" />
          </a>
          <div className="hidden md:flex gap-7 text-sm font-medium text-muted-foreground">
            <a href="#treatments" className="hover:text-primary transition">Treatments</a>
            <a href="#team" className="hover:text-primary transition">Doctors</a>
            <a href="#reviews" className="hover:text-primary transition">Reviews</a>
            <a href="#branches" className="hover:text-primary transition">Branches</a>
            <a href="#faq" className="hover:text-primary transition">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <a href={`tel:${PHONE_PRIMARY_TEL}`} className="hidden sm:flex items-center gap-2 font-mono text-sm font-medium text-foreground">
              <Phone className="size-4" /> {PHONE_PRIMARY}
            </a>
            <a href="#book" className="bg-primary text-primary-foreground px-4 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition">
              Book Visit
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative px-5 sm:px-6 pt-10 lg:pt-16 pb-16 lg:pb-24">
        <div className="absolute top-32 -left-20 size-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 size-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-[11px] font-bold tracking-widest uppercase mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Open today · Consultation just ₹100
            </div>
            <h1 className="font-display text-[2.75rem] sm:text-6xl lg:text-7xl font-medium leading-[1.02] tracking-tight text-balance mb-6">
              Rajkot's most trusted{" "}
              <span className="italic text-primary relative">
                dental home
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 9 Q 100 -2 198 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-accent" />
                </svg>
              </span>
              {" "}since 2012.
            </h1>
            <p className="text-lg text-muted-foreground max-w-[52ch] mb-8 leading-relaxed">
              Painless implants, single-visit root canals, smile designing and full-mouth rehabilitation by
              <span className="text-foreground font-medium"> Dr. Vipul Patel (FICOI)</span> — trusted by 500+ Rajkot families and rated 4.9★ on Google.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#book" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-full text-sm font-semibold hover:opacity-90 transition shadow-lg shadow-primary/20">
                <CalendarCheck className="size-4" /> Book ₹100 consultation
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-full text-sm font-semibold hover:opacity-95 transition shadow-lg">
                <MessageCircle className="size-4" /> WhatsApp us
              </a>
              <a href={`tel:${PHONE_PRIMARY_TEL}`} className="inline-flex items-center gap-2 bg-background border border-border px-6 py-4 rounded-full text-sm font-semibold hover:bg-surface transition">
                <Phone className="size-4" /> Call now
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img src={reviewPriya} alt="" className="size-9 rounded-full border-2 border-background object-cover" />
                <img src={reviewRahul} alt="" className="size-9 rounded-full border-2 border-background object-cover" />
                <img src={reviewAnjali} alt="" className="size-9 rounded-full border-2 border-background object-cover" />
                <div className="size-9 rounded-full border-2 border-background bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">500+</div>
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} className="size-3.5 fill-current" />)}
                  <span className="text-foreground font-semibold ml-1">4.9</span>
                </div>
                <div className="text-xs text-muted-foreground">492+ verified Google reviews</div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="animate-fade-up mt-4 lg:mt-0">
            <img
              src={heroPatient}
              alt="Dr. Vipul Patel — Patel Dental Hospital, Rajkot"
              width={1080}
              height={1600}
              className="w-full aspect-[3/4] object-contain object-center"
            />
          </div>
        </div>
      </section>

      {/* Marquee trust strip */}
      <div className="border-y border-border bg-surface overflow-hidden py-5">
        <div className="flex gap-12 animate-[marquee_35s_linear_infinite] whitespace-nowrap font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {[...trustLogos, ...trustLogos].map((logo, i) => (
            <div key={i} className="flex items-center gap-3 shrink-0">
              <span className="size-1.5 rounded-full bg-accent" />
              {logo}
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>

      {/* INSTAGRAM REELS */}
      <section className="py-20 lg:py-28 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">From our reels</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight">
              Watch us on <span className="italic text-primary">Instagram.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {["DYXW3jhok3R", "DXpCCMsDGTN", "DXPNTC2jDuE"].map((id) => (
              <div key={id} className="rounded-3xl overflow-hidden border border-border bg-background shadow-sm">
                <iframe
                  src={`https://www.instagram.com/reel/${id}/embed`}
                  title={`Instagram reel ${id}`}
                  loading="lazy"
                  allow="encrypted-media"
                  allowFullScreen
                  scrolling="no"
                  className="w-full"
                  style={{ height: 720, border: 0 }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — "We love to see people smile" */}
      <section className="py-20 lg:py-28 px-5 sm:px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">
              Patel Dental Hospital — Dental Clinic in Rajkot
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-primary">
              We love to see <span className="italic">people smile.</span>
            </h2>
            <p className="mt-5 text-base text-muted-foreground">
              Exceptional care from the moment you walk in, to the smile you walk out with.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { Icon: Bone,          val: "1000+", label: "Dental Implants" },
              { Icon: Users,         val: "500+",  label: "Happy Families" },
              { Icon: Smile,          val: "800+",  label: "Smile Makeovers" },
              { Icon: Syringe,        val: "2000+", label: "Root Canals" },
              { Icon: CalendarDays,  val: "13+",   label: "Years in Rajkot" },
              { Icon: Building2,     val: "2",     label: "Convenient Branches" },
              { Icon: BadgeCheck,     val: "2",     label: "FICOI Certified Dentists" },
              { Icon: Star,           val: "4.9★",  label: "Google Rating" },
              { Icon: MessagesSquare, val: "492+",  label: "Google Reviews" },
            ].map(({ Icon, val, label }) => (
              <div key={label} className="flex items-center gap-4 sm:gap-5">
                <div className="shrink-0 text-[#8BC53F] flex items-center justify-center">
                  <Icon className="size-12 sm:size-14" fill="currentColor" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-semibold text-foreground leading-none">
                    {val}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* TREATMENTS */}
      <section id="treatments" className="py-20 lg:py-28 px-5 sm:px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">Our services</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight max-w-xl">
                Complete dental care, <span className="italic text-primary">under one roof.</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-pretty">
              From a child's first cleaning to advanced full-mouth implants — every treatment delivered
              by Dr. Vipul Patel and team using modern, laser-assisted technology.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {treatments.map(({ img, name, desc }) => (
              <div key={name}
                className="group bg-background rounded-3xl border border-border overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 flex flex-col">
                <div className="relative overflow-hidden aspect-[4/3] bg-surface">
                  <img src={img} alt={name} loading="lazy" width={800} height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>
                <div className="p-5 sm:p-6 flex flex-col grow">
                  <h3 className="font-display text-lg sm:text-xl font-semibold leading-tight mb-2">{name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5 grow">{desc}</p>
                  <a href="#book"
                    className="inline-flex items-center justify-center gap-1.5 self-start text-xs font-semibold text-primary border-b border-primary/30 hover:border-primary pb-0.5 transition">
                    Book now <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLINIC INTERIOR */}
      <section className="py-20 lg:py-28 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[2rem] overflow-hidden">
            <img src={clinicInterior} alt="Patel Dental Hospital — modern, centrally air-cooled clinic interior, Rajkot"
              loading="lazy" width={1920} height={1080}
              className="w-full h-[420px] lg:h-[560px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 sm:px-12 lg:px-16">
              <div className="max-w-xl text-primary-foreground">
                <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">The clinic</p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-5">
                  A clinic built for your <span className="italic">comfort.</span>
                </h2>
                <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
                  Centrally air-conditioned, fully sterilised, with the latest dental technology. Two locations
                  in Rajkot so quality care is always close to home.
                </p>
                <a href="#branches" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-full text-sm font-semibold hover:opacity-95 transition">
                  See our branches <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLINIC GALLERY */}
      <section className="py-20 lg:py-28 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">Inside Patel Dental</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight max-w-xl leading-tight">
                Step into our <span className="italic text-primary">clinic.</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-pretty">
              A modern, sterilised environment designed around your comfort — from the waiting lounge to the treatment chair.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <figure className="relative col-span-2 md:col-span-2 md:row-span-2 group rounded-3xl overflow-hidden">
              <img src={clinicTreatmentRoom} alt="Treatment room with premium dental chair at Patel Dental Hospital, Rajkot" loading="lazy" width={1280} height={960}
                className="w-full h-full aspect-[4/3] md:aspect-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-foreground/80 to-transparent text-background p-5 font-mono text-[11px] uppercase tracking-widest">
                Treatment room
              </figcaption>
            </figure>
            <figure className="relative group rounded-3xl overflow-hidden">
              <img src={clinicConsultation} alt="Operatory with premium dental chair and glass partition at Patel Dental Hospital" loading="lazy" width={1280} height={960}
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" />
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-foreground/80 to-transparent text-background p-4 font-mono text-[10px] uppercase tracking-widest">
                Operatory
              </figcaption>
            </figure>
            <figure className="relative group rounded-3xl overflow-hidden">
              <img src={clinicSterilization} alt="Digital panoramic OPG X-ray imaging suite at Patel Dental Hospital, Rajkot" loading="lazy" width={1280} height={960}
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" />
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-foreground/80 to-transparent text-background p-4 font-mono text-[10px] uppercase tracking-widest">
                Digital X-Ray suite
              </figcaption>
            </figure>
            <figure className="relative col-span-2 group rounded-3xl overflow-hidden">
              <img src={clinicExterior} alt="Pediatric-friendly dental treatment room with garden-facing window at Patel Dental Hospital, Rajkot" loading="lazy" width={1280} height={960}
                className="w-full aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-700" />
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-foreground/80 to-transparent text-background p-5 font-mono text-[11px] uppercase tracking-widest">
                Pediatric room
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-20 lg:py-28 px-5 sm:px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">Meet your dentists</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight">
              Specialists who actually <span className="italic text-primary">listen.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: doctorMale, name: "Dr. Vipul Patel", role: "Owner · Implantologist & Cosmetic Dentist · BDS, F.I.C.O.I, FMC", exp: "15+ yrs", featured: true, badge: "Lead Dentist" },
              { img: drHenry, name: "Dr. Henry", role: "Cosmetic Dentist · Implant Dentistry · BDS", exp: "14+ yrs" },
              { img: familySmile, name: "Family-first dentistry", role: "Kids, adults & seniors — all under one roof", exp: "All ages" },
            ].map((m) => (
              <div key={m.name} className="group relative rounded-3xl overflow-hidden bg-background border border-border">
                <img src={m.img} alt={m.name} loading="lazy"
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/90 to-transparent p-6 pt-16">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold">{m.name}</h4>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-accent">{m.exp}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{m.role}</p>
                </div>
                {m.featured && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    {m.badge}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 lg:py-28 px-5 sm:px-6 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">Why Patel Dental Hospital</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
              The Rajkot difference, <span className="italic">since 2012.</span>
            </h2>
            <p className="text-primary-foreground/70 mb-8 leading-relaxed max-w-md">
              While most clinics chase numbers, we focus on long-term oral health — combining FICOI-certified
              implant expertise with the warmth of a family dental home.
            </p>
            <a href="#book" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-full text-sm font-semibold hover:opacity-95 transition">
              Book your visit <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="space-y-5">
            {[
              ["FICOI-certified implantologist", "Dr. Vipul Patel is a Fellow of the International Congress of Oral Implantologists — full-mouth implants since 2016."],
              ["Painless single-visit RCT", "Rotary endodontics and modern anaesthesia — most root canals completed in a single comfortable appointment."],
              ["Transparent ₹100 consultation", "Honest pricing, written estimates, no hidden charges. Pay only for what you need."],
              ["Two convenient Rajkot branches", "Visit us at Bhaktinagar (main) or Mavdi — both centrally air-conditioned with full diagnostics."],
              ["Strict sterilisation protocols", "Autoclaved instruments, single-use disposables, surface disinfection between every patient."],
              ["Modern laser dentistry", "Sutureless gum care, faster healing and less bleeding using soft-tissue lasers."],
            ].map(([title, body]) => (
              <div key={title} className="flex gap-4 border-t border-primary-foreground/10 pt-5">
                <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">{title}</h4>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 lg:py-28 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">How it works</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight">
              From hello to a healthier smile.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              ["Call or WhatsApp", "Reach us on +91 95103 97046 — booking takes under 60 seconds."],
              ["₹100 consultation", "Detailed oral exam with Dr. Vipul Patel and a transparent treatment plan."],
              ["Gentle treatment", "Painless, modern, laser-assisted care in a centrally air-cooled clinic."],
              ["Follow-up care", "Ongoing check-ups and aftercare so your smile stays healthy for life."],
            ].map(([title, body], i) => (
              <div key={title} className="relative">
                <div className="font-display text-6xl italic text-accent/30 mb-4">0{i + 1}</div>
                <h4 className="font-semibold mb-2 text-lg">{title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                {i < 3 && <ArrowRight className="hidden lg:block absolute top-8 -right-4 size-5 text-accent/30" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="py-20 lg:py-28 px-5 sm:px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">Technology</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight">
              Precision tools, <span className="italic text-primary">gentle hands.</span>
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              Every diagnosis and treatment at Patel Dental Hospital is backed by modern equipment — faster results, less discomfort.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Scan, title: "Digital X-rays & OPG", body: "Low-radiation digital imaging for accurate diagnosis of cavities, roots and bone." },
              { icon: Wand2, title: "Painless Anaesthesia", body: "Modern delivery techniques — virtually no sting and no scary numb-face feeling." },
              { icon: Activity, title: "Laser Dentistry", body: "Soft-tissue lasers for sutureless gum treatments and faster, bleed-free healing." },
              { icon: Microscope, title: "Rotary Endodontics", body: "Precision rotary instruments and apex locators for single-visit, comfortable root canals." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-background rounded-3xl border border-border p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all">
                <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="size-6" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING / PAYMENTS */}
      <section className="py-20 lg:py-28 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">Transparent pricing</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-6 leading-tight">
              Quality care, <span className="italic text-primary">honest pricing.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              At Patel Dental Hospital we believe price should never come in the way of good dental health.
              Every patient gets a written estimate before treatment begins — no hidden charges, ever.
            </p>
            <div className="space-y-4">
              {[
                { icon: ShieldCheck, title: "₹100 first consultation", body: "Full oral exam, treatment plan and price discussion — for just ₹100." },
                { icon: CreditCard, title: "Flexible payment options", body: "Cash, UPI and all major debit/credit cards accepted at both branches." },
                { icon: HeartHandshake, title: "EMI on request", body: "Spread larger treatments like implants and full-mouth rehab into easy monthly EMIs." },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4">
                  <div className="size-11 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface rounded-3xl border border-border p-8 sm:p-10">
            <p className="text-xs font-mono uppercase tracking-widest text-accent mb-4">We accept</p>
            <div className="grid grid-cols-2 gap-3">
              {["Cash", "UPI / QR Code", "Visa", "Mastercard", "RuPay", "Debit Cards", "EMI on Request", "Insurance Reimbursement"].map((p) => (
                <div key={p} className="bg-background rounded-2xl border border-border px-4 py-5 text-center font-display text-base sm:text-lg text-foreground/80">
                  {p}
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-6 text-center">
              Talk to our front desk — we'll help you choose the option that works best for you.
            </p>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="py-20 lg:py-24 px-5 sm:px-6 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">Trusted credentials</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight max-w-xl leading-tight">
                Recognised <span className="italic">expertise.</span>
              </h2>
            </div>
            <p className="text-primary-foreground/70 max-w-sm text-pretty">
              Verified credentials, registered specialists and an unbroken 13-year track record in Rajkot.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { title: "FICOI Certified", body: "Fellowship — Intl. Congress of Oral Implantologists" },
              { title: "Reg. A7495", body: "Gujarat State Dental Council, 2012" },
              { title: "4.9★ on Google", body: "From 492+ verified reviews" },
              { title: "Established 2012", body: "13+ years serving Rajkot families" },
            ].map((a) => (
              <div key={a.title} className="border border-primary-foreground/15 rounded-3xl p-6 hover:bg-primary-foreground/5 transition">
                <Award className="size-7 text-accent mb-4" />
                <h4 className="font-semibold leading-tight mb-2">{a.title}</h4>
                <p className="text-xs text-primary-foreground/60 font-mono uppercase tracking-widest">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="py-20 lg:py-28 px-5 sm:px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">Patient stories</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight max-w-xl">
                Real reviews, <span className="italic text-primary">real Rajkot smiles.</span>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} className="size-5 fill-current" />)}
              </div>
              <div>
                <div className="font-semibold">4.9 / 5</div>
                <div className="text-xs text-muted-foreground">from 492+ Google reviews</div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={t.name}
                className={`relative p-7 rounded-3xl border border-border ${i === 1 ? "bg-primary text-primary-foreground" : "bg-background"}`}>
                <Quote className="size-8 mb-4 text-accent" />
                <p className="text-base leading-relaxed mb-6 text-pretty">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-5 border-t border-current/10">
                  <img src={t.img} alt={t.name} loading="lazy"
                    className="size-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className={`text-xs ${i === 1 ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{t.treatment}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* BRANCHES */}
      <section id="branches" className="py-20 lg:py-28 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">Visit us</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight">
              Two clinics across <span className="italic text-primary">Rajkot.</span>
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              Choose the branch that's closest to you — both offer the full range of treatments.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                name: "Bhaktinagar — Main Branch",
                tag: "Since 2012",
                address: "1st Floor, Rameshwar Complex, Gayatri Nagar Main Road, Opp. SBI Bank, Jalaram Chowk, Near Bhaktinagar Circle, Rajkot — 360002",
                hours: "Mon – Sat · 9:00 AM – 9:00 PM",
                sundayClosed: true,
                mapUrl: "https://www.google.com/maps?q=22.27555506494667,70.8043098449707&hl=en&z=17&output=embed",
                directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=22.27555506494667,70.8043098449707",
                note: "1.9 km from Main Bus Stand · 4.6 km from Rajkot Railway Station",
              },
              {
                name: "Mavdi Branch",
                tag: "Opened 2020",
                address: "Sahjanand Complex, Ground Floor, Opp. Virat Waybridge, Opp. Jithariya Hanuman, Mavdi, Rajkot — 360004",
                hours: "Mon – Sat · 9:00 AM – 1:00 PM and 4:00 PM – 8:30 PM",
                sundayClosed: true,
                mapUrl: "https://www.google.com/maps?q=22.26266058395677,70.78252628445625&hl=en&z=17&output=embed",
                directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=22.26266058395677,70.78252628445625",
                note: "Easy access from 150-Feet Ring Road and Mavdi Main Road",
              },
            ].map((b) => (
              <div key={b.name} className="bg-surface rounded-3xl border border-border overflow-hidden flex flex-col">
                <iframe
                  title={`Map of ${b.name}`}
                  src={b.mapUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-64 border-0"
                />
                <div className="p-7 flex flex-col grow">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-display text-2xl font-semibold text-primary leading-tight">{b.name}</h3>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded-full whitespace-nowrap">{b.tag}</span>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed flex items-start gap-2 mb-3">
                    <MapPin className="size-4 mt-0.5 text-accent shrink-0" />
                    <span>{b.address}</span>
                  </p>
                  <p className="text-sm text-foreground/80 flex items-start gap-2 mb-2">
                    <Clock3 className="size-4 mt-0.5 text-accent shrink-0" />
                    <span>{b.hours}{b.sundayClosed ? " · Sunday closed" : ""}</span>
                  </p>
                  <p className="text-xs text-muted-foreground mb-5 ml-6">{b.note}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <a href={`tel:${PHONE_PRIMARY_TEL}`} className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2.5 rounded-full text-xs font-semibold hover:opacity-90 transition">
                      <Phone className="size-3.5" /> Call clinic
                    </a>
                    <a href={b.directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-background border border-border px-4 py-2.5 rounded-full text-xs font-semibold hover:bg-surface transition">
                      <Navigation className="size-3.5" /> Get directions
                    </a>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-[#25D366] text-white px-4 py-2.5 rounded-full text-xs font-semibold hover:opacity-95 transition">
                      <MessageCircle className="size-3.5" /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERS BAND */}
      <section className="py-12 px-5 sm:px-6 bg-accent/10 border-y border-accent/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="size-14 rounded-2xl bg-accent text-accent-foreground flex items-center justify-center">
              <Sparkles className="size-7" />
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-accent mb-1">New patient offer</p>
              <h3 className="font-display text-2xl sm:text-3xl">
                ₹100 consultation + <span className="italic">complimentary</span> treatment plan
              </h3>
            </div>
          </div>
          <a href="#book" className="bg-primary text-primary-foreground px-7 py-4 rounded-full text-sm font-semibold whitespace-nowrap hover:opacity-90 transition">
            Claim offer
          </a>
        </div>
      </section>

      {/* BOOKING + FAQ */}
      <section id="book" className="py-20 lg:py-28 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">Book your visit</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
              Start with a <span className="italic text-primary">₹100</span> consultation.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              Fill in your details and our team will call you back within minutes during clinic hours.
              Or call us directly on <a href={`tel:${PHONE_PRIMARY_TEL}`} className="font-semibold text-primary underline-offset-4 hover:underline">{PHONE_PRIMARY}</a>.
            </p>
            <div className="bg-surface p-6 sm:p-8 rounded-3xl border border-border">
              <InquiryForm />
            </div>
          </div>
          <div id="faq">
            <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">FAQs</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-8">
              Questions, <span className="italic text-primary">answered.</span>
            </h2>
            <div className="space-y-3">
              {faqs.map((f) => <FaqItem key={f.q} {...f} />)}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-primary text-primary-foreground pt-20 pb-10 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-10 mb-16">
            <div className="lg:col-span-2">
              <img src={logoUrl} alt="Gorgeous Smiles" className="h-10 sm:h-12 w-auto object-contain mb-3" />
              <p className="text-xs font-mono uppercase tracking-widest text-accent mb-4">We take care of your teeth · Rajkot, Gujarat</p>
              <p className="text-primary-foreground/60 max-w-sm leading-relaxed mb-6">
                Rajkot's trusted dental home since 2012 — implants, root canals, smile designing and complete family
                dentistry, delivered with FICOI-certified expertise.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#book" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-full text-sm font-semibold hover:opacity-95 transition">
                  <CalendarCheck className="size-4" /> Book appointment
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full text-sm font-semibold hover:opacity-95 transition">
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
              </div>
            </div>
            <div>
              <h5 className="text-xs font-mono uppercase tracking-widest mb-4 text-accent">Contact</h5>
              <p className="text-sm flex items-center gap-2 mb-3"><Phone className="size-4 shrink-0" /><a href={`tel:${PHONE_PRIMARY_TEL}`} className="hover:text-accent transition">{PHONE_PRIMARY}</a></p>
              <p className="text-sm flex items-center gap-2 mb-3"><Phone className="size-4 shrink-0" /><a href={`tel:${PHONE_SECONDARY_TEL}`} className="hover:text-accent transition">{PHONE_SECONDARY}</a></p>
              <p className="text-sm flex items-center gap-2 mb-3"><MessageCircle className="size-4 shrink-0" /><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">WhatsApp Chat</a></p>
              <p className="text-sm flex items-start gap-2"><Mail className="size-4 mt-0.5 shrink-0" /><a href={`mailto:${EMAIL}`} className="hover:text-accent transition break-all">{EMAIL}</a></p>
            </div>
            <div>
              <h5 className="text-xs font-mono uppercase tracking-widest mb-4 text-accent">Clinic hours</h5>
              <ul className="space-y-2 text-sm font-mono">
                <li className="flex justify-between gap-3 border-b border-primary-foreground/10 pb-2"><span className="text-primary-foreground/60">Mon – Sat</span><span>09:00 – 21:00</span></li>
                <li className="flex justify-between gap-3 border-b border-primary-foreground/10 pb-2"><span className="text-primary-foreground/60">Mavdi (Mid-day)</span><span>13:00 – 16:00</span></li>
                <li className="flex justify-between gap-3 text-accent"><span>Sunday</span><span>Closed</span></li>
              </ul>
              <p className="text-[11px] text-primary-foreground/50 mt-4 leading-relaxed">
                Bhaktinagar branch open straight through. Mavdi closes 1–4 PM for lunch break.
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row gap-4 justify-between items-center text-[11px] uppercase tracking-widest text-primary-foreground/50 font-mono text-center sm:text-left">
            <p>© {new Date().getFullYear()} Patel Dental Hospital, Rajkot. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://www.facebook.com/PatelDentalHospital/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">Facebook</a>
              <a href="#" className="hover:text-accent transition">Privacy</a>
              <a href="#" className="hover:text-accent transition">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-3 left-3 right-3 z-50 flex gap-2">
        <a href={`tel:${PHONE_PRIMARY_TEL}`} className="flex-1 bg-background border border-border py-3 rounded-2xl flex items-center justify-center gap-1.5 font-semibold text-xs shadow-xl">
          <Phone className="size-3.5" /> Call
        </a>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#25D366] text-white py-3 rounded-2xl flex items-center justify-center gap-1.5 font-semibold text-xs shadow-xl">
          <MessageCircle className="size-3.5" /> WhatsApp
        </a>
        <a href="#book" className="flex-[1.4] bg-primary text-primary-foreground py-3 rounded-2xl flex items-center justify-center gap-1.5 font-semibold text-xs shadow-xl">
          <CalendarCheck className="size-3.5" /> Book ₹100
        </a>
      </div>
    </div>
  );
}
