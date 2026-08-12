import { createFileRoute } from "@tanstack/react-router";
import { BUSINESS, REVIEWS } from "@/lib/site";
import { CtaBand, PageHero, Section, Stars } from "@/components/site/Bits";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Reviews | Guru Hasti Thanga Maaligai Jewellers, Poonamallee" },
      { name: "description", content: "Read what Chennai families say about Guru Hasti Thanga Maaligai — 4.8 stars across 2,632 Google reviews." },
      { property: "og:title", content: "Reviews | Guru Hasti Thanga Maaligai Jewellers, Poonamallee" },
      { property: "og:description", content: "Read what Chennai families say about Guru Hasti Thanga Maaligai — 4.8 stars across 2,632 Google reviews." },
    ],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow={`${BUSINESS.rating}★ · ${BUSINESS.reviews} reviews`}
        title="Testimonials &amp; Reviews"
        intro="Paraphrased from Google reviews left by our customers. The themes repeat: variety, honest pricing, and staff who take their time."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <blockquote key={r.name} className="rounded-sm border border-border bg-card p-6">
              <Stars n={r.stars} />
              <p className="mt-4 text-sm text-muted-foreground">"{r.text}"</p>
              <footer className="mt-4 font-display text-lg text-maroon">{r.name}</footer>
            </blockquote>
          ))}
        </div>
      </Section>
      <CtaBand title="Come see for yourself" text="We would love to be your family jeweller too." />
    </>
  );
}
