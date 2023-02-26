const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            "primary": {
                light: colors.rose["500"],
                dark: colors.rose["300"]
            },
            "onPrimary": {
                light: colors.rose["50"],
                dark: colors.rose["800"]
            },
            light: colors.neutral["50"],
            dark: colors.neutral["800"],
            onLight: colors.neutral["900"],
            onDark: colors.neutral["200"]
        },
    },
    plugins: [],
}
