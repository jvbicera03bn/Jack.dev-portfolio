/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "profile-cover": 'url("/profile-cover.jpg")',
                "about-me-img": "url('/about-me-cover.png')",
            },
            backgroundPosition: {
                "profile-cover-pos": "0rem -32rem",
            },
            colors: {
                "spot-black-bg": "#121212",
                "spot-black-pannel": "#181818",
                "spot-black-pannel-hover": "#282828",
                "spot-profile-pannel": "#313131",
            },
            boxShadow: {
                "spot-def": "0px 0px 10px 0px rgba(0,0,0,0.1);",
                "circle-img": "0px 0px 0px 25px rgba(0,0,0,0.03)",
                "notes-visitor":
                    "inset 0px -75px 170px -150px rgba(0,0,0,0.5) , inset 0px 75px 170px -150px rgba(0,0,0,0.5)",
            },
            scale:{
                "about":'1.01'
            }
        },
    },
    plugins: [],
};
