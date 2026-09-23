import { MessageCircle } from "lucide-react";
import { GENERAL_ENQUIRY_MESSAGE, whatsappLink } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(GENERAL_ENQUIRY_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Zahra's Cakes on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex items-center gap-3 rounded-full bg-[#1C1917] px-4 py-3 text-white shadow-[0_12px_35px_rgba(0,0,0,0.18)] transition-all duration-200 hover:-translate-y-1 hover:bg-[#A16207] sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={18} strokeWidth={1.8} />
      <span className="hidden text-[10px] font-semibold uppercase tracking-[0.16em] sm:inline">
        Chat with us
      </span>
    </a>
  );
}
