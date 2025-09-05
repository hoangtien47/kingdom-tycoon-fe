import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#fef7ee",
          100: "#fdedd3",
          200: "#fad7a5",
          300: "#f6ba6d",
          400: "#f19533",
          500: "#ed7611",
          600: "#de5a07",
          700: "#b84308",
          800: "#93350e",
          900: "#772c0f",
        },
        secondary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
      },
      fontFamily: {
        pixel: ["Pixelify Sans", "monospace"],
        fantasy: ["Cinzel", "serif"],
        medieval: ["Uncial Antiqua", "cursive"],
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "kingdom-gradient": "linear-gradient(45deg, #f093fb 0%, #f5576c 100%)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in": "fadeIn 0.8s ease-out",
        "bounce-slow": "bounce 2s infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
