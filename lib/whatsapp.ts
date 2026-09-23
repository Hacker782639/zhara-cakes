export const WHATSAPP_NUMBER = "2348107081375";

export const WHATSAPP_DISPLAY = "+234 810 708 1375";

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const GENERAL_ENQUIRY_MESSAGE =
  "Hello Zahra's Cakes! 🍰 I'd like to make an enquiry.";

export function orderCakeMessage(name: string, type: string): string {
  return `Hello Zahra's Cakes! 🍰

I'd like to order "${name}".

Cake: ${name}
Style: ${type}

I'd like to know the availability and price.

Thank you!`;
}
