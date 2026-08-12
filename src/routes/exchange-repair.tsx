import { createFileRoute } from "@tanstack/react-router";
import gold from "@/assets/gold.jpg";
import { CtaBand, PageHero, Section } from "@/components/site/Bits";

export const Route = createFileRoute("/exchange-repair")({
  head: () => ({
    meta: [
      { title: "Old Gold Exchange &amp; Jewellery Repair | Poonamallee, Chennai" },
      { name: "description", content: "Exchange old gold at a fair, openly weighed value, or get chains, clasps and settings repaired at our Poonamallee showroom." },
      { property: "og:title", content: "Old Gold Exchange &amp; Jewellery Repair | Poonamallee, Chennai" },
      { property: "og:description", content: "Exchange old gold at a fair, openly weighed value, or get chains, clasps and settings repaired at our Poonamallee showroom." },
    ],
  }),
  component: ExchangeRepair,
});

const steps = [
  ["Bring the piece in", "Any old gold ornament, with the original bill if you still have it."],
  ["Open weighing &amp; testing", "Weighed and purity-tested in front of you on the counter."],
  ["A clear number", "Deductions for stones, wastage or solder are explained item by item."],
  ["Exchange or repair", "Adjust the value against a new purchase, or leave the piece for repair."],
];

const accepted = [
  "22K and 18K gold ornaments",
  "Hallmarked and non-hallmarked pieces",
  "Broken chains, bent bangles, missing clasps",
  "Stone-set pieces (stone weight deducted)",
  "Silver articles at the silver counter",
];

function ExchangeRepair() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Old Gold Exchange &amp; Repair"
        intro="Old gold should never feel like a guessing game. Everything is weighed and tested in front of you, and every deduction is explained before you decide."
        image={gold}
      />

      <Section title="How it works">
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

      <Section title="What we accept" tone="soft">
        <ul className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
          {accepted.map((a) => (
            <li key={a} className="rounded-sm border border-border bg-card px-5 py-4 text-sm text-muted-foreground">
              {a}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Most repairs are ready in 2–4 days. <span className="italic">[Services and turnaround to be confirmed with the owner.]</span>
        </p>
      </Section>

      <CtaBand title="Have old gold at home?" text="Message us a photo on WhatsApp and we will tell you what to bring along." />
    </>
  );
}
