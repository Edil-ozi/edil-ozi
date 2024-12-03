import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./content/**/*.mdx", "./registry/**/*.{ts,tsx}"],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1600px",
      },
    },
    extend: {
      screens: {
        isHoverSupport: { raw: "(hover: hover)" },
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        keyframes: {},
        animation: {},
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "fit" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
      shimmer: {
        from: {
          backgroundPosition: "0 0",
        },
        to: {
          backgroundPosition: "-200% 0",
        },
      },
      "logo-carousel": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(calc(-100% - 2rem))" },
      },
      pulse: {
        "0%": {
          boxShadow: "0 0 0 #0B6E4F90",
          rotate: "20deg",
        },
        "50%": {
          rotate: "-20deg",
        },

        "75%": {
          boxShadow: "0 0 0 10px #0B6E4F60",
        },

        "100%": {
          boxShadow: "0 0 0 13px #0B6E4F30",
          rotate: "0",
        },
      },
      wave: {
        "50%": {
          transform: "scale(0.9)",
        },
      },
      "fade-out": {
        "0%": {
          backgroundColor: "inherit",
          outline: "1px solid currentColor",
        },

        "30%": {
          background: "transparent",
        },
        "100%": {
          outline: "1px solid transparent",
        },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.5s ease-in-out forwards",
      "accordion-up": "accordion-up 0.2s ease-out",
      shimmer: "shimmer 2s linear infinite",
      "logo-carousel": "logo-carousel 12s linear infinite",
      pulse: "pulse 500ms ease-in-out",
      "fade-out": "fade-out 0.8s ease",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
