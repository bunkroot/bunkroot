// Urban vibrant experience images
import expKayakMain from "@/assets/exp-kayak-main.jpg";
import expKayakGallery1 from "@/assets/exp-kayak-gallery1.jpg";
import expKayakGallery2 from "@/assets/exp-kayak-gallery2.jpg";

import expBowlingMain from "@/assets/exp-bowling-main.jpg";
import expBowlingGallery1 from "@/assets/exp-bowling-gallery1.jpg";
import expBowlingGallery2 from "@/assets/exp-bowling-gallery2.jpg";

import expVrMain from "@/assets/exp-vr-main.jpg";
import expVrGallery1 from "@/assets/exp-vr-gallery1.jpg";
import expVrGallery2 from "@/assets/exp-vr-gallery2.jpg";

import expPlaystationMain from "@/assets/exp-playstation-main.jpg";
import expPlaystationGallery1 from "@/assets/exp-playstation-gallery1.jpg";
import expPlaystationGallery2 from "@/assets/exp-playstation-gallery2.jpg";

import expPotteryMain from "@/assets/exp-pottery-main.jpg";
import expPotteryGallery1 from "@/assets/exp-pottery-gallery1.jpg";
import expPotteryGallery2 from "@/assets/exp-pottery-gallery2.jpg";

import expHookahMain from "@/assets/exp-hookah-main.jpg";
import expHookahGallery1 from "@/assets/exp-hookah-gallery1.jpg";
import expHookahGallery2 from "@/assets/exp-hookah-gallery2.jpg";

import expSwimmingMain from "@/assets/exp-swimming-main.jpg";
import expSwimmingGallery1 from "@/assets/exp-swimming-gallery1.jpg";
import expSwimmingGallery2 from "@/assets/exp-swimming-gallery2.jpg";

import expBadmintonMain from "@/assets/exp-badminton-main.jpg";
import expBadmintonGallery1 from "@/assets/exp-badminton-gallery1.jpg";
import expBadmintonGallery2 from "@/assets/exp-badminton-gallery2.jpg";

import expIcebathMain from "@/assets/exp-icebath-main.jpg";
import expIcebathGallery1 from "@/assets/exp-icebath-gallery1.jpg";
import expIcebathGallery2 from "@/assets/exp-icebath-gallery2.jpg";

import expPickleballMain from "@/assets/exp-pickleball-main.jpg";
import expPickleballGallery1 from "@/assets/exp-pickleball-gallery1.jpg";
import expPickleballGallery2 from "@/assets/exp-pickleball-gallery2.jpg";

import expSnookerMain from "@/assets/exp-snooker-main.jpg";
import expSnookerGallery1 from "@/assets/exp-snooker-gallery1.jpg";
import expSnookerGallery2 from "@/assets/exp-snooker-gallery2.jpg";

