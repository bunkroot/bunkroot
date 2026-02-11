import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { experiences } from "@/data/experiencesData";
const Explore = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const categories = ["Wellness", "Water Activity", "Swimming", "Sports", "Riding", "Gaming", "Lounges", "Creative"];
  const vibeToCategory: Record<string, string> = {
    wellness: "Wellness",
    "water-activity": "Water Activity",
    swimming: "Swimming",
    sports: "Sports",
    riding: "Riding",
    gaming: "Gaming",
    lounges: "Lounges",
    creative: "Creative"
  };
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      const directMatch = categories.find(c => c.toLowerCase() === categoryParam.toLowerCase());
      if (directMatch) {
        setSelectedCategory(directMatch);
      } else {
        const mappedCategory = vibeToCategory[categoryParam.toLowerCase()];
        if (mappedCategory && categories.includes(mappedCategory)) {
          setSelectedCategory(mappedCategory);
        }
      }
    }
  }, [searchParams]);
  const filteredExperiences = experiences.filter(exp => {
    const matchesCategory = selectedCategory ? exp.category === selectedCategory : true;
    const matchesSearch = searchQuery.trim() ? exp.title.toLowerCase().includes(searchQuery.toLowerCase()) || exp.category.toLowerCase().includes(searchQuery.toLowerCase()) || exp.host.toLowerCase().includes(searchQuery.toLowerCase()) || exp.location.toLowerCase().includes(searchQuery.toLowerCase()) || exp.description.toLowerCase().includes(searchQuery.toLowerCase()) : true;
    return matchesCategory && matchesSearch;
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

            <div className="mb-8 md:mb-12">
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold mb-4 md:mb-6 leading-none break-words">
                <span className="text-foreground">BUNK </span>
                <span className="text-primary">Routine</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">Quick everyday escapes. No planning stress. Just go.</p>
            </div>
            
            <div className="flex gap-3 md:gap-4 mb-8 md:mb-12">
              <Input placeholder="Search experiences..." className="flex-1 h-14 text-lg bg-card border-2 border-border focus:border-accent" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
              <Button size="lg" className="bg-primary text-primary-foreground font-bold h-14 hover:opacity-90">
                Search
              </Button>
            </div>
            
            <ScrollArea className="w-full mb-10">
              <div className="flex gap-2 pb-3">
                <Badge
                  variant={selectedCategory === null ? "default" : "outline"}
                  className={`cursor-pointer px-5 py-2 text-xs uppercase tracking-wider whitespace-nowrap transition-all flex-shrink-0 ${selectedCategory === null ? "bg-primary text-primary-foreground" : "hover:border-primary"}`}
                  onClick={() => setSelectedCategory(null)}
                >
                  All
                </Badge>
                {categories.map(category => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`cursor-pointer px-5 py-2 text-xs uppercase tracking-wider whitespace-nowrap transition-all flex-shrink-0 ${selectedCategory === category ? "bg-primary text-primary-foreground" : "hover:border-primary"}`}
                    onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredExperiences.map((experience, index) => <motion.div key={experience.id} initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }}>
                  <Link to={`/experience/${experience.id}`}>
                    <div className="group relative overflow-hidden rounded-lg border border-border transition-all duration-300 cursor-pointer">
                      <div className="relative h-80 overflow-hidden">
                        <img src={experience.image} alt={experience.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        
                        <Badge className="absolute top-4 left-4 bg-black/80 text-accent border border-accent/50 px-4 py-1 text-xs uppercase tracking-widest">
                          {experience.category}
                        </Badge>

                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-2xl font-display font-bold mb-1 text-white leading-tight">
                            {experience.title}
                          </h3>
                          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                            {experience.location}
                          </p>
                          <div className="flex items-end justify-between">
                            <div>
                              <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">From</div>
                              <div className="text-2xl font-bold text-primary">
                                {experience.price}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>)}
            </div>

            {filteredExperiences.length === 0 && <div className="text-center py-20">
                <p className="text-xl text-muted-foreground mb-4">No experiences found</p>
                <Button variant="outline" onClick={() => {
              setSearchQuery("");
              setSelectedCategory(null);
            }}>
                  Clear filters
                </Button>
              </div>}
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>;
};
export default Explore;