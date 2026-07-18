---
name: Velvet & Crumb
colors:
  surface: '#fff8f6'
  surface-dim: '#f8d1cb'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0ee'
  surface-container: '#ffe9e5'
  surface-container-high: '#ffe2dd'
  surface-container-highest: '#ffdad4'
  on-surface: '#2b1613'
  on-surface-variant: '#4f4445'
  inverse-surface: '#422a26'
  inverse-on-surface: '#ffedea'
  outline: '#807475'
  outline-variant: '#d2c3c4'
  surface-tint: '#70585b'
  primary: '#70585b'
  on-primary: '#ffffff'
  primary-container: '#fadadd'
  on-primary-container: '#765e61'
  inverse-primary: '#debfc2'
  secondary: '#516161'
  on-secondary: '#ffffff'
  secondary-container: '#d4e6e5'
  on-secondary-container: '#576867'
  tertiary: '#636037'
  on-tertiary: '#ffffff'
  tertiary-container: '#e9e4b0'
  on-tertiary-container: '#69653c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fbdbde'
  primary-fixed-dim: '#debfc2'
  on-primary-fixed: '#281719'
  on-primary-fixed-variant: '#574144'
  secondary-fixed: '#d4e6e5'
  secondary-fixed-dim: '#b8cac9'
  on-secondary-fixed: '#0e1e1e'
  on-secondary-fixed-variant: '#3a4a49'
  tertiary-fixed: '#eae4b1'
  tertiary-fixed-dim: '#cdc897'
  on-tertiary-fixed: '#1e1c00'
  on-tertiary-fixed-variant: '#4b4822'
  background: '#fff8f6'
  on-background: '#2b1613'
  surface-variant: '#ffdad4'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
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
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The brand personality is **indulgent, artisanal, and refined**. It targets a discerning clientele looking for high-end confectionery for celebrations or luxury gifting. The UI must evoke a sense of "quiet luxury"—the digital equivalent of a high-end patisserie in Paris or London.

The design style is a blend of **Contemporary Minimalism** and **Tactile Sophistication**. It prioritizes generous whitespace to let high-resolution food photography act as the primary visual driver. Elements are treated with soft, organic curves and subtle depth to mimic the texture of creams and frostings, avoiding the sterile feeling of traditional corporate design.

- **Emotional Response:** Curation, delight, premium quality, and effortless grace.
- **Visual Direction:** Airy layouts, high-contrast editorial typography, and a "soft-touch" interface.

## Colors

The palette is inspired by a "Sweet & Sophisticated" pastry box, using creamy pastels balanced by deep, edible tones.

- **Primary (Petal Pink):** Used for primary actions, highlight states, and brand-expressive elements.
- **Secondary (Mint Cream):** Used for secondary backgrounds, success states, or flavor-based categorization.
- **Tertiary (Lemon Chiffon):** Used sparingly for promotional accents or "Limited Edition" tags.
- **Neutral (Bitter Chocolate):** This rich dark brown replaces pure black for all typography and borders to maintain warmth and sophistication.
- **Surface (Warm White):** A slightly off-white base that feels more premium and less clinical than pure hex white.

## Typography

The typography strategy relies on a high-contrast pairing between an editorial serif and a welcoming, modern sans-serif.

- **Headlines:** **Playfair Display** provides the "sophisticated" edge. Use it for product titles, section headers, and hero statements. It should always be set in the Neutral (Chocolate) color.
- **Body & UI:** **Plus Jakarta Sans** is used for all functional text. Its soft, rounded terminals complement the overall aesthetic while maintaining high readability for ingredient lists and shipping details.
- **Labels:** Use uppercase for labels to create a clear hierarchy and an "at-a-glance" shop experience.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** model with expansive margins to emphasize the premium nature of the brand.

- **Grid:** A 12-column grid for desktop and a 4-column grid for mobile.
- **Rhythm:** Spacing is based on a 4px/8px baseline. Use larger increments (64px, 80px, 120px) between sections to create a "gallery" feel.
- **Mobile Reflow:** For product listings, transition from a 3-column grid on desktop to a single-column wide-card format on mobile to keep food photography appetizing and large.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layering** and **Ambient Shadows**.

- **Shadows:** Use extremely soft, diffused shadows with a slight warm tint (`rgba(62, 39, 35, 0.08)`). Shadows should look like "lifted paper" rather than heavy plastic.
- **Surfaces:** Use the Primary (Pink) or Secondary (Mint) colors at 5-10% opacity for container backgrounds to separate content sections without using hard lines.
- **Interactions:** Hover states on cards should involve a subtle scale-up (1.02x) and a slightly deeper shadow to mimic a physical object being picked up.

## Shapes

The shape language is **Soft and Organic**, echoing the rounded forms of macarons and cakes. 

- **Components:** Standard buttons and input fields use a medium radius (8px). 
- **Containers:** Large product cards and modal windows use a more pronounced radius (16px to 24px) to feel friendly and inviting.
- **Iconography:** Use "Rounded" or "Soft" icon sets. Avoid sharp corners or hairline thin strokes.

## Components

- **Buttons:** Primary buttons are filled with the Neutral (Chocolate) color for maximum contrast against pastel backgrounds, using white or pink text. Secondary buttons use a Primary (Pink) outline or a soft pastel fill.
- **Cards:** Product cards should have zero border but a soft ambient shadow. The image should occupy at least 70% of the card area.
- **Input Fields:** Use a subtle Creamy White background with a 1px Bitter Chocolate border that thickens slightly on focus.
- **Chips/Tags:** Use for dietary requirements (e.g., "Gluten-Free," "Vegan"). These should be pill-shaped with Secondary (Mint) backgrounds.
- **Lists:** Use elegant, custom bullet points (like a small petal or dot) in the Primary color.
- **Specialty Component - "The Pastry Selector":** A horizontal scrolling carousel of large, circular category icons representing flavor profiles or pastry types.