import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { BUSINESS } from "@/lib/site";
import { PageHero, Section } from "@/components/site/Bits";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact &amp; Showroom | Guru Hasti Thanga Maaligai, Poonamallee" },
      { name: "description", content: "Address, phone, WhatsApp, map and business hours for Guru Hasti Thanga Maaligai Jewellers, Car Street, Poonamallee, Chennai." },
      { property: "og:title", content: "Contact &amp; Showroom | Guru Hasti Thanga Maaligai, Poonamallee" },
      { property: "og:description", content: "Address, phone, WhatsApp, map and business hours for Guru Hasti Thanga Maaligai Jewellers, Car Street, Poonamallee, Chennai." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Come visit"
        title="Contact Us"
        intro="We are on Car Street in Poonamallee, a short walk from the bus terminus. Call, WhatsApp, or send us a note below."
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex gap-3">
              <MapPin className="mt-1 size-5 shrink-0 text-gold" />
              <p className="text-sm text-muted-foreground">
                {BUSINESS.address}
                <br />
                Plus code {BUSINESS.plusCode}
              </p>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-1 size-5 shrink-0 text-gold" />
              <a href={BUSINESS.phoneHref} className="text-sm text-maroon">
                {BUSINESS.phone}
              </a>
            </div>
            <div className="flex gap-3">
              <Clock className="mt-1 size-5 shrink-0 text-gold" />
              <p className="text-sm text-muted-foreground">
                {BUSINESS.hours}
                <br />
                <span className="italic">[Exact hours to be confirmed with the owner.]</span>
              </p>
            </div>
            <iframe
              title="Map to Guru Hasti Thanga Maaligai Jewellers"
              src={BUSINESS.mapEmbed}
              loading="lazy"
              className="h-72 w-full rounded-sm border border-border"
            />
          </div>

          <form
            className="space-y-4 rounded-sm border border-border bg-card p-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              toast.success("Thank you — we will call you back shortly.");
            }}
          >
            <h2 className="text-2xl text-maroon">Send an enquiry</h2>
            {[
              { id: "name", label: "Your name", type: "text" },
              { id: "phone", label: "Phone number", type: "tel" },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  type={f.type}
                  required
                  className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm outline-none focus:border-gold"
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                What are you looking for?
              </label>
              <textarea
                id="message"
                rows={5}
                className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm outline-none focus:border-gold"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-sm bg-maroon py-3 text-xs tracking-[0.2em] text-primary-foreground uppercase"
            >
              {sent ? "Enquiry sent" : "Send enquiry"}
            </button>
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="block rounded-sm border border-gold py-3 text-center text-xs tracking-[0.2em] text-maroon uppercase"
            >
              Or chat on WhatsApp
            </a>
          </form>
        </div>
      </Section>
    </>
  );
}
