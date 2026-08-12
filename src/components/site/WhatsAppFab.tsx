import { MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={BUSINESS.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-maroon px-4 py-3 text-sm text-primary-foreground shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
