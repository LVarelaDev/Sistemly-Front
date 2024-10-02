import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes:{
        light: {
          colors:{
            danger:{
              DEFAULT: '#EF4444',
              foreground: '#FFFFFF'
            },
            success:{
              DEFAULT:"#10b981",
              foreground:"#fff"
            },
            primary:{
              DEFAULT:"#4f46e5",
              foreground:"#fff"
            }
          }
        },
        dark:{
          colors:{
            danger:{
              DEFAULT: '#EF4444',
              foreground: '#FFFFFF'
            },
            success:{
              DEFAULT:"#10b981",
              foreground:"#fff"
            },
            primary:{
              DEFAULT:"#4f46e5",
              foreground:"#fff"
            }
          }
        }
      }
    }),
  ],
};
