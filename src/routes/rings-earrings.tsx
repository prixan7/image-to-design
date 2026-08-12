import { createFileRoute } from "@tanstack/react-router";
import earrings from "@/assets/earrings.jpg";
import rings from "@/assets/rings.jpg";
import { CtaBand, ItemCard, PageHero, Section } from "@/components/site/Bits";

export const Route = createFileRoute("/rings-earrings")({
  head: () => ({
    meta: [
      { title: "Gold Rings and Earrings in Poonamallee | Guru Hasti" },
      { name: "description", content: "Gold studs, jhumkas, drops and rings for daily wear and engagements, in Poonamallee, Chennai." },
      { property: "og:title", content: "Gold Rings and Earrings in Poonamallee | Guru Hasti" },
      { property: "og:description", content: "Gold studs, jhumkas, drops and rings for daily wear and engagements, in Poonamallee, Chennai." },
    ],
  }),
  component: RingsEarrings,
});

const items = [
  { image: earrings, name: "Temple Jhumkas", detail: "22K · from 6 g · ruby accents" },
  { image: earrings, name: "Everyday Gold Studs", detail: "22K · from 1.5 g" },
  { image: earrings, name: "Chandbali Drops", detail: "22K · from 8 g" },
  { image: rings, name: "Solitaire-style Ring", detail: "18K · from 2.5 g" },
  { image: rings, name: "Engagement Band Pair", detail: "22K · from 8 g" },
  { image: rings, name: "Stone Daily-wear Ring", detail: "18K · from 2 g" },
];

function RingsEarrings() {
  return (
    <>
      <PageHero eyebrow="Everyday &amp; occasion" title="Rings &amp; Earrings" intro="Studs, jhumkas, drops and rings — the pieces that get worn the most. Light weights for daily use, and statement work for functions." image={rings} />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <ItemCard key={i.name} {...i} />
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">Ring sizing and ear-wire adjustments are done in-store, usually while you wait.</p>
      </Section>
      <CtaBand />
    </>
  );
}
