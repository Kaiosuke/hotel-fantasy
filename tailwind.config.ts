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
        primary: "#fff",
        secondary: "#000",
        "bg-primary": "#94b2bb",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: true,
  },
} satisfies Config;
