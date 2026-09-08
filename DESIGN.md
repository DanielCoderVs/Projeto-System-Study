---
name: StudyFlow
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  h1:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  h1-mobile:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  max-width: 1280px
---

## Brand & Style
The design system is built for high-stakes focus and cognitive clarity. Targeting serious students and civil service candidates, the visual language prioritizes the reduction of mental fatigue through a refined **Minimalist** aesthetic. 

Drawing heavy inspiration from modern, utility-first interfaces like shadcn/ui, the system utilizes generous whitespace, crisp geometry, and a deliberate lack of decorative "noise." The emotional response is one of calm productivity—moving the user from the chaos of study materials into a structured "flow state." The interface acts as a silent partner, fading into the background to let the content and progress metrics take center stage.

## Colors
The palette is rooted in a functional "Executive Blue" that signals trust and logic. 

- **Primary (#2563EB):** Reserved for primary actions and active states. It should be used sparingly to maintain its signaling power.
- **Surface & Background:** A high-contrast relationship between White (#FFFFFF) and Slate-50 (#F8FAFC) creates subtle depth without needing heavy shadows.
- **Semantic Accents:** Use the secondary Blue (#3B82F6) for informational highlights and progress tracking.

**Dark Mode Implementation:**
In dark mode, the hierarchy inverts. The background becomes the deepest Slate-950 (#0F172A), while card surfaces rise to Slate-800 (#1E293B). Text shifts from Slate-900 to Slate-50 to maintain maximum legibility for long reading sessions.

## Typography
This design system uses **Inter** exclusively to leverage its exceptional legibility and systematic feel. 

- **Hierarchy:** Headlines use tighter letter-spacing and heavier weights to create a sense of authority. 
- **Body Text:** The standard body size is 16px to ensure comfort during long-form reading of study notes or exam questions.
- **Labels:** Small labels use medium/bold weights to remain distinct even at 12px.
- **Scaling:** On mobile, H1 headers scale down to prevent awkward text wrapping, while body text remains consistent to preserve readability.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a strict 4px baseline rhythm. 

- **Desktop:** 12-column grid with 24px gutters. The content is centered within a 1280px max-width container to prevent line lengths from becoming too wide for comfortable reading.
- **Mobile:** 4-column grid with 16px margins. 
- **Rhythm:** Use "md" (16px) for standard component padding and "lg" (24px) for section vertical spacing. This airy approach prevents the UI from feeling cluttered even when displaying dense study data.

## Elevation & Depth
The design system employs **Tonal Layers** combined with **Low-contrast outlines**. This ensures the UI feels modern and "flat" while maintaining clear object separation.

- **Level 0 (Background):** Base color (#F8FAFC), no shadow.
- **Level 1 (Cards/Surfaces):** White background with a 1px border (#E2E8F0) and a very soft, high-diffusion shadow: `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)`.
- **Level 2 (Popovers/Modals):** Floating elements use a more pronounced shadow to indicate higher z-index and interaction focus.
- **Interactions:** Subtle scale transitions (e.g., 98% scale on press) provide tactile feedback without visual clutter.

## Shapes
The shape language is "Soft-Modern." Using a **Rounded** (8px) base radius creates an approachable feel while maintaining a professional, structured look.

- **Buttons & Inputs:** Use the standard 8px (0.5rem) radius.
- **Cards:** Use the `rounded-lg` (16px) for larger layout containers to create a distinct framing effect.
- **Indicators:** Progress bars and status tags (chips) should use the `rounded-full` (pill) style to distinguish them from interactive structural components.

## Components
- **Buttons:** Solid Primary blue for the main action. Ghost or Outline variants for secondary actions to maintain hierarchy. Use a consistent height (40px for MD, 48px for LG).
- **Cards:** White surfaces with a 1px Slate-200 border. Use 24px internal padding for desktop.
- **Progress Bars:** Use a 8px height with a soft gray background and the primary blue for the fill. Add a subtle "glow" or secondary blue highlight for "Goal Reached" states.
- **Input Fields:** 1px Slate-200 borders that transition to 2px Primary Blue on focus. Labels should be positioned above the field in `label-md`.
- **Chips/Badges:** Small, low-saturation backgrounds (e.g., Light Blue background with Primary Blue text) for category tags like "Mathematics" or "Law."
- **Lists:** Clean rows with 1px bottom borders, using `body-md` for primary items and `body-sm` for secondary metadata.
- **Study Timer:** A specialized component using a large `h1` display and high-contrast start/stop buttons to minimize interaction friction during sessions.