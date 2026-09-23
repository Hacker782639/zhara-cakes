export const CAKE_CATEGORIES = [
  "Celebration",
  "Chocolate",
  "Birthday",
  "Signature",
  "Cupcakes & Treats",
  "Sweet Gifts",
] as const;

export type CakeCategory = (typeof CAKE_CATEGORIES)[number];

export type Cake = {
  slug: string;
  name: string;
  type: string;
  category: CakeCategory;
  description: string;
  image: string;
  alt: string;
};

export const ALL_CAKES_LABEL = "All Cakes";

export const CAKES: Cake[] = [
  {
    slug: "the-signature",
    name: "The Signature",
    type: "Vanilla · Raspberry · Cream",
    category: "Signature",
    description:
      "Our signature creation — delicate vanilla sponge layered with raspberry and finished with a smooth cream.",
    image: "/images/cakes/signature-cake.jpg",
    alt: "The Signature — a delicate vanilla and raspberry layer cake finished with smooth cream.",
  },
  {
    slug: "chocolate-indulgence",
    name: "Chocolate Indulgence",
    type: "Chocolate · Ganache · Hazelnut",
    category: "Chocolate",
    description:
      "Rich chocolate layers, silky ganache and delicate hazelnut notes for a beautifully indulgent celebration.",
    image: "/images/cakes/chocolate-cake.jpg",
    alt: "Chocolate Indulgence — a rich chocolate layer cake with silky ganache and hazelnut.",
  },
  {
    slug: "the-celebration",
    name: "The Celebration",
    type: "Celebration · Handmade · Elegant",
    category: "Celebration",
    description:
      "A joyful centrepiece designed to make your celebration feel even more special.",
    image: "/images/cakes/celebration-cake.jpg",
    alt: "The Celebration — a handmade celebration cake styled as an elegant centrepiece.",
  },
  {
    slug: "birthday-dreams",
    name: "Birthday Dreams",
    type: "Vanilla · Cream · Celebration",
    category: "Birthday",
    description: "Soft, elegant and made for birthdays worth remembering.",
    image: "/images/cakes/minimal-birthday-cake.jpg",
    alt: "Birthday Dreams — a minimal vanilla birthday cake with soft cream detailing.",
  },
  {
    slug: "sweet-moments",
    name: "Sweet Moments",
    type: "Cupcakes · Cream · Joy",
    category: "Cupcakes & Treats",
    description:
      "A beautiful selection of handcrafted cupcakes for sharing with the people you love.",
    image: "/images/cakes/cake-cupcakes.jpg",
    alt: "Sweet Moments — a selection of handcrafted cupcakes arranged with a small cake.",
  },
  {
    slug: "a-little-surprise",
    name: "A Little Surprise",
    type: "Cake · Gift · Celebration",
    category: "Sweet Gifts",
    description:
      "A thoughtful cake-and-gift presentation designed to turn an ordinary moment into a memorable one.",
    image: "/images/cakes/cake-gift-box.jpg",
    alt: "A Little Surprise — a handcrafted cake presented in an open gift box with ribbon.",
  },
  {
    slug: "the-wedding-cake",
    name: "The Wedding Cake",
    type: "Wedding · Tiered · Ivory",
    category: "Celebration",
    description:
      "A refined tiered centrepiece finished by hand for weddings and milestone celebrations, styled to sit beautifully at the heart of your day.",
    image: "/images/cakes/hero-wedding-cake.jpg",
    alt: "The Wedding Cake — a refined tiered ivory wedding cake decorated by hand.",
  },
  {
    slug: "dark-chocolate-dessert",
    name: "Dark Chocolate Dessert",
    type: "Dark Chocolate · Cocoa · Velvet",
    category: "Chocolate",
    description:
      "A deep, velvety dark chocolate dessert with a soft crumb and a glossy finish — rich, elegant and made for slow, indulgent moments.",
    image: "/images/cakes/chocolate-dessert.jpg",
    alt: "Dark Chocolate Dessert — a glossy dark chocolate cake finished with a dusting of cocoa.",
  },
  {
    slug: "birthday-cake-box",
    name: "Birthday Cake Box",
    type: "Birthday · Gift Box · Ribbon",
    category: "Birthday",
    description:
      "A birthday cake presented in our signature gift box with ribbon — ready to hand over, unwrap and celebrate with the people you love.",
    image: "/images/cakes/birthday-cake-box.jpg",
    alt: "Birthday Cake Box — a birthday cake styled beside a ribbon-tied gift box.",
  },
  {
    slug: "balloon-day-cupcakes",
    name: "Balloon Day Cupcakes",
    type: "Cupcakes · Buttercream · Confetti",
    category: "Cupcakes & Treats",
    description:
      "A playful set of hand-piped cupcakes styled with balloons for birthdays, baby showers and every joyful excuse to celebrate.",
    image: "/images/cakes/cupcakes-balloons.jpg",
    alt: "Balloon Day Cupcakes — hand-piped buttercream cupcakes styled with colourful balloons.",
  },
  {
    slug: "the-signature-gift-box",
    name: "The Signature Gift Box",
    type: "Premium · Gift Box · Ribbon",
    category: "Signature",
    description:
      "Our premium gift box, dressed with ribbon and fine gold detailing — a signature house presentation for the people who deserve the very best.",
    image: "/images/cakes/premium-gift-box.jpg",
    alt: "The Signature Gift Box — a premium ribbon-tied gift box with fine gold detailing.",
  },
  {
    slug: "sweet-surprise",
    name: "Sweet Surprise",
    type: "Buttercream · Ribbon · Gift",
    category: "Sweet Gifts",
    description:
      "A close-up of our favourite sweet surprise — soft buttercream detailing and a hand-tied ribbon, made to be opened with a smile.",
    image: "/images/cakes/cake-gift-closeup.jpg",
    alt: "Sweet Surprise — a close-up of a buttercream cake finished with a hand-tied ribbon.",
  },
  {
    slug: "petite-gift-set",
    name: "Petite Gift Set",
    type: "Petite · Cake · Gift Set",
    category: "Sweet Gifts",
    description:
      "A styled petite set of cake and small gifts arranged as a flatlay — an effortless way to send something beautiful across the city.",
    image: "/images/cakes/cake-gift-flatlay.jpg",
    alt: "Petite Gift Set — a flatlay of a petite cake arranged with wrapped gifts.",
  },
  {
    slug: "curated-gift-boxes",
    name: "Curated Gift Boxes",
    type: "Gift Boxes · Selection · Ribbon",
    category: "Sweet Gifts",
    description:
      "A curated selection of gift boxes finished with ribbon, ready to be paired with any cake in the collection for a complete surprise.",
    image: "/images/cakes/gift-boxes.jpg",
    alt: "Curated Gift Boxes — a selection of ribbon-tied gift boxes ready to be gifted.",
  },
];

