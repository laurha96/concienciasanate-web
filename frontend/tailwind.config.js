/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-primary": "var(--green-primary)",
        "green-secondary": "var(--green-secondary)",
        "green-soft": "var(--green-soft)",
        "green-light": "var(--green-light)",
        "background-main": "var(--background-main)",
        "background-soft": "var(--background-soft)",
        "soft-beige": "var(--soft-beige)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "border-subtle": "var(--border-subtle)",
        "card-bg": "var(--card-bg)",
        "brand-background": "var(--brand-background)",
        "brand-surface": "var(--brand-surface)",
        "brand-muted": "var(--brand-muted)",
        "brand-primary-dark": "var(--brand-primary-dark)",
        "brand-border": "var(--brand-border)",
        "brand-text-main": "var(--brand-text-main)",
        "brand-text-soft": "var(--brand-text-soft)",
      },
      fontFamily: {
        sans: ["var(--font-brand-sans)", "Inter", "ui-sans-serif", "system-ui"],
        display: [
          "var(--font-brand-display)",
          "DM Sans",
          "ui-sans-serif",
          "system-ui",
        ],
      },
      boxShadow: {
        card: "var(--brand-shadow-card)",
        soft: "var(--brand-shadow-soft)",
        glow: "var(--brand-shadow-glow)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      backgroundImage: {
        "gradient-main": "var(--gradient-main)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
