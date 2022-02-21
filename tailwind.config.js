const content = require("./Build/Carbon.Pipeline/purge");

module.exports = {
    content,
    theme: {
        extend: {
            colors: {
                primary: {
                    lightest: "#BFFDFF",
                    light: "#00C3CA",
                    DEFAULT: "#007478",
                    dark: "#004345",
                    darkest: "#001112",
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        // ...
    ],
};
