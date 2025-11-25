import { useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, MapPin, Calendar as CalendarIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

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
      emotion: "Peace + Reset",
      price: "₹350",
      duration: "2 hours",
      time: "6:00 AM - 8:00 AM",
      groupSize: "12-15 people",
      location: "Kappad Beach",
      image: beachMeditation,
      description: "Guided meditation with sound of waves, breathing exercises, and traditional Kerala breakfast",
      highlights: ["Golden hour photography", "First light energy", "Community feeling"],
      availableTimes: ["6:00 AM", "6:30 AM"],
      spotsRemaining: 8,
      fullDescription: "Start your day with the sacred energy of dawn at Kappad Beach. Our experienced meditation guide will lead you through breathing exercises synchronized with the ocean's rhythm, followed by guided visualization and group meditation. As the sun rises, we'll practice gratitude journaling and close with a traditional Kerala breakfast featuring fresh coconut, banana, and homemade snacks.",
      included: ["Professional meditation guide", "Yoga mats provided", "Traditional breakfast", "Photography session", "Beach access"],
      whatToBring: ["Comfortable clothes", "Water bottle", "Towel", "Open mind"]
    },
    {
      id: "2",
      title: "Candle-light Truth Room",
      category: "Connection",
      emotion: "Connection + Vulnerability",
      price: "₹500",
      duration: "2.5 hours",
      time: "7:00 PM - 9:30 PM",
      groupSize: "8-10 people",
      location: "Heritage Homestay",
      image: truthRoom,
      description: "Radical honesty in a safe space, facilitated by trained psychology professional",
      highlights: ["Structured vulnerability exercises", "Burn one written fear", "Post-session WhatsApp group"],
      availableTimes: ["7:00 PM", "7:30 PM"],
      spotsRemaining: 5,
      fullDescription: "Enter a judgment-free zone where vulnerability becomes strength. In the warm glow of candlelight, our trained psychology facilitator guides you through structured exercises designed to create authentic connections. Share fears, burn limiting beliefs in a ceremonial fire, and leave with genuine friendships. This isn't therapy—it's radical honesty with strangers who become friends.",
      included: ["Professional facilitator", "Journaling materials", "Herbal tea & snacks", "Post-session support group", "Private venue"],
      whatToBring: ["One written fear to burn", "Openness", "Respect for others"]
    },
    {
      id: "3",
      title: "Treasure Hunt in Old City",
      category: "Culture",
      emotion: "Curiosity + Competition",
      price: "₹600",
      duration: "2.5 hours",
      time: "4:00 PM - 6:30 PM",
      groupSize: "20-25 people",
      location: "Mananchira to Mishkal Mosque",
      image: treasureHunt,
      description: "Cryptic riddles through historic Calicut streets with real locals telling real stories",
      highlights: ["Team competition", "Malayalam clues", "Heritage passport", "Halwa tasting"],
      availableTimes: ["4:00 PM", "4:30 PM"],
      spotsRemaining: 12,
      fullDescription: "Decode Calicut's secrets through cryptic Malayalam riddles as you race through centuries-old streets. Teams of 4-5 navigate from Mananchira to Mishkal Mosque, meeting local shopkeepers, artisans, and historians who share stories never found in guidebooks. Win by speed and cultural knowledge. Grand prize: a heritage hamper of Calicut specialties.",
      included: ["Game master & guides", "Heritage passport", "Halwa tasting", "Team prizes", "Local storytellers"],
      whatToBring: ["Comfortable walking shoes", "Phone for photos", "Team spirit", "Basic Malayalam helps"]
    },
    {
      id: "4",
      title: "Kayak & Chill",
      category: "Thrill",
      emotion: "Adventure + Peace",
      price: "₹800",
      duration: "3 hours",
      time: "4:30 PM - 7:30 PM",
      groupSize: "10-12 people",
      location: "Kadalundi Estuary",
      image: kayak,
      description: "Sunset kayaking through mangroves with float therapy and bonfire on isolated sandbar",
      highlights: ["Professional photos included", "Float therapy", "Sunset watching"],
      availableTimes: ["4:30 PM", "5:00 PM"],
      spotsRemaining: 6,
      fullDescription: "Paddle through emerald mangroves as golden hour transforms the estuary into liquid gold. After exploring hidden channels, we anchor at a private sandbar for float therapy—lie back and let the salt water hold you as the sky turns pink and orange. End with a bonfire, snacks, and conversations under stars. Professional photographer captures the magic.",
      included: ["Kayak & safety equipment", "Life jackets", "Professional photos", "Bonfire setup", "Snacks & beverages", "Waterproof bags"],
      whatToBring: ["Swimwear", "Change of clothes", "Sunscreen", "Waterproof phone case"]
    },
    {
      id: "5",
      title: "Fishing with Locals at Sea",
      category: "Culture",
      emotion: "Authenticity + Culture",
      price: "₹900",
      duration: "6 hours",
      time: "4:15 AM - 10:30 AM",
      groupSize: "6-8 people",
      location: "Beypore",
      image: fishing,
      description: "Real fishing trip with multigenerational fishermen, learn net-casting, cook your catch",
      highlights: ["Dawn at sea", "Traditional fish-cleaning", "Breakfast you caught", "Uru boat yard visit"],
      availableTimes: ["4:15 AM"],
      spotsRemaining: 4,
      fullDescription: "Join three generations of Beypore fishermen for their daily routine. Learn to cast traditional nets, understand tide patterns, and hear stories of the sea. Whatever you catch, you'll clean and cook with the family using centuries-old recipes. End with a tour of the legendary Uru boat yard where ships are built without blueprints. This isn't tourism—it's stepping into their world.",
      included: ["Boat ride", "Fishing equipment", "Traditional breakfast", "Boat yard tour", "Local guide", "Safety equipment"],
      whatToBring: ["Warm clothes for early morning", "Sunscreen", "Motion sickness medicine if needed", "Respect for tradition"]
    },
    {
      id: "6",
      title: "Haunted Forest Story Walk",
      category: "Thrill",
      emotion: "Fear + Thrill",
      price: "₹800",
      duration: "4 hours",
      time: "7:00 PM - 11:15 PM",
      groupSize: "15-20 people",
      location: "Kakkayam/Thusharagiri",
      image: hauntedForest,
      description: "Kerala folklore horror experience with professional theater actors and ambient sounds",
      highlights: ["Yakshi stories", "Theyyam-inspired finale", "Campfire debrief", "Transport included"],
      availableTimes: ["7:00 PM"],
      spotsRemaining: 10,
      fullDescription: "As darkness falls, enter a forest where Kerala's ancient folklore comes alive. Professional theater actors embody Yakshi, Churel, and other spirits from local legends. Ambient soundscapes and strategic lighting create genuine fear. The Theyyam-inspired finale will leave you breathless. End with a campfire debrief where you'll learn the real stories behind the scares. Transport from Calicut included.",
      included: ["Return transport", "Professional actors", "Safety escorts", "Campfire snacks", "Emergency support"],
      whatToBring: ["Closed shoes", "Phone on silent", "Brave friends", "No children under 16"]
    },
    {
      id: "7",
      title: "Mystery Island Escape",
      category: "Thrill",
      emotion: "Thrill + Wonder",
      price: "₹1,500",
      duration: "6 hours",
      time: "4:00 PM - 10:00 PM",
      groupSize: "12-16 people",
      location: "Secret Island",
      image: mysteryIsland,
      description: "Solve puzzles on boat journey to mystery island, earn premium seafood dinner through challenges",
      highlights: ["Destination unknown", "Decode coordinates", "Build emergency shelter", "Cinematic reveal"],
      availableTimes: ["4:00 PM"],
      spotsRemaining: 7,
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
    if (!selectedDate || !selectedTime || !name || !phone || !guests) {
      toast.error("Please fill in all booking details");
      return;
    }

    const message = `Hi! I'd like to book ${experience.title}%0A%0ADate: ${selectedDate.toLocaleDateString()}%0ATime: ${selectedTime}%0AGuests: ${guests}%0AName: ${name}%0APhone: ${phone}`;
    window.open(`https://wa.me/917907536782?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-6">
          <Link to="/explore">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Explore
            </Button>
          </Link>
        </div>

        {/* Torn Paper Hero Image */}
        <motion.div 
          className="relative w-full h-[70vh] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 92%, 95% 89%, 90% 93%, 85% 88%, 80% 92%, 75% 89%, 70% 93%, 65% 88%, 60% 92%, 55% 89%, 50% 93%, 45% 88%, 40% 92%, 35% 89%, 30% 93%, 25% 88%, 20% 92%, 15% 89%, 10% 93%, 5% 88%, 0 92%)"
          }}
        >
          <img 
            src={experience.image} 
            alt={experience.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          {/* Floating Info on Image */}
          <div className="absolute bottom-12 left-0 right-0 container mx-auto px-4">
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
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Experience Details */}
            <motion.div 
              className="lg:col-span-2 space-y-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-card border-2 border-border p-6 rounded-lg">
                  <Clock className="w-6 h-6 text-accent mb-3" />
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Duration</div>
                  <div className="text-lg font-bold">{experience.duration}</div>
                </div>
                <div className="bg-card border-2 border-border p-6 rounded-lg">
                  <Users className="w-6 h-6 text-accent mb-3" />
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Group Size</div>
                  <div className="text-lg font-bold">{experience.groupSize}</div>
                </div>
                <div className="bg-card border-2 border-border p-6 rounded-lg">
                  <MapPin className="w-6 h-6 text-accent mb-3" />
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Location</div>
                  <div className="text-lg font-bold">{experience.location}</div>
                </div>
                <div className="bg-card border-2 border-border p-6 rounded-lg">
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Spots Left</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] bg-clip-text text-transparent">
                    {experience.spotsRemaining}
                  </div>
                </div>
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
              <div className="bg-card/50 border-2 border-border p-8 rounded-lg">
                <h3 className="text-2xl font-display font-bold mb-6">What to Bring</h3>
                <div className="flex flex-wrap gap-3">
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
            </motion.div>

            {/* Right Column - Booking Card (Sticky) */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="sticky top-24 bg-card border-2 border-border rounded-lg p-8 space-y-6">
                {/* Price */}
                <div className="border-b border-border pb-6">
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">From</div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] bg-clip-text text-transparent">
                    {experience.price}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">per person</div>
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
                      min="1"
                      max={experience.spotsRemaining}
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ExperienceDetail;
