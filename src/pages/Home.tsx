import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  const categories = [
    { name: "Thrill", emoji: "⚡" },
    { name: "Calm", emoji: "🧘" },
    { name: "Culture", emoji: "🎭" },
    { name: "Connection", emoji: "🤝" },
    { name: "Strange", emoji: "🌀" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--neon-start))] rounded-full blur-[120px] opacity-20 animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--neon-end))] rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold text-sm px-4 py-1">
                OFF THE ROUTINE
              </Badge>
              
              <h1 className="text-7xl md:text-9xl font-display font-bold mb-6 leading-none">
                ESCAPE
                <br />
                <span className="relative inline-block">
                  ROUTINE.
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </span>
              </h1>
              
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-none">
                STAY ROOTED.
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl font-semibold">
                Small escapes. Big feelings.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/explore">
                  <Button size="lg" className="bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold text-lg px-8 py-6 hover:scale-105 transition-transform">
                    Explore Experiences
                  </Button>
                </Link>
                <Link to="/host">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:bg-accent hover:text-black transition-all">
                    Bunk the Plan
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
              PICK YOUR VIBE
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              What kind of escape are you looking for?
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categories.map((category, index) => (
                <Link key={category.name} to={`/explore?category=${category.name.toLowerCase()}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="bg-background border-2 border-border hover:border-accent rounded-lg p-8 text-center cursor-pointer transition-all group"
                  >
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                      {category.emoji}
                    </div>
                    <h3 className="font-bold text-xl uppercase tracking-wide">
                      {category.name}
                    </h3>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--neon-start))]/20 to-[hsl(var(--neon-end))]/20" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
              GOT A WILD IDEA?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Share your unique experience and become a host.
            </p>
            <Link to="/host">
              <Button size="lg" className="bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold text-lg px-12 py-6">
                Become a Host
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
