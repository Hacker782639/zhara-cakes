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
  },
  {
    slug: "chocolate-indulgence",
    name: "Chocolate Indulgence",
    type: "Chocolate · Ganache · Hazelnut",
    category: "Chocolate",
    description:
      "Rich chocolate layers, silky ganache and delicate hazelnut notes for a beautifully indulgent celebration.",
    image: "/images/cakes/chocolate-cake.jpg",
  },
  {
    slug: "the-celebration",
    name: "The Celebration",
    type: "Celebration · Handmade · Elegant",
    category: "Celebration",
    description:
      "A joyful centrepiece designed to make your celebration feel even more special.",
    image: "/images/cakes/celebration-cake.jpg",
  },
  {
    slug: "birthday-dreams",
    name: "Birthday Dreams",
    type: "Vanilla · Cream · Celebration",
    category: "Birthday",
    description: "Soft, elegant and made for birthdays worth remembering.",
    image: "/images/cakes/minimal-birthday-cake.jpg",
  },
  {
    slug: "sweet-moments",
    name: "Sweet Moments",
    type: "Cupcakes · Cream · Joy",
    category: "Cupcakes & Treats",
    description:
      "A beautiful selection of handcrafted cupcakes for sharing with the people you love.",
    image: "/images/cakes/cake-cupcakes.jpg",
  },
  {
    slug: "a-little-surprise",
    name: "A Little Surprise",
    type: "Cake · Gift · Celebration",
    category: "Sweet Gifts",
    description:
      "A thoughtful cake-and-gift presentation designed to turn an ordinary moment into a memorable one.",
    image: "/images/cakes/cake-gift-box.jpg",
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
