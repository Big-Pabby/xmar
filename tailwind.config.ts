import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        Hairstheme: {
          primary: "#D94823",
          secondary: "#FFFFFF",
          accent: "#707A8F",
          neutral: "#F8F8F9",
          warning: "#FF3636",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
