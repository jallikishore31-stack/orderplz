# Design & Development Guidelines

This document serves as the standard operating procedure for the UI/UX and codebase of the OrderPlz Canteen Website to ensure a highly professional, clean, and elegant outcome.

## 1. Design Aesthetics & Branding

### A. Color Palette
- **Primary Brand Color:** Deep Royal Blue (`#2563EB`) - Conveys trust and professionalism.
- **Accent Color:** Muted Teal (`#14B8A6`) or Soft Coral (`#F43F5E`) - For important call-to-actions like "Add to Cart" or "Pay Now".
- **Background Color:** Off-white / Very Light Gray (`#F8FAFC`) - To keep the design feeling light, ultra-clean, and easy on the eyes.
- **Card/Container Background:** Pure White (`#FFFFFF`) with a subtle, diffuse CSS box shadow for an elegant floating effect (`box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)`).
- **Text Color:** Dark Slate Gray (`#1E293B`) for primary text, lighter Slate (`#64748B`) for secondary text.

### B. Typography
- Use a modern sans-serif stack, preferably from Google Fonts. 
- **Font Family:** 'Inter', 'Roboto', or 'Outfit'. 
- Headers should be bold and crisp, while body text should prioritize maximum legibility with increased `line-height` (e.g., `1.6`).

### C. UI Components
- **Buttons:** Rounded edges (`border-radius: 8px` or pill-shaped `border-radius: 9999px`), no borders, smooth hover state transformations (e.g., slight lift via `transform: translateY(-2px)` or background color darkening).
- **Inputs:** Clean borders (`1px solid #E2E8F0`), padding for breathing room, removing default outlines, and utilizing a gentle outer glow on `:focus`.

## 2. Feature Implementation Guidelines

### A. Multiple Dashboards
- Separate the styling and routing logically.
- The **Admin Dashboard** should prioritize data density and quick actions (tables for orders, toggle switches for item availability).
- The **Customer Dashboard** should prioritize visual appeal, large product photography, and ease of clicking.

### B. Cart System
- Must be a persistent element (e.g., a sticky sidebar or an easily accessible modal).
- Must automatically calculate price × quantity natively via JavaScript before form submission.
- Ensure the total updates seamlessly without total page reloads.

### C. Secure Payment Interface
- Visual cues: Use lock icons and phrases like "SSL Secured Checkout".
- Structure: Clear input fields that validate client-side before sending data. No raw sensitive data should be visibly logged.

### D. Clean Text & Exclusions
- Do not add fake or redundant text blocks. Every word should serve a purpose (e.g., "Crispy, golden fries tossed in our signature spice blend").
- Ensure absolutely NO mentions of the canteen location, map embeds, or addresses. Keep it entirely digital.

## 3. Code Standards
- Use Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- All interactive elements must have unique IDs for easy DOM manipulation.
- CSS should be vanilla but maintainable structure, using `:root` for color and sizing variables.
