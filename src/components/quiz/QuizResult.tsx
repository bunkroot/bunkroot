import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { VibeResult } from "@/data/quizData";
interface QuizResultProps {
  result: VibeResult;
}
const QuizResult = ({
  result
}: QuizResultProps) => {
  const [name, setName] = useState("");
  const handleGetAnalysis = () => {
    const userName = name.trim() || "Hey";
    const message = encodeURIComponent(`${userName}! I just discovered I'm "${result.title}" ${result.emoji} on BunkRoot's vibe quiz. I'd love to get my detailed vibe analysis and personalized ${result.category} experience recommendations!`);
    window.open(`https://wa.me/917907536782?text=${message}`, "_blank");
  };
  return <motion.div initial={{
    opacity: 0,
    scale: 0.9
  }} animate={{
    opacity: 1,
    scale: 1
  }} transition={{
    duration: 0.5,
    ease: "easeOut"
  }} className="w-full max-w-xl mx-auto text-center">
      {/* Result Reveal */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.2
    }} className="mb-8">
        <span className="text-7xl md:text-9xl block mb-4">{result.emoji}</span>
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
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.4
    }} className="bg-card border border-border rounded-xl p-6">
        <h3 className="text-xl font-bold mb-2">
          Want your full vibe breakdown? 🔥
        </h3>
        <p className="text-muted-foreground mb-6 text-sm">
          Get a detailed analysis of your personality + handpicked {result.category} experiences curated just for you.
        </p>
        <div className="space-y-4">
          <Input value={name} onChange={e => setName(e.target.value)} className="h-12 bg-background text-center" placeholder="Your name" />
          <Button onClick={handleGetAnalysis} size="lg" className="w-full bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold h-14 text-lg">
            Get My Vibe Analysis →
          </Button>
          <p className="text-xs text-muted-foreground">
            We'll chat on WhatsApp — no spam, just vibes ✨
          </p>
        </div>
      </motion.div>
    </motion.div>;
};
export default QuizResult;