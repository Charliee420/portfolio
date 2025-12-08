/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0ea5e9", // Sky 500 - similar to the teal/blue in reference
                secondary: "#64748b", // Slate 500
                dark: "#020617", // Slate 950 - Deep dark background
                card: "#1e293b", // Slate 800 - Card background
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
