

## Plan: Replace Wellness and Swimming Category Icons

### What changes
1. **Copy uploaded images** to `src/assets/`:
   - `user-uploads://pngtree-useful-hot-tub-isolated-on-transparent-background-png-image_18393794.png` → `src/assets/cat-wellness.png` (hot tub for Wellness)
   - `user-uploads://—Pngtree—blue_goggles_20946889_1.png` → `src/assets/cat-swimming.png` (goggles for Swimming)

2. **Add slight tilt** to the illustration `<img>` tags in the category cards in `src/pages/Home.tsx` — apply a CSS `transform: rotate(-8deg)` (or similar small angle) to match the tilted style of other category icons. This will be applied via a `style` prop or Tailwind's `-rotate-6` class on the image element.

No other files need changes since the imports already reference `cat-wellness.png` and `cat-swimming.png`.

### Technical details
- The existing category card layout centers illustrations with `h-20 w-20 md:h-24 md:w-24` sizing and `object-contain`.
- Adding a tilt class like `"-rotate-6"` to all category images will give them a consistent slight tilt. Alternatively, a per-category rotation map can be used if different angles are desired.

