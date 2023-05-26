/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        mealsappear: {
          from: { opacity: "0", transform: "translateY(3rem)" },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: " mealsappear 1s ease-out forwards",
    },
  },
  plugins: [],
};
