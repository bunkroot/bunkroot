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
  category: string;
  host: string;
  price: string;
  priceType: string;
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

export const categories = [
  "Wellness",
  "Water Activity",
  "Swimming",
  "Sports",
  "Riding",
  "Gaming",
  "Lounges",
  "Creative",
] as const;

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Ice Bath Session",
    category: "Wellness",
    host: "Ice Plunge",
    price: "₹500",
    priceType: "per person",
    duration: "15 mins",
    groupSize: "1–4",
    minAge: 15,
    location: "Kallayi",
    image: expIcebathMain,
    gallery: [expIcebathMain, expIcebathGallery1, expIcebathGallery2],
    description: "Guided cold exposure session designed for recovery and mental resilience.",
    fullDescription: "This ice bath session is designed for anyone looking to experience controlled cold exposure in a safe and guided environment. The session is kept short and manageable, making it suitable even for first-timers. A facilitator will guide you through the process and help you stay comfortable throughout. Many people use this session to support muscle recovery, reduce fatigue, or simply challenge themselves mentally.",
    included: ["Ice bath tub", "Guided session", "Temperature monitoring"],
    whatToBring: ["Towel", "Change of clothes"],
    amenities: ["Washroom", "Changing room", "Drinking water", "Seating area"],
    availableTimes: ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"]
  },
  {
    id: "2",
    title: "Steam Bath Reset",
    category: "Wellness",
    host: "Ice Plunge",
    price: "₹400",
    priceType: "per person",
    duration: "30 mins",
    groupSize: "1–4",
    minAge: 15,
    location: "Kallayi",
    image: expIcebathMain,
    gallery: [expIcebathMain, expIcebathGallery1, expIcebathGallery2],
    description: "A relaxing steam bath session to release tension and unwind.",
    fullDescription: "The steam bath reset is a slow, calming experience focused on relaxation. Warm steam helps loosen stiff muscles, ease stress, and promote overall relaxation. This session works well after workouts, long workdays, or as a standalone wellness break.",
    included: ["Steam room access", "Timed session"],
    whatToBring: ["Towel", "Shorts"],
    amenities: ["Washroom", "Changing room", "Drinking water", "Seating area"],
    availableTimes: ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"]
  },
  {
    id: "3",
    title: "Ice + Steam Recovery Combo",
    category: "Wellness",
    host: "Ice Plunge",
    price: "₹800",
    priceType: "per person",
    duration: "30 mins",
    groupSize: "1–4",
    minAge: 15,
    location: "Kallayi",
    image: expIcebathMain,
    gallery: [expIcebathMain, expIcebathGallery1, expIcebathGallery2],
    description: "Contrast therapy combining ice bath and steam for deep recovery.",
    fullDescription: "This recovery combo brings together cold and heat therapy in a single session. You'll move between ice exposure and steam therapy to stimulate circulation and reduce muscle fatigue. The contrast between temperatures makes this session more intense than a single treatment.",
    included: ["Ice bath access", "Steam bath access", "Guided flow"],
    whatToBring: ["Towel", "Extra clothes"],
    amenities: ["Washroom", "Changing room", "Drinking water", "Seating area"],
    availableTimes: ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"]
  },
  {
    id: "4",
    title: "Backwater Kayaking",
    category: "Water Activity",
    host: "River Kayaking",
    price: "₹400",
    priceType: "per person",
    duration: "1.5 hours",
    groupSize: "1–10",
    minAge: 12,
    location: "Kadalundi",
    image: expKayakMain,
    gallery: [expKayakMain, expKayakGallery1, expKayakGallery2],
    description: "A calm kayaking experience through scenic backwaters.",
    fullDescription: "Backwater kayaking offers a peaceful way to explore nature at a relaxed pace. The route passes through calm waters, making it ideal for beginners and casual paddlers. Safety instructions are provided before starting.",
    included: ["Kayak", "Life jacket", "Safety briefing"],
    whatToBring: ["Comfortable clothes"],
    amenities: ["Parking", "Washroom", "Drinking water", "On-site support"],
    availableTimes: ["06:00 AM", "08:00 AM", "10:00 AM", "03:00 PM", "05:00 PM", "07:00 PM"]
  },
  {
    id: "5",
    title: "Kayak Escape",
    category: "Water Activity",
    host: "Jellyfish Watersports",
    price: "₹999",
    priceType: "per person",
    duration: "3 hours",
    groupSize: "1–15",
    minAge: 12,
    location: "Cheruvannur",
    image: expKayakMain,
    gallery: [expKayakMain, expKayakGallery1, expKayakGallery2],
    description: "A longer guided kayaking experience for deeper exploration.",
    fullDescription: "Kayak Escape is a longer, more immersive kayaking session designed for those who want to spend extended time on the water. With guidance provided throughout, participants can explore scenic stretches comfortably.",
    included: ["Kayak", "Safety gear", "Guided route"],
    whatToBring: ["Extra clothes", "Water bottle"],
    amenities: ["Parking", "Washroom", "Drinking water", "On-site support"],
    availableTimes: ["06:00 AM", "09:00 AM", "12:00 PM", "03:00 PM", "06:00 PM"]
  },
  {
    id: "6",
    title: "River Rafting",
    category: "Water Activity",
    host: "Jellyfish Watersports",
    price: "₹999",
    priceType: "per person",
    duration: "2 hours",
    groupSize: "6–10",
    minAge: 14,
    location: "Cheruvannur",
    image: expKayakMain,
    gallery: [expKayakMain, expKayakGallery1, expKayakGallery2],
    description: "An exciting river rafting experience through flowing rapids and calm stretches.",
    fullDescription: "River rafting is a guided water adventure that takes you through natural river currents, combining moments of excitement with calmer stretches of water. This experience is designed for groups and first-time rafters as well as those looking for a refreshing outdoor activity.",
    included: ["Raft", "Safety gear", "Guided route"],
    whatToBring: ["Extra clothes", "Water bottle"],
    amenities: ["Parking", "Washroom", "Drinking water", "On-site support"],
    availableTimes: ["06:00 AM", "09:00 AM", "12:00 PM", "03:00 PM", "06:00 PM"]
  },
  {
    id: "7",
    title: "Lake Kayaking",
    category: "Water Activity",
    host: "Lake Water",
    price: "₹200",
    priceType: "per person",
    duration: "1 hour",
    groupSize: "1–15",
    minAge: 12,
    location: "Kayalam",
    image: expKayakMain,
    gallery: [expKayakMain, expKayakGallery1, expKayakGallery2],
    description: "Easy-paced kayaking session on a calm lake.",
    fullDescription: "This lake kayaking experience is simple and accessible, especially for people trying kayaking for the first time. Calm water conditions make it easy to learn basic paddling techniques.",
    included: ["Kayak", "Life jacket"],
    whatToBring: ["Comfortable clothes"],
    amenities: ["Parking", "Drinking water", "Seating area", "On-site support"],
    availableTimes: ["08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM"]
  },
  {
    id: "8",
    title: "Standup Paddling",
    category: "Water Activity",
    host: "Lake Water",
    price: "₹250",
    priceType: "per person",
    duration: "1 hour",
    groupSize: "1–15",
    minAge: 12,
    location: "Kayalam",
    image: expBeachwalkMain,
    gallery: [expBeachwalkMain, expBeachwalkGallery1, expBeachwalkGallery2],
    description: "Try standup paddling on calm waters.",
    fullDescription: "Standup paddling is a balance-based water activity that combines light movement with calm exploration. Participants paddle while standing on a stable board after a short introduction.",
    included: ["Paddle board", "Paddle", "Safety briefing"],
    whatToBring: ["Comfortable clothes"],
    amenities: ["Parking", "Drinking water", "Seating area", "On-site support"],
    availableTimes: ["08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM"]
  },
  {
    id: "9",
    title: "Power Boat",
    category: "Water Activity",
    host: "Lake Water",
    price: "₹250",
    priceType: "per person",
    duration: "1 hour",
    groupSize: "1–15",
    minAge: 14,
    location: "Kayalam",
    image: expBeachwalkMain,
    gallery: [expBeachwalkMain, expBeachwalkGallery1, expBeachwalkGallery2],
    description: "A quick power boat ride experience on the lake.",
    fullDescription: "This power boat ride is a short burst of excitement on the water. Designed as a quick experience, it focuses on controlled speed and safety rather than extreme thrills.",
    included: ["Power boat ride", "Safety jacket"],
    whatToBring: ["Secure footwear"],
    amenities: ["Parking", "Washroom", "Drinking water", "Safety staff"],
    availableTimes: ["08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM"]
  },
  {
    id: "10",
    title: "Banana Ride",
    category: "Water Activity",
    host: "Lake Water",
    price: "₹150",
    priceType: "per person",
    duration: "1 hour",
    groupSize: "1–15",
    minAge: 12,
    location: "Kayalam",
    image: expBeachwalkMain,
    gallery: [expBeachwalkMain, expBeachwalkGallery1, expBeachwalkGallery2],
    description: "A fun group water ride with splashes and laughter.",
    fullDescription: "The banana ride is a popular group activity where participants sit together on an inflatable boat pulled across the water. Expect splashes, laughter, and a light adrenaline rush.",
    included: ["Inflatable banana ride", "Life jacket", "Instructor support"],
    whatToBring: ["Comfortable clothes"],
    amenities: ["Parking", "Washroom", "Drinking water", "Safety staff"],
    availableTimes: ["08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM"]
  },
  {
    id: "11",
    title: "Bumper Ride",
    category: "Water Activity",
    host: "Lake Water",
    price: "₹200",
    priceType: "per person",
    duration: "1 hour",
    groupSize: "1–15",
    minAge: 12,
    location: "Kayalam",
    image: expBeachwalkMain,
    gallery: [expBeachwalkMain, expBeachwalkGallery1, expBeachwalkGallery2],
    description: "A playful water ride with spins and splashes.",
    fullDescription: "Bumper rides are designed purely for fun. Riders sit on an inflatable tube while being gently pulled across the water, enjoying light spins and splashes.",
    included: ["Inflatable bumper ride", "Safety jacket"],
    whatToBring: ["Comfortable clothes"],
    amenities: ["Parking", "Washroom", "Drinking water", "Safety staff"],
    availableTimes: ["08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM"]
  },
  {
    id: "12",
    title: "Swimming Pool Access",
    category: "Swimming",
    host: "Swimming Centre",
    price: "₹150",
    priceType: "per person",
    duration: "1 hour",
    groupSize: "1–25",
    minAge: 5,
    location: "Cherukulam",
    image: expSwimmingMain,
    gallery: [expSwimmingMain, expSwimmingGallery1, expSwimmingGallery2],
    description: "General access to a public swimming pool.",
    fullDescription: "This option provides timed access to a public swimming pool suitable for both fitness swimming and casual use. Ideal for individuals, families, and regular swimmers. Children below 10 may require adult supervision.",
    included: ["Pool entry", "Timed access"],
    whatToBring: ["Swimwear", "Towel"],
    amenities: ["Changing room", "Washroom", "Drinking water", "Seating area"],
    availableTimes: ["07:00 AM", "07:30 AM", "08:00 AM", "08:30 AM", "04:00 PM", "04:30 PM", "05:00 PM"]
  },
  {
    id: "13",
    title: "Swimming Retreat",
    category: "Swimming",
    host: "Blue Swim",
    price: "₹100",
    priceType: "per person",
    duration: "1 hour",
    groupSize: "1–25",
    minAge: 5,
    location: "Pantheerankavu",
    image: expSwimmingMain,
    gallery: [expSwimmingMain, expSwimmingGallery1, expSwimmingGallery2],
    description: "A relaxed swimming experience in a calm setting.",
    fullDescription: "Swimming Retreat focuses on a quieter swimming environment with a relaxed atmosphere. Well-suited for those who prefer calm surroundings rather than crowded pool sessions. Children below 10 may require adult supervision.",
    included: ["Pool access", "Calm swimming slot"],
    whatToBring: ["Swimwear", "Towel"],
    amenities: ["Changing room", "Washroom", "Drinking water", "Seating area"],
    availableTimes: ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM"]
  },
  {
    id: "14",
    title: "Swim in Loop",
    category: "Swimming",
    host: "We Spot",
    price: "₹150",
    priceType: "per person",
    duration: "1 hour",
    groupSize: "1–25",
    minAge: 5,
    location: "Kannadikkal",
    image: expSwimmingMain,
    gallery: [expSwimmingMain, expSwimmingGallery1, expSwimmingGallery2],
    description: "Community swimming pool access for casual swimming.",
    fullDescription: "Swim in Loop is a neighbourhood-style swimming experience designed for everyday use. Suitable for beginners, families, and regular swimmers. Children below 10 may require adult supervision.",
    included: ["Community pool access", "Timed slot"],
    whatToBring: ["Swimwear", "Towel"],
    amenities: ["Changing room", "Washroom", "Drinking water", "Seating area"],
    availableTimes: ["05:00 AM", "05:30 AM", "06:00 AM", "06:30 AM", "07:00 AM", "07:30 AM", "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM"]
  },
  {
    id: "15",
    title: "Synthetic Badminton Court",
    category: "Sports",
    host: "We Spot",
    price: "₹500",
    priceType: "per slot",
    duration: "1 hour",
    groupSize: "2–4",
    minAge: 8,
    location: "Kannadikkal",
    image: expBadmintonMain,
    gallery: [expBadmintonMain, expBadmintonGallery1, expBadmintonGallery2],
    description: "Book an indoor synthetic badminton court.",
    fullDescription: "This indoor badminton court features synthetic flooring suitable for both casual games and practice sessions. Bookings are done in hourly slots.",
    included: ["Synthetic court access", "One-hour slot"],
    whatToBring: ["Non-marking shoes"],
    amenities: ["Parking", "Washroom", "Drinking water", "Seating area"],
    availableTimes: ["05:00 AM", "05:30 AM", "06:00 AM", "06:30 AM", "07:00 AM", "07:30 AM", "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM"]
  },
  {
    id: "16",
    title: "Indoor Badminton Court",
    category: "Sports",
    host: "Check Rail",
    price: "₹500",
    priceType: "per slot",
    duration: "1 hour",
    groupSize: "2–4",
    minAge: 8,
    location: "Kuttichira",
    image: expBadmintonMain,
    gallery: [expBadmintonMain, expBadmintonGallery1, expBadmintonGallery2],
    description: "Indoor badminton session in a dedicated court.",
    fullDescription: "A standard indoor badminton court designed for consistent play. Lighting and court layout are suitable for regular games and practice.",
    included: ["Indoor court access", "One-hour slot"],
    whatToBring: ["Sports shoes"],
    amenities: ["Parking", "Washroom", "Drinking water", "Seating area"],
    availableTimes: ["05:00 AM", "05:30 AM", "06:00 AM", "06:30 AM", "07:00 AM", "07:30 AM", "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM"]
  },
  {
    id: "17",
    title: "Badminton Rally",
    category: "Sports",
    host: "We Nets",
    price: "₹500",
    priceType: "per slot",
    duration: "1 hour",
    groupSize: "2–4",
    minAge: 8,
    location: "Chevayoor",
    image: expBadmintonMain,
    gallery: [expBadmintonMain, expBadmintonGallery1, expBadmintonGallery2],
    description: "Indoor badminton session for friendly rallies.",
    fullDescription: "Badminton Rally is ideal for players looking to enjoy relaxed rallies rather than competitive matches. Suitable for friends and casual groups.",
    included: ["Indoor court access", "Timed play"],
    whatToBring: ["Sports shoes"],
    amenities: ["Parking", "Washroom", "Drinking water", "Seating area"],
    availableTimes: ["05:00 AM", "05:30 AM", "06:00 AM", "06:30 AM", "07:00 AM", "07:30 AM", "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM"]
  },
  {
    id: "18",
    title: "Badminton Drive",
    category: "Sports",
    host: "Zig Badminton",
    price: "₹500",
    priceType: "per slot",
    duration: "1 hour",
    groupSize: "2–4",
    minAge: 8,
    location: "Ozhukkara",
    image: expBadmintonMain,
    gallery: [expBadmintonMain, expBadmintonGallery1, expBadmintonGallery2],
    description: "Book a badminton court for focused play.",
    fullDescription: "This badminton court option is preferred by regular players who want uninterrupted court time in a functional playing environment.",
    included: ["Indoor court access", "Focused play slot"],
    whatToBring: ["Sports shoes"],
    amenities: ["Parking", "Washroom", "Drinking water", "Seating area"],
    availableTimes: ["05:30 AM", "06:00 AM", "06:30 AM", "07:00 AM", "07:30 AM", "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM"]
  },
  {
    id: "19",
    title: "Pickleball Match",
    category: "Sports",
    host: "Pickle Club",
    price: "₹500",
    priceType: "per slot",
    duration: "1 hour",
    groupSize: "2–4",
    minAge: 8,
    location: "Govindapuram",
    image: expPickleballMain,
    gallery: [expPickleballMain, expPickleballGallery1, expPickleballGallery2],
    description: "Pickleball court booking for casual play.",
    fullDescription: "Pickleball is a fast-growing sport that's easy to learn and fun to play. This session provides access to a dedicated court for beginners and groups.",
    included: ["Pickleball court access", "Net setup"],
    whatToBring: ["Sports shoes"],
    amenities: ["Parking", "Washroom", "Drinking water", "Seating area"],
    availableTimes: ["06:00 AM", "06:30 AM", "07:00 AM", "07:30 AM", "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM", "11:00 PM"]
  },
  {
    id: "20",
    title: "Let's Pickleball",
    category: "Sports",
    host: "Pickle Hub",
    price: "₹500",
    priceType: "per slot",
    duration: "1 hour",
    groupSize: "2–4",
    minAge: 8,
    location: "Hilite Mall",
    image: expPickleballMain,
    gallery: [expPickleballMain, expPickleballGallery1, expPickleballGallery2],
    description: "Casual pickleball session for beginners and groups.",
    fullDescription: "Let's Pickleball is designed as a friendly introduction to the sport. The session encourages relaxed play and learning through experience.",
    included: ["Court access", "Casual play setup"],
    whatToBring: ["Sports shoes"],
    amenities: ["Parking", "Washroom", "Drinking water", "Seating area"],
    availableTimes: ["06:00 AM", "06:30 AM", "07:00 AM", "07:30 AM", "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM"]
  },
  {
    id: "21",
    title: "Go Carting Arena",
    category: "Riding",
    host: "Speed",
    price: "₹400",
    priceType: "per person",
    duration: "15 mins",
    groupSize: "1–10",
    minAge: 16,
    location: "Hilite Mall",
    image: expBowlingMain,
    gallery: [expBowlingMain, expBowlingGallery1, expBowlingGallery2],
    description: "A quick go-karting experience for thrill seekers.",
    fullDescription: "This go-karting session offers a short but exciting drive on a controlled track. Safety instructions are provided before the ride.",
    included: ["Kart ride", "Safety helmet", "Track access"],
    whatToBring: ["Closed footwear"],
    amenities: ["Parking", "Washroom", "Drinking water", "Safety staff"],
    availableTimes: ["11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM"]
  },
  {
    id: "22",
    title: "Console & PC Gaming",
    category: "Gaming",
    host: "Master Gaming",
    price: "₹250",
    priceType: "per slot",
    duration: "1 hour",
    groupSize: "1–2",
    minAge: 6,
    location: "Methotuthazham",
    image: expPlaystationMain,
    gallery: [expPlaystationMain, expPlaystationGallery1, expPlaystationGallery2],
    description: "Console and PC gaming session in a gaming zone.",
    fullDescription: "This gaming session provides access to console and PC setups for a fixed time slot in a comfortable indoor environment.",
    included: ["Console/PC access", "Gaming controllers"],
    whatToBring: ["Nothing much"],
    amenities: ["AC", "Seating area", "Washroom", "Drinking water"],
    availableTimes: ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM"]
  },
  {
    id: "23",
    title: "VR Gaming & Simulation",
    category: "Gaming",
    host: "VR Zone",
    price: "₹200",
    priceType: "per person",
    duration: "15 mins",
    groupSize: "1–10",
    minAge: 10,
    location: "Beach Road",
    image: expVrMain,
    gallery: [expVrMain, expVrGallery1, expVrGallery2],
    description: "Immersive virtual reality gaming experience.",
    fullDescription: "VR Gaming & Simulation offers a short immersive experience using virtual reality headsets and interactive environments.",
    included: ["VR headset", "Game access"],
    whatToBring: ["Nothing much"],
    amenities: ["AC", "Seating area", "Washroom", "Drinking water"],
    availableTimes: ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM"]
  },
  {
    id: "24",
    title: "Billiards Session",
    category: "Lounges",
    host: "Billiards Club",
    price: "₹300",
    priceType: "per slot",
    duration: "1 hour",
    groupSize: "1–6",
    minAge: 12,
    location: "Hilite Mall",
    image: expSnookerMain,
    gallery: [expSnookerMain, expSnookerGallery1, expSnookerGallery2],
    description: "Professional billiards table access.",
    fullDescription: "This billiards session gives access to a professional table suitable for casual play, practice, or friendly competition.",
    included: ["Billiards table access", "Cue sticks"],
    whatToBring: ["Nothing much"],
    amenities: ["AC", "Seating area", "Washroom", "Drinking water"],
    availableTimes: ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM", "11:00 PM"]
  },
  {
    id: "25",
    title: "Billiards Vibe",
    category: "Lounges",
    host: "De Bite",
    price: "₹300",
    priceType: "per slot",
    duration: "1 hour",
    groupSize: "1–6",
    minAge: 12,
    location: "Thondayad",
    image: expSnookerMain,
    gallery: [expSnookerMain, expSnookerGallery1, expSnookerGallery2],
    description: "Late-evening billiards hangout with friends.",
    fullDescription: "Billiards Vibe is designed for evening social play in a relaxed atmosphere, ideal for groups.",
    included: ["Table access", "Evening slot"],
    whatToBring: ["Nothing much"],
    amenities: ["AC", "Seating area", "Washroom", "Drinking water"],
    availableTimes: ["02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM", "12:00 AM", "12:30 AM", "1:00 AM", "1:30 AM", "2:00 AM"]
  },
  {
    id: "26",
    title: "Smoke Hookah Prime",
    category: "Lounges",
    host: "Smoke Lounge",
    price: "₹999",
    priceType: "per slot",
    duration: "2 hours",
    groupSize: "1–6",
    minAge: 18,
    location: "Ummalathoor",
    image: expHookahMain,
    gallery: [expHookahMain, expHookahGallery1, expHookahGallery2],
    description: "Premium shisha lounge experience with reserved seating.",
    fullDescription: "Smoke Hookah Prime focuses on ambience and comfort in a premium lounge setting suitable for evening gatherings.",
    included: ["Reserved seating", "Lounge access"],
    whatToBring: ["Nothing much"],
    amenities: ["AC", "Seating area", "Washroom", "Drinking water"],
    availableTimes: ["01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM", "12:00 AM", "12:30 AM", "1:00 AM", "1:30 AM", "2:00 AM"]
  },
  {
    id: "27",
    title: "Classic Hookah Time",
    category: "Lounges",
    host: "Hookah Lounge",
    price: "₹999",
    priceType: "per slot",
    duration: "2 hours",
    groupSize: "1–6",
    minAge: 18,
    location: "PT Usha Road",
    image: expHookahMain,
    gallery: [expHookahMain, expHookahGallery1, expHookahGallery2],
    description: "A relaxed shisha lounge session.",
    fullDescription: "Classic Hookah Time offers a simple and comfortable lounge environment designed for conversation and unhurried social time.",
    included: ["Seating area", "Lounge access"],
    whatToBring: ["Nothing much"],
    amenities: ["AC", "Seating area", "Washroom", "Drinking water"],
    availableTimes: ["01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM", "12:00 AM", "12:30 AM", "1:00 AM", "1:30 AM", "2:00 AM"]
  },
  {
    id: "28",
    title: "Hookah Ambience",
    category: "Lounges",
    host: "De Bite",
    price: "₹999",
    priceType: "per slot",
    duration: "2 hours",
    groupSize: "1–6",
    minAge: 18,
    location: "Thondayad",
    image: expHookahMain,
    gallery: [expHookahMain, expHookahGallery1, expHookahGallery2],
    description: "Casual shisha lounge hangout.",
    fullDescription: "This experience focuses on the overall ambience of a shisha lounge, allowing guests to relax and enjoy the setting at their own pace.",
    included: ["Seating space", "Lounge environment"],
    whatToBring: ["Nothing much"],
    amenities: ["AC", "Seating area", "Washroom", "Drinking water"],
    availableTimes: ["02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM", "12:00 AM", "12:30 AM", "1:00 AM", "1:30 AM", "2:00 AM"]
  },
  {
    id: "29",
    title: "Shisha Got Better",
    category: "Lounges",
    host: "De Cafe",
    price: "₹999",
    priceType: "per slot",
    duration: "2 hours",
    groupSize: "1–6",
    minAge: 18,
    location: "Velliparamba",
    image: expHookahMain,
    gallery: [expHookahMain, expHookahGallery1, expHookahGallery2],
    description: "Late-evening shisha lounge experience.",
    fullDescription: "Shisha Got Better is suited for late-evening visits when the atmosphere is calmer and more relaxed.",
    included: ["Seating space", "Evening slot"],
    whatToBring: ["Nothing much"],
    amenities: ["AC", "Seating area", "Washroom", "Drinking water"],
    availableTimes: ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM", "12:00 AM", "12:30 AM", "1:00 AM"]
  },
  {
    id: "30",
    title: "Let's Shisha",
    category: "Lounges",
    host: "Shisha Lounge",
    price: "₹999",
    priceType: "per slot",
    duration: "2 hours",
    groupSize: "1–6",
    minAge: 18,
    location: "Pottammal",
    image: expHookahMain,
    gallery: [expHookahMain, expHookahGallery1, expHookahGallery2],
    description: "Night-time shisha lounge hangout.",
    fullDescription: "Late Night Shisha caters to guests who prefer going out later in the night, offering a calm and social lounge environment.",
    included: ["Lounge seating", "Late-night access"],
    whatToBring: ["Nothing much"],
    amenities: ["AC", "Seating area", "Washroom", "Drinking water"],
    availableTimes: ["02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM"]
  },
  {
    id: "31",
    title: "Pottery Workshop",
    category: "Creative",
    host: "Clay Studio",
    price: "₹699",
    priceType: "per person",
    duration: "2 hours",
    groupSize: "1–8",
    minAge: 10,
    location: "Beach Road",
    image: expPotteryMain,
    gallery: [expPotteryMain, expPotteryGallery1, expPotteryGallery2],
    description: "Hands-on pottery workshop for beginners.",
    fullDescription: "This pottery workshop introduces participants to basic clay techniques in a relaxed, guided setting where they can create their own piece.",
    included: ["Clay materials", "Pottery tools", "Guided session"],
    whatToBring: ["Old clothes"],
    amenities: ["Washroom", "Drinking water", "Seating area", "Covered workspace"],
    availableTimes: ["9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"]
  }
];

// Helper function to get featured experiences for home page
export const getFeaturedExperiences = () => {
  // Return a curated selection of 4 diverse experiences across categories
  return experiences.filter(exp => 
    ["1", "5", "15", "23"].includes(exp.id)
  );
};

// Helper function to get experience by ID
export const getExperienceById = (id: string) => {
  return experiences.find(exp => exp.id === id);
};
