module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.svelte'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {'mont': ['Montserrat', 'sans-serif'],},
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
