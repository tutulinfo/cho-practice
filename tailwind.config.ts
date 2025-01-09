import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        oker: "#E1A25B",
        kobalt: "#364E72",
        burgundy: "#75292B",
        koraal: "#ED6B64",
        turquoise: "#00A595",
        grafiet: "#616160",
        zand: "#A09080",
        matGroen: "#A9B5AB",
        matBlauw: "#7C8F95",
        oudRoze: "#CFADB0",
        secondaryWhite: "#f4f4f4",
      },
    },
  },
  plugins: [],
} satisfies Config;
