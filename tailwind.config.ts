import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#9ca3af',
            a: {
              color: '#60a5fa',
              textDecoration: 'none',
              '&:hover': {
                color: '#93c5fd',
                textDecoration: 'underline',
              },
            },
            h1: {
              color: '#f3f4f6',
              fontWeight: '700',
              marginTop: '2em',
            },
            h2: {
              color: '#f3f4f6',
              fontWeight: '600',
              marginTop: '1.5em',
            },
            h3: {
              color: '#f3f4f6',
              fontWeight: '600',
              marginTop: '1.25em',
            },
            h4: {
              color: '#f3f4f6',
              fontWeight: '600',
              marginTop: '1em',
            },
            strong: {
              color: '#f3f4f6',
              fontWeight: '600',
            },
            code: {
              color: '#9ca3af',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
            },
            pre: {
              color: '#9ca3af',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '1em',
              borderRadius: '0.5rem',
              overflowX: 'auto',
            },
            blockquote: {
              borderLeftColor: '#374151',
              color: '#9ca3af',
              fontStyle: 'italic',
              paddingLeft: '1em',
            },
            ul: {
              paddingLeft: '1.5em',
            },
            ol: {
              paddingLeft: '1.5em',
            },
            li: {
              marginTop: '0.5em',
              color: '#9ca3af',
            },
            p: {
              marginTop: '1.25em',
              lineHeight: '1.75',
              color: '#9ca3af',
            },
            hr: {
              borderColor: '#374151',
              marginTop: '2em',
              marginBottom: '2em',
            },
            table: {
              width: '100%',
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            th: {
              padding: '0.75em',
              borderBottom: '1px solid #374151',
              fontWeight: '600',
              color: '#f3f4f6',
            },
            td: {
              padding: '0.75em',
              borderBottom: '1px solid #374151',
              color: '#9ca3af',
            },
            img: {
              borderRadius: '0.5rem',
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config; 