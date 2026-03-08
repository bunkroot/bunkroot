export interface FoodSpot {
  id: string;
  dishName: string;
  image: string;
  restaurant: string;
  pricePerPerson: string;
  location: string;
  category: string;
  googleRating: number;
  trending: boolean;
  description?: string;
  highlights?: string[];
  gallery?: string[];
}

export const foodCategories = [
  "All",
  "Biryani",
  "Seafood",
  "Cafe",
  "Street Food",
  "Desserts",
  "Drinks",
] as const;

export const foodSpots: FoodSpot[] = [
  {
    id: "f1",
    dishName: "Thalassery Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80",
    restaurant: "Rahmath Hotel",
    pricePerPerson: "₹180",
    location: "SM Street, Calicut",
    category: "Biryani",
    googleRating: 4.3,
    trending: true,
    description: "The legendary Thalassery Biryani at Rahmath Hotel is a fragrant masterpiece made with kaima rice, slow-cooked spiced meat, and a blend of Malabar spices passed down through generations. Served with raita and pickle, this is the gold standard of biryani in Calicut.",
    highlights: ["Authentic Malabar recipe", "Kaima rice used", "Slow-cooked for hours", "Served with homemade raita"],
    gallery: [
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80",
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800&q=80",
    ],
  },
  {
    id: "f2",
    dishName: "Butter Garlic Prawns",
    image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=600&q=80",
    restaurant: "Zains Restaurant",
    pricePerPerson: "₹450",
    location: "Beach Road, Calicut",
    category: "Seafood",
    googleRating: 4.1,
    trending: true,
    description: "Juicy tiger prawns sautéed in golden butter and roasted garlic, finished with a squeeze of lime and fresh herbs. Zains serves this coastal classic with perfectly fluffy rice and a side of their signature chili sauce.",
    highlights: ["Fresh tiger prawns", "Butter garlic sauce", "Coastal ambience", "Paired with flavoured rice"],
    gallery: [
      "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=800&q=80",
      "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=800&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    ],
  },
  {
    id: "f3",
    dishName: "Hazelnut Cold Brew",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    restaurant: "Bean Here Cafe",
    pricePerPerson: "₹220",
    location: "Hilite Mall, Calicut",
    category: "Cafe",
    googleRating: 4.4,
    trending: true,
    description: "A smooth, velvety cold brew infused with hazelnut syrup and topped with a thin layer of cream. Bean Here Cafe sources single-origin beans and brews them for 18 hours to get that perfect bold yet mellow flavour.",
    highlights: ["18-hour cold brew", "Single-origin beans", "Hazelnut infused", "Cozy cafe vibes"],
    gallery: [
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
    ],
  },
  {
    id: "f4",
    dishName: "Egg Puffs & Chai",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    restaurant: "Paris Bakery",
    pricePerPerson: "₹60",
    location: "Mananchira, Calicut",
    category: "Street Food",
    googleRating: 4.5,
    trending: true,
    description: "The iconic Calicut combo — flaky, crispy egg puffs with a perfectly spiced egg filling, paired with a cutting chai that hits different at Paris Bakery. A beloved street-side ritual that locals swear by.",
    highlights: ["Flaky pastry crust", "Perfectly spiced filling", "Cutting chai pairing", "Iconic local spot"],
    gallery: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
    ],
  },
  {
    id: "f5",
    dishName: "Kunafa",
    image: "https://images.unsplash.com/photo-1579888944880-d98341245702?w=600&q=80",
    restaurant: "Bait Al Mandi",
    pricePerPerson: "₹200",
    location: "Palayam, Calicut",
    category: "Desserts",
    googleRating: 4.2,
    trending: true,
    description: "A Middle Eastern dessert that Calicut has made its own — crispy shredded phyllo dough layered with gooey melted cheese, soaked in rose-scented sugar syrup. Bait Al Mandi serves it fresh and warm, the way it's meant to be enjoyed.",
    highlights: ["Crispy phyllo layers", "Melted cheese filling", "Rose syrup soaked", "Served warm"],
    gallery: [
      "https://images.unsplash.com/photo-1579888944880-d98341245702?w=800&q=80",
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
    ],
  },
  {
    id: "f6",
    dishName: "Fresh Lime Mojito",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80",
    restaurant: "The Wayfarer",
    pricePerPerson: "₹180",
    location: "Beach Road, Calicut",
    category: "Drinks",
    googleRating: 4.0,
    trending: true,
    description: "A refreshing virgin mojito with muddled fresh lime, mint leaves, and a hint of ginger — perfect for Calicut's warm evenings. The Wayfarer's beachside setting makes this drink even more enjoyable.",
    highlights: ["Fresh mint & lime", "Ginger twist", "Beachside vibes", "Perfect evening drink"],
    gallery: [
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed514?w=800&q=80",
    ],
  },
  {
    id: "f7",
    dishName: "Malabar Chicken Biryani",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&q=80",
    restaurant: "Salkara Restaurant",
    pricePerPerson: "₹220",
    location: "Mavoor Road, Calicut",
    category: "Biryani",
    googleRating: 4.4,
    trending: false,
    description: "Salkara's Malabar Chicken Biryani is a flavourful, aromatic pot of joy. Tender chicken pieces layered with fragrant basmati rice, caramelized onions, and a generous dose of Malabar spices make this a must-try.",
    highlights: ["Tender chicken pieces", "Caramelized onion layers", "Malabar spice blend", "Generous portions"],
    gallery: [
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80",
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
    ],
  },
  {
    id: "f8",
    dishName: "Fish Fry Platter",
    image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=600&q=80",
    restaurant: "Hotel Devi",
    pricePerPerson: "₹350",
    location: "East Hill, Calicut",
    category: "Seafood",
    googleRating: 4.2,
    trending: false,
    description: "A platter of golden crispy fish fry — fresh catch marinated in a fiery Malabar masala and shallow-fried to perfection. Hotel Devi's version comes with a tangy onion salad and their house-special green chutney.",
    highlights: ["Fresh catch daily", "Malabar masala marinade", "Crispy shallow fry", "Green chutney side"],
    gallery: [
      "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=800&q=80",
      "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=800&q=80",
    ],
  },
  {
    id: "f9",
    dishName: "Loaded Nachos",
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=600&q=80",
    restaurant: "Café De Marco",
    pricePerPerson: "₹280",
    location: "Fokana Road, Calicut",
    category: "Cafe",
    googleRating: 4.3,
    trending: false,
    description: "Crispy corn nachos piled high with melted cheese, jalapeños, sour cream, salsa, and seasoned ground meat. Café De Marco's loaded nachos are perfect for sharing — or not.",
    highlights: ["Triple cheese blend", "Jalapeño kick", "Generous portions", "Great for sharing"],
    gallery: [
      "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800&q=80",
    ],
  },
  {
    id: "f10",
    dishName: "Shawarma Roll",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80",
    restaurant: "Top Form",
    pricePerPerson: "₹90",
    location: "Nadakkavu, Calicut",
    category: "Street Food",
    trending: false,
    description: "Calicut's obsession — juicy shredded chicken wrapped in a soft parotta with garlic sauce, pickled onions, and a drizzle of hot sauce. Top Form's shawarma is legendary for a reason.",
    highlights: ["Soft parotta wrap", "Garlic sauce loaded", "Juicy chicken filling", "Late-night favourite"],
    gallery: [
      "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&q=80",
    ],
  },
  {
    id: "f11",
    dishName: "Chocolate Lava Cake",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    restaurant: "Daily Grind",
    pricePerPerson: "₹250",
    location: "Hilite Mall, Calicut",
    category: "Desserts",
    trending: false,
    description: "A warm, gooey chocolate lava cake with a molten centre that oozes out at the first cut. Daily Grind pairs it with vanilla ice cream and a dusting of cocoa — pure indulgence.",
    highlights: ["Molten chocolate centre", "Vanilla ice cream", "Warm & gooey", "Perfect dessert finish"],
    gallery: [
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
    ],
  },
  {
    id: "f12",
    dishName: "Mango Milkshake",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&q=80",
    restaurant: "Juice Junction",
    pricePerPerson: "₹120",
    location: "SM Street, Calicut",
    category: "Drinks",
    trending: false,
    description: "Thick, creamy mango milkshake made with real Alphonso mangoes and fresh whole milk. Juice Junction keeps it simple and lets the fruit do the talking — no artificial flavours, just pure mango bliss.",
    highlights: ["Real Alphonso mangoes", "Fresh whole milk", "No artificial flavours", "Thick & creamy"],
    gallery: [
      "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=800&q=80",
    ],
  },
];

export const getFoodById = (id: string): FoodSpot | undefined =>
  foodSpots.find((f) => f.id === id);

export const getTrendingFood = (): FoodSpot[] =>
  foodSpots.filter((f) => f.trending);
