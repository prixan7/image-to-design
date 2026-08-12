import { createFileRoute } from "@tanstack/react-router";
import gold from "@/assets/gold.jpg";
import { CtaBand, ItemCard, PageHero, Section } from "@/components/site/Bits";

export const Route = createFileRoute("/gold")({
  head: () => ({
    meta: [
      { title: "Gold Jewellery Chennai | Guru Hasti, Poonamallee" },
      { name: "description", content: "22K and 18K gold necklaces, chains, haarams and bangles at our Poonamallee showroom. Transparent making charges." },
      { property: "og:title", content: "Gold Jewellery Chennai | Guru Hasti, Poonamallee" },
      { property: "og:description", content: "22K and 18K gold necklaces, chains, haarams and bangles at our Poonamallee showroom. Transparent making charges." },
    ],
  }),
  component: Gold,
});

const items = [
  { image: gold, name: "Lakshmi Kaasu Haaram", detail: "22K · from 24 g · antique finish" },
  { image: gold, name: "Short Attigai Necklace", detail: "22K · from 14 g · ruby &amp; pearl" },
  { image: gold, name: "Kerala Mullamottu Chain", detail: "22K · from 8 g" },
  { image: gold, name: "Daily-wear Rope Chain", detail: "22K · from 4 g" },
  { image: gold, name: "Plain Kada Bangles (pair)", detail: "22K · from 16 g" },
  { image: gold, name: "Antique Bangle Set", detail: "22K · from 20 g · stone work" },
];

function Gold() {
  return (
    <>
      <PageHero eyebrow="Gold counter" title="Gold Collection" intro="Necklaces, haarams, chains and bangles in 22K and 18K — from feather-light daily wear to full temple work. Weights shown are typical starting weights; rates are quoted live at the counter." image={gold} />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <ItemCard key={i.name} {...i} />
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">Making charges are quoted upfront before billing. Ask for the day's rate on WhatsApp.</p>
      </Section>
      <CtaBand />
    </>
  );
}
