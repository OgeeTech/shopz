/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {

            colors: {
                shopz: {
                    50: '#fdf2f8',
                    100: '#fce7f3',
                    500: '#ec4899',
                    600: '#db2777',
                    900: '#831843',
                },
                tradaz: {
                    50: '#ecf7f1',
                    100: '#d6efe2',
                    200: '#addfc6',
                    300: '#84cfaa',
                    400: '#6bc091',
                    500: '#5cac7d', // ✅ base brand color
                    600: '#4b9469',
                    700: '#3c7654',
                    800: '#2d5840',
                    900: '#1e3a2b',
                },
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}