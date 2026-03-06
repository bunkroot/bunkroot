export interface FoodSpot {
  id: string;
  dishName: string;
  image: string;
  restaurant: string;
  pricePerPerson: string;
  location: string;
  category: string;
  trending: boolean;
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
    trending: true,
  },
  {
    id: "f2",
    dishName: "Butter Garlic Prawns",
    image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=600&q=80",
    restaurant: "Zains Restaurant",
    pricePerPerson: "₹450",
    location: "Beach Road, Calicut",
    category: "Seafood",
    trending: true,
  },
  {
    id: "f3",
    dishName: "Hazelnut Cold Brew",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    restaurant: "Bean Here Cafe",
    pricePerPerson: "₹220",
    location: "Hilite Mall, Calicut",
    category: "Cafe",
    trending: true,
  },
  {
    id: "f4",
    dishName: "Egg Puffs & Chai",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    restaurant: "Paris Bakery",
    pricePerPerson: "₹60",
    location: "Mananchira, Calicut",
    category: "Street Food",
    trending: true,
  },
  {
    id: "f5",
    dishName: "Kunafa",
    image: "https://images.unsplash.com/photo-1579888944880-d98341245702?w=600&q=80",
    restaurant: "Bait Al Mandi",
    pricePerPerson: "₹200",
    location: "Palayam, Calicut",
    category: "Desserts",
    trending: true,
  },
  {
    id: "f6",
    dishName: "Fresh Lime Mojito",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80",
    restaurant: "The Wayfarer",
    pricePerPerson: "₹180",
    location: "Beach Road, Calicut",
    category: "Drinks",
    trending: true,
  },
  {
    id: "f7",
    dishName: "Malabar Chicken Biryani",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&q=80",
    restaurant: "Salkara Restaurant",
    pricePerPerson: "₹220",
    location: "Mavoor Road, Calicut",
    category: "Biryani",
    trending: false,
  },
  {
    id: "f8",
    dishName: "Fish Fry Platter",
    image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=600&q=80",
    restaurant: "Hotel Devi",
    pricePerPerson: "₹350",
    location: "East Hill, Calicut",
    category: "Seafood",
    trending: false,
  },
  {
    id: "f9",
    dishName: "Loaded Nachos",
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=600&q=80",
    restaurant: "Café De Marco",
    pricePerPerson: "₹280",
    location: "Fokana Road, Calicut",
    category: "Cafe",
    trending: false,
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
  },
];

export const getTrendingFood = (): FoodSpot[] =>
  foodSpots.filter((f) => f.trending);
