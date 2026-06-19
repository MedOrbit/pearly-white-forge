## Goal
Make the before/after treatments visible above the fold on desktop without scrolling, without changing the doctor image or breaking the existing structure.

## Approach
Reuse the existing `CompactBeforeAfter` component (already used on mobile) and render it as a slim horizontal strip directly under the hero columns on desktop too. The full `BeforeAfterShowcase` further down the page stays exactly as it is.

## Changes (single file: `src/components/DentalLanding.tsx`)

1. In the hero section (around line 494–497), remove the `lg:hidden` restriction on the CompactBeforeAfter wrapper so it renders on all breakpoints:
   - From: `<div className="max-w-7xl mx-auto mt-4 lg:hidden">`
   - To:   `<div className="max-w-7xl mx-auto mt-6 lg:mt-8">`

2. Tighten the hero's bottom padding so the strip fits within ~900px viewport height:
   - Line 425: `pb-8 lg:pb-12` → `pb-6 lg:pb-6`

3. Inside `CompactBeforeAfter` (around line 300), make sure the desktop variant shows multiple cards in a row (it already renders a horizontal scroll/grid — verify and, if needed, add `lg:grid-cols-4` so 4 cases are visible without scroll on desktop). No prop API change.

4. Leave the full `<BeforeAfterShowcase showHeader={false} />` block (lines 500–502) untouched — it continues to serve as the deeper section below the fold.

## What is NOT changing
- Doctor image, headline, CTA, badges, reviews row — untouched.
- `BeforeAfterShowcase` component and its data — untouched.
- Section order, routes, other pages — untouched.

## Verification
- Run `bun run build` to confirm no type/build errors.
- Visually check at 1280×900 desktop and at mobile widths that the strip appears under the hero and the doctor image is unchanged.
