import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getFeaturedExperiences, experiences } from "@/data/experiencesData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

// Category illustration imports
import catWellness from "@/assets/cat-wellness.png";
import catWater from "@/assets/cat-water.png";
import catSwimming from "@/assets/cat-swimming.png";
import catSports from "@/assets/cat-sports.png";
import catRiding from "@/assets/cat-riding.png";
import catGaming from "@/assets/cat-gaming.png";
import catLounges from "@/assets/cat-lounges.png";
import catCreative from "@/assets/cat-creative.png";

const getBanners = () => {
  const waterExp = experiences.find(e => e.category === "Water Activity");
  const wellnessExp = experiences.find(e => e.category === "Wellness");
  const gamingExp = experiences.find(e => e.category === "Gaming");
  const creativeExp = experiences.find(e => e.category === "Creative");
  return [{
    image: waterExp?.image || "",
    title: "Weekend Water Adventures",
    subtitle: "Kayaking, rafting & more",
    link: "/explore?category=water%20activity"
  }, {
    image: wellnessExp?.image || "",
    title: "Chill & Recover",
    subtitle: "Ice baths, steam rooms, wellness",
    link: "/explore?category=wellness"
  }, {
    image: gamingExp?.image || "",
    title: "Game On",
    subtitle: "VR, PlayStation, bowling",
    link: "/explore?category=gaming"
  }, {
    image: creativeExp?.image || "",
    title: "Get Creative",
    subtitle: "Pottery, workshops & art",
    link: "/explore?category=creative"
  }];
};

const categoryImages: Record<string, string> = {
  "Wellness": catWellness,
  "Water Activity": catWater,
  "Swimming": catSwimming,
  "Sports": catSports,
  "Riding": catRiding,
  "Gaming": catGaming,
  "Lounges": catLounges,
  "Creative": catCreative,
};

const Home = () => {
  const categories = [
    { name: "Wellness", desc: "Ice bath, steam, recovery" },
    { name: "Water Activity", desc: "Kayaking, rafting, paddling" },
    { name: "Swimming", desc: "Pool access, calm sessions" },
    { name: "Sports", desc: "Badminton, pickleball courts" },
    { name: "Riding", desc: "Go-karting, track rides" },
    { name: "Gaming", desc: "Console, PC, VR gaming" },
    { name: "Lounges", desc: "Billiards, shisha, hangouts" },
    { name: "Creative", desc: "Pottery, workshops, art" },
  ];
  const featuredExperiences = getFeaturedExperiences();
  const banners = getBanners();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Banner Carousel - no top radius, blends with header */}
      <section className="pt-16 md:pt-20">
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {banners.map((banner, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <Link to={banner.link}>
                    <div className="relative h-56 md:h-[28rem] lg:h-[32rem] overflow-hidden group">
                      <img src={banner.image} alt={banner.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute bottom-10 left-6 right-6 md:bottom-14 md:left-10">
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-1">{banner.title}</h3>
                        <p className="text-sm md:text-base text-white/70">{banner.subtitle}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button onClick={scrollPrev} className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors hidden md:flex">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={scrollNext} className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors hidden md:flex">
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots inside the banner */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`rounded-full transition-all ${selectedIndex === index ? "bg-white w-4 h-1.5" : "bg-white/50 w-1.5 h-1.5"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 md:py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-6 md:mb-12">
              PICK YOUR VIBE
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {categories.map((category, index) => (
                <Link key={category.name} to={`/explore?category=${category.name.toLowerCase()}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.03, y: -3 }}
                    className="bg-card border border-border rounded-xl p-4 md:p-6 cursor-pointer transition-all group relative overflow-hidden h-28 md:h-40"
                  >
                    <div className="absolute -top-2 -left-2 w-20 h-20 md:w-28 md:h-28 group-hover:scale-110 transition-transform duration-300">
                      <img src={categoryImages[category.name]} alt={category.name} className="w-full h-full object-contain mix-blend-lighten" />
                    </div>
                    <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 text-right">
                      <h3 className="font-bold text-xs md:text-lg uppercase tracking-wider group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5 hidden md:block">
                        {category.desc}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Experiences Section */}
      <section className="py-8 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex justify-between items-end mb-6 md:mb-12">
              <div>
                <h2 className="text-4xl md:text-8xl font-display font-bold mb-2 md:mb-4">
                  <span className="text-foreground">QUICK </span>
                  <span className="text-primary">ESCAPES</span>
                </h2>
                <p className="text-sm md:text-xl text-muted-foreground">
                  Everyday activities. Zero planning.
                </p>
              </div>
              <Link to="/explore">
                <Button size="lg" variant="outline" className="hidden md:flex border-2 border-accent text-accent hover:bg-accent hover:text-black font-bold px-8 transition-all">
                  SEE ALL EXPERIENCES →
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
              {featuredExperiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <Link to={`/experience/${experience.id}`}>
                    <div className="relative h-48 md:h-80 overflow-hidden rounded-lg border border-border transition-all">
                      <img src={experience.image} alt={experience.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                      <Badge className="absolute top-2 left-2 md:top-4 md:left-4 bg-black/80 text-accent border border-accent/50 px-2 md:px-4 py-0.5 md:py-1 text-[10px] md:text-xs uppercase tracking-wider">
                        {experience.category}
                      </Badge>

                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
                        <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2 leading-tight group-hover:text-primary transition-colors">
                          {experience.title}
                        </h3>
                        <div className="flex justify-between items-center text-xs md:text-sm">
                          <span className="text-muted-foreground">{experience.duration}</span>
                          <span className="text-primary font-bold text-sm md:text-lg">{experience.price}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 text-center md:hidden">
              <Link to="/explore">
                <Button size="lg" className="bg-primary text-primary-foreground font-bold w-full">
                  SEE ALL EXPERIENCES →
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Home;
