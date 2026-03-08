export interface Prize {
  id: string;
  label: string;
  description: string;
  emoji: string;
  type: "cashback" | "discount";
  value: number;
  /** Relative weight — higher = more likely */
  weight: number;
}

export const prizes: Prize[] = [
  // Cashback prizes
  { id: "cash10", label: "₹10 Cashback", description: "You won ₹10 cashback! Claim now to receive it instantly via UPI 💸", emoji: "💰", type: "cashback", value: 10, weight: 40 },
  { id: "cash20", label: "₹20 Cashback", description: "You won ₹20 cashback! Claim now to receive it instantly via UPI 💸", emoji: "💰", type: "cashback", value: 20, weight: 25 },
  { id: "cash50", label: "₹50 Cashback", description: "Amazing! You won ₹50 cashback! Claim now to get it via UPI 💸", emoji: "🤑", type: "cashback", value: 50, weight: 5 },
  { id: "cash100", label: "₹100 Cashback", description: "Jackpot! You won ₹100 cashback! Claim now to get it via UPI 💸", emoji: "🎉", type: "cashback", value: 100, weight: 2 },
  // Discount prizes
  { id: "disc5", label: "5% Off Booking", description: "You got 5% off your next BunkRoot experience!", emoji: "🎟️", type: "discount", value: 5, weight: 15 },
  { id: "disc8", label: "8% Off Booking", description: "Nice! 8% off your next BunkRoot experience!", emoji: "🎫", type: "discount", value: 8, weight: 10 },
  { id: "disc10", label: "10% Off Booking", description: "Wow! 10% off your next BunkRoot experience!", emoji: "🏷️", type: "discount", value: 10, weight: 3 },
];

export function pickRandomPrize(): Prize {
  const totalWeight = prizes.reduce((sum, p) => sum + p.weight, 0);
  let random = Math.random() * totalWeight;
  for (const prize of prizes) {
    random -= prize.weight;
    if (random <= 0) return prize;
  }
  return prizes[0];
}
