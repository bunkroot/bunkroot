export type VibeType = "adventurer" | "chiller" | "culture-seeker" | "connector" | "wanderer";

export interface QuizOption {
  label: string;
  emoji: string;
  scores: Record<VibeType, number>;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface VibeResult {
  type: VibeType;
  title: string;
  emoji: string;
  description: string;
  category: string;
}

export const vibeResults: Record<VibeType, VibeResult> = {
  adventurer: {
    type: "adventurer",
    title: "The Adventurer",
    emoji: "⚡",
    description: "You crave adrenaline and the thrill of the unknown. Haunted forests, mystery islands, and wild kayak rides are calling your name.",
    category: "thrill"
  },
  chiller: {
    type: "chiller",
    title: "The Chill Escaper",
    emoji: "🧘",
    description: "You need space to breathe, reset, and reconnect with yourself. Sunrise meditations and peaceful beaches are your sanctuary.",
    category: "calm"
  },
  "culture-seeker": {
    type: "culture-seeker",
    title: "The Culture Seeker",
    emoji: "🎭",
    description: "You're drawn to stories, traditions, and authentic local experiences. Treasure hunts through old cities and fishing with locals fuel your soul.",
    category: "culture"
  },
  connector: {
    type: "connector",
    title: "The Social Explorer",
    emoji: "🤝",
    description: "You come alive through meaningful human connections. Candlelit truth rooms and group adventures are where you find your tribe.",
    category: "connection"
  },
  wanderer: {
    type: "wanderer",
    title: "The Curious Wanderer",
    emoji: "🌀",
    description: "You're open to anything life throws at you. The stranger, the better. Mystery and serendipity are your best friends.",
    category: "strange"
  }
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "It's Saturday morning. What's calling you?",
    options: [
      { label: "Heart-racing adventure", emoji: "🏃", scores: { adventurer: 3, chiller: 0, "culture-seeker": 1, connector: 1, wanderer: 1 } },
      { label: "Peace and quiet", emoji: "☕", scores: { adventurer: 0, chiller: 3, "culture-seeker": 1, connector: 1, wanderer: 1 } },
      { label: "Something I've never tried", emoji: "🎲", scores: { adventurer: 1, chiller: 0, "culture-seeker": 1, connector: 1, wanderer: 3 } },
      { label: "Good company", emoji: "👯", scores: { adventurer: 1, chiller: 1, "culture-seeker": 1, connector: 3, wanderer: 0 } }
    ]
  },
  {
    id: 2,
    question: "Your ideal weekend goal?",
    options: [
      { label: "Feel alive again", emoji: "⚡", scores: { adventurer: 3, chiller: 1, "culture-seeker": 1, connector: 1, wanderer: 1 } },
      { label: "Reset my mind", emoji: "🧘", scores: { adventurer: 0, chiller: 3, "culture-seeker": 1, connector: 1, wanderer: 1 } },
      { label: "Learn something new", emoji: "📚", scores: { adventurer: 1, chiller: 1, "culture-seeker": 3, connector: 1, wanderer: 1 } },
      { label: "Make real connections", emoji: "💫", scores: { adventurer: 1, chiller: 1, "culture-seeker": 1, connector: 3, wanderer: 1 } }
    ]
  },
  {
    id: 3,
    question: "How much time do you want to commit?",
    options: [
      { label: "A quick 2-hour escape", emoji: "⏱️", scores: { adventurer: 1, chiller: 3, "culture-seeker": 1, connector: 1, wanderer: 1 } },
      { label: "Half-day adventure", emoji: "🌤️", scores: { adventurer: 2, chiller: 2, "culture-seeker": 2, connector: 2, wanderer: 2 } },
      { label: "Full day immersion", emoji: "🌅", scores: { adventurer: 3, chiller: 1, "culture-seeker": 3, connector: 2, wanderer: 2 } },
      { label: "Whatever feels right", emoji: "🤷", scores: { adventurer: 1, chiller: 1, "culture-seeker": 1, connector: 1, wanderer: 3 } }
    ]
  },
  {
    id: 4,
    question: "Who's joining you?",
    options: [
      { label: "Solo mission", emoji: "🚶", scores: { adventurer: 2, chiller: 3, "culture-seeker": 2, connector: 0, wanderer: 2 } },
      { label: "My crew", emoji: "👥", scores: { adventurer: 2, chiller: 1, "culture-seeker": 2, connector: 3, wanderer: 1 } },
      { label: "Meeting new people", emoji: "🎉", scores: { adventurer: 2, chiller: 1, "culture-seeker": 2, connector: 3, wanderer: 2 } },
      { label: "Surprise me", emoji: "🎁", scores: { adventurer: 1, chiller: 1, "culture-seeker": 1, connector: 1, wanderer: 3 } }
    ]
  },
  {
    id: 5,
    question: "Pick your vibe:",
    options: [
      { label: "Beaches & water", emoji: "🌊", scores: { adventurer: 2, chiller: 3, "culture-seeker": 1, connector: 1, wanderer: 1 } },
      { label: "Forests & night", emoji: "🌙", scores: { adventurer: 3, chiller: 1, "culture-seeker": 1, connector: 1, wanderer: 2 } },
      { label: "Streets & stories", emoji: "🏛️", scores: { adventurer: 1, chiller: 1, "culture-seeker": 3, connector: 2, wanderer: 1 } },
      { label: "Anywhere unexpected", emoji: "🗺️", scores: { adventurer: 1, chiller: 1, "culture-seeker": 1, connector: 1, wanderer: 3 } }
    ]
  },
  {
    id: 6,
    question: "What's your budget vibe?",
    options: [
      { label: "Keep it budget-friendly", emoji: "💸", scores: { adventurer: 1, chiller: 3, "culture-seeker": 2, connector: 2, wanderer: 1 } },
      { label: "Worth it for the experience", emoji: "💰", scores: { adventurer: 3, chiller: 1, "culture-seeker": 2, connector: 2, wanderer: 2 } },
      { label: "Go all in for something epic", emoji: "🚀", scores: { adventurer: 3, chiller: 0, "culture-seeker": 2, connector: 2, wanderer: 2 } },
      { label: "Money isn't the priority", emoji: "✨", scores: { adventurer: 2, chiller: 2, "culture-seeker": 2, connector: 3, wanderer: 2 } }
    ]
  }
];

export function calculateVibeResult(answers: Record<number, number>): VibeResult {
  const scores: Record<VibeType, number> = {
    adventurer: 0,
    chiller: 0,
    "culture-seeker": 0,
    connector: 0,
    wanderer: 0
  };

  Object.entries(answers).forEach(([questionId, optionIndex]) => {
    const question = quizQuestions.find(q => q.id === Number(questionId));
    if (question && question.options[optionIndex]) {
      const optionScores = question.options[optionIndex].scores;
      Object.entries(optionScores).forEach(([vibe, score]) => {
        scores[vibe as VibeType] += score;
      });
    }
  });

  const topVibe = Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b)[0] as VibeType;
  return vibeResults[topVibe];
}
