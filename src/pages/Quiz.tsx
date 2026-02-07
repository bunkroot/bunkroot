import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Target } from "lucide-react";
import { quizQuestions, calculateVibeResult, VibeResult } from "@/data/quizData";
import QuizProgress from "@/components/quiz/QuizProgress";
import QuizQuestion from "@/components/quiz/QuizQuestion";
import QuizResultComponent from "@/components/quiz/QuizResult";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<VibeResult | null>(null);
  const [showIntro, setShowIntro] = useState(true);

  const handleAnswer = (optionIndex: number) => {
    const questionId = quizQuestions[currentQuestionIndex].id;
    const newAnswers = { ...answers, [questionId]: optionIndex };
    setAnswers(newAnswers);

    // Auto-advance after short delay
    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // Calculate result
        const vibeResult = calculateVibeResult(newAnswers);
        setResult(vibeResult);
      }
    }, 300);
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setResult(null);
    setShowIntro(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(143,255,0,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(204,255,0,0.06),transparent_50%)]" />
      </div>

      {/* Header */}
      <header className="relative z-10 p-4 md:p-6">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden md:inline">Back to Home</span>
          </Link>
          {result && (
            <button
              onClick={handleRestart}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Retake Quiz
            </button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 relative z-10">
        <AnimatePresence mode="wait">
          {showIntro ? (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center max-w-lg"
            >
              <motion.div
                className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[hsl(var(--neon-start))]/20 to-[hsl(var(--neon-end))]/20 border-2 border-accent/30 flex items-center justify-center"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
              >
                <Target className="w-10 h-10 md:w-12 md:h-12 text-accent" />
              </motion.div>
              <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Find Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))]">
                  Weekend Vibe
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Answer 8 quick questions and discover which BunkRoot experiences are perfect for you.
              </p>
              <motion.button
                onClick={() => setShowIntro(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold text-lg rounded-lg hover:shadow-[0_0_30px_rgba(143,255,0,0.4)] transition-shadow"
              >
                Start Quiz (60 seconds) →
              </motion.button>
            </motion.div>
          ) : result ? (
            <QuizResultComponent key="result" result={result} />
          ) : (
            <motion.div
              key="questions"
              className="w-full max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <QuizProgress
                currentQuestion={currentQuestionIndex + 1}
                totalQuestions={quizQuestions.length}
              />

              {currentQuestionIndex > 0 && (
                <button
                  onClick={handleBack}
                  className="mb-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
              )}

              <QuizQuestion
                question={quizQuestions[currentQuestionIndex]}
                onAnswer={handleAnswer}
                selectedAnswer={answers[quizQuestions[currentQuestionIndex].id]}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Quiz;
