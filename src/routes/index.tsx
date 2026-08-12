import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Gem, HandCoins, Sparkles } from "lucide-react";
import hero from "@/assets/hero.jpg";
import gold from "@/assets/gold.jpg";
import silver from "@/assets/silver.jpg";
import bridal from "@/assets/bridal.jpg";
import rings from "@/assets/rings.jpg";
import earrings from "@/assets/earrings.jpg";
import showroom from "@/assets/showroom.jpg";
import { BUSINESS, REVIEWS } from "@/lib/site";
import { CtaBand, ItemCard, Section, Stars } from "@/components/site/Bits";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jewellery Store in Poonamallee | Guru Hasti Thanga Maaligai" },
      {
        name: "description",
        content:
          "Gold, silver and bridal jewellery in Poonamallee, Chennai. Transparent making charges, hallmarked pieces, 4.8★ from 2,632 reviews.",
      },
      { property: "og:title", content: "Guru Hasti Thanga Maaligai Jewellers, Poonamallee" },
      {
        property: "og:description",
        content: "A family jewellery showroom trusted in Poonamallee for over 40 years.",
      },
    ],
  }),
  component: Home,
});

const categories = [
  { to: "/gold", label: "Gold", image: gold },
  { to: "/silver", label: "Silver", image: silver },
  { to: "/bridal", label: "Bridal", image: bridal },
] as const;

const featured = [
  { image: gold, name: "Lakshmi Kaasu Haaram", detail: "22K · from 24 g · antique finish" },
  { image: earrings, name: "Temple Jhumkas", detail: "22K · from 6 g · ruby accents" },
  { image: rings, name: "Daily-wear Stone Ring", detail: "18K · from 2.5 g" },
  { image: silver, name: "Silver Pooja Set", detail: "92.5 silver · gifting box" },
];

const why = [
  { icon: ShieldCheck, title: "Transparent making charges", text: "Quoted before billing, every time — the reason families keep returning." },
  { icon: Gem, title: "BIS hallmarked", text: "Purity certified on every gold ornament, with proper invoices." },
  { icon: HandCoins, title: "Fair old gold exchange", text: "Weighed in front of you, with each deduction explained." },
  { icon: Sparkles, title: "Traditional & modern", text: "Temple work alongside light, everyday designs across all counters." },
];

function Home() {
  return (
    <>
      <section className="relative">
        <img
          src={hero}
          alt="Traditional gold bridal necklace and jhumkas on silk"
          width={1600}
          height={1008}
          className="h-[62vh] min-h-[380px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-6xl items-center px-4">
            <div className="max-w-md">
              <p className="eyebrow">Poonamallee · Since four decades</p>
              <h1 className="mt-3 text-4xl leading-tight text-maroon md:text-6xl">
                Gold that carries your family forward.
              </h1>
              <p className="mt-4 text-muted-foreground">
                {BUSINESS.tamil}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/gold"
                  className="rounded-sm bg-maroon px-6 py-3 text-xs tracking-[0.2em] text-primary-foreground uppercase"
                >
                  Explore Collections
                </Link>
                <a
                  href={BUSINESS.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-sm border border-gold px-6 py-3 text-xs tracking-[0.2em] text-maroon uppercase"
                >
                  Visit Showroom
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-6 text-center md:grid-cols-4">
          {[
            [`${BUSINESS.rating}★`, "Google rating"],
            [`${BUSINESS.reviews}+`, "Customer reviews"],
            ["40+ yrs", "Serving Poonamallee"],
            ["BIS", "Hallmarked gold"],
          ].map(([big, small]) => (
            <div key={small}>
              <p className="font-display text-2xl text-maroon">{big}</p>
              <p className="text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                {small}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Section title="Shop by counter">
        <div className="grid gap-6 sm:grid-cols-3">
          {categories.map((c) => (
            <Link key={c.to} to={c.to} className="group text-center">
              <img
                src={c.image}
                alt={c.label}
                loading="lazy"
                className="aspect-square w-full rounded-sm object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <h3 className="mt-4 text-2xl text-maroon">{c.label}</h3>
              <span className="text-[0.7rem] tracking-[0.2em] text-gold uppercase">View</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Pieces our customers love" tone="soft">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((f) => (
            <ItemCard key={f.name} {...f} />
          ))}
        </div>
      </Section>

      <Section title="Why families choose us">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {why.map((w) => (
            <div key={w.title}>
              <w.icon className="size-6 text-gold" />
              <h3 className="mt-4 text-xl text-maroon">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
          <img
            src={showroom}
            alt="Inside the Guru Hasti showroom in Poonamallee"
            loading="lazy"
            className="rounded-sm object-cover"
          />
          <div>
            <p className="eyebrow">The showroom</p>
            <h2 className="mt-3 text-3xl text-maroon md:text-4xl">
              Walk in the way you would into a relative's home
            </h2>
            <p className="mt-4 text-muted-foreground">
              Car Street has known this store for generations. Take your time, ask for the tray you
              want to see again, and buy only when it feels right. There is no hurry here.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-block border-b border-gold pb-1 text-[0.7rem] tracking-[0.2em] text-maroon uppercase"
            >
              Our story
            </Link>
          </div>
        </div>
      </section>

      <Section title="What our customers say" tone="soft">
        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.slice(0, 3).map((r) => (
            <blockquote key={r.name} className="rounded-sm border border-border bg-card p-6">
              <Stars n={r.stars} />
              <p className="mt-4 text-sm text-muted-foreground">"{r.text}"</p>
              <footer className="mt-4 font-display text-lg text-maroon">{r.name}</footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/testimonials"
            className="border-b border-gold pb-1 text-[0.7rem] tracking-[0.2em] text-maroon uppercase"
          >
            Read all reviews
          </Link>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
