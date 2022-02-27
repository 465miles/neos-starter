const content = require("./Build/Carbon.Pipeline/purge");

module.exports = {
    content,
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Outfit', 'ui-sans-serif', 'system-ui'],
                'body': ['Outfit', 'ui-sans-serif', 'system-ui'],
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        maxWidth: '100%',
                        color: theme('colors.gray.700'),
                        h1: {
                            color: 'inherit',
                            fontWeight: theme('fontWeight.semibold'),
                            width: '100%'
                        },
                        h2: {
                            color: 'inherit',
                            fontWeight: theme('fontWeight.semibold'),
                            width: '100%'
                        },
                        h3: {
                            color: 'inherit',
                            fontWeight: theme('fontWeight.semibold'),
                            width: '100%'
                        },
                        h4: {
                            color: 'inherit',
                            fontWeight: theme('fontWeight.semibold'),
                            width: '100%'
                        },
                        p: {
                            color: 'inherit',
                            fontWeight: theme('fontWeight.normal'),
                            width: '100%'
                        },
                        strong: {
                            fontWeight: theme('fontWeight.bold')
                        },
                        a: {
                            color: theme('colors.blue.500'),
                            textDecoration: 'none',
                            '&:hover': {
                                color: theme('colors.blue.600')
                            },
                        },
                    },
                },
            })
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        // ...
    ],
};
