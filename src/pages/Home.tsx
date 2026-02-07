import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mountain, Leaf, Palette, Zap, Heart, Trophy, Users, Compass, type LucideIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { getFeaturedExperiences } from "@/data/experiencesData";

const Home = () => {
  const categories: { name: string; icon: LucideIcon; desc: string }[] = [
    { name: "Adventure", icon: Mountain, desc: "Trekking, kayaking, cycling" },
    { name: "Nature", icon: Leaf, desc: "Birdwatching, stargazing, foraging" },
    { name: "Skill-Learning", icon: Palette, desc: "Pottery, archery, cooking" },
    { name: "Thrill", icon: Zap, desc: "Horror walks, escape rooms" },
    { name: "Mindfulness", icon: Heart, desc: "Yoga, meditation, wellness" },
    { name: "Sports", icon: Trophy, desc: "Pickup games, competitions" },
    { name: "Social", icon: Users, desc: "Book clubs, game nights" },
    { name: "Offbeat", icon: Compass, desc: "Weird & wonderful experiences" },
  ];

  const featuredExperiences = getFeaturedExperiences();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <HeroSection />

      {/* Categories Section */}
      <section className="py-10 md:py-24 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-6 md:mb-16">
              PICK YOUR VIBE
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Link
                    key={category.name}
                    to={`/explore?category=${category.name.toLowerCase()}`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-gradient-to-br from-card to-background border border-border hover:border-[hsl(var(--neon-start))] rounded-xl p-4 md:p-6 text-center cursor-pointer transition-all group relative overflow-hidden shadow-lg hover:shadow-[0_0_40px_rgba(143,255,0,0.15)]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--neon-start))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Icon className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 text-accent group-hover:scale-110 transition-transform duration-300 relative z-10" />
                      <h3 className="font-bold text-xs md:text-lg uppercase tracking-wider relative z-10 group-hover:text-[hsl(var(--neon-start))] transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-[10px] md:text-xs text-muted-foreground mt-1 relative z-10 hidden md:block">
                        {category.desc}
                      </p>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Experiences Section */}
      <section className="py-10 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-between items-end mb-6 md:mb-16">
              <div>
                <h2 className="text-4xl md:text-8xl font-display font-bold mb-2 md:mb-4">
                  QUICK
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))]">
                    ESCAPES
                  </span>
                </h2>
                <p className="text-sm md:text-xl text-muted-foreground">
                  Everyday activities. Zero planning.
                </p>
              </div>
              <Link to="/explore">
                <Button
                  size="lg"
                  variant="outline"
                  className="hidden md:flex border-2 border-accent text-accent hover:bg-accent hover:text-black font-bold px-8 transition-all"
                >
                  SEE ALL EXPERIENCES →
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {featuredExperiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                >
                  <Link to={`/experience/${experience.id}`}>
                    <div className="relative h-48 md:h-80 overflow-hidden rounded-lg border-2 border-border group-hover:border-accent transition-all">
                      <img
                        src={experience.image}
                        alt={experience.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                      <Badge className="absolute top-2 left-2 md:top-4 md:left-4 bg-black/80 text-accent border border-accent/50 px-2 md:px-4 py-0.5 md:py-1 text-[10px] md:text-xs uppercase tracking-wider">
                        {experience.category}
                      </Badge>

                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
                        <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2 leading-tight group-hover:text-[hsl(var(--neon-start))] transition-colors">
                          {experience.title}
                        </h3>
                        <div className="flex justify-between items-center text-xs md:text-sm">
                          <span className="text-muted-foreground">
                            {experience.duration}
                          </span>
                          <span className="text-[hsl(var(--neon-start))] font-bold text-sm md:text-lg">
                            {experience.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile See All Button */}
            <div className="mt-6 text-center md:hidden">
              <Link to="/explore">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold w-full"
                >
                  SEE ALL EXPERIENCES →
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--neon-start))]/10 via-transparent to-[hsl(var(--neon-end))]/10" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(var(--neon-start))] rounded-full blur-[150px] opacity-10" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(var(--neon-end))] rounded-full blur-[150px] opacity-10" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-8xl font-display font-bold mb-6 md:mb-12 leading-tight">
              BECOME A HOST
            </h2>
            <Link to="/host">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold text-lg md:text-xl px-10 md:px-12 py-6 md:py-8 hover:scale-105 hover:shadow-[0_0_40px_rgba(143,255,0,0.5)] transition-all"
              >
                Share Your Idea
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
