import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { foodSpots, foodCategories, type FoodSpot } from "@/data/foodData";

const Food = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = foodSpots.filter((f) => {
    const matchCategory =
      selectedCategory === "All" || f.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      f.dishName.toLowerCase().includes(q) ||
      f.restaurant.toLowerCase().includes(q) ||
      f.location.toLowerCase().includes(q);
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 md:pt-28 pb-8 md:pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-7xl font-display font-bold mb-2 md:mb-4">
              <span className="text-foreground">EXPLORE </span>
              <span className="text-primary">FOOD</span>
            </h1>
            <p className="text-sm md:text-xl text-muted-foreground mb-6 md:mb-10">
              Discover what's trending in the city — best dishes, best spots.
            </p>

            {/* Search */}
            <div className="flex gap-3 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search dishes, restaurants, locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-card border-border"
                />
              </div>
              {searchQuery && (
                <Button
                  variant="outline"
                  onClick={() => setSearchQuery("")}
                  className="shrink-0"
                >
                  Clear
                </Button>
              )}
            </div>

            {/* Categories */}
            <ScrollArea className="w-full mb-8">
              <div className="flex gap-2 pb-2">
                {foodCategories.map((cat) => (
                  <Badge
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`cursor-pointer whitespace-nowrap px-4 py-2 text-xs md:text-sm transition-colors ${
                      selectedCategory === cat
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-foreground border-border hover:bg-secondary"
                    }`}
                  >
                    {cat}
                  </Badge>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </motion.div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
              {filtered.map((spot, index) => (
                <FoodCard key={spot.id} spot={spot} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-4">
                No food spots found.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

const FoodCard = ({ spot, index }: { spot: FoodSpot; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    whileHover={{ y: -5 }}
    className="group cursor-pointer"
  >
    <div className="relative overflow-hidden rounded-lg border border-border bg-card transition-all">
      <div className="relative h-40 md:h-56 overflow-hidden">
        <img
          src={spot.image}
          alt={spot.dishName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <Badge className="absolute top-2 left-2 md:top-3 md:left-3 bg-black/80 text-accent border border-accent/50 px-2 md:px-3 py-0.5 text-[10px] md:text-xs uppercase tracking-wider">
          {spot.category}
        </Badge>
      </div>

      <div className="p-3 md:p-4">
        <h3 className="font-bold text-sm md:text-base leading-tight mb-0.5 group-hover:text-primary transition-colors">
          {spot.dishName}
        </h3>
        <p className="text-xs md:text-sm text-muted-foreground mb-2">
          {spot.restaurant}
        </p>
        <div className="flex justify-between items-center text-xs md:text-sm">
          <span className="text-primary font-bold">{spot.pricePerPerson}/person</span>
          <span className="text-muted-foreground flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span className="truncate max-w-[80px] md:max-w-[120px]">{spot.location}</span>
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default Food;
