/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // iPad Mini portrait CSS width is ~744px; default md (768) leaves Mini in phone layout
            screens: {
                tablet: '744px',
            },
            colors: {
                primary: "#94A4F4",
                accent: "#F8BD64",
            },
            fontFamily: {
                sans: ['Comfortaa', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
