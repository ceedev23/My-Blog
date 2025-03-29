import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#e5e7eb",
            h1: {
              color: "#f3f4f6",
            },
            h2: {
              color: "#f3f4f6",
            },
            h3: {
              color: "#f3f4f6",
            },
            h4: {
              color: "#f3f4f6",
            },
            strong: {
              color: "#f3f4f6",
            },
            code: {
              color: "#e5e7eb",
            },
            pre: {
              color: "#e5e7eb",
            },
            blockquote: {
              color: "#d1d5db",
            },
            "blockquote p": {
              color: "#d1d5db",
            },
            li: {
              color: "#e5e7eb",
            },
            a: {
              color: "#60a5fa",
              "&:hover": {
                color: "#93c5fd",
              },
            },
            th: {
              color: "#f3f4f6",
            },
            td: {
              color: "#e5e7eb",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config; 