import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#16324f",
        crimson: "#b44b4b",
        clay: "#d98e5f",
        sand: "#f8f5ef",
        paper: "#fffdf8",
        mist: "#e7eef3",
        line: "#d9dde4"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(22, 50, 79, 0.08)",
        card: "0 14px 34px rgba(22, 50, 79, 0.08)"
      },
      borderRadius: {
        xl2: "1.5rem"
      },
      fontFamily: {
        sans: [
          "Avenir Next",
          "IBM Plex Sans",
          "Segoe UI",
          "PingFang SC",
          "Hiragino Sans GB",
          "Microsoft YaHei",
          "system-ui",
          "sans-serif"
        ],
        serif: [
          "Iowan Old Style",
          "Palatino Linotype",
          "Book Antiqua",
          "Georgia",
          "serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
