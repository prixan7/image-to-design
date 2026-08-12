import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaBand, PageHero, Section } from "@/components/site/Bits";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Making Charges, Hallmarking, EMI | Guru Hasti Jewellers" },
      { name: "description", content: "Answers on making charges, BIS hallmarking, EMI, exchange policy and delivery at our Poonamallee showroom." },
      { property: "og:title", content: "FAQ | Making Charges, Hallmarking, EMI | Guru Hasti Jewellers" },
      { property: "og:description", content: "Answers on making charges, BIS hallmarking, EMI, exchange policy and delivery at our Poonamallee showroom." },
    ],
  }),
  component: Faq,
});

const faqs = [
  ["How are making charges calculated?", "As a percentage of the gold value or a per-gram rate, depending on the design. Whichever applies to your piece is told to you before billing — never added quietly at the counter."],
  ["Is your gold hallmarked?", "Yes. Gold ornaments carry BIS hallmarking with the purity mark and HUID, and your invoice records the weight and purity."],
  ["Do you offer EMI or a savings scheme?", "Card EMI is generally available through major banks. [Scheme and EMI details to be confirmed with the owner.]"],
  ["Can I exchange jewellery bought elsewhere?", "Yes. Old gold from any store is accepted; it is weighed and purity-tested in front of you and the value is adjusted against your purchase."],
  ["What is your return and exchange policy?", "Unused pieces with the original invoice can be exchanged. Buy-back and exchange rates depend on purity and the current rate. See our Policies page."],
  ["Do you deliver outside Poonamallee?", "Purchases are handed over at the showroom. For customers travelling from outside Chennai, message us on WhatsApp before visiting and we will keep pieces ready."],
  ["Can I reserve a design before visiting?", "Yes — send us the design or category on WhatsApp and we will have the tray waiting."],
  ["What are your timings?", "Open daily; please call to confirm the exact hours before travelling."],
];

function Faq() {
  return (
    <>
      <PageHero
        eyebrow="Good to know"
        title="Frequently Asked Questions"
        intro="Making charges, hallmarking, EMI, exchange and delivery — the questions we are asked most often at the counter."
      />
      <Section>
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          {faqs.map(([q, a], i) => (
            <AccordionItem key={q} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-display text-lg text-maroon">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
      <CtaBand title="Still have a question?" text="A quick WhatsApp message reaches us faster than anything else." />
    </>
  );
}
