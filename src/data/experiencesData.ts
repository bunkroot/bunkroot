// Placeholder images - these should be replaced with actual photos
import kayak from "@/assets/experience-kayak.jpg";
import beachMeditation from "@/assets/experience-beach-meditation.jpg";
import truthRoom from "@/assets/experience-truth-room.jpg";
import treasureHunt from "@/assets/experience-treasure-hunt.jpg";
import fishing from "@/assets/experience-fishing.jpg";
import hauntedForest from "@/assets/experience-haunted-forest.jpg";
import mysteryIsland from "@/assets/experience-mystery-island.jpg";

export interface Experience {
  id: string;
  title: string;
  emoji: string;
  category: string;
  host: string;
  price: string;
  duration: string;
  groupSize: string;
  minAge: number;
  location: string;
  image: string;
  gallery: string[];
  description: string;
  fullDescription: string;
  included: string[];
  whatToBring: string[];
  availableTimes: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Sunset Kayak Break",
    emoji: "🌅",
    category: "Nature",
    host: "Backwater Paddle Club",
    price: "₹499",
    duration: "1 hour",
    groupSize: "1–4",
    minAge: 12,
    location: "Kadalundi Side Road",
    image: kayak,
    gallery: [kayak, kayak, kayak, kayak],
    description: "Paddle through calm backwaters during sunset and take a break from the usual city evenings. A peaceful way to bunk routine life.",
    fullDescription: "Paddle through calm backwaters during sunset and take a break from the usual city evenings. A peaceful way to bunk routine life. The serene waters of Kadalundi provide the perfect backdrop for a quick escape from the daily grind. Whether you're solo or with friends, this is your chance to disconnect from screens and reconnect with nature.",
    included: ["Kayak & safety jacket", "Basic paddling guidance"],
    whatToBring: ["Comfortable clothes", "Extra clothes (optional)"],
    availableTimes: ["4:30 PM", "5:45 PM"]
  },
  {
    id: "2",
    title: "Bowling & Chill",
    emoji: "🎳",
    category: "Social",
    host: "PinDrop Arena",
    price: "₹349",
    duration: "45 minutes",
    groupSize: "2–6",
    minAge: 10,
    location: "HiLite Area",
    image: truthRoom,
    gallery: [truthRoom, truthRoom, truthRoom, truthRoom],
    description: "A casual bowling session where strikes don't matter as much as the laughs. Perfect for friends and small groups.",
    fullDescription: "A casual bowling session where strikes don't matter as much as the laughs. Perfect for friends and small groups. No pressure to be good—just show up, throw some balls, and have a great time. The neon-lit lanes and upbeat music make for the perfect hangout spot after a long day.",
    included: ["Bowling lane access", "Shoe rental"],
    whatToBring: ["Socks"],
    availableTimes: ["3:00 PM", "4:30 PM", "6:00 PM"]
  },
  {
    id: "3",
    title: "VR Action Zone",
    emoji: "🕶️",
    category: "Thrill",
    host: "NeoVerse Playhub",
    price: "₹299",
    duration: "30 minutes",
    groupSize: "1–3",
    minAge: 12,
    location: "Beach Road Area",
    image: hauntedForest,
    gallery: [hauntedForest, hauntedForest, hauntedForest, hauntedForest],
    description: "Experience quick virtual reality games that give you a short burst of excitement without any learning curve.",
    fullDescription: "Experience quick virtual reality games that give you a short burst of excitement without any learning curve. Step into immersive worlds for a quick thrill—whether it's zombie survival, racing, or adventure games. No prior experience needed; just put on the headset and dive in.",
    included: ["VR headset & controllers", "Game assistance"],
    whatToBring: ["Nothing special"],
    availableTimes: ["5:00 PM", "6:00 PM", "7:00 PM"]
  },
  {
    id: "4",
    title: "PlayStation Hangout",
    emoji: "🎮",
    category: "Social",
    host: "Console Corner",
    price: "₹249",
    duration: "1 hour",
    groupSize: "2–5",
    minAge: 10,
    location: "Mananchira Area",
    image: treasureHunt,
    gallery: [treasureHunt, treasureHunt, treasureHunt, treasureHunt],
    description: "Sit back and play FIFA, racing, or story games with friends. No pressure, just play and chill.",
    fullDescription: "Sit back and play FIFA, racing, or story games with friends. No pressure, just play and chill. Pick from a library of popular games, grab a controller, and let the competition (or co-op) begin. Comfy seating, good vibes, and snacks available.",
    included: ["Console & game access", "Seating space"],
    whatToBring: ["Competitive spirit 😄"],
    availableTimes: ["4:00 PM", "5:30 PM", "7:00 PM"]
  },
  {
    id: "5",
    title: "Pottery for Beginners",
    emoji: "🏺",
    category: "Skill-Learning",
    host: "Earth & Hands Studio",
    price: "₹599",
    duration: "90 minutes",
    groupSize: "1–4",
    minAge: 14,
    location: "Thondayad Area",
    image: beachMeditation,
    gallery: [beachMeditation, beachMeditation, beachMeditation, beachMeditation],
    description: "Try basic pottery techniques and create something with your hands. Slow, calming, and screen-free.",
    fullDescription: "Try basic pottery techniques and create something with your hands. Slow, calming, and screen-free. Get your hands dirty (literally) as you learn to shape clay on the wheel. Walk away with something you made yourself—a bowl, cup, or just a happy mess.",
    included: ["Clay & pottery tools", "Basic guidance"],
    whatToBring: ["Old clothes or apron"],
    availableTimes: ["11:00 AM", "4:00 PM"]
  },
  {
    id: "6",
    title: "Hookah & Board Games Lounge",
    emoji: "💨",
    category: "Offbeat",
    host: "Cloud Nine Lounge",
    price: "₹399",
    duration: "1.5 hours",
    groupSize: "2–6",
    minAge: 18,
    location: "Customs Road Area",
    image: mysteryIsland,
    gallery: [mysteryIsland, mysteryIsland, mysteryIsland, mysteryIsland],
    description: "Relax with flavoured hookah and easy board games in a laid-back lounge setup.",
    fullDescription: "Relax with flavoured hookah and easy board games in a laid-back lounge setup. The perfect spot for when you want to slow down, catch up with friends, and enjoy some classic games like Uno, Jenga, or Monopoly over aromatic hookah.",
    included: ["Hookah setup", "Board games access"],
    whatToBring: ["Valid ID"],
    availableTimes: ["5:30 PM", "7:30 PM"]
  },
  {
    id: "7",
    title: "Evening Swimming Session",
    emoji: "🏊",
    category: "Sports",
    host: "BlueWave Pool",
    price: "₹199",
    duration: "1 hour",
    groupSize: "1–5",
    minAge: 10,
    location: "Kallayi Area",
    image: fishing,
    gallery: [fishing, fishing, fishing, fishing],
    description: "A calm evening swim to cool off and relax without the usual crowd.",
    fullDescription: "A calm evening swim to cool off and relax without the usual crowd. Whether you want to do laps or just float around, this is your escape from the heat and stress. Clean pool, good vibes, and minimal crowds during evening slots.",
    included: ["Pool access", "Changing rooms"],
    whatToBring: ["Swimwear", "Towel"],
    availableTimes: ["4:00 PM", "5:30 PM"]
  },
  {
    id: "8",
    title: "Badminton Night Rally",
    emoji: "🏸",
    category: "Sports",
    host: "SmashPoint Court",
    price: "₹299",
    duration: "1 hour",
    groupSize: "2–4",
    minAge: 12,
    location: "Chevayoor Area",
    image: kayak,
    gallery: [kayak, kayak, kayak, kayak],
    description: "Fast rallies and friendly matches for people who want a quick active break after work.",
    fullDescription: "Fast rallies and friendly matches for people who want a quick active break after work. Indoor courts with good lighting mean you can play even after sunset. Bring a friend or get matched with other players for doubles.",
    included: ["Court access", "Shuttlecock"],
    whatToBring: ["Non-marking sports shoes"],
    availableTimes: ["6:00 PM", "7:00 PM"]
  },
  {
    id: "9",
    title: "Ice Bath Reset",
    emoji: "❄️",
    category: "Mindfulness",
    host: "Cold Reset Studio",
    price: "₹499",
    duration: "30 minutes",
    groupSize: "1–3",
    minAge: 16,
    location: "Kallayi Side",
    image: beachMeditation,
    gallery: [beachMeditation, beachMeditation, beachMeditation, beachMeditation],
    description: "A short guided ice bath session designed to reset your body and mind.",
    fullDescription: "A short guided ice bath session designed to reset your body and mind. Experience the trending cold therapy that athletes and wellness enthusiasts swear by. Guided breathing helps you stay calm as you take the plunge into icy waters.",
    included: ["Ice bath tub", "Basic breathing guidance"],
    whatToBring: ["Towel", "Change of clothes"],
    availableTimes: ["7:00 AM", "6:00 PM"]
  },
  {
    id: "10",
    title: "Pickleball Quick Match",
    emoji: "🏓",
    category: "Sports",
    host: "Rally Play Court",
    price: "₹249",
    duration: "45 minutes",
    groupSize: "2–4",
    minAge: 12,
    location: "Govindapuram Area",
    image: treasureHunt,
    gallery: [treasureHunt, treasureHunt, treasureHunt, treasureHunt],
    description: "An easy-to-learn sport that's fast, fun, and perfect for beginners.",
    fullDescription: "An easy-to-learn sport that's fast, fun, and perfect for beginners. Pickleball is the trending sport everyone's talking about—a mix of tennis, badminton, and ping pong. Pick it up in minutes, enjoy it for hours.",
    included: ["Court access", "Paddle & ball"],
    whatToBring: ["Sports shoes"],
    availableTimes: ["5:00 PM", "6:00 PM"]
  },
  {
    id: "11",
    title: "Snooker & Billiards Hour",
    emoji: "🎱",
    category: "Offbeat",
    host: "Corner Pocket Club",
    price: "₹279",
    duration: "1 hour",
    groupSize: "2–4",
    minAge: 14,
    location: "Palayam Area",
    image: mysteryIsland,
    gallery: [mysteryIsland, mysteryIsland, mysteryIsland, mysteryIsland],
    description: "A slow-paced indoor game session that's perfect for relaxed conversations.",
    fullDescription: "A slow-paced indoor game session that's perfect for relaxed conversations. The classic game of strategy and precision. Perfect for those who like their hangouts with a side of friendly competition and deep chats.",
    included: ["Table access", "Cues & balls"],
    whatToBring: ["Nothing special"],
    availableTimes: ["4:30 PM", "6:00 PM"]
  },
  {
    id: "12",
    title: "Beachside Walk & Talk",
    emoji: "🚶",
    category: "Social",
    host: "OpenSteps Collective",
    price: "₹199",
    duration: "45 minutes",
    groupSize: "3–8",
    minAge: 16,
    location: "Beach Road",
    image: fishing,
    gallery: [fishing, fishing, fishing, fishing],
    description: "A relaxed beach walk with light conversations. No rush, no fitness pressure.",
    fullDescription: "A relaxed beach walk with light conversations. No rush, no fitness pressure. Meet new people or bring your crew for a sunset stroll along the shore. Good conversations, ocean breeze, and zero workout intensity.",
    included: ["Guided group walk"],
    whatToBring: ["Comfortable footwear"],
    availableTimes: ["6:00 AM", "6:00 PM"]
  }
];

// Helper function to get featured experiences for home page
export const getFeaturedExperiences = () => {
  // Return a curated selection of 4 diverse experiences
  return experiences.filter(exp => 
    ["1", "2", "5", "9"].includes(exp.id)
  );
};

// Helper function to get experience by ID
export const getExperienceById = (id: string) => {
  return experiences.find(exp => exp.id === id);
};
