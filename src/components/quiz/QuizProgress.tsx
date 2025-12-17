import { motion } from "framer-motion";

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
}

const QuizProgress = ({ currentQuestion, totalQuestions }: QuizProgressProps) => {
  const progress = ((currentQuestion) / totalQuestions) * 100;

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <div className="flex justify-between text-sm text-muted-foreground mb-2">
        <span>Question {currentQuestion} of {totalQuestions}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="h-2 bg-card border border-border rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default QuizProgress;
