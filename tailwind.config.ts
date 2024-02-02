import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#d900ff",
          secondary: "#939300",
          accent: "#00c4ae",
          neutral: "#342824",
          info: "#00e7ff",
          success: "#00e684",
          warning: "#a67000",
          error: "#ff0051",
          body: {
            "background-color": "#e3e6e6",
          },
        },
      },
    ],
  },
};
export default config;
