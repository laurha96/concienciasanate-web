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
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "border-subtle": "var(--border-subtle)",
        "card-bg": "var(--card-bg)",
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
        card: "0 8px 24px rgba(0,0,0,0.06)",
        soft: "0 4px 12px rgba(0,0,0,0.05)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      backgroundImage: {
        "gradient-main": "linear-gradient(135deg, var(--background-soft), var(--background-main))",
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
