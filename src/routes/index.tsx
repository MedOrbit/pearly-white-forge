import { createFileRoute } from "@tanstack/react-router";
import DentalLanding from "@/components/DentalLanding";

const TITLE = "Patel Dental Hospital — Best Dental Clinic in Rajkot | Implants, RCT, Smile Designing";
const DESCRIPTION =
  "Patel Dental Hospital, Rajkot — FICOI-certified implants, painless single-visit root canals, smile designing, laser dentistry & full-mouth rehabilitation by Dr. Vipul Patel. ₹100 consultation. Rated 4.9★ on Google.";
const KEYWORDS =
  "dentist Rajkot, best dental clinic Rajkot, dental implants Rajkot, root canal Bhaktinagar, laser dentistry Rajkot, cosmetic dentist Rajkot, implantologist Rajkot, full mouth rehabilitation Rajkot, zirconia crown Rajkot, smile designing Rajkot, BruxZir Rajkot, dental clinic Mavdi, dental hospital Gayatri Nagar, Dr Vipul Patel dentist, Patel Dental Hospital";

const faqEntities = [
  { q: "How much does a consultation cost at Patel Dental Hospital?", a: "A complete consultation with Dr. Vipul Patel is just ₹100 — including a detailed oral examination and a transparent treatment plan with no hidden charges." },
  { q: "Where are your clinics located in Rajkot?", a: "Two branches: the main Bhaktinagar clinic at 1st Floor, Rameshwar Complex, Gayatri Nagar Main Road (Opp. SBI Bank, Jalaram Chowk) and our second branch at Sahjanand Complex, Mavdi, Rajkot." },
  { q: "Do you finish root canals in a single visit?", a: "Yes. Using rotary endodontics and apex locators, Dr. Vipul Patel completes most root canals in one 60–90 minute appointment without compromising on quality." },
  { q: "Can dental implants replace a full mouth of missing teeth?", a: "Yes. Patel Dental Hospital has been performing full-mouth implants since 2016. Dr. Vipul Patel is FICOI-certified and has placed thousands of implants for Rajkot patients." },
  { q: "What payment methods do you accept?", a: "We accept Cash, UPI and all major debit/credit cards. EMI options on larger treatments are available on request." },
  { q: "Do you offer emergency dental appointments?", a: "Yes. For severe pain, swelling, broken or knocked-out teeth call +91 95103 97046 and we will fit you in the same day wherever possible." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: KEYWORDS },
      { name: "author", content: "Patel Dental Hospital" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#0D4C44" },
      { name: "geo.region", content: "IN-GJ" },
      { name: "geo.placename", content: "Rajkot" },
      { name: "geo.position", content: "22.27555;70.80431" },
      { name: "ICBM", content: "22.27555, 70.80431" },

      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Patel Dental Hospital" },
      { property: "og:locale", content: "en_IN" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
          "@id": "/#patel-dental-hospital",
          name: "Patel Dental Hospital",
          alternateName: "Patel Dental Clinic And Implant Center",
          description: DESCRIPTION,
          url: "/",
          telephone: ["+91-9510397046", "+91-7600909077"],
          email: "info@pateldentalhospital.com",
          foundingDate: "2012",
          priceRange: "₹₹",
          currenciesAccepted: "INR",
          paymentAccepted: "Cash, UPI, Credit Card, Debit Card, EMI",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1st Floor, Rameshwar Complex, Gayatri Nagar Main Road, Opp. SBI Bank, Jalaram Chowk, Near Bhaktinagar Circle",
            addressLocality: "Rajkot",
            addressRegion: "GJ",
            postalCode: "360002",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 22.27555506494667,
            longitude: 70.8043098449707,
          },
          location: [
            {
              "@type": "Place",
              name: "Patel Dental Hospital — Bhaktinagar (Main)",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1st Floor, Rameshwar Complex, Gayatri Nagar Main Road, Opp. SBI Bank, Jalaram Chowk, Near Bhaktinagar Circle",
                addressLocality: "Rajkot",
                addressRegion: "GJ",
                postalCode: "360002",
                addressCountry: "IN",
              },
              geo: { "@type": "GeoCoordinates", latitude: 22.27555506494667, longitude: 70.8043098449707 },
            },
            {
              "@type": "Place",
              name: "Patel Dental Hospital — Mavdi Branch",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sahjanand Complex, Ground Floor, Opp. Virat Waybridge, Opp. Jithariya Hanuman, Mavdi",
                addressLocality: "Rajkot",
                addressRegion: "GJ",
                postalCode: "360004",
                addressCountry: "IN",
              },
              geo: { "@type": "GeoCoordinates", latitude: 22.26266058395677, longitude: 70.78252628445625 },
            },
          ],
          areaServed: [
            { "@type": "City", name: "Rajkot" },
            { "@type": "City", name: "Morbi" },
            { "@type": "City", name: "Jamnagar" },
            { "@type": "City", name: "Junagadh" },
            { "@type": "AdministrativeArea", name: "Saurashtra" },
          ],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:00",
              closes: "21:00",
            },
          ],
          medicalSpecialty: [
            "Dentistry",
            "CosmeticDentistry",
            "Orthodontic",
            "Endodontic",
            "Pediatric",
            "OralAndMaxillofacialSurgery",
          ],
          employee: [
            {
              "@type": "Physician",
              name: "Dr. Vipul Patel",
              jobTitle: "Implantologist & Cosmetic Dentist",
              medicalSpecialty: ["Dentistry", "CosmeticDentistry", "Endodontic", "OralAndMaxillofacialSurgery"],
              identifier: "Gujarat State Dental Council Reg. A7495",
              hasCredential: ["BDS", "F.I.C.O.I", "FMC"],
            },
            {
              "@type": "Physician",
              name: "Dr. Kinjal Patel",
              jobTitle: "Cosmetic & Implant Dentist",
              medicalSpecialty: ["Dentistry", "CosmeticDentistry"],
              hasCredential: ["BDS"],
            },
          ],
          availableService: [
            { "@type": "MedicalProcedure", name: "Dental Implants" },
            { "@type": "MedicalProcedure", name: "Full Mouth Rehabilitation" },
            { "@type": "MedicalProcedure", name: "Single-Visit Root Canal Treatment" },
            { "@type": "MedicalProcedure", name: "Laser Dentistry" },
            { "@type": "MedicalProcedure", name: "Smile Designing" },
            { "@type": "MedicalProcedure", name: "Teeth Whitening" },
            { "@type": "MedicalProcedure", name: "Zirconia & BruxZir Crowns" },
            { "@type": "MedicalProcedure", name: "Porcelain Veneers" },
            { "@type": "MedicalProcedure", name: "Clear Aligners" },
            { "@type": "MedicalProcedure", name: "Braces & Orthodontics" },
            { "@type": "MedicalProcedure", name: "Pediatric Dentistry" },
            { "@type": "MedicalProcedure", name: "Scaling & Polishing" },
            { "@type": "MedicalProcedure", name: "Tooth-Coloured Fillings" },
            { "@type": "MedicalProcedure", name: "Wisdom Tooth Extraction" },
            { "@type": "MedicalProcedure", name: "Dentures (incl. Batrisi)" },
            { "@type": "MedicalProcedure", name: "Gum Treatments" },
            { "@type": "MedicalProcedure", name: "Apicoectomy" },
            { "@type": "MedicalProcedure", name: "Dental Jewellery" },
            { "@type": "MedicalProcedure", name: "Oral Cancer Screening" },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "492",
            bestRating: "5",
            worstRating: "1",
          },
          sameAs: [
            "https://www.facebook.com/PatelDentalHospital/",
            "https://pateldentalhospital.com/",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqEntities.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: DentalLanding,
});
