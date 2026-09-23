---
name: ui-ux-pro-max
description: Design intelligence skill with a searchable database of 67 UI styles, 161 color palettes, 57 font pairings, 25 chart types, and 99 UX guidelines for creating polished, professional UIs. Use when the user wants to build a web page, design a UI, create a landing page, style a component, pick colors/fonts/charts, or needs UX guidance. Triggers on any UI/UX design request.
---

# UI/UX Pro Max - Design Intelligence

A comprehensive design intelligence skill that provides a searchable database of UI styles, color palettes, font pairings, chart types, UX guidelines, and stack-specific best practices.

## 4-Step Workflow

### Step 1: Analyze Requirements
Extract from the user's request:
- **Product Type**: SaaS, e-commerce, portfolio, blog, dashboard, landing page, etc.
- **Style Keywords**: Minimal, playful, luxury, brutalist, organic, retro, etc.
- **Industry**: Tech, healthcare, fashion, finance, education, etc.
- **Tech Stack**: React, Vue, Next.js, HTML/Tailwind, Svelte, etc.

### Step 2: Search Design Database
Use `scripts/search.py` to query across domains:
```bash
python scripts/search.py "<query>" --domains product,style,typography,color,landing,chart,ux,stack
```
- **product**: Match product type to known patterns
- **style**: Find matching UI styles (67 styles available)
- **typography**: Get font pairings (57 pairings)
- **color**: Find color palettes (161 palettes)
- **landing**: Landing page patterns
- **chart**: Chart type recommendations (25 types)
- **ux**: UX guidelines (99 guidelines)
- **stack**: Framework-specific best practices (16 stacks)

### Step 3: Generate Design System
Synthesize search results into a coherent design system:
- **Typography**: Primary font + secondary font pairing
- **Color Palette**: Primary, secondary, accent, background, text colors
- **Spacing**: Consistent spacing scale
- **Component Patterns**: Buttons, cards, inputs, navigation
- **Animation**: Subtle transitions and micro-interactions

### Step 4: Apply Stack Guidelines
Default stack is `html-tailwind`. Apply stack-specific patterns for:
- React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, and more

## Design Resources

### UI Styles (67 total)
Covers: Minimalism, Brutalism, Glassmorphism, Neumorphism, Retro-futurism, Art Deco, Bauhaus, Memphis, Swiss Design, Organic, Luxury, Playful, Editorial, Industrial, and more.

### Color Palettes (161 total)
Organized by mood: Warm, Cool, Neutral, Vibrant, Muted, Dark, Light, Pastel, Earth, Ocean, Forest, Sunset, Monochrome, Duotone.

### Font Pairings (57 total)
Combinations of display + body fonts. Examples:
- Playfair Display + Lato (elegant)
- Montserrat + Merriweather (modern)
- Fira Code + Inter (developer)

### Chart Types (25 total)
Bar, Line, Pie, Scatter, Area, Radar, Heatmap, Treemap, Sankey, Gantt, and more.

### UX Guidelines (99 total)
Accessibility, responsiveness, loading states, error handling, empty states, onboarding, navigation patterns, form design, search, filtering, pagination.

### Tech Stacks (16 total)
React, Next.js, Vue, Svelte, Angular, Solid, Astro, Remix, Nuxt, SwiftUI, React Native, Flutter, HTML/Tailwind, Bootstrap, Material UI, Chakra UI.

## Output Format

Always produce a design specification before coding:

```
## Design System: [Project Name]

### Aesthetic Direction
[Style choice + rationale]

### Typography
- Display: [Font] ([weight])
- Body: [Font] ([weight])

### Color Palette
- Primary: #XXXXXX
- Secondary: #XXXXXX
- Accent: #XXXXXX
- Background: #XXXXXX
- Text: #XXXXXX

### Component Preview
[Describe key components]

### Stack: [Framework]
[Stack-specific patterns]
```
