export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  colors: string[];
  fits: string[];
  rating: number;
  reviews: number;
  tags: string[];
};

export const featuredProducts: Product[] = [
  {
    id: "heritage-chino",
    name: "Heritage Stretch Chino",
    description:
      "A modern slim-tapered chino cut from Italian brushed cotton with a hint of stretch for all-day comfort.",
    price: "$128",
    image:
      "https://images.unsplash.com/photo-1525171254930-643fc658b64e?auto=format&fit=crop&w=640&q=80",
    colors: ["Sandstone", "Coastal Navy", "Olive Drab"],
    fits: ["Slim", "Tailored"],
    rating: 4.8,
    reviews: 214,
    tags: ["Best Seller", "4-Way Stretch", "Office-to-Weekend"],
  },
  {
    id: "jetset-trouser",
    name: "Jetset Performance Trouser",
    description:
      "Wrinkle-resistant travel-ready trousers featuring moisture-wicking fibers and a hidden comfort waistband.",
    price: "$168",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=640&q=80",
    colors: ["Charcoal", "Midnight Blue", "Graphite"],
    fits: ["Athletic", "Straight"],
    rating: 4.9,
    reviews: 139,
    tags: ["Performance", "Wrinkle-Free", "Travel"],
  },
  {
    id: "selvedge-denim",
    name: "Selvedge Denim Trouser",
    description:
      "Raw Japanese selvedge denim tailored with elevated trouser finishing and soft interior waistband.",
    price: "$198",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=640&q=80",
    colors: ["Indigo Rinse", "Ebon Black"],
    fits: ["Slim", "Straight"],
    rating: 4.7,
    reviews: 97,
    tags: ["Limited Release", "Artisan Crafted"],
  },
];

export const capsuleCollections = [
  {
    title: "Riviera Resort Capsule",
    description:
      "Breathable linen-cotton blends and relaxed tailoring inspired by coastal evenings.",
    swatch: ["#d4c8b2", "#1f2937", "#a3bffa"],
    linkLabel: "Shop Resort",
  },
  {
    title: "City Performance Edit",
    description:
      "Engineered fabrics for commutes, boardrooms, and everywhere in between.",
    swatch: ["#111827", "#4b5563", "#9ca3af"],
    linkLabel: "Explore Performance",
  },
  {
    title: "Studio Essentials",
    description:
      "Minimalist monochrome trousers designed with elevated details and impeccable drape.",
    swatch: ["#c7c9d1", "#171717", "#52525b"],
    linkLabel: "Discover Studio",
  },
];

export const testimonials = [
  {
    name: "Marcus Ellison",
    title: "Creative Director, Berlin",
    quote:
      "These trousers rival bespoke tailoring. I travel weekly and they emerge from a suitcase crease-free every time.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Oliver Hayes",
    title: "Restaurateur, New York",
    quote:
      "The Jetset Trouser is my daily uniform—polished, breathable, and comfortable late into service.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Rahul Menon",
    title: "Product Lead, London",
    quote:
      "Finally trousers that move like performance wear without compromising the clean lines I expect.",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=300&q=80",
  },
];

export const uspHighlights = [
  {
    title: "Precision Tailoring",
    body: "Crafted in small batches with half-canvas waistbands and hand-finished hems.",
    icon: "🧵",
  },
  {
    title: "Premium Materials",
    body: "Italian stretch cottons, Japanese selvedge denim, and sustainable TENCEL blends.",
    icon: "🌿",
  },
  {
    title: "Perfect Fit Guarantee",
    body: "Complimentary alterations or exchanges within 30 days on every pair.",
    icon: "✅",
  },
  {
    title: "Carbon Neutral",
    body: "We offset production and partner with regenerative textile mills worldwide.",
    icon: "♻️",
  },
];
