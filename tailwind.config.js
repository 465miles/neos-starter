const content = require("./Build/Carbon.Pipeline/purge");

module.exports = {
    content,
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Outfit', 'ui-sans-serif', 'system-ui'],
                'body': ['Outfit', 'ui-sans-serif', 'system-ui'],
            },
            gridTemplateColumns: (theme) => ({
                'container-xs': '[page-start] ' + theme("spacing.5") + ' [main-start large-start medium-start small-start] ' + theme("spacing.5") + ' [large-inner-start medium-inner-start small-inner-start] auto [center-left-start] ' + theme("spacing[2.5]") + ' [center-left-end center center-right-start] ' + theme("spacing[2.5]") + ' [center-right-end] auto [small-inner-end medium-inner-end large-inner-end] ' + theme("spacing.5") + ' [small-end medium-end large-end main-end] ' + theme("spacing.5") + ' [page-end]',
                'container-sm': '[page-start] ' + theme("spacing.5") + ' [main-start large-start medium-start] ' + theme("spacing.5") + ' [large-inner-start medium-inner-start] ' + theme("spacing.5") + ' [small-start] ' + theme("spacing.5") + ' [small-inner-start] auto [center-left-start] ' + theme("spacing[2.5]") + '[center-left-end center center-right-start] ' + theme("spacing[2.5]") + ' [center-right-end] auto [small-inner-end] ' + theme("spacing.5") + ' [small-end] ' + theme("spacing.5") + ' [medium-inner-end large-inner-end] ' + theme("spacing.5") + ' [medium-end large-end main-end] ' + theme("spacing.5") + ' [page-end]',
                'container-md': '[page-start] ' + theme("spacing.10") + ' [main-start large-start] ' + theme("spacing.10") + ' [large-inner-start] 1fr [medium-start] ' + theme("spacing.10") + ' [medium-inner-start small-start] ' + theme("spacing.10") + ' [small-inner-start] 5fr [center-left-start] ' + theme("spacing.5") + '[center-left-end center center-right-start] ' + theme("spacing.5") + ' [center-right-end] 5fr [small-inner-end] ' + theme("spacing.10") + ' [small-end medium-inner-end] ' + theme("spacing.10") + ' [medium-end] 1fr [large-inner-end] ' + theme("spacing.10") + ' [large-end main-end] ' + theme("spacing.10") + ' [page-end]',
                'container-lg': '[page-start] ' + theme("spacing.10") + ' [main-start] 1fr [large-start] ' + theme("spacing.10") + ' [large-inner-start] 1fr [medium-start] ' + theme("spacing.10") + ' [medium-inner-start] 1fr [small-start] ' + theme("spacing.10") + ' [small-inner-start] 4fr [center-left-start] ' + theme("spacing.5") + '[center-left-end center center-right-start] ' + theme("spacing.5") + ' [center-right-end] 4fr [small-inner-end] ' + theme("spacing.10") + ' [small-end] 1fr [medium-inner-end] ' + theme("spacing.10") + ' [medium-end] 1fr [large-inner-end] ' + theme("spacing.10") + ' [large-end] 1fr [main-end] ' + theme("spacing.10") + ' [page-end]',
                'container-2xl': '[page-start] ' + theme("spacing.10") + ' [main-start] 2fr [large-start] ' + theme("spacing.10") + ' [large-inner-start] 1fr [medium-start] ' + theme("spacing.10") + ' [medium-inner-start] 1fr [small-start] ' + theme("spacing.10") + ' [small-inner-start] 3fr [center-left-start] ' + theme("spacing.5") + '[center-left-end center center-right-start] ' + theme("spacing.5") + ' [center-right-end] 3fr [small-inner-end] ' + theme("spacing.10") + ' [small-end] 1fr [medium-inner-end] ' + theme("spacing.10") + ' [medium-end] 1fr [large-inner-end] ' + theme("spacing.10") + ' [large-end] 2fr [main-end] ' + theme("spacing.10") + ' [page-end]',
            }),
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
