import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#ffffff",

        primary: "#ffffff",
        secondary: "#a1a1aa",

        card: "#111111",
        border: "#262626",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
      },

      boxShadow: {
        glow: "0 0 40px rgba(255,255,255,0.08)",
      },

      backdropBlur: {
        xs: "2px",
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },

        fadeUp: {
          from: {
            opacity: "0",
            transform: "translateY(40px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },

        pulseSlow: {
          "0%,100%": {
            opacity: "1",
          },
          "50%": {
            opacity: ".6",
          },
        },
      },

      animation: {
        float: "float 4s ease-in-out infinite",
        fadeUp: "fadeUp .8s ease forwards",
        pulseSlow: "pulseSlow 3s infinite",
      },
    },
  },

  plugins: [],
};

export default config;
