import type { ReactNode } from "react";
import { Star } from "lucide-react";
import { BUSINESS } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
}) {
  return (
    <section className="border-b border-border bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 md:grid-cols-2 md:py-20">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-3 text-4xl text-maroon md:text-5xl">{title}</h1>
          <div className="gold-rule mt-5 w-40" />
          <p className="mt-5 max-w-prose text-muted-foreground">{intro}</p>
        </div>
        {image && (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-64 w-full rounded-sm object-cover md:h-80"
          />
        )}
      </div>
    </section>
  );
}

export function Section({
  title,
  subtitle,
  children,
  tone = "plain",
}: {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  tone?: "plain" | "soft";
}) {
  return (
    <section className={tone === "soft" ? "bg-secondary" : ""}>
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        {title && (
          <div className="mb-10 text-center">
            <h2 className="text-3xl text-maroon md:text-4xl">{title}</h2>
            {subtitle && (
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>
            )}
            <div className="gold-rule mx-auto mt-5 w-28" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function ItemCard({
  image,
  name,
  detail,
}: {
  image: string;
  name: string;
  detail: string;
}) {
  return (
    <article className="group overflow-hidden rounded-sm border border-border bg-card">
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="p-4">
        <h3 className="font-display text-lg text-maroon">{name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{detail}</p>
        <a
          href={BUSINESS.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="mt-4 block rounded-sm border border-gold py-2 text-center text-[0.7rem] tracking-[0.2em] text-maroon uppercase transition-colors hover:bg-gold-soft"
        >
          Inquire Now
        </a>
      </div>
    </article>
  );
}

export function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={i < n ? "size-3.5 fill-gold text-gold" : "size-3.5 text-border"}
        />
      ))}
    </div>
  );
}

export function CtaBand({
  title = "Visit our Poonamallee showroom",
  text = "Walk in for a look at the full collection, or message us on WhatsApp and we will keep pieces ready for you.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-maroon text-primary-foreground">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h2 className="text-3xl text-primary-foreground md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm opacity-90">{text}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm bg-gold px-6 py-3 text-xs tracking-[0.2em] text-maroon uppercase"
          >
            Book Appointment
          </a>
          <a
            href={BUSINESS.phoneHref}
            className="rounded-sm border border-gold px-6 py-3 text-xs tracking-[0.2em] uppercase"
          >
            Call {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
