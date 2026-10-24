---
name: Civic Horizon
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
  on-surface-variant: '#424654'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#727786'
  outline-variant: '#c2c6d7'
  surface-tint: '#0058c9'
  primary: '#0056c4'
  on-primary: '#ffffff'
  primary-container: '#196eef'
  on-primary-container: '#fefcff'
  inverse-primary: '#b0c6ff'
  secondary: '#115abf'
  on-secondary: '#ffffff'
  secondary-container: '#6096fe'
  on-secondary-container: '#002e6b'
  tertiary: '#00647c'
  on-tertiary: '#ffffff'
  tertiary-container: '#007f9d'
  on-tertiary-container: '#fafdff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e2ff'
  primary-fixed-dim: '#b0c6ff'
  on-primary-fixed: '#001944'
  on-primary-fixed-variant: '#00429a'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#aec6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004396'
  tertiary-fixed: '#b7eaff'
  tertiary-fixed-dim: '#69d4f8'
  on-tertiary-fixed: '#001f28'
  on-tertiary-fixed-variant: '#004e61'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  code-tracker:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system drives a public grievance and public aspiration gateway for local regional government. The brand persona balances bureaucratic authority, public accountability, and empathetic citizen-first accessibility. It strips away archaic, friction-laden bureaucratic tropes in favor of clarity, radical transparency, and intuitive workflow navigation.

### Visual Style
- **Movement:** Modern Civic-Tech meets Functional Minimalism.
- **Tone:** Authoritative, responsive, reliable, and approachable.
- **Tactility:** Crisp white cards elevated against soft slate-blue atmospheric backdrops, structured data tables, high-contrast statuses, and purposeful functional color cues.
- **Intended Emotional Response:** Confidence that an issue will be tracked and resolved, relief from administrative confusion, and institutional trust.

## Colors

The palette leverages high-trust blues anchored by strong slate darks and balanced with purposeful civic status accents.

### Core Swatches
- **Primary Civic Blue (`#2373F4`):** Primary interactions, primary brand anchors, active navigation states, key action buttons.
- **Secondary Sky (`#578EF5`):** Sub-actions, interactive hover transitions, category tags.
- **Highlight Cyan (`#65D0F4`):** Real-time trackers, information highlights, progress bar completions, live badges.
- **Pastel Lime Accent (`#F2F7A0`):** Special highlights, counter badges, citizen advisory alerts, and high-visibility indicators.
- **Neutral Dark (`#0F172A`):** Display headers, body typography, active card titles.
- **Neutral Light Stack:** 
  - Canvas / Page Background: `#F8FAFC`
  - Container Surfaces: `#FFFFFF`
  - Subtle Well / Input Neutral: `#F1F5F9`
  - Hairline Borders: `#E2E8F0`

### Semantic Lifecycle Status Colors
Complaint states require instant, non-ambiguous differentiation across citizen dashboards and administrative consoles:
- **Baru (Submitted / New):** Background `#EFF6FF`, Text/Border `#1D4ED8` (Blue)
- **Diverifikasi (Verified):** Background `#ECFEFF`, Text/Border `#0891B2` (Cyan)
- **Diproses (In Review / Processing):** Background `#FFFBEB`, Text/Border `#D97706` (Amber)
- **Selesai (Resolved):** Background `#ECFDF5`, Text/Border `#059669` (Emerald)
- **Ditolak (Rejected / Invalid):** Background `#FFF1F2`, Text/Border `#E11D48` (Rose)

## Typography

The typographic hierarchy couples **Plus Jakarta Sans** for headlines and brand entry points with **Inter** for form labels, long-form administrative summaries, and public dispute threads.

- **Plus Jakarta Sans:** Warm geometric terminals make municipal reporting feel accessible rather than intimidating.
- **Inter:** Ensures maximum legibility for incident reports, legal caveats, GPS metadata, and timestamp tracking across varying screens.
- Numerical ticket identifiers (e.g., `#LAPOR-2024-8849`) utilize uppercase `code-tracker` styling with slight letter spacing to facilitate quick verbal read-backs over dispatch desks.

## Layout & Spacing

A responsive 12-column fluid grid system on desktop shifts to a 6-column grid on tablets and a 4-column flow on mobile viewports.

