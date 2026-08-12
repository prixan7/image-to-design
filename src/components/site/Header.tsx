import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, Star, X } from "lucide-react";
import { BUSINESS, NAV } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur">
      <div className="bg-maroon text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 text-[0.7rem] tracking-wide">
          <span className="flex items-center gap-1.5">
            <Star className="size-3 fill-accent text-accent" />
            {BUSINESS.rating}★ · {BUSINESS.reviews} Google reviews
          </span>
          <a href={BUSINESS.phoneHref} className="flex items-center gap-1.5 hover:text-accent">
            <Phone className="size-3" /> {BUSINESS.phone}
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="leading-tight">
          <span className="block font-display text-xl text-maroon sm:text-2xl">
            Guru Hasti <span className="text-gold">Thanga Maaligai</span>
          </span>
          <span className="block text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
            Jewellers · Poonamallee
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-sm bg-maroon px-4 py-2 text-xs tracking-widest text-primary-foreground uppercase transition-opacity hover:opacity-90 sm:inline-block"
          >
            Visit Showroom
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="rounded-sm border border-border p-2 lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <nav className="hidden border-y border-border lg:block">
        <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2 text-[0.72rem] tracking-[0.16em] uppercase">
          {NAV.map((n) => (
            <li key={n.to}>
              <Link
                to={n.to}
                className="text-muted-foreground transition-colors hover:text-gold [&.active]:text-maroon"
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <nav className="border-t border-border bg-card lg:hidden">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-y-1 px-4 py-4 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-muted-foreground [&.active]:text-maroon"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
