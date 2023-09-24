/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'pokemon-light-yellow': '#FCE38A',
                'pokemon-dark-yellow': '#F38181',
                'pokemon-light-blue': '#95E1D3',
                'pokemon-dark-blue': '#B9F6CA'
            }
        }
    },
    plugins: []
};
