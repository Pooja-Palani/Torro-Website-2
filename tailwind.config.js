/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#94A4F4",
                accent: "#F8BD64",
            },
        },
    },
    plugins: [],
}
