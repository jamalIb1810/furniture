/** @type {import('tailwindcss').Config} */

const tailcolors = require('tailwindcss/colors');
// const colors = {
//     ...tailcolors,
//     ...{
//         myprimary: '#022A3A',
//         secondary: '#64F0E3',
//         accent: '#37cdbe',
//         neutral: '#3d4451',
//         base100: '#ffffff',
//         evest: '#022A3A',
//         evest: {
//             100: '#ccd4d8',
//             200: '#9aaab0',
//             300: '#677f89',
//             400: '#355561',
//             500: '#022a3a',
//             600: '#02222e',
//             700: '#011923',
//             800: '#011117',
//             900: '#00080c',
//         },
//         primary: {
//             100: '#cde6e6',
//             200: '#9bcccc',
//             300: '#69b3b3',
//             400: '#379999',
//             500: '#058080',
//             600: '#046666',
//             700: '#034d4d',
//             800: '#023333',
//             900: '#011a1a',
//         },
//         white: '#FFFFFF',
//         evestGreen: {
//             100: '#cfe6e5',
//             200: '#a0cccb',
//             300: '#70b3b2',
//             400: '#419998',
//             500: '#11807e',
//             600: '#0e6665',
//             700: '#0a4d4c',
//             800: '#073332',
//             900: '#031a19',
//         },
//     },
// };
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/flowbite/**/*.js',
    ],
    theme: {
        colors: {
            colors: colors,
        },
        container: {
            center: true,
            // padding: {
            //     DEFAULT: '1rem',
            //     sm: '2rem',
            //     lg: '4rem',
            //     xl: '5rem',
            //     '2xl': '10rem',
            // },
        },
        extend: {
            keyframes: {
                fadeOut: {
                    '0%': { opacity: 1 },
                    '100%': { opacity: 0 },
                },
            },
            animation: {
                fadeOut: 'fadeOut 1s ease-out forwards',
            },
        },
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
    daisyui: {
        themes: [
            // {
            //     mytheme: {
            //         primary: '#058080',
            //         secondary: '#CDE6E6',
            //         accent: '#37cdbe',
            //         neutral: '#3d4451',
            //         'base-100': '#ffffff',
            //         evest: '#022A3A',
            //     },
            // },
            'dark',
            'cupcake',
        ],
    },
};
