import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        harmony: [
          "HarmonyOS Sans SC",
          "HarmonyOS_Sans_SC",
          "PingFang SC",
          "Microsoft YaHei",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
