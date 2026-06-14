# Task: Add Starfield, Confetti on Blow-out, Fix Hydration Errors

## Summary of Changes Made

### 1. StarfieldBG Component (`/home/z/my-project/src/app/page.tsx`)
- Added a new `StarfieldBG` React component (lines ~1019-1151) before the `Home` component
- Canvas-based animated starfield with:
  - 80 twinkling stars using theme colors (#e8897a, #f2c4b8, #c9995a, #fff9f6, #e8c98a, #ffffff)
  - Stars twinkle (vary opacity) and slowly drift
  - Occasional shooting stars (bright streaks that fade)
  - Fixed position, behind everything (z-index: 0, pointer-events: none, opacity: 0.6)
  - Uses useEffect for all canvas rendering to avoid hydration mismatch
  - Non-null assertion for ctx to avoid TypeScript errors
- Added `<StarfieldBG />` as first child inside the Home component's JSX fragment

### 2. Confetti on Candle Blow-out (`/home/z/my-project/src/app/page.tsx`)
- Added `confettiTriggered` flag in CakeCanvas useEffect (line ~527)
- When `isBlownOut` first becomes true and `blowProgress < 0.05`:
  - Triggers `createExplosion()` with 80 particles in theme colors
  - Triggers `createFlash()` with rgba(232,137,122,0.3) for a warm glow effect
  - Only fires once (guarded by `confettiTriggered` flag)

### 3. SVG Circle Hydration Fix (`/home/z/my-project/src/app/page.tsx`)
- Replaced `.map()` with `Math.cos()/Math.sin()` calculations in SealedReveal with hardcoded position arrays
- Outer ring (8 circles at radius 150 from center 160,160):
  `[[310,160],[266.07,266.07],[160,310],[53.93,266.07],[10,160],[53.93,53.93],[160,10],[266.07,53.93]]`
- Inner ring (6 circles at radius 110 from center 160,160):
  `[[270,160],[215,255.26],[105,255.26],[50,160],[105,64.74],[215,64.74]]`
- These hardcoded values ensure identical rendering on server and client, eliminating hydration mismatches

### 4. CSS Updates (`/home/z/my-project/src/app/globals.css`)
- Added `.starfield-bg` CSS class (position: fixed, inset: 0, z-index: 0, pointer-events: none)
- Updated dark section backgrounds (sec-1, sec-3, sec-4, sec-5, sec-6) to use rgba with slight transparency (0.88-0.92 alpha) so the starfield can subtly show through
- Left sec-2 (light section) unchanged since stars wouldn't be visible there anyway

### 5. "Blow!" Text Positioning
- Verified the existing positioning is correct: text is positioned below the cake bottom using `bottomLayerBottom + 80 * scale` offset. No changes needed.

## Files Modified
- `/home/z/my-project/src/app/page.tsx`
- `/home/z/my-project/src/app/globals.css`
