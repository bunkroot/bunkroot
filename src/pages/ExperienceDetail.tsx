import { useState, useCallback, useRef, useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, MapPin, Calendar as CalendarIcon, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";
import { getExperienceById } from "@/data/experiencesData";

const ExperienceDetail = () => {
  const { id } = useParams();
  const isMobile = useIsMobile();
  const [isBookingExpanded, setIsBookingExpanded] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("1");
  const [couponCode, setCouponCode] = useState("");
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  // Check if description exceeds 3 lines
  useEffect(() => {
    if (descriptionRef.current) {
      const lineHeight = parseInt(getComputedStyle(descriptionRef.current).lineHeight);
      const height = descriptionRef.current.scrollHeight;
      const lines = height / lineHeight;
      setShowReadMore(lines > 3);
    }
  }, []);
  
  // Embla carousel for gallery
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const experience = id ? getExperienceById(id) : undefined;

  if (!experience) {
    return <Navigate to="/explore" replace />;
  }

  const handleBooking = () => {
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

    const dateStr =
      selectedDate instanceof Date
        ? selectedDate.toLocaleDateString()
        : String(selectedDate);

    const couponText = couponCode.trim() ? `\nCoupon Code: ${couponCode.trim()}` : "";
    const rawMessage = `Hi! I'd like to book ${experience?.title || "your experience"}\n\nPlace: ${experience?.host || "N/A"}\nDate: ${dateStr}\nTime: ${selectedTime}\nGuests: ${guests}\nName: ${name}\nPhone: ${phone}${couponText}`;

    const encoded = encodeURIComponent(rawMessage);
    const url = `https://wa.me/917907536782?text=${encoded}`;
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
              {experience.emoji} {experience.category}
            </Badge>
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-4 text-white leading-none">
              {experience.title}
            </h1>
            <p className="text-2xl text-muted-foreground uppercase tracking-wide">
              {experience.host}
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

              {/* Mobile & Tablet Booking Widget */}
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
                      }`}>Check Availability</span>
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
                              disabled={(date) => {
                                const today = new Date();
                                today.setHours(0, 0, 0, 0);
                                return date < today;
                              }}
                              className="rounded-md border-2 border-border bg-card w-full"
                            />
                          </div>

                          <div>
                            <Label className="text-sm uppercase tracking-wide mb-3 block">Available Times</Label>
                            <div className="grid grid-cols-3 gap-2">
                              {experience.availableTimes.map((time) => (
                                <Button
                                  key={time}
                                  variant={selectedTime === time ? "default" : "outline"}
                                  className={`justify-center text-sm ${
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

                          <div>
                            <Label htmlFor="coupon-mobile" className="text-sm uppercase tracking-wide mb-2 block">Coupon Code (Optional)</Label>
                            <Input 
                              id="coupon-mobile"
                              value={couponCode}
                              onChange={(e) => setCouponCode(e.target.value)}
                              placeholder="Enter coupon code"
                              className="bg-card border-2"
                            />
                          </div>

                          <Button
                            size="lg"
                            className="w-full bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold text-lg h-14 hover:opacity-90"
                            onClick={handleBooking}
                          >
                            Check Availability
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

              {/* Image Gallery Carousel */}
              <div className="relative">
                <h3 className="text-2xl font-display font-bold mb-4">Gallery</h3>
                <div className="overflow-hidden rounded-lg" ref={emblaRef}>
                  <div className="flex gap-3 md:gap-4">
                    {experience.gallery.map((img, idx) => (
                      <div 
                        key={idx} 
                        className="flex-shrink-0 w-[85%] sm:w-[48%] lg:w-[32%]"
                      >
                        <img 
                          src={img} 
                          alt={`${experience.title} - Image ${idx + 1}`}
                          className="w-full h-48 md:h-64 object-cover rounded-lg border-2 border-border hover:border-accent/50 transition-colors"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Navigation Arrows */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-2 top-1/2 translate-y-1/2 bg-background/80 backdrop-blur-sm border-2 hover:bg-accent hover:text-black z-10"
                  onClick={scrollPrev}
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-2 top-1/2 translate-y-1/2 bg-background/80 backdrop-blur-sm border-2 hover:bg-accent hover:text-black z-10"
                  onClick={scrollNext}
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Amenities Section */}
              <div className="bg-card/50 border-2 border-border p-6 md:p-8 rounded-lg">
                <h3 className="text-xl md:text-2xl font-display font-bold mb-4 md:mb-6">Amenities</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {experience.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-accent">•</span>
                      <span className="text-sm md:text-base">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Full Description */}
              <div>
                <h2 className="text-4xl font-display font-bold mb-6">The Experience</h2>
                <div className="relative">
                  <p 
                    ref={descriptionRef}
                    className={`text-lg text-muted-foreground leading-relaxed ${
                      !isDescriptionExpanded && showReadMore ? "line-clamp-3" : ""
                    }`}
                  >
                    {experience.fullDescription}
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
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">From</div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] bg-clip-text text-transparent">
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
                      disabled={(date) => {
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        return date < today;
                      }}
                      className="rounded-md border-2 border-border bg-background pointer-events-auto"
                    />
                  </div>

                  <div>
                    <Label className="text-sm uppercase tracking-wide mb-3 block">Available Times</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {experience.availableTimes.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          className={`justify-center text-xs px-2 ${
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

                  <div>
                    <Label htmlFor="coupon" className="text-sm uppercase tracking-wide mb-2 block">Coupon Code (Optional)</Label>
                    <Input 
                      id="coupon"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter coupon code"
                      className="bg-background border-2"
                    />
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold text-lg h-14 hover:opacity-90"
                    onClick={handleBooking}
                  >
                    Check Availability
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
                <p><strong>Safety:</strong> All activities are conducted with proper safety measures. Follow host instructions at all times.</p>
                <p><strong>Weather:</strong> Some activities may be rescheduled due to weather conditions. You'll be notified in advance.</p>
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
