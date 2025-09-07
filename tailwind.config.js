/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          zentry: ["zentry", "sans-serif"],
          general: ["general", "sans-serif"],
          "circular-web": ["circular-web", "sans-serif"],
          "robert-medium": ["robert-medium", "sans-serif"],
          "robert-regular": ["robert-regular", "sans-serif"],
        },
        colors: {
          blue: {
            50: "#DFDFF0",
            75: "#dfdff2",
            100: "#F0F2FA",
            200: "#010101",
            300: "#4FB7DD",
          },
          violet: {
            50: "#f0f0ff",
            300: "#5724ff",
          },
          yellow: {
            100: "#8e983f",
            300: "#edff66",
          },
          gray: {
            500: "#6b7280",
          },
          neutral: {
            800: "#262626",
          },
        },
      },
    },
    plugins: [],
  };