import expBeachwalkMain from "@/assets/exp-beachwalk-main.jpg";
import expBeachwalkGallery1 from "@/assets/exp-beachwalk-gallery1.jpg";
import expBeachwalkGallery2 from "@/assets/exp-beachwalk-gallery2.jpg";

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
  amenities: string[];
  availableTimes: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "3-Hours Kayak Break",
    emoji: "🌅",
    category: "Nature",
    host: "jellyfish Watersports",
    price: "₹999",
    duration: "3 hours",
    groupSize: "1–15",
    minAge: 12,
    location: "Cheruvannur",
    image: expKayakMain,
    gallery: [expKayakMain, expKayakGallery1, expKayakGallery2],
    description: "A calm kayaking experience through peaceful backwaters.",
    fullDescription: "Paddle through calm backwaters and enjoy a relaxing kayaking experience designed for beginners and weekend explorers.",
    included: ["Kayak & safety jacket", "Basic paddling guidance"],
    whatToBring: ["Comfortable clothes", "Extra clothes (optional)"],
    amenities: ["Parking Available", "Washroom", "First Aid Kit", "Photo Spots", "Drinking Water"],
    availableTimes: ["6:00 AM", "9:00 AM", "12:00 PM", "3:00 PM"]
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
    image: expBowlingMain,
    gallery: [expBowlingMain, expBowlingGallery1, expBowlingGallery2],
    description: "A casual bowling session where strikes don't matter as much as the laughs. Perfect for friends and small groups.",
    fullDescription: "A casual bowling session where strikes don't matter as much as the laughs. Perfect for friends and small groups. No pressure to be good—just show up, throw some balls, and have a great time. The neon-lit lanes and upbeat music make for the perfect hangout spot after a long day.",
    included: ["Bowling lane access", "Shoe rental"],
    whatToBring: ["Socks"],
    amenities: ["AC Venue", "Snacks Counter", "Music System", "Parking", "Washroom"],
    availableTimes: ["3:00 PM", "4:30 PM", "6:00 PM"]
  },
  {
    id: "3",
    title: "VR Gaming Session",
    emoji: "🕶️",
    category: "Thrill",
    host: "VR Zone",
    price: "₹200",
    duration: "15 minutes",
    groupSize: "1–10",
    minAge: 10,
    location: "Beach Road",
    image: expVrMain,
    gallery: [expVrMain, expVrGallery1, expVrGallery2],
    description: "Immersive virtual reality gaming experience.",
    fullDescription: "Choose from multiple VR games and enjoy a futuristic gaming setup.",
    included: ["VR headset & controllers", "Game assistance"],
    whatToBring: ["Nothing special"],
    amenities: ["AC Room", "Sanitized Equipment", "Waiting Lounge", "Washroom", "WiFi"],
    availableTimes: ["12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"]
  },
  {
    id: "4",
    title: "PlayStation Hangout",
    emoji: "🎮",
    category: "Offbeat",
    host: "Master Gaming",
    price: "₹250",
    duration: "1 hour",
    groupSize: "1–2",
    minAge: 1,
    location: "Methottuthazham",
    image: expPlaystationMain,
    gallery: [expPlaystationMain, expPlaystationGallery1, expPlaystationGallery2],
    description: "Sit back and play FIFA, racing, or story games with friends. No pressure, just play and chill.",
    fullDescription: "Sit back and play FIFA, racing, or story games with friends. No pressure, just play and chill. Pick from a library of popular games, grab a controller, and let the competition (or co-op) begin. Comfy seating, good vibes, and snacks available.",
    included: ["Console & game access", "Seating space"],
    whatToBring: ["Competitive spirit 😄"],
    amenities: ["AC Lounge", "Comfy Seating", "Charging Points", "WiFi"],
    availableTimes: ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM"]
  },
  {
    id: "5",
    title: "Pottery for Beginners",
    emoji: "🏺",
    category: "Skill-Learning",
    host: "Pottery Studio",
    price: "₹699",
    duration: "2 hours",
    groupSize: "1–8",
    minAge: 10,
    location: "Thondayad",
    image: expPotteryMain,
    gallery: [expPotteryMain, expPotteryGallery1, expPotteryGallery2],
    description: "Create your own clay art in a guided pottery session.",
    fullDescription: "Learn basic pottery techniques and take home your handmade creation.",
    included: ["Clay & pottery tools", "Basic guidance"],
    whatToBring: ["Old clothes or apron"],
    amenities: ["Hand Wash Station", "Natural Lighting", "Parking", "Relaxing Music"],
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
    image: expHookahMain,
    gallery: [expHookahMain, expHookahGallery1, expHookahGallery2],
    description: "Relax with flavoured hookah and easy board games in a laid-back lounge setup.",
    fullDescription: "Relax with flavoured hookah and easy board games in a laid-back lounge setup. The perfect spot for when you want to slow down, catch up with friends, and enjoy some classic games like Uno, Jenga, or Monopoly over aromatic hookah.",
    included: ["Hookah setup", "Board games access"],
    whatToBring: ["Valid ID"],
    amenities: ["AC Lounge", "Premium Seating", "Mood Lighting", "Music", "Washroom"],
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
    image: expSwimmingMain,
    gallery: [expSwimmingMain, expSwimmingGallery1, expSwimmingGallery2],
    description: "A calm evening swim to cool off and relax without the usual crowd.",
    fullDescription: "A calm evening swim to cool off and relax without the usual crowd. Whether you want to do laps or just float around, this is your escape from the heat and stress. Clean pool, good vibes, and minimal crowds during evening slots.",
    included: ["Pool access", "Changing rooms"],
    whatToBring: ["Swimwear", "Towel"],
    amenities: ["Changing Rooms", "Lockers", "Showers", "Poolside Seating", "First Aid"],
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
    image: expBadmintonMain,
    gallery: [expBadmintonMain, expBadmintonGallery1, expBadmintonGallery2],
    description: "Fast rallies and friendly matches for people who want a quick active break after work.",
    fullDescription: "Fast rallies and friendly matches for people who want a quick active break after work. Indoor courts with good lighting mean you can play even after sunset. Bring a friend or get matched with other players for doubles.",
    included: ["Court access", "Shuttlecock"],
    whatToBring: ["Non-marking sports shoes"],
    amenities: ["Indoor Courts", "Good Lighting", "Drinking Water", "Washroom", "Parking"],
    availableTimes: ["6:00 PM", "7:00 PM"]
  },
  {
    id: "9",
    title: "Ice Bath Reset",
    emoji: "❄️",
    category: "Mindfulness",
    host: "Ice Plunge",
    price: "₹500",
    duration: "3-15 minutes",
    groupSize: "1–4",
    minAge: 15,
    location: "Kallayi",
    image: expIcebathMain,
    gallery: [expIcebathMain, expIcebathGallery1, expIcebathGallery2],
    description: "A short guided ice bath session designed to reset your body and mind.",
    fullDescription: "A short guided ice bath session designed to reset your body and mind. Experience the trending cold therapy that athletes and wellness enthusiasts swear by. Guided breathing helps you stay calm as you take the plunge into icy waters.",
    included: ["Ice bath tub", "Basic breathing guidance"],
    whatToBring: ["Towel", "Change of clothes"],
    availableTimes: ["7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM"],
    amenities: ["Shower", "Changing Area", "Lockers", "First Aid", "Parking"]
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
    image: expPickleballMain,
    gallery: [expPickleballMain, expPickleballGallery1, expPickleballGallery2],
    description: "An easy-to-learn sport that's fast, fun, and perfect for beginners.",
    fullDescription: "An easy-to-learn sport that's fast, fun, and perfect for beginners. Pickleball is the trending sport everyone's talking about—a mix of tennis, badminton, and ping pong. Pick it up in minutes, enjoy it for hours.",
    included: ["Court access", "Paddle & ball"],
    whatToBring: ["Sports shoes"],
    amenities: ["Outdoor Courts", "Shade Area", "Drinking Water", "Washroom", "Beginner Friendly"],
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
    image: expSnookerMain,
    gallery: [expSnookerMain, expSnookerGallery1, expSnookerGallery2],
    description: "A slow-paced indoor game session that's perfect for relaxed conversations.",
    fullDescription: "A slow-paced indoor game session that's perfect for relaxed conversations. The classic game of strategy and precision. Perfect for those who like their hangouts with a side of friendly competition and deep chats.",
    included: ["Table access", "Cues & balls"],
    whatToBring: ["Nothing special"],
    amenities: ["AC Hall", "Premium Tables", "Snacks Counter", "Lounge Area", "Parking"],
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
    image: expBeachwalkMain,
    gallery: [expBeachwalkMain, expBeachwalkGallery1, expBeachwalkGallery2],
    description: "A relaxed beach walk with light conversations. No rush, no fitness pressure.",
    fullDescription: "A relaxed beach walk with light conversations. No rush, no fitness pressure. Meet new people or bring your crew for a sunset stroll along the shore. Good conversations, ocean breeze, and zero workout intensity.",
    included: ["Guided group walk"],
    whatToBring: ["Comfortable footwear"],
    amenities: ["Scenic Views", "Photo Spots", "Street Food Nearby", "Sunset Timing", "Group Vibes"],
    availableTimes: ["6:00 AM", "6:00 PM"]
  },
  {
    id: "13",
    title: "Steam Bath Reset",
    emoji: "♨️",
    category: "Mindfulness",
    host: "Ice Plunge",
    price: "₹400",
    duration: "10-30 minutes",
    groupSize: "1–4",
    minAge: 12,
    location: "Kallayi",
    image: expIcebathMain,
    gallery: [expIcebathMain, expIcebathGallery1, expIcebathGallery2],
    description: "A short guided steam bath session designed to reset your body and mind.",
    fullDescription: "A short guided ice bath session designed to reset your body and mind. Experience the trending cold therapy that athletes and wellness enthusiasts swear by. Guided breathing helps you stay calm as you take the plunge into icy waters.",
    included: ["Steam bath room", "Basic breathing guidance"],
    whatToBring: ["Towel", "Change of clothes"],
    availableTimes: ["7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM"],
    amenities: ["Shower", "Changing Area", "Lockers", "First Aid", "Parking"]
  },
  {
    id: "14",
    title: "Ice + Steam Bath",
    emoji: "❄️♨️",
    category: "Mindfulness",
    host: "Ice Plunge",
    price: "₹800",
    duration: "30 minutes",
    groupSize: "1–4",
    minAge: 12,
    location: "Kallayi",
    image: expIcebathMain,
    gallery: [expIcebathMain, expIcebathGallery1, expIcebathGallery2],
    description: "A short guided ice + steam bath session designed to reset your body and mind.",
    fullDescription: "A short guided ice + steam bath session designed to reset your body and mind. Experience the trending cold therapy that athletes and wellness enthusiasts swear by. Guided breathing helps you stay calm as you take the plunge into icy waters.",
    included: ["Steam bath room", "Basic breathing guidance"],
    whatToBring: ["Towel", "Change of clothes"],
    availableTimes: ["7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM"],
    amenities: ["Shower", "Changing Area", "Lockers", "First Aid", "Parking"]
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
