let tailwindConfig = process.env.HUGO_FILE_TAILWIND_CONFIG_JS || './tailwind.config.js';
const tailwind = require('tailwindcss')(tailwindConfig);
const autoprefixer = require('autoprefixer');

module.exports = {
	plugins: [tailwind, ...(process.env.HUGO_ENVIRONMENT === 'production' ? [ autoprefixer ] : [ autoprefixer ]) ]
};