import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--c-bg)",
        "background-2": "var(--c-bg-2)",
        surface: "var(--c-surface)",
        "surface-2": "var(--c-surface-2)",
        foreground: "var(--c-fg)",
        muted: "var(--c-muted)",
        heading: "var(--c-heading)",
        accent: "var(--c-accent)",
        "accent-2": "var(--c-accent-2)",
        line: "var(--c-line)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "var(--font-ethiopic)", "sans-serif"],
        sans: ["var(--font-body)", "var(--font-ethiopic)", "system-ui", "sans-serif"],
        nav: ["var(--font-nav)", "var(--font-ethiopic)", "sans-serif"],
      },
      maxWidth: {
        container: "1180px",
      },
      boxShadow: {
        glow: "0 8px 30px rgba(0,255,135,.45)",
        "glow-lg": "0 12px 38px rgba(0,255,135,.6)",
        card: "0 30px 80px rgba(0,0,0,.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "fade-up": "fade-up .7s ease both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
