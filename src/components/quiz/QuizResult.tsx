import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { VibeResult } from "@/data/quizData";

interface QuizResultProps {
  result: VibeResult;
}

const QuizResult = ({ result }: QuizResultProps) => {
  const [showLeadCapture, setShowLeadCapture] = useState(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmitLead = () => {
    if (name && phone) {
      const message = encodeURIComponent(
        `Hey! I just took the BunkRoot quiz and I'm "${result.title}" 🎯. My name is ${name}. Keep me updated on ${result.category} experiences!`
      );
      window.open(`https://wa.me/917907536782?text=${message}`, "_blank");
    }
    setShowLeadCapture(false);
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

      {/* Lead Capture */}
      {showLeadCapture && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card border border-border rounded-xl p-6 mb-6"
        >
          <h3 className="text-lg font-bold mb-4">
            Get notified about {result.category} experiences! 🔔
          </h3>
          <div className="space-y-3">
            <Input
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 bg-background"
            />
            <Input
              placeholder="WhatsApp number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="h-12 bg-background"
            />
            <Button
              onClick={handleSubmitLead}
              className="w-full bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold h-12"
            >
              Join the Waitlist via WhatsApp
            </Button>
          </div>
          <button
            onClick={() => setShowLeadCapture(false)}
            className="text-sm text-muted-foreground mt-3 hover:text-foreground transition-colors"
          >
            Skip for now
          </button>
        </motion.div>
      )}

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: showLeadCapture ? 0.6 : 0.3 }}
        className="space-y-3"
      >
        <Link to={`/explore?category=${result.category}`}>
          <Button
            size="lg"
            className="w-full bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold h-14 text-lg"
          >
            Explore {result.title} Experiences →
          </Button>
        </Link>
        <Link to="/explore">
          <Button
            size="lg"
            variant="outline"
            className="w-full border-2 border-border h-14"
          >
            See All Experiences
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default QuizResult;
