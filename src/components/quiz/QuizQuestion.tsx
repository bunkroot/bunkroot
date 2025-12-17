import { motion } from "framer-motion";
import { QuizQuestion as QuizQuestionType } from "@/data/quizData";

interface QuizQuestionProps {
  question: QuizQuestionType;
  onAnswer: (optionIndex: number) => void;
  selectedAnswer?: number;
}

const QuizQuestion = ({ question, onAnswer, selectedAnswer }: QuizQuestionProps) => {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-2xl mx-auto"
    >
      <h2 className="text-2xl md:text-4xl font-display font-bold text-center mb-8 md:mb-12">
        {question.question}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => onAnswer(index)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className={`p-6 rounded-xl border-2 text-left transition-all ${
              selectedAnswer === index
                ? "border-[hsl(var(--neon-start))] bg-[hsl(var(--neon-start))]/10"
                : "border-border bg-card hover:border-[hsl(var(--neon-start))]/50"
            }`}
          >
            <span className="text-3xl mb-3 block">{option.emoji}</span>
            <span className="text-lg font-semibold">{option.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuizQuestion;
