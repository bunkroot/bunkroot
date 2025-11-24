import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Import experience images
import beachMeditation from "@/assets/experience-beach-meditation.jpg";
import truthRoom from "@/assets/experience-truth-room.jpg";
import treasureHunt from "@/assets/experience-treasure-hunt.jpg";
import kayak from "@/assets/experience-kayak.jpg";
import fishing from "@/assets/experience-fishing.jpg";
import hauntedForest from "@/assets/experience-haunted-forest.jpg";
import mysteryIsland from "@/assets/experience-mystery-island.jpg";

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = ["Thrill", "Calm", "Culture", "Connection"];
  
  const experiences = [
    {
      id: 1,
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
      highlights: ["Golden hour photography", "First light energy", "Community feeling"]
    },
    {
      id: 2,
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
      highlights: ["Structured vulnerability exercises", "Burn one written fear", "Post-session WhatsApp group"]
    },
    {
      id: 3,
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
      highlights: ["Team competition", "Malayalam clues", "Heritage passport", "Halwa tasting"]
    },
    {
      id: 4,
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
      highlights: ["Professional photos included", "Float therapy", "Sunset watching"]
    },
    {
      id: 5,
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
      highlights: ["Dawn at sea", "Traditional fish-cleaning", "Breakfast you caught", "Uru boat yard visit"]
    },
    {
      id: 6,
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
      highlights: ["Yakshi stories", "Theyyam-inspired finale", "Campfire debrief", "Transport included"]
    },
    {
      id: 7,
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
      highlights: ["Destination unknown", "Decode coordinates", "Build emergency shelter", "Cinematic reveal"]
    }
  ];

  const filteredExperiences = selectedCategory
    ? experiences.filter(exp => exp.category === selectedCategory)
    : experiences;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Hero Section */}
            <div className="mb-16">
              <h1 className="text-7xl md:text-9xl font-display font-bold mb-6 leading-none">
                ESCAPE<br />
                <span className="bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] bg-clip-text text-transparent">
                  CALICUT
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                7 curated escapes. Real locals. Authentic stories. Break the mall-beach-movie loop.
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-12">
              <Input 
                placeholder="Search experiences..." 
                className="flex-1 h-14 text-lg bg-card border-2 border-border focus:border-accent"
              />
              <Input 
                placeholder="Calicut" 
                className="md:w-64 h-14 text-lg bg-card border-2 border-border focus:border-accent"
              />
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold h-14 hover:opacity-90"
              >
                Search
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="h-14 border-2 hover:bg-accent/20"
              >
                Surprise Me 🎲
              </Button>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-16">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`cursor-pointer px-8 py-3 text-sm uppercase tracking-widest transition-all border-2 ${
                    selectedCategory === category 
                      ? "bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black border-transparent" 
                      : "hover:border-accent hover:bg-accent/10"
                  }`}
                  onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
            
            {/* Abstract Grid Layout */}
            <div className="space-y-8">
              {filteredExperiences.map((experience, index) => {
                // Alternate between different abstract layouts
                const isOdd = index % 2 === 0;
                const layoutVariant = index % 3;
                
                return (
                  <motion.div
                    key={experience.id}
                    initial={{ opacity: 0, x: isOdd ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative ${
                      layoutVariant === 0 ? 'grid grid-cols-1 lg:grid-cols-5 gap-6' :
                      layoutVariant === 1 ? 'grid grid-cols-1 lg:grid-cols-3 gap-8' :
                      'flex flex-col lg:flex-row gap-6'
                    }`}
                  >
                    {/* Image Section with Abstract Shape */}
                    <motion.div 
                      className={`relative overflow-hidden group ${
                        layoutVariant === 0 ? 'lg:col-span-3' :
                        layoutVariant === 1 ? 'lg:col-span-2' :
                        'lg:w-2/3'
                      }`}
                      whileHover={{ scale: 0.98 }}
                      style={{
                        clipPath: layoutVariant === 0 ? 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' :
                                  layoutVariant === 1 ? 'polygon(5% 0, 100% 0, 100% 100%, 0 100%)' :
                                  'none'
                      }}
                    >
                      <div className="relative h-[400px] lg:h-[500px]">
                        <img 
                          src={experience.image} 
                          alt={experience.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                        
                        {/* Category Badge */}
                        <Badge className="absolute top-6 left-6 bg-black/80 text-accent border border-accent/50 px-6 py-2 text-sm uppercase tracking-widest">
                          {experience.category}
                        </Badge>
                        
                        {/* Emotion Tag */}
                        <div className="absolute bottom-6 left-6 text-muted-foreground text-sm uppercase tracking-wide">
                          {experience.emotion}
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Content Section */}
                    <div className={`flex flex-col justify-between bg-card/50 backdrop-blur-sm border-2 border-border p-8 ${
                      layoutVariant === 0 ? 'lg:col-span-2' :
                      layoutVariant === 1 ? 'lg:col-span-1' :
                      'lg:w-1/3'
                    }`}>
                      <div>
                        <h2 className="text-4xl font-display font-bold mb-4 leading-tight">
                          {experience.title}
                        </h2>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {experience.description}
                        </p>
                        
                        {/* Details Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                          <div>
                            <div className="text-muted-foreground uppercase tracking-wide text-xs mb-1">Duration</div>
                            <div className="font-semibold">{experience.duration}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground uppercase tracking-wide text-xs mb-1">Time</div>
                            <div className="font-semibold">{experience.time}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground uppercase tracking-wide text-xs mb-1">Group Size</div>
                            <div className="font-semibold">{experience.groupSize}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground uppercase tracking-wide text-xs mb-1">Location</div>
                            <div className="font-semibold">{experience.location}</div>
                          </div>
                        </div>
                        
                        {/* Highlights */}
                        <div className="mb-6">
                          <div className="text-xs uppercase tracking-wide text-muted-foreground mb-3">What Makes It Special</div>
                          <div className="flex flex-wrap gap-2">
                            {experience.highlights.map((highlight, idx) => (
                              <span 
                                key={idx}
                                className="text-xs px-3 py-1 bg-accent/10 text-accent border border-accent/30 rounded-full"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Price and CTA */}
                      <div className="flex items-center justify-between pt-6 border-t border-border">
                        <div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">From</div>
                          <div className="text-3xl font-bold bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] bg-clip-text text-transparent">
                            {experience.price}
                          </div>
                        </div>
                        <Button 
                          size="lg"
                          className="bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold hover:opacity-90"
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Explore;
