/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "/src/**/*.{js,ts,jsx,tsx}", // <--- Make sure this line matches your actual folder structure
    ],
    theme: {
        extend: {
            // "colors" must be inside "extend" to add to existing colors,
            // or inside "theme" to replace all default colors.
            colors: {
                shopz: {
                    50: '#fdf2f8',
                    100: '#fce7f3',
                    500: '#ec4899',
                    600: '#db2777',
                    900: '#831843',
                }
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}