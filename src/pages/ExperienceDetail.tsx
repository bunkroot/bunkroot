import { useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, MapPin, Calendar as CalendarIcon, ChevronDown, ChevronUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";

// Import experience images
import beachMeditation from "@/assets/experience-beach-meditation.jpg";
import truthRoom from "@/assets/experience-truth-room.jpg";
import treasureHunt from "@/assets/experience-treasure-hunt.jpg";
import kayak from "@/assets/experience-kayak.jpg";
import fishing from "@/assets/experience-fishing.jpg";
import hauntedForest from "@/assets/experience-haunted-forest.jpg";
import mysteryIsland from "@/assets/experience-mystery-island.jpg";

const ExperienceDetail = () => {
  const { id } = useParams();
  const isMobile = useIsMobile();
  const [isBookingExpanded, setIsBookingExpanded] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("1");

  const experiences = [
    {
      id: "1",
      title: "Beach Meditation at Dawn",
      category: "Calm",
      emotion: "Medlife",
      price: "₹350",
      duration: "2 hours",
      time: "6:00 AM - 8:00 AM",
      groupSize: "1-15",
      minAge: 10,
      location: "Kappad Beach",
      image: beachMeditation,
      description: "Guided meditation with sound of waves, breathing exercises, and traditional Kerala breakfast",
      highlights: ["Golden hour photography", "First light energy", "Community feeling"],
      availableTimes: ["6:00 AM", "6:30 AM"],
      timeline: [
        { time: "6:00 AM", activity: "Meet at Kappad Beach parking", icon: "📍" },
        { time: "6:10 AM", activity: "Breathing exercises & stretching", icon: "🌬️" },
        { time: "6:30 AM", activity: "Guided meditation with ocean sounds", icon: "🧘" },
        { time: "7:15 AM", activity: "Sunrise gratitude practice", icon: "🌅" },
        { time: "7:30 AM", activity: "Traditional Kerala breakfast", icon: "🥥" },
        { time: "8:00 AM", activity: "Group photo & departure", icon: "📸" }
      ],
      fullDescription: "Start your day with the sacred energy of dawn at Kappad Beach. Our experienced meditation guide will lead you through breathing exercises synchronized with the ocean's rhythm, followed by guided visualization and group meditation. As the sun rises, we'll practice gratitude journaling and close with a traditional Kerala breakfast featuring fresh coconut, banana, and homemade snacks.",
      included: ["Professional meditation guide", "Yoga mats provided", "Traditional breakfast", "Photography session", "Beach access"],
      whatToBring: ["Comfortable clothes", "Water bottle", "Towel", "Open mind"]
    },
    {
      id: "2",
      title: "Candle-light Truth Room",
      category: "Connection",
      emotion: "Truth Room",
      price: "₹500",
      duration: "2.5 hours",
      time: "7:00 PM - 9:30 PM",
      groupSize: "2-10",
      minAge: 18,
      location: "Heritage Homestay",
      image: truthRoom,
      description: "Radical honesty in a safe space, facilitated by trained psychology professional",
      highlights: ["Structured vulnerability exercises", "Burn one written fear", "Post-session WhatsApp group"],
      availableTimes: ["7:00 PM", "7:30 PM"],
      timeline: [
        { time: "7:00 PM", activity: "Arrival & welcome tea", icon: "🍵" },
        { time: "7:15 PM", activity: "Ground rules & circle formation", icon: "⭕" },
        { time: "7:30 PM", activity: "Vulnerability exercises begin", icon: "💭" },
        { time: "8:15 PM", activity: "Fear burning ceremony", icon: "🔥" },
        { time: "8:45 PM", activity: "Closing circle & reflections", icon: "🤝" },
        { time: "9:15 PM", activity: "WhatsApp group & goodbyes", icon: "💬" }
      ],
      fullDescription: "Enter a judgment-free zone where vulnerability becomes strength. In the warm glow of candlelight, our trained psychology facilitator guides you through structured exercises designed to create authentic connections. Share fears, burn limiting beliefs in a ceremonial fire, and leave with genuine friendships. This isn't therapy—it's radical honesty with strangers who become friends.",
      included: ["Professional facilitator", "Journaling materials", "Herbal tea & snacks", "Post-session support group", "Private venue"],
      whatToBring: ["One written fear to burn", "Openness", "Respect for others"]
    },
    {
      id: "3",
      title: "Treasure Hunt in Old City",
      category: "Culture",
      emotion: "Heritage Gala",
      price: "₹600",
      duration: "2.5 hours",
      time: "4:00 PM - 6:30 PM",
      groupSize: "4-25",
      minAge: 10,
      location: "Mananchira to Mishkal Mosque",
      image: treasureHunt,
      description: "Cryptic riddles through historic Calicut streets with real locals telling real stories",
      highlights: ["Team competition", "Malayalam clues", "Heritage passport", "Halwa tasting"],
      availableTimes: ["4:00 PM", "4:30 PM"],
      timeline: [
        { time: "4:00 PM", activity: "Team formation at Mananchira Square", icon: "👥" },
        { time: "4:15 PM", activity: "Receive first cryptic clue", icon: "🗺️" },
        { time: "4:30 PM", activity: "Navigate through old bazaar", icon: "🏛️" },
        { time: "5:15 PM", activity: "Meet local artisans & storytellers", icon: "🎭" },
        { time: "5:45 PM", activity: "Mishkal Mosque final challenge", icon: "🕌" },
        { time: "6:15 PM", activity: "Winner announcement & halwa tasting", icon: "🏆" }
      ],
      fullDescription: "Decode Calicut's secrets through cryptic Malayalam riddles as you race through centuries-old streets. Teams of 4-5 navigate from Mananchira to Mishkal Mosque, meeting local shopkeepers, artisans, and historians who share stories never found in guidebooks. Win by speed and cultural knowledge. Grand prize: a heritage hamper of Calicut specialties.",
      included: ["Game master & guides", "Heritage passport", "Halwa tasting", "Team prizes", "Local storytellers"],
      whatToBring: ["Comfortable walking shoes", "Phone for photos", "Team spirit", "Basic Malayalam helps"]
    },
    {
      id: "4",
      title: "Kayak & Chill",
      category: "Thrill",
      emotion: "Riverdale Kayak",
      price: "₹800",
      duration: "3 hours",
      time: "4:30 PM - 7:30 PM",
      groupSize: "2-12",
      minAge: 12,
      location: "Kadalundi Estuary",
      image: kayak,
      description: "Sunset kayaking through mangroves with float therapy and bonfire on isolated sandbar",
      highlights: ["Professional photos included", "Float therapy", "Sunset watching"],
      availableTimes: ["4:30 PM", "5:00 PM"],
      timeline: [
        { time: "4:30 PM", activity: "Safety briefing & gear up", icon: "🛟" },
        { time: "4:45 PM", activity: "Begin kayaking through mangroves", icon: "🚣" },
        { time: "5:30 PM", activity: "Reach private sandbar", icon: "🏝️" },
        { time: "5:45 PM", activity: "Float therapy session", icon: "🌊" },
        { time: "6:30 PM", activity: "Sunset watching & photography", icon: "📷" },
        { time: "7:00 PM", activity: "Bonfire with snacks & return", icon: "🔥" }
      ],
      fullDescription: "Paddle through emerald mangroves as golden hour transforms the estuary into liquid gold. After exploring hidden channels, we anchor at a private sandbar for float therapy—lie back and let the salt water hold you as the sky turns pink and orange. End with a bonfire, snacks, and conversations under stars. Professional photographer captures the magic.",
      included: ["Kayak & safety equipment", "Life jackets", "Professional photos", "Bonfire setup", "Snacks & beverages", "Waterproof bags"],
      whatToBring: ["Swimwear", "Change of clothes", "Sunscreen", "Waterproof phone case"]
    },
    {
      id: "5",
      title: "Fishing with Locals at Sea",
      category: "Culture",
      emotion: "Sea Nets",
      price: "₹900",
      duration: "6 hours",
      time: "4:15 AM - 10:30 AM",
      groupSize: "2-8",
      minAge: 12,
      location: "Beypore",
      image: fishing,
      description: "Real fishing trip with multigenerational fishermen, learn net-casting, cook your catch",
      highlights: ["Dawn at sea", "Traditional fish-cleaning", "Breakfast you caught", "Uru boat yard visit"],
      availableTimes: ["4:15 AM"],
      timeline: [
        { time: "4:15 AM", activity: "Meet fishermen at Beypore harbor", icon: "⚓" },
        { time: "4:30 AM", activity: "Sail into the Arabian Sea", icon: "🚤" },
        { time: "5:00 AM", activity: "Learn net-casting techniques", icon: "🎣" },
        { time: "6:30 AM", activity: "Traditional fish-cleaning lessons", icon: "🐟" },
        { time: "8:00 AM", activity: "Cook & eat your catch", icon: "🍳" },
        { time: "9:30 AM", activity: "Uru boat yard tour & departure", icon: "⛵" }
      ],
      fullDescription: "Join three generations of Beypore fishermen for their daily routine. Learn to cast traditional nets, understand tide patterns, and hear stories of the sea. Whatever you catch, you'll clean and cook with the family using centuries-old recipes. End with a tour of the legendary Uru boat yard where ships are built without blueprints. This isn't tourism—it's stepping into their world.",
      included: ["Boat ride", "Fishing equipment", "Traditional breakfast", "Boat yard tour", "Local guide", "Safety equipment"],
      whatToBring: ["Warm clothes for early morning", "Sunscreen", "Motion sickness medicine if needed", "Respect for tradition"]
    },
    {
      id: "6",
      title: "Haunted Forest Story Walk",
      category: "Thrill",
      emotion: "Horror Tales",
      price: "₹800",
      duration: "4 hours",
      time: "7:00 PM - 11:15 PM",
      groupSize: "4-20",
      minAge: 16,
      location: "Kakkayam/Thusharagiri",
      image: hauntedForest,
      description: "Kerala folklore horror experience with professional theater actors and ambient sounds",
      highlights: ["Yakshi stories", "Theyyam-inspired finale", "Campfire debrief", "Transport included"],
      availableTimes: ["7:00 PM", "7:30 PM"],
      timeline: [
        { time: "7:00 PM", activity: "Pickup from Calicut city", icon: "🚐" },
        { time: "7:45 PM", activity: "Arrive at forest entrance", icon: "🌲" },
        { time: "8:00 PM", activity: "Begin guided horror walk", icon: "👻" },
        { time: "9:15 PM", activity: "Yakshi encounter in the dark", icon: "😱" },
        { time: "10:00 PM", activity: "Theyyam-inspired grand finale", icon: "🎭" },
        { time: "10:30 PM", activity: "Campfire debrief & return journey", icon: "🔥" }
      ],
      fullDescription: "As darkness falls, enter a forest where Kerala's ancient folklore comes alive. Professional theater actors embody Yakshi, Churel, and other spirits from local legends. Ambient soundscapes and strategic lighting create genuine fear. The Theyyam-inspired finale will leave you breathless. End with a campfire debrief where you'll learn the real stories behind the scares. Transport from Calicut included.",
      included: ["Return transport", "Professional actors", "Safety escorts", "Campfire snacks", "Emergency support"],
      whatToBring: ["Closed shoes", "Phone on silent", "Brave friends", "No children under 16"]
    },
    {
      id: "7",
      title: "Mystery Island Escape",
      category: "Thrill",
      emotion: "Escape Routes",
      price: "₹1,500",
      duration: "6 hours",
      time: "4:00 PM - 10:00 PM",
      groupSize: "4-16",
      minAge: 14,
      location: "Secret Island",
      image: mysteryIsland,
      description: "Solve puzzles on boat journey to mystery island, earn premium seafood dinner through challenges",
      highlights: ["Destination unknown", "Decode coordinates", "Build emergency shelter", "Cinematic reveal"],
      availableTimes: ["4:00 PM"],
      timeline: [
        { time: "4:00 PM", activity: "Board mystery boat from secret dock", icon: "⛵" },
        { time: "4:30 PM", activity: "Solve cryptic navigation puzzles", icon: "🧩" },
        { time: "5:30 PM", activity: "Island reveal & arrival", icon: "🏝️" },
        { time: "6:00 PM", activity: "Survival challenges begin", icon: "🔥" },
        { time: "8:00 PM", activity: "Premium seafood feast earned", icon: "🦞" },
        { time: "9:30 PM", activity: "Return boat journey under stars", icon: "⭐" }
      ],
      fullDescription: "You'll board a boat without knowing your destination. Solve cryptic puzzles during the journey to decode coordinates. Upon arrival at a secret island, complete survival challenges: build an emergency shelter, start a fire without matches, and navigate by stars. Success earns you a premium seafood feast prepared by local chefs. Fail, and you eat basic rations (just kidding—everyone eats well). The island reveal is cinematic.",
      included: ["Boat transport", "Professional guide", "Challenge equipment", "Premium seafood dinner", "Safety gear", "Drinking water"],
      whatToBring: ["Adventure mindset", "Swimming clothes", "Flashlight", "Team spirit", "Problem-solving skills"]
    }
  ];

  const experience = experiences.find(exp => exp.id === id);

  if (!experience) {
    return <Navigate to="/explore" replace />;
  }

 const handleBooking = () => {
  // stricter emptiness checks:
  // - selectedDate must exist
  // - selectedTime/name/phone must be non-empty strings
  // - guests is allowed to be 0; check for null/empty string instead
  const missing =
    !selectedDate ||
    !selectedTime ||
    !name ||
    !phone ||
    guests === null ||
    guests === undefined ||
    guests === "";

  if (missing) {
    toast.error("Please fill in all booking details");
    return;
  }

  // build a readable message (use \n, then encode whole message)
  const dateStr =
    selectedDate instanceof Date
      ? selectedDate.toLocaleDateString()
      : String(selectedDate);

  const rawMessage = `Hi! I'd like to book ${experience?.title || "your experience"}\n\nDate: ${dateStr}\nTime: ${selectedTime}\nGuests: ${guests}\nName: ${name}\nPhone: ${phone}`;

  const encoded = encodeURIComponent(rawMessage);

  // sanitize phone: remove non-digits. WhatsApp expects country code, e.g. 91XXXXXXXXXX
  const sanitizedPhone = phone.replace(/\D/g, "");
  // const waNumber = sanitizedPhone.startsWith("91") ? sanitizedPhone : `91${sanitizedPhone}`;

  const url = `https://wa.me/917907536782?text=${encoded}`;
  // for debugging uncomment:
  // console.log({ rawMessage, encoded, url });

  window.open(url, "_blank");
};


  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24">
        {/* Back Button */}
        <div className="container mx-auto px-4 lg:px-12 py-6">
          <Link to="/explore">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Explore
            </Button>
          </Link>
        </div>

        {/* Hero Image */}
        <motion.div 
          className="relative w-full h-[70vh] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={experience.image} 
            alt={experience.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          {/* Floating Info on Image */}
          <div className="absolute bottom-12 left-0 right-0 container mx-auto px-4 lg:px-12">
            <Badge className="mb-4 bg-black/80 text-accent border border-accent/50 px-6 py-2 text-sm uppercase tracking-widest">
              {experience.category}
            </Badge>
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-4 text-white leading-none">
              {experience.title}
            </h1>
            <p className="text-2xl text-muted-foreground uppercase tracking-wide">
              {experience.emotion}
            </p>
          </div>
        </motion.div>

        {/* Abstract Content Layout */}
        <div className="container mx-auto px-4 lg:px-12 py-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Experience Details */}
            <motion.div 
              className="lg:col-span-2 space-y-8 lg:space-y-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="bg-card border-2 border-border p-4 md:p-6 rounded-lg">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-accent mb-2 md:mb-3" />
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1 md:mb-2">Duration</div>
                  <div className="text-sm md:text-lg font-bold break-words">{experience.duration}</div>
                </div>
                <div className="bg-card border-2 border-border p-4 md:p-6 rounded-lg">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-accent mb-2 md:mb-3" />
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1 md:mb-2">Location</div>
                  <div className="text-sm md:text-lg font-bold break-words">{experience.location}</div>
                </div>
                <div className="bg-card border-2 border-border p-4 md:p-6 rounded-lg">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-accent mb-2 md:mb-3" />
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1 md:mb-2">Group Size</div>
                  <div className="text-sm md:text-lg font-bold break-words">{experience.groupSize}</div>
                </div>
                <div className="bg-card border-2 border-border p-4 md:p-6 rounded-lg">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-accent mb-2 md:mb-3" />
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1 md:mb-2">Min Age</div>
                  <div className="text-sm md:text-lg font-bold break-words">{experience.minAge}+</div>
                </div>
              </div>

              {/* Mobile & Tablet Booking Widget (before "The Experience" heading) */}
              <div className="lg:hidden">
                  <motion.div 
                    className={`sticky top-20 z-40 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
                      isBookingExpanded 
                        ? "bg-card border-2 border-border" 
                        : "bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))]"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {/* Minimized View */}
                    <button 
                      onClick={() => setIsBookingExpanded(!isBookingExpanded)}
                      className={`w-full p-4 flex items-center justify-between transition-colors ${
                        isBookingExpanded ? "hover:bg-accent/5" : ""
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div>
                          <div className={`text-xs uppercase tracking-wide ${
                            isBookingExpanded ? "text-muted-foreground" : "text-black/70"
                          }`}>From</div>
                          <div className={`text-2xl font-bold ${
                            isBookingExpanded 
                              ? "bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] bg-clip-text text-transparent" 
                              : "text-black"
                          }`}>
                            {experience.price}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-semibold ${
                          isBookingExpanded ? "text-foreground" : "text-black"
                        }`}>Book via WhatsApp</span>
                        {isBookingExpanded ? (
                          <ChevronUp className="w-5 h-5 text-accent" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-black" />
                        )}
                      </div>
                    </button>

                    {/* Expanded Form */}
                    <AnimatePresence>
                      {isBookingExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t-2 border-border"
                        >
                          <div className="p-6 space-y-4 bg-background">
                            <div>
                              <Label htmlFor="name-mobile" className="text-sm uppercase tracking-wide mb-2 block">Your Name</Label>
                              <Input 
                                id="name-mobile"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                                className="bg-card border-2"
                              />
                            </div>

                            <div>
                              <Label htmlFor="phone-mobile" className="text-sm uppercase tracking-wide mb-2 block">Phone Number</Label>
                              <Input 
                                id="phone-mobile"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="+91 XXXXXXXXXX"
                                className="bg-card border-2"
                              />
                            </div>

                            <div>
                              <Label htmlFor="guests-mobile" className="text-sm uppercase tracking-wide mb-2 block">Number of Guests</Label>
                              <Input 
                                id="guests-mobile"
                                type="number"
                                min={1}
                                max={20}
                                value={guests}
                                onChange={(e) => setGuests(e.target.value)}
                                className="bg-card border-2"
                              />
                            </div>

                            <div>
                              <Label className="text-sm uppercase tracking-wide mb-3 block flex items-center gap-2">
                                <CalendarIcon className="w-4 h-4" />
                                Select Date
                              </Label>
                              <Calendar
                                mode="single"
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                                disabled={(date) => date < new Date()}
                                className="rounded-md border-2 border-border bg-card w-full"
                              />
                            </div>

                            <div>
                              <Label className="text-sm uppercase tracking-wide mb-3 block">Available Times</Label>
                              <div className="space-y-2">
                                {experience.availableTimes.map((time) => (
                                  <Button
                                    key={time}
                                    variant={selectedTime === time ? "default" : "outline"}
                                    className={`w-full justify-start ${
                                      selectedTime === time 
                                        ? "bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black" 
                                        : "border-2"
                                    }`}
                                    onClick={() => setSelectedTime(time)}
                                  >
                                    {time}
                                  </Button>
                                ))}
                              </div>
                            </div>

                            <Button 
                              size="lg"
                              className="w-full bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold text-lg h-14 hover:opacity-90"
                              onClick={handleBooking}
                            >
                              Book via WhatsApp
                            </Button>

                            <p className="text-xs text-muted-foreground text-center">
                              You'll be redirected to WhatsApp to complete your booking
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

              {/* Full Description */}
              <div>
                <h2 className="text-4xl font-display font-bold mb-6">The Experience</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {experience.fullDescription}
                </p>
              </div>

              {/* What's Included */}
              <div className="bg-card/50 border-2 border-border p-8 rounded-lg">
                <h3 className="text-2xl font-display font-bold mb-6">What's Included</h3>
                <ul className="space-y-3">
                  {experience.included.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-accent text-xl">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to Bring */}
              <div className="bg-card/50 border-2 border-border p-6 md:p-8 rounded-lg">
                <h3 className="text-xl md:text-2xl font-display font-bold mb-4 md:mb-6">What to Bring</h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {experience.whatToBring.map((item, idx) => (
                    <Badge key={idx} variant="outline" className="px-4 py-2 text-sm border-2">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-2xl font-display font-bold mb-6">Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {experience.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-accent/10 border border-accent/30 p-4 rounded-lg">
                      <span className="text-accent text-xl">★</span>
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Timeline */}
              <div>
                <h3 className="text-2xl font-display font-bold mb-6">Experience Timeline</h3>
                <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))]" />
                  
                  <div className="space-y-6">
                    {experience.timeline.map((step, idx) => (
                      <motion.div
                        key={idx}
                        className="relative flex gap-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        {/* Icon Circle */}
                        <div className="relative z-10 flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] flex items-center justify-center text-2xl shadow-lg shadow-accent/30">
                            {step.icon}
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 pb-2">
                          <div className="bg-card/80 border-2 border-border hover:border-accent/50 rounded-lg p-4 transition-all">
                            <div className="text-sm font-bold text-accent uppercase tracking-wide mb-1">
                              {step.time}
                            </div>
                            <div className="text-base text-foreground">
                              {step.activity}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Booking Card (Sticky) - Desktop Only */}
            <motion.div 
              className="hidden lg:block lg:col-span-1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="sticky top-24 bg-card border-2 border-border rounded-lg p-6 md:p-8 space-y-4 md:space-y-6 overflow-hidden">
                {/* Price */}
                <div className="border-b border-border pb-4 md:pb-6">
                  <div className="text-xs uppercase tracking-wide text-black mb-2">From</div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] bg-clip-text text-transparent">
                    {experience.price}
                  </div>
                  <div className="text-sm text-black mt-1">per person</div>
                </div>

                {/* Booking Form */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-sm uppercase tracking-wide mb-2 block">Your Name</Label>
                    <Input 
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="bg-background border-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm uppercase tracking-wide mb-2 block">Phone Number</Label>
                    <Input 
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 XXXXXXXXXX"
                      className="bg-background border-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="guests" className="text-sm uppercase tracking-wide mb-2 block">Number of Guests</Label>
                    <Input 
                      id="guests"
                      type="number"
                      min={1}
                      max={20}
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="bg-background border-2"
                    />
                  </div>

                  <div>
                    <Label className="text-sm uppercase tracking-wide mb-3 block flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4" />
                      Select Date
                    </Label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date()}
                      className="rounded-md border-2 border-border bg-background pointer-events-auto"
                    />
                  </div>

                  <div>
                    <Label className="text-sm uppercase tracking-wide mb-3 block">Available Times</Label>
                    <div className="space-y-2">
                      {experience.availableTimes.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          className={`w-full justify-start ${
                            selectedTime === time 
                              ? "bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black" 
                              : "border-2"
                          }`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Button 
                    size="lg"
                    className="w-full bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold text-lg h-14 hover:opacity-90"
                    onClick={handleBooking}
                  >
                    Book via WhatsApp
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    You'll be redirected to WhatsApp to complete your booking
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Terms and Policies Section */}
          <motion.div 
            className="max-w-7xl mx-auto px-4 lg:px-12 pb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <details className="group">
              <summary className="cursor-pointer text-xs text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
                <span>Terms & Policies</span>
                <span className="transform group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-xs text-muted-foreground space-y-2 pl-4">
                <p><strong>Cancellation Policy:</strong> Full refund if cancelled 48 hours before the activity. No refund of booking amount for cancellations within 48 hours.</p>
                <p><strong>Safety Requirements:</strong> All participants must follow safety guidelines provided by the host. BunkRoot and hosts reserve the right to refuse service to anyone who appears intoxicated or unfit to participate.</p>
                <p><strong>Age Restrictions:</strong> Some activities have minimum age requirements. Please check activity details before booking.</p>
                <p><strong>Weather Policy:</strong> In case of extreme weather conditions, activities may be rescheduled or cancelled with full refund.</p>
                <p><strong>Liability:</strong> Participants engage in activities at their own risk. BunkRoot and experience hosts are not liable for injuries or losses during the experience.</p>
              </div>
            </details>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ExperienceDetail;