const CATEGORY_ALIASES: Record<string, CakeCategory> = {
  "celebration cakes": "Celebration",
  "birthday cakes": "Birthday",
  "chocolate cakes": "Chocolate",
  "chocolate collection": "Chocolate",
  "signature cakes": "Signature",
  cupcakes: "Cupcakes & Treats",
  desserts: "Cupcakes & Treats",
  "desserts & cupcakes": "Cupcakes & Treats",
  gifts: "Sweet Gifts",
  "gifts & treats": "Sweet Gifts",
};

export function getCake(slug: string): Cake | undefined {
  return CAKES.find((cake) => cake.slug === slug);
}

/**
 * Resolves a `?category=` search parameter to one of the real cake
 * categories. Returns `null` for "everything" (missing, empty or "all").
 */
export function resolveCategory(
  value?: string | string[] | null
): CakeCategory | null {
  const raw = Array.isArray(value) ? value[0] : value;

  if (!raw) return null;

  const key = raw.trim().toLowerCase();

  if (key === "" || key === "all" || key === ALL_CAKES_LABEL.toLowerCase()) {
    return null;
  }

  const exact = CAKE_CATEGORIES.find(
    (category) => category.toLowerCase() === key
  );

  return exact ?? CATEGORY_ALIASES[key] ?? null;
}

export function getCakesByCategory(category: CakeCategory | null): Cake[] {
  if (!category) return CAKES;
  return CAKES.filter((cake) => cake.category === category);
}

export function categoryHref(category: CakeCategory | null): string {
  return category ? `/cakes?category=${encodeURIComponent(category)}` : "/cakes";
}
