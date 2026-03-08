import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { pickRandomPrize, type Prize } from "@/data/scratchCardData";
import { Button } from "@/components/ui/button";

const CARD_WIDTH = 300;
const CARD_HEIGHT = 340;
const SCRATCH_RADIUS = 24;
const REVEAL_THRESHOLD = 0.45;

const ScratchCard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [prize] = useState<Prize>(() => pickRandomPrize());
  const [revealed, setRevealed] = useState(false);
  const [scratching, setScraching] = useState(false);
  const isDrawing = useRef(false);

  // Draw the scratch overlay
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Metallic gradient overlay
    const grad = ctx.createLinearGradient(0, 0, CARD_WIDTH, CARD_HEIGHT);
    grad.addColorStop(0, "#b0b0b0");
    grad.addColorStop(0.3, "#d4d4d4");
    grad.addColorStop(0.5, "#a0a0a0");
    grad.addColorStop(0.7, "#c8c8c8");
    grad.addColorStop(1, "#909090");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, CARD_WIDTH, CARD_HEIGHT);

    // Add text
    ctx.fillStyle = "#666";
    ctx.font = "bold 18px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Scratch here ✨", CARD_WIDTH / 2, CARD_HEIGHT / 2 - 10);
    ctx.font = "14px sans-serif";
    ctx.fillText("to reveal your prize", CARD_WIDTH / 2, CARD_HEIGHT / 2 + 16);
  }, []);

  const getPos = (e: React.TouchEvent | React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    if ("touches" in e) {
      return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
    }
    return { x: (e as React.MouseEvent).clientX - rect.left, y: (e as React.MouseEvent).clientY - rect.top };
  };

  const scratch = useCallback((x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas || revealed) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, SCRATCH_RADIUS, 0, Math.PI * 2);
    ctx.fill();
  }, [revealed]);

  const checkReveal = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || revealed) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const imageData = ctx.getImageData(0, 0, CARD_WIDTH, CARD_HEIGHT);
    let transparent = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) transparent++;
    }
    if (transparent / (CARD_WIDTH * CARD_HEIGHT) > REVEAL_THRESHOLD) {
      setRevealed(true);
    }
  }, [revealed]);

  const handleStart = (e: React.TouchEvent | React.MouseEvent) => {
    e.preventDefault();
    isDrawing.current = true;
    setScraching(true);
    const { x, y } = getPos(e);
    scratch(x, y);
  };

  const handleMove = (e: React.TouchEvent | React.MouseEvent) => {
    e.preventDefault();
    if (!isDrawing.current) return;
    const { x, y } = getPos(e);
    scratch(x, y);
  };

  const handleEnd = () => {
    isDrawing.current = false;
    checkReveal();
  };

  const whatsappMessage = `🎉 I just won "${prize.label}" on BunkRoot Scratch Card! Check out the amazing experiences at https://bunkroot.com`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
  const claimMessage = `Hi! 🎉 I just won "${prize.label}" from the BunkRoot Scratch Card. I'd like to claim my reward!`;
  const claimUrl = `https://wa.me/917907536782?text=${encodeURIComponent(claimMessage)}`;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="py-4 px-4 flex justify-center border-b border-border bg-background/80 backdrop-blur-lg">
        <Link to="/">
          <img
            alt="BunkRoot"
            className="h-7 object-contain"
            src="/lovable-uploads/a8c10aff-a4b8-4442-b6e0-4ed8f1d63934.png"
          />
        </Link>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 gap-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold text-foreground text-center"
        >
          🎁 Your Reward Awaits!
        </motion.h1>
        <p className="text-muted-foreground text-center text-sm max-w-xs">
          Scratch the card below to reveal your exclusive prize from BunkRoot
        </p>

        {/* Scratch Card Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-border"
          style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
        >
          {/* Prize layer underneath */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary/10 via-background to-accent/10 p-6">
            <motion.span
              className="text-6xl"
              animate={revealed ? { scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] } : {}}
              transition={{ duration: 0.6 }}
            >
              {prize.emoji}
            </motion.span>
            <span className="text-2xl font-bold text-foreground text-center">{prize.label}</span>
            <span className="text-sm text-muted-foreground text-center leading-snug">{prize.description}</span>
          </div>

          {/* Canvas scratch overlay */}
          <AnimatePresence>
            {!revealed && (
              <motion.canvas
                ref={canvasRef}
                width={CARD_WIDTH}
                height={CARD_HEIGHT}
                className="absolute inset-0 cursor-pointer touch-none"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                onMouseDown={handleStart}
                onMouseMove={handleMove}
                onMouseUp={handleEnd}
                onMouseLeave={handleEnd}
                onTouchStart={handleStart}
                onTouchMove={handleMove}
                onTouchEnd={handleEnd}
              />
            )}
          </AnimatePresence>

          {/* Confetti overlay on reveal */}
          {revealed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 pointer-events-none"
            >
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: ["hsl(var(--primary))", "hsl(var(--accent))", "#FFD700", "#FF6B6B", "#4ECDC4"][i % 5],
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{ scale: 0, y: 0 }}
                  animate={{
                    scale: [0, 1.5, 0],
                    y: [0, -60 - Math.random() * 80],
                    x: [0, (Math.random() - 0.5) * 100],
                  }}
                  transition={{ duration: 1 + Math.random(), delay: Math.random() * 0.3 }}
                />
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Post-reveal CTAs */}
        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-3 items-center w-full max-w-xs"
            >
              <Button asChild className="w-full bg-[#25D366] hover:bg-[#1da851] text-white font-semibold">
                <a href={claimUrl} target="_blank" rel="noopener noreferrer">
                  Claim on WhatsApp 🎉
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Share with Friends
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link to="/explore">Explore Experiences →</Link>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {!revealed && scratching && (
          <p className="text-xs text-muted-foreground animate-pulse">Keep scratching...</p>
        )}
      </main>

      {/* Footer */}
      <footer className="py-4 px-4 text-center border-t border-border">
        <p className="text-xs text-muted-foreground">
          *Prizes are subject to terms & conditions. Cashback will be applied to your next booking.
        </p>
      </footer>
    </div>
  );
};

export default ScratchCard;
