import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mountain, Leaf, Palette, Zap, Heart, Trophy, Users, Compass, type LucideIcon } from "lucide-react";
import { VibeResult, VibeType } from "@/data/quizData";

const vibeIcons: Record<VibeType, LucideIcon> = {
  adventurer: Mountain,
  "nature-lover": Leaf,
  "skill-seeker": Palette,
  "thrill-chaser": Zap,
  mindful: Heart,
  athlete: Trophy,
  socialite: Users,
  "offbeat-explorer": Compass,
};

interface QuizResultProps {
  result: VibeResult;
}

const QuizResultComponent = ({ result }: QuizResultProps) => {
  const [name, setName] = useState("");
  const Icon = vibeIcons[result.type] || Compass;

  const handleGetAnalysis = () => {
    const userName = name.trim();
    const greeting = userName ? `Hey, I'm ${userName}!` : "Hey!";
    const message = encodeURIComponent(
      `${greeting} I just discovered I'm "${result.title}" on BunkRoot's vibe quiz. I'd love to get my detailed vibe analysis and personalized ${result.category} experience recommendations!`
    );
    window.open(`https://wa.me/917907536782?text=${message}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-xl mx-auto text-center"
    >
      {/* Result Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <div className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[hsl(var(--neon-start))]/20 to-[hsl(var(--neon-end))]/20 border-2 border-accent/30 flex items-center justify-center">
          <Icon className="w-10 h-10 md:w-14 md:h-14 text-accent" />
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          You're{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))]">
            {result.title}
          </span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {result.description}
        </p>
      </motion.div>

      {/* WhatsApp CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <h3 className="text-xl font-bold mb-2">
          Want your full vibe breakdown?
        </h3>
        <p className="text-muted-foreground mb-6 text-sm">
          Get a detailed analysis of your personality + handpicked {result.category} experiences curated just for you.
        </p>
        <div className="space-y-4">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12 bg-background text-center"
            placeholder="Your name"
          />
          <Button
            onClick={handleGetAnalysis}
            size="lg"
            className="w-full bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold h-14 text-lg"
          >
            Get My Vibe Analysis
          </Button>
          <p className="text-xs text-muted-foreground">
            We'll chat on WhatsApp — no spam, just vibes
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default QuizResultComponent;
