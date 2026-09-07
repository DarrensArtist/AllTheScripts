# Shared site foundation

Phase 1 establishes the brand assets, design tokens, component styles, and accessible navigation behaviour used by new AllTheScripts pages.

## Public brand assets

The approved package has been reduced to the public assets the website currently needs:

- `assets/brand/allthescripts-logo-primary.png` — full-colour horizontal logo for warm-white and light surfaces (1200 × 320, transparent)
- `assets/brand/allthescripts-logo-on-dark.png` — horizontal logo for midnight and dark surfaces (1343 × 305, transparent)
- `assets/brand/allthescripts-icon.png` — standalone full-colour symbol for compact and profile use (512 × 512, transparent)
- `assets/brand/favicon.ico` — browser favicon (16 × 16)
- `assets/brand/apple-touch-icon.png` — Apple home-screen icon (180 × 180)

The package preview, concept reference, alternate exports, and package README are deliberately not copied into the served asset directory. Source/reference material remains in the supplied visual-package ZIP outside the website repository.

## Styles

`assets/css/site.css` is the shared source for:

- the approved colour palette and afterglow gradient
- system sans-serif body typography and warm editorial serif display typography
- spacing, widths, borders, radii, shadows, and focus tokens
- light cards and midnight feature surfaces
- headings, body copy, labels, links, actions, status tags, media-safe sizing, header, navigation, and footer
- responsive single-, two-, and three-column layouts
- reduced-motion behaviour

Project pages may override shared custom properties on a page-level class while retaining the same header, navigation, focus, and footer structure. This is the intended extension point for the future `7 Is Watching` theme.

## Shell behaviour

`assets/js/site-navigation.js` provides the shared mobile-navigation behaviour and current-page state. The shell:

- uses the approved light-surface wordmark in the header and dark-surface wordmark in the footer
- links the logo to `/`
- exposes Work, Lab, Workflow, and About as the primary labels
- uses existing useful destinations until the Phase 2 replacement routes exist, avoiding empty or broken public pages
- changes the menu's accessible name and expanded state
- moves focus into the opened menu, contains keyboard focus while open, closes on selection or Escape, and restores focus on Escape
- automatically adds `aria-current="page"` when a navigation destination matches the current route

The homepage is the Phase 1 integration point for the shell. Legacy content pages retain their existing shell until their replacements are implemented and their URLs are accounted for in later phases.

## Verification completed

- Visually inspected the approved logo on warm-white and midnight surfaces.
- Inspected the live shell in a browser at its default responsive size and at 1280 × 900.
- Verified the mobile menu's accessibility state, focus movement, Escape dismissal, and focus restoration.
- Verified no horizontal overflow at a 320-pixel viewport after accounting for the browser scrollbar.
- Verified the desktop layout has no horizontal overflow at a 1280-pixel viewport.
- Verified the homepage's referenced internal files resolve locally and the browser console reports no errors.
- Preserved all legacy routes, old assets, `CNAME`, and Project Snake files.
