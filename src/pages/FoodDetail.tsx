import { useState, useCallback, useRef, useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, ChevronLeft, ChevronRight, Gift, MessageCircle, Camera, Receipt } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getFoodById } from "@/data/foodData";

const FoodDetail = () => {
  const { id } = useParams();
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      const lineHeight = parseInt(getComputedStyle(descriptionRef.current).lineHeight);
      const height = descriptionRef.current.scrollHeight;
      const lines = height / lineHeight;
      setShowReadMore(lines > 3);
    }
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const food = id ? getFoodById(id) : undefined;

  if (!food) {
    return <Navigate to="/food" replace />;
  }

  const handleScratchCard = () => {
    const message = `Hi! I just tried "${food.dishName}" at ${food.restaurant} (${food.location}) 🍽️\n\nI'd like to claim my BunkRoot Scratch Card! 🎉\n\nI'll share my proof (bill/photo) here.`;
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/917907536782?text=${encoded}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24">
        {/* Hero Image */}
        <motion.div
          className="relative w-full h-[70vh] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={food.image}
            alt={food.dishName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          <div className="absolute bottom-12 left-0 right-0 container mx-auto px-4 lg:px-12">
            <Badge className="mb-4 bg-black/80 text-accent border border-accent/50 px-6 py-2 text-sm uppercase tracking-widest">
              {food.category}
            </Badge>
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-4 text-white leading-none">
              {food.dishName}
            </h1>
            <p className="text-2xl text-muted-foreground uppercase tracking-wide">
              {food.restaurant}
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <div className="container mx-auto px-4 lg:px-12 py-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column */}
            <motion.div
              className="lg:col-span-2 space-y-8 lg:space-y-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Info Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-card border-2 border-border p-4 md:p-6 rounded-lg">
                  <span className="text-2xl mb-2 block">💰</span>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1 md:mb-2">Price</div>
                  <div className="text-sm md:text-lg font-bold text-primary">{food.pricePerPerson}/person</div>
                </div>
                <div className="bg-card border-2 border-border p-4 md:p-6 rounded-lg">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-accent mb-2 md:mb-3" />
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1 md:mb-2">Location</div>
                  <div className="text-sm md:text-lg font-bold break-words">{food.location}</div>
                </div>
                <div className="bg-card border-2 border-border p-4 md:p-6 rounded-lg">
                  <span className="text-2xl mb-2 block">🏪</span>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1 md:mb-2">Restaurant</div>
                  <div className="text-sm md:text-lg font-bold break-words">{food.restaurant}</div>
                </div>
              </div>

              {/* Mobile Scratch Card CTA */}
              <div className="lg:hidden">
                <ScratchCardWidget onClaim={handleScratchCard} restaurant={food.restaurant} />
              </div>

              {/* Gallery */}
              {food.gallery && food.gallery.length > 0 && (
                <div className="relative">
                  <h3 className="text-2xl font-display font-bold mb-4">Gallery</h3>
                  <div className="overflow-hidden rounded-lg" ref={emblaRef}>
                    <div className="flex gap-3 md:gap-4">
                      {food.gallery.map((img, idx) => (
                        <div
                          key={idx}
                          className="flex-shrink-0 w-[85%] sm:w-[48%] lg:w-[32%]"
                        >
                          <img
                            src={img}
                            alt={`${food.dishName} - Image ${idx + 1}`}
                            className="w-full h-48 md:h-64 object-cover rounded-lg border-2 border-border hover:border-accent/50 transition-colors"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-2 top-1/2 translate-y-1/2 bg-background/80 backdrop-blur-sm border-2 hover:bg-accent hover:text-primary-foreground z-10"
                    onClick={scrollPrev}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-2 top-1/2 translate-y-1/2 bg-background/80 backdrop-blur-sm border-2 hover:bg-accent hover:text-primary-foreground z-10"
                    onClick={scrollNext}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              )}

              {/* Highlights */}
              {food.highlights && food.highlights.length > 0 && (
                <div className="bg-card/50 border-2 border-border p-6 md:p-8 rounded-lg">
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-4 md:mb-6">Highlights</h3>
                  <ul className="space-y-3">
                    {food.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-accent text-xl">✓</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Description */}
              {food.description && (
                <div>
                  <h2 className="text-4xl font-display font-bold mb-6">About This Dish</h2>
                  <div className="relative">
                    <p
                      ref={descriptionRef}
                      className={`text-lg text-muted-foreground leading-relaxed font-sans ${
                        !isDescriptionExpanded && showReadMore ? "line-clamp-3" : ""
                      }`}
                    >
                      {food.description}
                    </p>
                    {showReadMore && (
                      <button
                        onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                        className="mt-2 text-accent font-medium hover:underline focus:outline-none"
                      >
                        {isDescriptionExpanded ? "Read less" : "Read more"}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Right Column - Scratch Card Widget (Desktop) */}
            <motion.div
              className="hidden lg:block lg:col-span-1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="sticky top-24">
                <ScratchCardWidget onClaim={handleScratchCard} dishName={food.dishName} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const ScratchCardWidget = ({ onClaim, dishName }: { onClaim: () => void; dishName: string }) => (
  <div className="bg-card border-2 border-border rounded-lg p-6 md:p-8 space-y-6 overflow-hidden">
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
        <Gift className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-2xl font-display font-bold mb-2">Win a Scratch Card!</h3>
      <p className="text-sm text-muted-foreground font-sans">
        Try this dish and win cashbacks & exclusive offers from BunkRoot
      </p>
    </div>

    <div className="border-t border-border pt-6 space-y-4">
      <h4 className="text-sm uppercase tracking-wide text-muted-foreground font-bold">How it works</h4>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
            <span className="text-accent font-bold text-sm">1</span>
          </div>
          <div>
            <p className="text-sm font-bold">Visit the restaurant</p>
            <p className="text-xs text-muted-foreground font-sans">Head to {dishName.split(" ")[0]}... and try this dish</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
            <span className="text-accent font-bold text-sm">2</span>
          </div>
          <div>
            <p className="text-sm font-bold">Share your proof</p>
            <p className="text-xs text-muted-foreground font-sans flex items-center gap-1">
              Send a bill <Receipt className="w-3 h-3 inline" /> or photo <Camera className="w-3 h-3 inline" /> via WhatsApp
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
            <span className="text-accent font-bold text-sm">3</span>
          </div>
          <div>
            <p className="text-sm font-bold">Get your scratch card</p>
            <p className="text-xs text-muted-foreground font-sans">Win cashbacks, discounts & more! 🎉</p>
          </div>
        </div>
      </div>
    </div>

    <Button
      size="lg"
      className="w-full bg-primary text-primary-foreground font-bold text-lg h-14 hover:opacity-90"
      onClick={onClaim}
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      Claim Scratch Card
    </Button>

    <p className="text-xs text-muted-foreground text-center font-sans">
      You'll be redirected to WhatsApp to share your proof
    </p>
  </div>
);

export default FoodDetail;
