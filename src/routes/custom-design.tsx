import { createFileRoute } from "@tanstack/react-router";
import craft from "@/assets/craft.jpg";
import { BUSINESS } from "@/lib/site";
import { CtaBand, PageHero, Section } from "@/components/site/Bits";

export const Route = createFileRoute("/custom-design")({
  head: () => ({
    meta: [
      { title: "Custom Jewellery Design in Poonamallee | Guru Hasti" },
      { name: "description", content: "Bring a photo or a family heirloom and we craft it in gold — consult, design, craft, deliver. Poonamallee, Chennai." },
      { property: "og:title", content: "Custom Jewellery Design in Poonamallee | Guru Hasti" },
      { property: "og:description", content: "Bring a photo or a family heirloom and we craft it in gold — consult, design, craft, deliver. Poonamallee, Chennai." },
    ],
  }),
  component: CustomDesign,
});

const steps = [
  ["Consult", "Bring a photo, a sketch, or an old piece. We talk through weight, purity and budget."],
  ["Design", "You approve a drawing or a wax sample before any gold is committed."],
  ["Craft", "Our goldsmiths hand-make the piece; you are updated as it progresses."],
  ["Deliver", "Final weighing, hallmarking and fitting at the showroom."],
];

function CustomDesign() {
  return (
    <>
      <PageHero
        eyebrow="Made for you"
        title="Custom Design Service"
        intro="A grandmother's necklace remade for a granddaughter, or a design you saved on your phone — we make it in gold, with the weight and the cost agreed before we begin."
        image={craft}
      />

      <Section title="The process">
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([t, d], i) => (
            <li key={t} className="rounded-sm border border-border bg-card p-6">
              <span className="font-display text-3xl text-gold">0{i + 1}</span>
              <h3 className="mt-3 text-xl text-maroon">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="soft">
        <div className="grid gap-6 sm:grid-cols-3 text-center">
          {[
            ["3–5 weeks", "Typical timeline"],
            ["From 8 g", "Suggested starting weight"],
            ["Fixed quote", "Making charges agreed upfront"],
          ].map(([b, s]) => (
            <div key={s} className="rounded-sm border border-border bg-card p-8">
              <p className="font-display text-3xl text-maroon">{b}</p>
              <p className="mt-2 text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">{s}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground italic">
          [Timelines and starting prices to be confirmed with the owner.]
        </p>
        <div className="mt-8 text-center">
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-sm bg-maroon px-7 py-3 text-xs tracking-[0.2em] text-primary-foreground uppercase"
          >
            Send us your design
          </a>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
