import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experiencesData";

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
    });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
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
                BUNK<br />
                <span className="bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] bg-clip-text text-transparent">Routine</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">Quick everyday escapes. No planning stress. Just go.</p>
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
              {categories.map(category => (
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
            
            {/* Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredExperiences.map((experience, index) => (
                <motion.div 
                  key={experience.id} 
                  initial={{ opacity: 0, y: 30 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/experience/${experience.id}`}>
                    <div className="group relative overflow-hidden rounded-lg border-2 border-border hover:border-accent transition-all duration-300 cursor-pointer">
                      {/* Image */}
                      <div className="relative h-80 overflow-hidden">
                        <img 
                          src={experience.image} 
                          alt={experience.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        
                        {/* Category Badge with Emoji */}
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
                            <Button 
                              size="sm" 
                              className="bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {filteredExperiences.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground mb-4">No experiences found</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory(null);
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Explore;
