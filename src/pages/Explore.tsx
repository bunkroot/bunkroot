import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = ["Thrill", "Calm", "Culture", "Connection", "Strange"];
  
  const experiences = [
    {
      id: 1,
      title: "Midnight Motorcycle Ride",
      category: "Thrill",
      price: "₹2,500",
      duration: "3 hours",
      image: "https://images.unsplash.com/photo-1558981852-426c6c22a060?w=800",
    },
    {
      id: 2,
      title: "Silent Sunrise Yoga",
      category: "Calm",
      price: "₹1,200",
      duration: "2 hours",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
    },
    {
      id: 3,
      title: "Street Art Walking Tour",
      category: "Culture",
      price: "₹800",
      duration: "4 hours",
      image: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800",
    },
  ];

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
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
              EXPLORE
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Find your next escape. Or let us surprise you.
            </p>
            
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <Input 
                placeholder="Search experiences..." 
                className="flex-1 h-14 text-lg bg-card"
              />
              <Input 
                placeholder="Location" 
                className="md:w-64 h-14 text-lg bg-card"
              />
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold h-14"
              >
                Search
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="h-14"
              >
                Surprise Me 🎲
              </Button>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`cursor-pointer px-6 py-2 text-sm uppercase tracking-wide transition-all ${
                    selectedCategory === category 
                      ? "bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black" 
                      : "hover:border-accent"
                  }`}
                  onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
            
            {/* Results */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="overflow-hidden bg-card border-2 border-border hover:border-accent transition-all cursor-pointer group">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={experience.image} 
                        alt={experience.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className="absolute top-4 left-4 bg-black/80 text-accent">
                        {experience.category}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{experience.title}</h3>
                      <div className="flex justify-between items-center text-muted-foreground mb-4">
                        <span>{experience.duration}</span>
                        <span className="text-accent font-bold">{experience.price}</span>
                      </div>
                      <Button 
                        className="w-full bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold"
                      >
                        View Details
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Explore;
