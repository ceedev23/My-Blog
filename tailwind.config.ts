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
            color: "#ffffff",
            h1: {
              color: "#ffffff",
            },
            h2: {
              color: "#ffffff",
            },
            h3: {
              color: "#ffffff",
            },
            h4: {
              color: "#ffffff",
            },
            strong: {
              color: "#ffffff",
            },
            code: {
              color: "#ffffff",
            },
            pre: {
              color: "#ffffff",
            },
            blockquote: {
              color: "#ffffff",
            },
            "blockquote p": {
              color: "#ffffff",
            },
            li: {
              color: "#ffffff",
            },
            a: {
              color: "#60a5fa",
              "&:hover": {
                color: "#93c5fd",
              },
            },
            th: {
              color: "#ffffff",
            },
            td: {
              color: "#ffffff",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config; 