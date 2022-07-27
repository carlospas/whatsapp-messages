const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.js',
        './resources/js/**/*.vue',
    ],
    theme: {
        extend: {

        },
    },
};