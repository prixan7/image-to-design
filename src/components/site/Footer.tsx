import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { BUSINESS, NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl text-maroon">{BUSINESS.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{BUSINESS.tamil}</p>
          <p className="mt-4 flex gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0 text-gold" /> {BUSINESS.address}
          </p>
          <a href={BUSINESS.phoneHref} className="mt-3 flex items-center gap-2 text-sm text-maroon">
            <Phone className="size-4 text-gold" /> {BUSINESS.phone}
          </a>
          <p className="mt-3 text-sm text-muted-foreground">{BUSINESS.hours}</p>
        </div>

        <div>
          <h4 className="eyebrow">Explore</h4>
          <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-muted-foreground hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/policy" className="text-muted-foreground hover:text-gold">
                Policies
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow">Visit Us</h4>
          <p className="mt-4 text-sm text-muted-foreground">
            Plus code {BUSINESS.plusCode}. Walk in any day, or message us on WhatsApp to reserve a
            quiet consultation slot.
          </p>
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block rounded-sm bg-maroon px-5 py-2.5 text-xs tracking-widest text-primary-foreground uppercase"
          >
            Book Appointment
          </a>
          <div className="mt-5 flex gap-3 text-muted-foreground">
            <Instagram className="size-4" />
            <Facebook className="size-4" />
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {BUSINESS.name} · Poonamallee, Chennai
      </div>
    </footer>
  );
}
