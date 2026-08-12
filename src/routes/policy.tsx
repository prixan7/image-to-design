import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Bits";

export const Route = createFileRoute("/policy")({
  head: () => ({
    meta: [
      { title: "Policies | Guru Hasti Thanga Maaligai Jewellers" },
      { name: "description", content: "Return and exchange terms, accepted payment methods and privacy practices at Guru Hasti Thanga Maaligai, Poonamallee." },
      { property: "og:title", content: "Policies | Guru Hasti Thanga Maaligai Jewellers" },
      { property: "og:description", content: "Return and exchange terms, accepted payment methods and privacy practices at Guru Hasti Thanga Maaligai, Poonamallee." },
    ],
  }),
  component: Policy,
});

const sections = [
  ["Return &amp; exchange", "Unused ornaments with the original invoice may be exchanged. Buy-back and exchange values are calculated on purity and the prevailing rate on the day, with deductions explained before anything is finalised."],
  ["Payment methods", "Cash, UPI, debit and credit cards. Card EMI is generally available through major banks. [To be confirmed with the owner.]"],
  ["Hallmarking", "Gold ornaments are BIS hallmarked and the purity, net weight and stone weight are recorded on your invoice."],
  ["Privacy", "Details shared through the enquiry form or WhatsApp are used only to respond to your enquiry. We do not sell or share customer information."],
];

function Policy() {
  return (
    <>
      <PageHero
        eyebrow="Fine print"
        title="Policies"
        intro="Our terms in plain language — the same things we would tell you across the counter."
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-8">
          {sections.map(([t, d]) => (
            <article key={t}>
              <h2 className="text-2xl text-maroon">{t}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
