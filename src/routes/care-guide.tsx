import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, Section } from "@/components/site/Bits";

export const Route = createFileRoute("/care-guide")({
  head: () => ({
    meta: [
      { title: "Jewellery Care Guide | Guru Hasti Thanga Maaligai" },
      { name: "description", content: "Simple tips to keep gold and silver jewellery bright: storage, cleaning, and what to keep it away from." },
      { property: "og:title", content: "Jewellery Care Guide | Guru Hasti Thanga Maaligai" },
      { property: "og:description", content: "Simple tips to keep gold and silver jewellery bright: storage, cleaning, and what to keep it away from." },
    ],
  }),
  component: CareGuide,
});

const tips = [
  ["Store pieces separately", "Keep each ornament in its own soft pouch or butter-paper fold so chains do not scratch or tangle."],
  ["Wear jewellery last", "Put it on after perfume, hairspray and make-up — chemicals dull gold and blacken silver quickly."],
  ["Keep moisture away", "Remove ornaments before bathing, swimming and cooking with turmeric or salt-heavy dishes."],
  ["Clean gold gently", "Warm water, a drop of mild soap, a soft brush, then dry fully with a cotton cloth."],
  ["Silver needs air-tight storage", "Tarnish is oxidation. Zip pouches with a piece of chalk inside slow it down noticeably."],
  ["Mind the stones", "Never soak kundan, meena or thread-set pieces. Wipe them with a dry cloth only."],
  ["Check clasps twice a year", "A loose clasp or thinning link is a cheap fix now and a lost chain later."],
  ["Get it polished professionally", "Bring pieces to the showroom for cleaning and polishing rather than using home abrasives."],
];

function CareGuide() {
  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="Jewellery Care Guide"
        intro="Gold lasts generations, but it looks its best with a little care. These are the same tips we give customers across the counter."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {tips.map(([t, d]) => (
            <article key={t} className="rounded-sm border border-border bg-card p-6">
              <h2 className="text-xl text-maroon">{t}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </Section>
      <CtaBand title="Need a polish or a repair?" text="Bring your pieces in — cleaning is quick and usually done the same day." />
    </>
  );
}
