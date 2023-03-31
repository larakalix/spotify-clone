/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "spoty-green": "#1ed760",
                "spoty-gray": "#333333",
                "barely-black": "#121212",
                "barely-gray": "rgb(255 255 255 / 10%)",
                "card-black": "#181818",
            },
        },
    },
    plugins: [],
};