### Breakpoints & Adaptive Rules
- **Desktop (1200px+):** Max layout container capped at 1280px. Split dual-column ticket layouts (citizen input on left, geo-tagging + tracking previews on right). Gutter set to `1.5rem`, outer margins set to `2rem`.
- **Tablet (768px - 1199px):** 6-column fluid structure. Administrative toolbars fold search and filter chips into scrollable carousels.
- **Mobile (< 768px):** Single-column stacked layout with full-width primary touch targets (`min-height: 48px`). Outer margins scale down to `1rem` to optimize screen real estate for incident descriptions and multi-photo uploads.
- **Component Rhythm:** Interior card paddings use `space-lg` (`1.5rem`) on desktop and automatically scale down to `space-md` (`1rem`) on handheld devices.

## Elevation & Depth

This system avoids heavy, muddy drop shadows to maintain a clean, institutional look. Visual hierarchy relies on tonal differentiation, structured structural borders, and subtle, cool-toned ambient diffusion.

### Layers & Surfaces
- **Canvas Base:** `#F8FAFC`. Provides soft contrast beneath pure white cards.
- **Level 1 (Default Containers & Cards):** Pure `#FFFFFF` surface combined with a 1px solid border in `#E2E8F0` and subtle elevation: `box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.04)`.
- **Level 2 (Active/Hovered Incident Cards, Dropdowns):** Subtle upward lift with: `box-shadow: 0 10px 15px -3px rgba(35, 115, 244, 0.07), 0 4px 6px -4px rgba(15, 23, 42, 0.05)`.
- **Level 3 (Modal Dialogs, Sticky Action Drawers):** `box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.05)` accompanied by a backdrop overlay of `rgba(15, 23, 42, 0.45)` with a `backdrop-filter: blur(4px)`.

## Shapes

The design uses a clean **Rounded (Level 2)** profile to project modern accessibility while preserving the structured authority of a municipal platform.

- **Standard Elements (0.5rem / 8px):** Form controls, inputs, standard cards, contextual popovers, tabular containers.
- **Large Containers (1rem / 16px):** Main complaint submission modular containers, statistic cards, verification hero containers.
- **Extra Large Containers (1.5rem / 24px):** Citizen modal interfaces, bottom sheets on mobile.
- **Full Pill (`9999px`):** Complaint lifecycle badges (`Baru`, `Diproses`, etc.), category selector chips, floating incident ticket IDs.

## Components

### Buttons
- **Primary:** High-saturation `#2373F4` fill with white text. Subtle gradient overlay option (`linear-gradient(180deg, #2373F4 0%, #1A64DB 100%)`). Focus ring: 3px `#65D0F4` with 2px offset. Hover moves to `#1A64DB`.
- **Secondary:** White background with `#2373F4` label and a 1.5px border in `#578EF5`. Hover background shifts to `#EFF6FF`.
- **Destructive:** `#FFF1F2` background with `#E11D48` text and border for dispute escalations or retraction of submitted claims.

### Status Badges (Pills)
- Rendered using `label-sm` with full pill radius (`9999px`), padding: `4px 12px`.
- Includes a 6px circular dot indicator matching the border tint to reinforce visual accessibility for color-deficient users alongside clear localized Indonesian copy (`Baru`, `Diverifikasi`, `Diproses`, `Selesai`, `Ditolak`).

### Input Fields & Search Bars
- Standard height: 44px (48px for primary search).
- Inactive state: `#FFFFFF` fill, 1px `#E2E8F0` border, `#0F172A` text, and `#94A3B8` placeholder.
- Active / Focus: Border transitions to `#2373F4` with a soft glow ring (`box-shadow: 0 0 0 3px rgba(35, 115, 244, 0.15)`).
- Search fields integrate an inline civic classification prefix dropdown (e.g., `Semua Kategori`, `Infrastruktur`, `Bansos`).

### File & Evidence Uploader
- Container: Dashed 1.5px border in `#578EF5` over `#F8FAFC`.
- Interactive file queue displaying thumbnail previews, file size metadata, upload progress bar in `#65D0F4`, and quick deletion actions.

### Cards (Complaint Cards)
- Background `#FFFFFF`, border 1px `#E2E8F0`, interior padding `space-lg`.
- Top row: Ticket ID (`code-tracker`), category pill, timestamp.
- Middle row: Incident headline (`headline-sm`), truncated citizen summary (`body-md`), thumbnail evidence attachments.
- Bottom row: Geographic tag (e.g., `Kec. Danau Teluk`), verified authority assigned, and current status pill aligned to the right.

### Public Progress Timeline (Tracker)
- Vertical stepped timeline detailing date, municipal agency responsible, official notes, and before-and-after photo comparisons upon resolution. Connected by 2px vertical guide lines in `#E2E8F0` (completed steps in `#2373F4`).