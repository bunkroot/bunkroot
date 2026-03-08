

## Scratch Card Page

A standalone page at `/scratch` that you can share as a WhatsApp link. The prize is randomly determined client-side based on configurable probabilities when the user scratches.

### How it works

1. **You share a link** like `https://bunkroot.lovable.app/#/scratch` to someone on WhatsApp after they send proof
2. They open it and see a scratch card with a canvas overlay (gray/sparkly layer)
3. They scratch with finger/mouse to reveal the prize underneath
4. Prize is randomly picked from a weighted probability table defined in code

### Prize Configuration (hardcoded, easy to edit)

Since there's no backend/database, prizes and probabilities will be stored in a data file (`src/data/scratchCardData.ts`). You edit this file to change prizes anytime.

Example structure:
```
Prize Pool:
- ₹10 cashback   → 40% chance
- ₹20 cashback   → 25% chance
- ₹50 cashback   → 10% chance
- ₹100 cashback  → 5% chance
- 5% off booking → 10% chance
- 8% off booking → 7% chance
- 10% off booking → 3% chance
```

### Technical Approach

**Files to create:**
- `src/data/scratchCardData.ts` — prize definitions with labels, descriptions, and probability weights
- `src/pages/ScratchCard.tsx` — the scratch card page

**Files to modify:**
- `src/App.tsx` — add `/scratch` route

**Scratch effect:** HTML5 Canvas overlay with `globalCompositeOperation = 'destination-out'` for the erasing effect. Touch and mouse events supported. Once ~50% is scratched, auto-reveal with a celebration animation.

**Page layout:**
- BunkRoot branding header
- Centered scratch card with metallic/gradient overlay
- Prize revealed underneath with confetti-style animation
- "Share on WhatsApp" or "Book Now" CTA after reveal
- Footer note about terms

### Important Note

Since this is fully client-side with no auth, a tech-savvy user could inspect the page source to see all prizes. This is acceptable for a promotional scratch card. If you need tamper-proof prizes later, we'd need a backend (Supabase) to determine prizes server-side.

