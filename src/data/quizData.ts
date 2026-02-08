export type VibeType = 
  | "wellness-seeker" 
  | "water-lover" 
  | "swimmer" 
  | "athlete" 
  | "speed-junkie" 
  | "gamer" 
  | "lounge-lover" 
  | "creative-soul";

export interface QuizOption {
  label: string;
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
  description: string;
  category: string;
}

export const vibeResults: Record<VibeType, VibeResult> = {
  "wellness-seeker": {
    type: "wellness-seeker",
    title: "The Wellness Seeker",
    description: "You prioritize recovery and mental clarity. Ice baths, steam sessions, and contrast therapy are your go-to resets.",
    category: "wellness"
  },
  "water-lover": {
    type: "water-lover",
    title: "The Water Lover",
    description: "You're drawn to the water. Kayaking, rafting, paddling — anything on the water makes you feel alive.",
    category: "water-activity"
  },
  swimmer: {
    type: "swimmer",
    title: "The Swimmer",
    description: "You love the pool. Whether it's fitness laps or a casual swim, water is your element.",
    category: "swimming"
  },
  athlete: {
    type: "athlete",
    title: "The Athlete",
    description: "You live for the game. Badminton rallies, pickleball matches, and court time keep your spirit high.",
    category: "sports"
  },
  "speed-junkie": {
    type: "speed-junkie",
    title: "The Speed Junkie",
    description: "You crave adrenaline and speed. Go-karting tracks and riding experiences get your heart racing.",
    category: "riding"
  },
  gamer: {
    type: "gamer",
    title: "The Gamer",
    description: "Console battles, VR worlds, and PC setups are where you thrive. Gaming is your escape.",
    category: "gaming"
  },
  "lounge-lover": {
    type: "lounge-lover",
    title: "The Lounge Lover",
    description: "You come alive in laid-back settings. Billiards, shisha, and evening hangouts are your vibe.",
    category: "lounges"
  },
  "creative-soul": {
    type: "creative-soul",
    title: "The Creative Soul",
    description: "You love making things with your hands. Pottery, workshops, and artistic sessions fuel your creativity.",
    category: "creative"
  }
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "It's Saturday morning. What's calling you?",
    options: [
      { label: "Heart-racing outdoor adventure", scores: { "wellness-seeker": 0, "water-lover": 2, swimmer: 1, athlete: 2, "speed-junkie": 3, gamer: 0, "lounge-lover": 0, "creative-soul": 0 } },
      { label: "Peace and quiet recovery time", scores: { "wellness-seeker": 3, "water-lover": 1, swimmer: 2, athlete: 0, "speed-junkie": 0, gamer: 0, "lounge-lover": 1, "creative-soul": 1 } },
      { label: "Learning something hands-on", scores: { "wellness-seeker": 0, "water-lover": 0, swimmer: 0, athlete: 0, "speed-junkie": 0, gamer: 1, "lounge-lover": 1, "creative-soul": 3 } },
      { label: "Good company and conversations", scores: { "wellness-seeker": 0, "water-lover": 0, swimmer: 0, athlete: 1, "speed-junkie": 0, gamer: 1, "lounge-lover": 3, "creative-soul": 1 } }
    ]
  },
  {
    id: 2,
    question: "Your ideal weekend goal?",
    options: [
      { label: "Feel the adrenaline rush", scores: { "wellness-seeker": 0, "water-lover": 2, swimmer: 0, athlete: 2, "speed-junkie": 3, gamer: 1, "lounge-lover": 0, "creative-soul": 0 } },
      { label: "Reset and recharge my body", scores: { "wellness-seeker": 3, "water-lover": 1, swimmer: 2, athlete: 0, "speed-junkie": 0, gamer: 0, "lounge-lover": 1, "creative-soul": 0 } },
      { label: "Pick up a new skill", scores: { "wellness-seeker": 0, "water-lover": 1, swimmer: 0, athlete: 1, "speed-junkie": 0, gamer: 1, "lounge-lover": 0, "creative-soul": 3 } },
      { label: "Just chill with friends", scores: { "wellness-seeker": 0, "water-lover": 0, swimmer: 0, athlete: 1, "speed-junkie": 0, gamer: 2, "lounge-lover": 3, "creative-soul": 1 } }
    ]
  },
  {
    id: 3,
    question: "How much time do you want to commit?",
    options: [
      { label: "A quick 15-30 min session", scores: { "wellness-seeker": 3, "water-lover": 0, swimmer: 1, athlete: 0, "speed-junkie": 3, gamer: 2, "lounge-lover": 0, "creative-soul": 0 } },
      { label: "About an hour", scores: { "wellness-seeker": 1, "water-lover": 1, swimmer: 3, athlete: 3, "speed-junkie": 1, gamer: 3, "lounge-lover": 1, "creative-soul": 1 } },
      { label: "A couple of hours or more", scores: { "wellness-seeker": 0, "water-lover": 3, swimmer: 1, athlete: 1, "speed-junkie": 0, gamer: 1, "lounge-lover": 3, "creative-soul": 3 } },
      { label: "Whatever feels right", scores: { "wellness-seeker": 1, "water-lover": 1, swimmer: 1, athlete: 1, "speed-junkie": 1, gamer: 1, "lounge-lover": 1, "creative-soul": 1 } }
    ]
  },
  {
    id: 4,
    question: "Who's joining you?",
    options: [
      { label: "Solo mission", scores: { "wellness-seeker": 3, "water-lover": 1, swimmer: 3, athlete: 0, "speed-junkie": 2, gamer: 2, "lounge-lover": 0, "creative-soul": 2 } },
      { label: "My close crew", scores: { "wellness-seeker": 1, "water-lover": 2, swimmer: 1, athlete: 2, "speed-junkie": 2, gamer: 2, "lounge-lover": 3, "creative-soul": 1 } },
      { label: "A bigger group", scores: { "wellness-seeker": 0, "water-lover": 3, swimmer: 1, athlete: 2, "speed-junkie": 1, gamer: 0, "lounge-lover": 2, "creative-soul": 1 } },
      { label: "Surprise me", scores: { "wellness-seeker": 1, "water-lover": 1, swimmer: 1, athlete: 1, "speed-junkie": 1, gamer: 1, "lounge-lover": 1, "creative-soul": 2 } }
    ]
  },
  {
    id: 5,
    question: "Pick your ideal environment:",
    options: [
      { label: "Outdoors with water around", scores: { "wellness-seeker": 1, "water-lover": 3, swimmer: 2, athlete: 0, "speed-junkie": 0, gamer: 0, "lounge-lover": 0, "creative-soul": 0 } },
      { label: "Indoor with AC and comfort", scores: { "wellness-seeker": 1, "water-lover": 0, swimmer: 0, athlete: 1, "speed-junkie": 1, gamer: 3, "lounge-lover": 3, "creative-soul": 1 } },
      { label: "A studio or workshop space", scores: { "wellness-seeker": 1, "water-lover": 0, swimmer: 0, athlete: 0, "speed-junkie": 0, gamer: 0, "lounge-lover": 0, "creative-soul": 3 } },
      { label: "A track or sports court", scores: { "wellness-seeker": 0, "water-lover": 0, swimmer: 0, athlete: 3, "speed-junkie": 3, gamer: 0, "lounge-lover": 0, "creative-soul": 0 } }
    ]
  },
  {
    id: 6,
    question: "What's your budget vibe?",
    options: [
      { label: "Keep it budget-friendly", scores: { "wellness-seeker": 1, "water-lover": 1, swimmer: 3, athlete: 1, "speed-junkie": 1, gamer: 2, "lounge-lover": 1, "creative-soul": 1 } },
      { label: "Worth it for the experience", scores: { "wellness-seeker": 2, "water-lover": 2, swimmer: 1, athlete: 2, "speed-junkie": 2, gamer: 2, "lounge-lover": 2, "creative-soul": 2 } },
      { label: "Go all in for something epic", scores: { "wellness-seeker": 2, "water-lover": 3, swimmer: 0, athlete: 1, "speed-junkie": 2, gamer: 1, "lounge-lover": 3, "creative-soul": 3 } },
      { label: "Money isn't the priority", scores: { "wellness-seeker": 2, "water-lover": 2, swimmer: 2, athlete: 2, "speed-junkie": 2, gamer: 2, "lounge-lover": 2, "creative-soul": 2 } }
    ]
  },
  {
    id: 7,
    question: "What sounds most fun right now?",
    options: [
      { label: "Something athletic or competitive", scores: { "wellness-seeker": 0, "water-lover": 1, swimmer: 1, athlete: 3, "speed-junkie": 2, gamer: 1, "lounge-lover": 0, "creative-soul": 0 } },
      { label: "Something creative or artistic", scores: { "wellness-seeker": 0, "water-lover": 0, swimmer: 0, athlete: 0, "speed-junkie": 0, gamer: 0, "lounge-lover": 1, "creative-soul": 3 } },
      { label: "Something chill and social", scores: { "wellness-seeker": 1, "water-lover": 0, swimmer: 0, athlete: 0, "speed-junkie": 0, gamer: 2, "lounge-lover": 3, "creative-soul": 1 } },
      { label: "Something for my body and mind", scores: { "wellness-seeker": 3, "water-lover": 1, swimmer: 2, athlete: 1, "speed-junkie": 0, gamer: 0, "lounge-lover": 0, "creative-soul": 0 } }
    ]
  },
  {
    id: 8,
    question: "How do you feel about trying new things?",
    options: [
      { label: "I love a good challenge", scores: { "wellness-seeker": 1, "water-lover": 2, swimmer: 0, athlete: 2, "speed-junkie": 3, gamer: 1, "lounge-lover": 0, "creative-soul": 1 } },
      { label: "I like hands-on exploration", scores: { "wellness-seeker": 1, "water-lover": 1, swimmer: 0, athlete: 0, "speed-junkie": 0, gamer: 1, "lounge-lover": 1, "creative-soul": 3 } },
      { label: "I prefer comfort and familiarity", scores: { "wellness-seeker": 2, "water-lover": 0, swimmer: 2, athlete: 2, "speed-junkie": 0, gamer: 3, "lounge-lover": 2, "creative-soul": 0 } },
      { label: "I want to be surprised", scores: { "wellness-seeker": 1, "water-lover": 2, swimmer: 1, athlete: 1, "speed-junkie": 2, gamer: 1, "lounge-lover": 1, "creative-soul": 2 } }
    ]
  }
];

export function calculateVibeResult(answers: Record<number, number>): VibeResult {
  const scores: Record<VibeType, number> = {
    "wellness-seeker": 0,
    "water-lover": 0,
    swimmer: 0,
    athlete: 0,
    "speed-junkie": 0,
    gamer: 0,
    "lounge-lover": 0,
    "creative-soul": 0
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
