import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getFeaturedExperiences, experiences } from "@/data/experiencesData";
import { Heart, Waves, Droplets, Trophy, Car, Gamepad2, Sofa, Palette } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// We'll build banners dynamically from experience images
const getBanners = () => {
  const waterExp = experiences.find(e => e.category === "Water Activity");
  const wellnessExp = experiences.find(e => e.category === "Wellness");
  const gamingExp = experiences.find(e => e.category === "Gaming");
  const creativeExp = experiences.find(e => e.category === "Creative");
  return [
    {
      image: waterExp?.image || "",
      title: "Weekend Water Adventures",
      subtitle: "Kayaking, rafting & more",
      link: "/explore?category=water%20activity",
    },
    {
      image: wellnessExp?.image || "",
      title: "Chill & Recover",
      subtitle: "Ice baths, steam rooms, wellness",
      link: "/explore?category=wellness",
    },
    {
      image: gamingExp?.image || "",
      title: "Game On",
      subtitle: "VR, PlayStation, bowling",
      link: "/explore?category=gaming",
    },
    {
      image: creativeExp?.image || "",
      title: "Get Creative",
      subtitle: "Pottery, workshops & art",
      link: "/explore?category=creative",
    },
  ];
};
const categoryIcons: Record<string, React.ReactNode> = {
  "Wellness": <Heart className="w-8 h-8 md:w-12 md:h-12 text-accent" />,
  "Water Activity": <Waves className="w-8 h-8 md:w-12 md:h-12 text-accent" />,
  "Swimming": <Droplets className="w-8 h-8 md:w-12 md:h-12 text-accent" />,
  "Sports": <Trophy className="w-8 h-8 md:w-12 md:h-12 text-accent" />,
  "Riding": <Car className="w-8 h-8 md:w-12 md:h-12 text-accent" />,
  "Gaming": <Gamepad2 className="w-8 h-8 md:w-12 md:h-12 text-accent" />,
  "Lounges": <Sofa className="w-8 h-8 md:w-12 md:h-12 text-accent" />,
  "Creative": <Palette className="w-8 h-8 md:w-12 md:h-12 text-accent" />
};
const getCategoryIcon = (name: string) => categoryIcons[name] || null;
const Home = () => {
  const categories = [{
    name: "Wellness",
    desc: "Ice bath, steam, recovery"
  }, {
    name: "Water Activity",
    desc: "Kayaking, rafting, paddling"
  }, {
    name: "Swimming",
    desc: "Pool access, calm sessions"
  }, {
    name: "Sports",
    desc: "Badminton, pickleball courts"
  }, {
    name: "Riding",
    desc: "Go-karting, track rides"
  }, {
    name: "Gaming",
    desc: "Console, PC, VR gaming"
  }, {
    name: "Lounges",
    desc: "Billiards, shisha, hangouts"
  }, {
    name: "Creative",
    desc: "Pottery, workshops, art"
  }];
  const featuredExperiences = getFeaturedExperiences();
  const banners = getBanners();
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Scrollable Banner Section */}
      <section className="pt-24 md:pt-28 pb-6 md:pb-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="relative">
            <ScrollArea className="w-full">
              <div className="flex gap-4 pb-4">
                {banners.map((banner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw]"
                  >
                    <Link to={banner.link}>
                      <div className="relative h-48 md:h-64 rounded-xl overflow-hidden border border-border hover:border-primary transition-all group">
                        <img
                          src={banner.image}
                          alt={banner.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-lg md:text-xl font-bold text-white">{banner.title}</h3>
                          <p className="text-sm text-white/70">{banner.subtitle}</p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-10 md:py-24 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjA0LDI1NSwwLDAuMDUpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2RvdHMpIi8+PC9zdmc+')] opacity-40" />
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-6 md:mb-16">
              PICK YOUR VIBE
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {categories.map((category, index) => <Link key={category.name} to={`/explore?category=${category.name.toLowerCase()}`}>
                  <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.4,
                delay: index * 0.05
              }} whileHover={{
                scale: 1.05,
                y: -5
              }} className="bg-gradient-to-br from-card to-background border border-border hover:border-primary rounded-xl p-4 md:p-6 text-center cursor-pointer transition-all group relative overflow-hidden shadow-lg hover:shadow-[0_0_40px_rgba(204,255,0,0.15)]">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="text-3xl md:text-5xl mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300 relative z-10 filter drop-shadow-[0_0_8px_rgba(204,255,0,0.3)]">
                      {getCategoryIcon(category.name)}
                    </div>
                    <h3 className="font-bold text-xs md:text-lg uppercase tracking-wider relative z-10 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-[10px] md:text-xs text-muted-foreground mt-1 relative z-10 hidden md:block">
                      {category.desc}
                    </p>
                  </motion.div>
                </Link>)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Experiences Section */}
      <section className="py-10 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <div className="flex justify-between items-end mb-6 md:mb-16">
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
              {featuredExperiences.map((experience, index) => <motion.div key={experience.id} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} whileHover={{
              y: -8
            }} className="group cursor-pointer">
                  <Link to={`/experience/${experience.id}`}>
                    <div className="relative h-48 md:h-80 overflow-hidden rounded-lg border-2 border-border group-hover:border-accent transition-all">
                      <img src={experience.image} alt={experience.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                      
                      {/* Category Badge */}
                      <Badge className="absolute top-2 left-2 md:top-4 md:left-4 bg-black/80 text-accent border border-accent/50 px-2 md:px-4 py-0.5 md:py-1 text-[10px] md:text-xs uppercase tracking-wider">
                        {experience.category}
                      </Badge>
                      
                      {/* Content */}
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
                </motion.div>)}
            </div>

            {/* Mobile See All Button */}
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
    </div>;
};
export default Home;