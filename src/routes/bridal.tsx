import { createFileRoute } from "@tanstack/react-router";
import bridal from "@/assets/bridal.jpg";
import gold from "@/assets/gold.jpg";
import earrings from "@/assets/earrings.jpg";
import { BUSINESS } from "@/lib/site";
import { CtaBand, ItemCard, PageHero, Section } from "@/components/site/Bits";

export const Route = createFileRoute("/bridal")({
  head: () => ({
    meta: [
      { title: "Bridal Gold Jewellery Chennai | Guru Hasti, Poonamallee" },
      { name: "description", content: "Complete South Indian bridal sets — haaram, attigai, vanki, oddiyanam and jhumkas. Book a bridal consultation in Poonamallee." },
      { property: "og:title", content: "Bridal Gold Jewellery Chennai | Guru Hasti, Poonamallee" },
      { property: "og:description", content: "Complete South Indian bridal sets — haaram, attigai, vanki, oddiyanam and jhumkas. Book a bridal consultation in Poonamallee." },
    ],
  }),
  component: Bridal,
});

const sets = [
  { image: gold, name: "Classic Temple Bridal Set", detail: "Haaram + attigai + jhumkas · from 60 g" },
  { image: bridal, name: "Full Muhurtham Ensemble", detail: "With vanki, oddiyanam &amp; maatal" },
  { image: earrings, name: "Reception Light Set", detail: "Short necklace + drops · from 22 g" },
];

const steps = [
  ["Consultation", "A quiet slot with a dedicated staff member — bring your saree colours and photos."],
  ["Selection", "Trays laid out by budget and weight, with making charges shown as we go."],
  ["Ordering", "Anything not in stock is ordered or crafted, typically in 3–5 weeks."],
  ["Handover", "Final weighing, hallmark check, billing and a fitting before the function."],
];

function Bridal() {
  return (
    <>
      <PageHero
        eyebrow="Weddings"
        title="Bridal &amp; Wedding Collection"
        intro="From the thaali to the oddiyanam, we help families put together the entire muhurtham set — often across several visits, always without pressure."
        image={bridal}
      />

      <Section title="Bridal sets">
        <div className="grid gap-6 sm:grid-cols-3">
          {sets.map((s) => (
            <ItemCard key={s.name} {...s} />
          ))}
        </div>
      </Section>

      <Section title="How a bridal purchase works here" tone="soft">
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([t, d], i) => (
            <li key={t} className="rounded-sm border border-border bg-card p-6">
              <span className="font-display text-3xl text-gold">0{i + 1}</span>
              <h3 className="mt-3 text-xl text-maroon">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-sm bg-maroon px-7 py-3 text-xs tracking-[0.2em] text-primary-foreground uppercase"
          >
            Book a Bridal Consultation
          </a>
        </div>
      </Section>

      <CtaBand title="Planning a wedding?" text="Tell us the date and we will set aside time — evenings and weekday mornings are quietest." />
    </>
  );
}
