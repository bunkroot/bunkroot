import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import expKayakMain from "@/assets/exp-kayak-main.jpg";
import expBowlingMain from "@/assets/exp-bowling-main.jpg";
import expPotteryMain from "@/assets/exp-pottery-main.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] md:min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4 items-center">
          {/* Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="mb-4 md:mb-8">
              <span className="block text-5xl font-edo mb-1 md:mb-2 md:text-7xl">Life's</span>
              <span className="block font-bahianita md:text-[12rem] lg:text-[14rem] leading-none text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-9xl">
                Out There
              </span>
            </h1>

            <motion.div
              className="flex flex-wrap gap-3 md:gap-4 mt-6 md:mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link to="/explore">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold text-base md:text-lg px-8 md:px-10 py-6 md:py-7 hover:scale-105 hover:shadow-[0_0_30px_rgba(143,255,0,0.4)] transition-all"
                >
                  START EXPLORING
                </Button>
              </Link>
              <Link to="/quiz">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[hsl(var(--neon-start))] text-[hsl(var(--neon-start))] font-bold text-base md:text-lg px-6 md:px-8 py-6 md:py-7 hover:bg-[hsl(var(--neon-start))]/10 transition-all"
                >
                  Find Your Vibe
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Collage — Desktop */}
          <div className="relative hidden lg:block h-[550px]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 right-0 w-[62%] h-[65%] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-border/50"
              style={{ transform: "rotate(2deg)" }}
            >
              <img
                src={expKayakMain}
                alt="Kayaking adventure"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-0 left-0 w-[52%] h-[52%] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-accent/20"
              style={{ transform: "rotate(-2deg)" }}
            >
              <img
                src={expBowlingMain}
                alt="Bowling with friends"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-[38%] left-[22%] w-[32%] h-[32%] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border-2 border-accent/30 z-10"
            >
              <img
                src={expPotteryMain}
                alt="Pottery workshop"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>

            {/* Subtle glow behind cluster */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[hsl(var(--neon-start))] rounded-full blur-[140px] opacity-5 pointer-events-none" />
          </div>

          {/* Mobile Hero Image */}
          <motion.div
            className="lg:hidden mt-2 rounded-2xl overflow-hidden border border-border/50 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src={expKayakMain}
              alt="Kayaking adventure"
              className="w-full h-48 object-cover"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
