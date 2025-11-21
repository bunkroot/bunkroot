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
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Adventure Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(143,255,0,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(204,255,0,0.06),transparent_50%)]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-8xl md:text-[12rem] font-display font-bold mb-8 leading-[0.9] tracking-tight"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                ESCAPE
                <br />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))]">
                  ROUTINE
                </span>
              </motion.h1>
              
              <motion.div 
                className="flex flex-wrap gap-4 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Link to="/explore">
                  <Button size="lg" className="bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold text-lg px-10 py-7 hover:scale-105 hover:shadow-[0_0_30px_rgba(143,255,0,0.4)] transition-all">
                    START EXPLORING
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 right-[10%] w-2 h-2 bg-[hsl(var(--neon-start))] rounded-full blur-sm"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 left-[15%] w-3 h-3 bg-[hsl(var(--neon-end))] rounded-full blur-sm"
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-gradient-to-b from-background via-card to-background relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTQzLDI1NSwwLDAuMDUpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2RvdHMpIi8+PC9zdmc+')] opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl md:text-7xl font-display font-bold mb-16">
              PICK YOUR VIBE
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categories.map((category, index) => (
                <Link key={category.name} to={`/explore?category=${category.name.toLowerCase()}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.08, y: -5 }}
                    className="bg-gradient-to-br from-card to-background border border-border hover:border-[hsl(var(--neon-start))] rounded-xl p-10 text-center cursor-pointer transition-all group relative overflow-hidden shadow-lg hover:shadow-[0_0_40px_rgba(143,255,0,0.15)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--neon-start))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="text-7xl mb-5 group-hover:scale-125 transition-transform duration-300 relative z-10 filter drop-shadow-[0_0_8px_rgba(143,255,0,0.3)]">
                      {category.emoji}
                    </div>
                    <h3 className="font-bold text-2xl uppercase tracking-wider relative z-10 group-hover:text-[hsl(var(--neon-start))] transition-colors">
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
      <section className="py-32 relative overflow-hidden">
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
            <h2 className="text-6xl md:text-8xl font-display font-bold mb-12 leading-tight">
              BECOME A HOST
            </h2>
            <Link to="/host">
              <Button size="lg" className="bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold text-xl px-12 py-8 hover:scale-105 hover:shadow-[0_0_40px_rgba(143,255,0,0.5)] transition-all">
                Share Your Adventure
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
