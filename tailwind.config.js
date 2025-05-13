// tailwind.config.js
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        // Add other directories as needed
    ],
    theme: {
        extend: {
            colors: {
                purple: {
                    600: "#7c3aed",
                    700: "#6d28d9",
                    900: "#0F172A"
                },
            },
            fontFamily: {
                sans: ["Inter", "ui-sans-serif", "system-ui"],
            },
        },
    },
    plugins: [],
}