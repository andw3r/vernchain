import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        md: "768px",
        lg: "992px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        black: "#1A1A1A",
        grey: "#2A2A2A",
        main: "#C9FA49",
        white: "#FFFFFF",
        silver: "#E1E1E1",
        gradient: "#7A972B",
      },
      screens: {
        xs: "0px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1280px",
        "2xl": "1536px",
      },
      borderRadius: { none: "0", normal: "20px", full: "100px" },
    },
  },
  plugins: [],
};
export default config;
