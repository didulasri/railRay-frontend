import flowbiteReact from "flowbite-react/plugin/tailwindcss";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Add this
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbiteReact],
};
