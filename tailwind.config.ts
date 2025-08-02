import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
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
  plugins: [require("daisyui"), require("tailwindcss-animate")],
} satisfies Config;
