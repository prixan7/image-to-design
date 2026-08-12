import { createFileRoute } from "@tanstack/react-router";
import silver from "@/assets/silver.jpg";
import { CtaBand, ItemCard, PageHero, Section } from "@/components/site/Bits";

export const Route = createFileRoute("/silver")({
  head: () => ({
    meta: [
      { title: "Silver Articles &amp; Jewellery in Poonamallee | Guru Hasti" },
      { name: "description", content: "Silver pooja items, lamps, anklets, and gifting articles at Guru Hasti Thanga Maaligai, Poonamallee, Chennai." },
      { property: "og:title", content: "Silver Articles &amp; Jewellery in Poonamallee | Guru Hasti" },
      { property: "og:description", content: "Silver pooja items, lamps, anklets, and gifting articles at Guru Hasti Thanga Maaligai, Poonamallee, Chennai." },
    ],
  }),
  component: Silver,
});

const items = [
  { image: silver, name: "Kuthu Vilakku Lamp Pair", detail: "Traditional silver · gift boxed" },
  { image: silver, name: "Pooja Kumbam &amp; Plate", detail: "Traditional silver" },
  { image: silver, name: "Baby Anklet Set", detail: "92.5 silver · with bells" },
  { image: silver, name: "Women's Kolusu", detail: "92.5 silver · adjustable" },
  { image: silver, name: "Silver Gifting Bowl", detail: "92.5 silver · engraved rim" },
  { image: silver, name: "Toe Ring Set", detail: "92.5 silver · daily wear" },
];

function Silver() {
  return (
    <>
      <PageHero eyebrow="Silver counter" title="Silver Collection" intro="A full silver counter for pooja needs, gifting and everyday wear — utensils, lamps, anklets and baby sets in 92.5 sterling and traditional silver." image={silver} />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <ItemCard key={i.name} {...i} />
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">Silver is billed by weight with the making charge shown separately.</p>
      </Section>
      <CtaBand />
    </>
  );
}
