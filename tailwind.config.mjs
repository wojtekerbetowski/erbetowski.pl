import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        // Define your color palette here for better consistency
        primary: defaultTheme.colors.stone,
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            a: {
              fontWeight: '400',
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  // Improve build performance
  future: {
    hoverOnlyWhenSupported: true,
  },
};
