import { createFileRoute } from "@tanstack/react-router";
import showroom from "@/assets/showroom.jpg";
import craft from "@/assets/craft.jpg";
import { BUSINESS } from "@/lib/site";
import { CtaBand, PageHero, Section } from "@/components/site/Bits";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Guru Hasti Thanga Maaligai Jewellers, Poonamallee" },
      { name: "description", content: "The story of a family jewellery showroom on Car Street, Poonamallee, trusted by Chennai families for generations." },
      { property: "og:title", content: "About Us | Guru Hasti Thanga Maaligai Jewellers, Poonamallee" },
      { property: "og:description", content: "The story of a family jewellery showroom on Car Street, Poonamallee, trusted by Chennai families for generations." },
    ],
  }),
  component: About,
});

const values = [
  ["Honesty at the counter", "Rates, weights and making charges are said out loud before anything is billed."],
  ["Patience, always", "Fifty trays if that is what it takes. Nobody is hurried into a purchase here."],
  ["Craft we can vouch for", "We work with goldsmiths our family has known for decades."],
  ["A place to come back to", "Repairs, polishing and exchange — long after the sale is done."],
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="A Car Street name, generation after generation"
        intro="Guru Hasti Thanga Maaligai has stood in Poonamallee for over forty years, with roots in the trade going back close to a century. Mothers who bought their thaali here now bring their daughters."
        image={showroom}
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <img src={craft} alt="Goldsmith at work" loading="lazy" className="rounded-sm" />
          <div>
            <p className="eyebrow">The family</p>
            <h2 className="mt-3 text-3xl text-maroon">Built on a promise, not a price tag</h2>
            <p className="mt-4 text-muted-foreground">
              What began as a modest counter serving the neighbourhood grew, slowly, into the
              showroom you see today — the same family behind it, the same idea holding it up: tell
              the customer the truth about the gold in their hand.
            </p>
            <p className="mt-4 text-sm text-muted-foreground italic">
              [Founder and family history to be supplied by the owner.]
            </p>
          </div>
        </div>
      </Section>

      <Section title="What we stand for" tone="soft">
        <div className="grid gap-8 sm:grid-cols-2">
          {values.map(([t, d]) => (
            <div key={t} className="rounded-sm border border-border bg-card p-6">
              <h3 className="text-xl text-maroon">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          {BUSINESS.rating}★ from {BUSINESS.reviews} Google reviews.
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
