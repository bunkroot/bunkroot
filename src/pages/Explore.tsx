import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
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
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [vibeBanner, setVibeBanner] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const categories = ["Adventure", "Nature", "Skill-Learning", "Thrill", "Mindfulness", "Sports", "Social", "Offbeat"];

  // Map vibe result categories to display categories
  const vibeToCategory: Record<string, string> = {
    adventure: "Adventure",
    nature: "Nature",
    "skill-learning": "Skill-Learning",
    thrill: "Thrill",
    mindfulness: "Mindfulness",
    sports: "Sports",
    social: "Social",
    offbeat: "Offbeat"
  };

  // Read category or vibe from URL params on mount
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      // Handle multi-word categories like skill-learning
      const formattedCategory = categoryParam.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('-');
      
      if (categories.includes(formattedCategory)) {
        setSelectedCategory(formattedCategory);
        // Check if it came from quiz
        const mappedCategory = vibeToCategory[categoryParam.toLowerCase()];
        if (mappedCategory) {
          setVibeBanner(categoryParam);
        }
      }
    }
  }, [searchParams]);
  const experiences = [{
    id: 1,
    title: "Beach Meditation at Dawn",
    category: "Mindfulness",
    host: "Medlife",
    price: "₹350",
    duration: "2 hours",
    time: "6:00 AM - 8:00 AM",
    groupSize: "12-15 people",
    location: "Kappad Beach",
    image: beachMeditation,
    description: "Guided meditation with sound of waves, breathing exercises, and traditional Kerala breakfast",
    highlights: ["Golden hour photography", "First light energy", "Community feeling"]
  }, {
    id: 2,
    title: "Candle-light Truth Room",
    category: "Social",
    host: "Truth Room",
    price: "₹500",
    duration: "2.5 hours",
    time: "7:00 PM - 9:30 PM",
    groupSize: "8-10 people",
    location: "Heritage Homestay",
    image: truthRoom,
    description: "Radical honesty in a safe space, facilitated by trained psychology professional",
    highlights: ["Structured vulnerability exercises", "Burn one written fear", "Post-session WhatsApp group"]
  }, {
    id: 3,
    title: "Treasure Hunt in Old City",
    category: "Adventure",
    host: "Heritage Gala",
    price: "₹600",
    duration: "2.5 hours",
    time: "4:00 PM - 6:30 PM",
    groupSize: "20-25 people",
    location: "Mananchira to Mishkal Mosque",
    image: treasureHunt,
    description: "Cryptic riddles through historic Calicut streets with real locals telling real stories",
    highlights: ["Team competition", "Malayalam clues", "Heritage passport", "Halwa tasting"]
  }, {
    id: 4,
    title: "Kayak & Chill",
    category: "Adventure",
    host: "Riverdale Kayak",
    price: "₹800",
    duration: "3 hours",
    time: "4:30 PM - 7:30 PM",
    groupSize: "10-12 people",
    location: "Kadalundi Estuary",
    image: kayak,
    description: "Sunset kayaking through mangroves with float therapy and bonfire on isolated sandbar",
    highlights: ["Professional photos included", "Float therapy", "Sunset watching"]
  }, {
    id: 5,
    title: "Fishing with Locals at Sea",
    category: "Nature",
    host: "Sea Nets",
    price: "₹900",
    duration: "6 hours",
    time: "4:15 AM - 10:30 AM",
    groupSize: "6-8 people",
    location: "Beypore",
    image: fishing,
    description: "Real fishing trip with multigenerational fishermen, learn net-casting, cook your catch",
    highlights: ["Dawn at sea", "Traditional fish-cleaning", "Breakfast you caught", "Uru boat yard visit"]
  }, {
    id: 6,
    title: "Haunted Forest Story Walk",
    category: "Thrill",
    host: "Horror Tales",
    price: "₹800",
    duration: "4 hours",
    time: "7:00 PM - 11:15 PM",
    groupSize: "15-20 people",
    location: "Kakkayam/Thusharagiri",
    image: hauntedForest,
    description: "Kerala folklore horror experience with professional theater actors and ambient sounds",
    highlights: ["Yakshi stories", "Theyyam-inspired finale", "Campfire debrief", "Transport included"]
  }, {
    id: 7,
    title: "Mystery Island Escape",
    category: "Offbeat",
    host: "Escape Routes",
    price: "₹1,500",
    duration: "6 hours",
    time: "4:00 PM - 10:00 PM",
    groupSize: "12-16 people",
    location: "Secret Island",
    image: mysteryIsland,
    description: "Solve puzzles on boat journey to mystery island, earn premium seafood dinner through challenges",
    highlights: ["Destination unknown", "Decode coordinates", "Build emergency shelter", "Cinematic reveal"]
  }];
  const comingSoonIds = [2, 5, 3]; // Candle-light Truth Room, Fishing with Locals, Treasure Hunt

  const filteredExperiences = experiences
    .filter(exp => {
      const matchesCategory = selectedCategory ? exp.category === selectedCategory : true;
      const matchesSearch = searchQuery.trim() 
        ? exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          exp.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          exp.host.toLowerCase().includes(searchQuery.toLowerCase()) ||
          exp.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          exp.description.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      const aComingSoon = comingSoonIds.includes(a.id);
      const bComingSoon = comingSoonIds.includes(b.id);
      if (aComingSoon && !bComingSoon) return 1;
      if (!aComingSoon && bComingSoon) return -1;
      return 0;
    });

  return <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            {/* Vibe Banner (from Quiz) */}
            {vibeBanner && (
              <div className="mb-6 p-4 bg-gradient-to-r from-[hsl(var(--neon-start))]/10 to-[hsl(var(--neon-end))]/10 border border-[hsl(var(--neon-start))]/30 rounded-xl">
                <p className="text-lg font-semibold">
                  🎯 Showing <span className="text-[hsl(var(--neon-start))]">{selectedCategory}</span> experiences based on your quiz result!
                </p>
              </div>
            )}

            {/* Hero Section */}
            <div className="mb-12 md:mb-16">
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold mb-4 md:mb-6 leading-none break-words">
                ESCAPE<br />
                <span className="bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] bg-clip-text text-transparent">Routine</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">Real locals. Authentic stories. Break the mall-beach-movie loop.</p>
            </div>
            
            {/* Search Bar */}
            <div className="flex gap-3 md:gap-4 mb-8 md:mb-12">
              <Input 
                placeholder="Search experiences..." 
                className="flex-1 h-14 text-lg bg-card border-2 border-border focus:border-accent" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold h-14 hover:opacity-90"
              >
                Search
              </Button>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-16">
              {categories.map(category => <Badge key={category} variant={selectedCategory === category ? "default" : "outline"} className={`cursor-pointer px-8 py-3 text-sm uppercase tracking-widest transition-all border-2 ${selectedCategory === category ? "bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black border-transparent" : "hover:border-accent hover:bg-accent/10"}`} onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}>
                  {category}
                </Badge>)}
            </div>
            
            {/* Simplified Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredExperiences.map((experience, index) => {
              const isComingSoon = comingSoonIds.includes(experience.id);
              return <motion.div key={experience.id} initial={{
                opacity: 0,
                y: 30
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }}>
                    {isComingSoon ? <div className="group relative overflow-hidden rounded-lg border-2 border-border opacity-75 cursor-not-allowed">
                        {/* Image */}
                        <div className="relative h-80 overflow-hidden">
                          <img src={experience.image} alt={experience.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                          
                          {/* Category Badge */}
                          <Badge className="absolute top-4 left-4 bg-black/80 text-accent border border-accent/50 px-4 py-1 text-xs uppercase tracking-widest">
                            {experience.category}
                          </Badge>

                          {/* Title and Coming Soon Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-2xl font-display font-bold mb-1 text-white leading-tight">
                              {experience.title}
                            </h3>
                            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                              {experience.host}
                            </p>
                            <div className="flex items-end justify-between">
                              <div>
                                <div className="text-lg font-bold text-muted-foreground">
                                  Coming Soon
                                </div>
                              </div>
                              <Button size="sm" className="bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold" onClick={() => {
                          const message = encodeURIComponent(`Hey! I'm interested in "${experience.title}" experience. Please notify me when it becomes available.`);
                          window.open(`https://wa.me/917907536782?text=${message}`, '_blank');
                        }}>
                                Notify Me
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div> : <Link to={`/experience/${experience.id}`}>
                        <div className="group relative overflow-hidden rounded-lg border-2 border-border hover:border-accent transition-all duration-300 cursor-pointer">
                          {/* Image */}
                          <div className="relative h-80 overflow-hidden">
                            <img src={experience.image} alt={experience.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                            
                            {/* Category Badge */}
                            <Badge className="absolute top-4 left-4 bg-black/80 text-accent border border-accent/50 px-4 py-1 text-xs uppercase tracking-widest">
                              {experience.category}
                            </Badge>

                            {/* Title and Price Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                              <h3 className="text-2xl font-display font-bold mb-1 text-white leading-tight">
                                {experience.title}
                              </h3>
                              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                                {experience.host}
                              </p>
                              <div className="flex items-end justify-between">
                                <div>
                                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">From</div>
                                  <div className="text-2xl font-bold bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] bg-clip-text text-transparent">
                                    {experience.price}
                                  </div>
                                </div>
                                <Button size="sm" className="bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                  View Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>}
                  </motion.div>;
            })}
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>;
};
export default Explore;