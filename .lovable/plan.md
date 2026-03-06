

## Plan: Add "Explore Food" Section

### Overview
Add a new "Explore Food" feature with a teaser section on the home page (after "Pick Your Vibe") and a dedicated `/food` page showing trending food spots in the city. Cards will feature the food dish as the primary image/title, with restaurant name as secondary, plus price per person and location.

### New Files

**1. `src/data/foodData.ts`**
- Define a `FoodSpot` interface: `id`, `dishName`, `image` (placeholder URLs initially), `restaurant`, `pricePerPerson` (e.g. "₹250"), `location`, `category` (e.g. "Biryani", "Seafood", "Cafe", "Street Food"), `trending` (boolean for home teaser)
- Export ~12 sample food entries with placeholder images (Unsplash food URLs)
- Export `getTrendingFood()` helper returning 4-6 trending items for the home teaser

**2. `src/pages/Food.tsx`**
- Full food exploration page matching existing design language (dark theme, motion animations)
- Header + Footer, search input, category filter badges (horizontal scroll like Explore page)
- Grid of food cards (2 cols mobile, 3 cols desktop):
  - Large food image as hero
  - Dish name as primary bold title
  - Restaurant name as secondary text
  - Price per person + location at bottom
- Categories: Biryani, Seafood, Cafe, Street Food, Desserts, Drinks

### Modified Files

**3. `src/pages/Home.tsx`**
- Insert a new "Explore Food" teaser section between "Pick Your Vibe" and "Quick Escapes"
- Title: "WHAT'S TRENDING" with subtitle about food in the city
- Horizontal scrollable row of 4-6 food cards (smaller, compact)
- "Explore All Food →" CTA button linking to `/food`

**4. `src/App.tsx`**
- Add route: `<Route path="/food" element={<Food />} />`

**5. `src/components/Header.tsx`**
- Add "Food" nav link to the navigation array

### Card Design (Food)
- Image takes ~70% height, rounded top corners
- Bottom section: dish name (bold, white), restaurant name (muted, smaller), then a row with "₹X/person" (primary color) and location (muted)
- Dark card background with border, consistent with experience cards

