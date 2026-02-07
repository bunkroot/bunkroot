export type VibeType = 
  | "adventurer" 
  | "nature-lover" 
  | "skill-seeker" 
  | "thrill-chaser" 
  | "mindful" 
  | "athlete" 
  | "socialite" 
  | "offbeat-explorer";

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
    emoji: "⛰️",
    description: "You crave outdoor thrills and physical challenges. Trekking, kayaking, rock climbing, and cycling through unexplored trails are your calling.",
    category: "adventure"
  },
  "nature-lover": {
    type: "nature-lover",
    title: "The Nature Lover",
    emoji: "🌿",
    description: "You find peace in the quiet corners of nature. Birdwatching, stargazing, and foraging for wild herbs fuel your soul.",
    category: "nature"
  },
  "skill-seeker": {
    type: "skill-seeker",
    title: "The Skill Seeker",
    emoji: "🎨",
    description: "You love learning with your hands. Pottery, carpentry, archery, cooking classes, and painting workshops are where you thrive.",
    category: "skill-learning"
  },
  "thrill-chaser": {
    type: "thrill-chaser",
    title: "The Thrill Chaser",
    emoji: "👻",
    description: "You live for the adrenaline rush. Horror walks, night trails, mystery games, and escape rooms get your heart racing.",
    category: "thrill"
  },
  mindful: {
    type: "mindful",
    title: "The Mindful Soul",
    emoji: "🧘",
    description: "You seek inner peace and mental clarity. Yoga hikes, meditation retreats, wellness sessions, and mindful walks are your sanctuary.",
    category: "mindfulness"
  },
  athlete: {
    type: "athlete",
    title: "The Athlete",
    emoji: "⚽",
    description: "You live for the game. Pickup sports, friendly competitions, and active group activities keep your spirit high.",
    category: "sports"
  },
  socialite: {
    type: "socialite",
    title: "The Socialite",
    emoji: "🎲",
    description: "You come alive through human connection. Book clubs, rooftop cinema, board game nights, and group discussions are your jam.",
    category: "social"
  },
  "offbeat-explorer": {
    type: "offbeat-explorer",
    title: "The Offbeat Explorer",
    emoji: "🔮",
    description: "You're drawn to the weird and wonderful. The stranger the experience, the better. Mystery and serendipity are your best friends.",
    category: "offbeat"
  }
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "It's Saturday morning. What's calling you?",
    options: [
      { label: "Heart-racing outdoor adventure", emoji: "🏃", scores: { adventurer: 3, "nature-lover": 1, "skill-seeker": 0, "thrill-chaser": 2, mindful: 0, athlete: 2, socialite: 0, "offbeat-explorer": 1 } },
      { label: "Peace and quiet in nature", emoji: "🌲", scores: { adventurer: 1, "nature-lover": 3, "skill-seeker": 0, "thrill-chaser": 0, mindful: 2, athlete: 0, socialite: 0, "offbeat-explorer": 1 } },
      { label: "Learning something hands-on", emoji: "🎨", scores: { adventurer: 0, "nature-lover": 0, "skill-seeker": 3, "thrill-chaser": 0, mindful: 1, athlete: 0, socialite: 1, "offbeat-explorer": 1 } },
      { label: "Good company and conversations", emoji: "👯", scores: { adventurer: 0, "nature-lover": 0, "skill-seeker": 1, "thrill-chaser": 0, mindful: 1, athlete: 1, socialite: 3, "offbeat-explorer": 1 } }
    ]
  },
  {
    id: 2,
    question: "Your ideal weekend goal?",
    options: [
      { label: "Feel the adrenaline rush", emoji: "⚡", scores: { adventurer: 2, "nature-lover": 0, "skill-seeker": 0, "thrill-chaser": 3, mindful: 0, athlete: 2, socialite: 0, "offbeat-explorer": 1 } },
      { label: "Reset and recharge my mind", emoji: "🧘", scores: { adventurer: 0, "nature-lover": 2, "skill-seeker": 0, "thrill-chaser": 0, mindful: 3, athlete: 0, socialite: 0, "offbeat-explorer": 1 } },
      { label: "Pick up a new skill", emoji: "📚", scores: { adventurer: 0, "nature-lover": 0, "skill-seeker": 3, "thrill-chaser": 0, mindful: 1, athlete: 1, socialite: 1, "offbeat-explorer": 1 } },
      { label: "Make real connections", emoji: "💫", scores: { adventurer: 0, "nature-lover": 0, "skill-seeker": 1, "thrill-chaser": 0, mindful: 1, athlete: 1, socialite: 3, "offbeat-explorer": 1 } }
    ]
  },
  {
    id: 3,
    question: "How much time do you want to commit?",
    options: [
      { label: "A quick 2-hour escape", emoji: "⏱️", scores: { adventurer: 1, "nature-lover": 1, "skill-seeker": 2, "thrill-chaser": 1, mindful: 2, athlete: 2, socialite: 2, "offbeat-explorer": 1 } },
      { label: "Half-day adventure", emoji: "🌤️", scores: { adventurer: 2, "nature-lover": 2, "skill-seeker": 2, "thrill-chaser": 2, mindful: 2, athlete: 2, socialite: 2, "offbeat-explorer": 2 } },
      { label: "Full day immersion", emoji: "🌅", scores: { adventurer: 3, "nature-lover": 3, "skill-seeker": 2, "thrill-chaser": 2, mindful: 2, athlete: 1, socialite: 1, "offbeat-explorer": 2 } },
      { label: "Whatever feels right", emoji: "🤷", scores: { adventurer: 1, "nature-lover": 1, "skill-seeker": 1, "thrill-chaser": 1, mindful: 1, athlete: 1, socialite: 1, "offbeat-explorer": 3 } }
    ]
  },
  {
    id: 4,
    question: "Who's joining you?",
    options: [
      { label: "Solo mission", emoji: "🚶", scores: { adventurer: 2, "nature-lover": 3, "skill-seeker": 2, "thrill-chaser": 1, mindful: 3, athlete: 0, socialite: 0, "offbeat-explorer": 2 } },
      { label: "My close crew", emoji: "👥", scores: { adventurer: 2, "nature-lover": 1, "skill-seeker": 2, "thrill-chaser": 2, mindful: 1, athlete: 2, socialite: 2, "offbeat-explorer": 1 } },
      { label: "Meeting new people", emoji: "🎉", scores: { adventurer: 1, "nature-lover": 0, "skill-seeker": 2, "thrill-chaser": 1, mindful: 1, athlete: 2, socialite: 3, "offbeat-explorer": 2 } },
      { label: "Surprise me", emoji: "🎁", scores: { adventurer: 1, "nature-lover": 1, "skill-seeker": 1, "thrill-chaser": 2, mindful: 1, athlete: 1, socialite: 1, "offbeat-explorer": 3 } }
    ]
  },
  {
    id: 5,
    question: "Pick your ideal environment:",
    options: [
      { label: "Mountains & trails", emoji: "⛰️", scores: { adventurer: 3, "nature-lover": 2, "skill-seeker": 0, "thrill-chaser": 1, mindful: 1, athlete: 2, socialite: 0, "offbeat-explorer": 1 } },
      { label: "Beaches & water", emoji: "🌊", scores: { adventurer: 2, "nature-lover": 2, "skill-seeker": 0, "thrill-chaser": 1, mindful: 3, athlete: 1, socialite: 1, "offbeat-explorer": 1 } },
      { label: "Forests & night", emoji: "🌙", scores: { adventurer: 1, "nature-lover": 3, "skill-seeker": 0, "thrill-chaser": 3, mindful: 1, athlete: 0, socialite: 0, "offbeat-explorer": 2 } },
      { label: "Anywhere unexpected", emoji: "🗺️", scores: { adventurer: 1, "nature-lover": 1, "skill-seeker": 1, "thrill-chaser": 1, mindful: 1, athlete: 1, socialite: 1, "offbeat-explorer": 3 } }
    ]
  },
  {
    id: 6,
    question: "What's your budget vibe?",
    options: [
      { label: "Keep it budget-friendly", emoji: "💸", scores: { adventurer: 1, "nature-lover": 2, "skill-seeker": 2, "thrill-chaser": 1, mindful: 2, athlete: 2, socialite: 2, "offbeat-explorer": 1 } },
      { label: "Worth it for the experience", emoji: "💰", scores: { adventurer: 2, "nature-lover": 2, "skill-seeker": 2, "thrill-chaser": 2, mindful: 2, athlete: 2, socialite: 2, "offbeat-explorer": 2 } },
      { label: "Go all in for something epic", emoji: "🚀", scores: { adventurer: 3, "nature-lover": 1, "skill-seeker": 1, "thrill-chaser": 3, mindful: 1, athlete: 1, socialite: 1, "offbeat-explorer": 2 } },
      { label: "Money isn't the priority", emoji: "✨", scores: { adventurer: 2, "nature-lover": 2, "skill-seeker": 2, "thrill-chaser": 2, mindful: 3, athlete: 1, socialite: 3, "offbeat-explorer": 2 } }
    ]
  },
  {
    id: 7,
    question: "What skill would you love to pick up?",
    options: [
      { label: "Something athletic or physical", emoji: "🏋️", scores: { adventurer: 2, "nature-lover": 0, "skill-seeker": 1, "thrill-chaser": 1, mindful: 0, athlete: 3, socialite: 0, "offbeat-explorer": 1 } },
      { label: "Creative or artistic", emoji: "🎭", scores: { adventurer: 0, "nature-lover": 0, "skill-seeker": 3, "thrill-chaser": 0, mindful: 2, athlete: 0, socialite: 1, "offbeat-explorer": 2 } },
      { label: "Survival or outdoor skills", emoji: "🏕️", scores: { adventurer: 3, "nature-lover": 3, "skill-seeker": 2, "thrill-chaser": 1, mindful: 0, athlete: 1, socialite: 0, "offbeat-explorer": 1 } },
      { label: "Social or communication", emoji: "🗣️", scores: { adventurer: 0, "nature-lover": 0, "skill-seeker": 1, "thrill-chaser": 0, mindful: 1, athlete: 1, socialite: 3, "offbeat-explorer": 1 } }
    ]
  },
  {
    id: 8,
    question: "How do you feel about the unknown?",
    options: [
      { label: "I love conquering challenges", emoji: "💪", scores: { adventurer: 3, "nature-lover": 1, "skill-seeker": 1, "thrill-chaser": 2, mindful: 0, athlete: 2, socialite: 0, "offbeat-explorer": 1 } },
      { label: "I embrace the mystery", emoji: "🔮", scores: { adventurer: 1, "nature-lover": 1, "skill-seeker": 1, "thrill-chaser": 2, mindful: 1, athlete: 0, socialite: 1, "offbeat-explorer": 3 } },
      { label: "I prefer some predictability", emoji: "📋", scores: { adventurer: 0, "nature-lover": 1, "skill-seeker": 2, "thrill-chaser": 0, mindful: 2, athlete: 2, socialite: 2, "offbeat-explorer": 0 } },
      { label: "I want to be scared", emoji: "😱", scores: { adventurer: 1, "nature-lover": 0, "skill-seeker": 0, "thrill-chaser": 3, mindful: 0, athlete: 0, socialite: 0, "offbeat-explorer": 2 } }
    ]
  }
];

export function calculateVibeResult(answers: Record<number, number>): VibeResult {
  const scores: Record<VibeType, number> = {
    adventurer: 0,
    "nature-lover": 0,
    "skill-seeker": 0,
    "thrill-chaser": 0,
    mindful: 0,
    athlete: 0,
    socialite: 0,
    "offbeat-explorer": 0
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
