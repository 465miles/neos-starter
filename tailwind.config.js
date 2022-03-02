const content = require('./Build/Carbon.Pipeline/purge');

module.exports = {
    content,
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Outfit', 'ui-sans-serif', 'system-ui'],
                'body': ['Outfit', 'ui-sans-serif', 'system-ui'],
            },
            gridTemplateColumns: (theme) => {

                const area = (name, spacing, nested) => {
                    const areaNames = name.split(' ')
                    const startName = areaNames.map(name => `${name}-start`).join(' ')
                    const endName = areaNames.reverse().map(name => `${name}-end`).join(' ')
                    return `[${startName}] ${spacing} ${nested} ${spacing} [${endName}]`;
                }

                const center = spacing => `[center-left] ${spacing} [center] ${spacing} [center-right]`

                return {

                    'container-xs'
                :
                    area('page', theme('spacing.5'),
                        area('main large medium small', theme('spacing.5'),
                            area('large-inner medium-inner small-inner', 'auto',
                                center(theme('spacing[2.5]'))
                            )
                        )
                    ),

                    'container-sm'
                :
                    area('page', theme('spacing.10'),
                        area('main large medium', theme('spacing.5'),
                            area('large-inner medium-inner', theme('spacing.5'),
                                area('small', theme('spacing.5'),
                                    area('small-inner', 'auto',
                                        center(theme('spacing[2.5]'))
                                    )
                                )
                            )
                        )
                    ),

                    'container-md'
                :
                    area('page', theme('spacing.10'),
                        area('main large', theme('spacing.10'),
                            area('large-inner', '1fr',
                                area('medium', theme('spacing.10'),
                                    area('medium-inner small', theme('spacing.10'),
                                        area('small-inner', '5fr',
                                            center(theme('spacing.5'))
                                        )
                                    )
                                )
                            )
                        )
                    ),

                    'container-lg'
                :
                    area('page', theme('spacing.10'),
                        area('main', '1fr',
                            area('large', theme('spacing.10'),
                                area('large-inner', '1fr',
                                    area('medium', theme('spacing.10'),
                                        area('medium-inner', '1fr',
                                            area('small', theme('spacing.10'),
                                                area('small-inner', '4fr',
                                                    center(theme('spacing.5'))
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    ),

                    'container-2xl'
                :
                    area('page', theme('spacing.10'),
                        area('main', '2fr',
                            area('large', theme('spacing.10'),
                                area('large-inner', '1fr',
                                    area('medium', theme('spacing.10'),
                                        area('medium-inner', '1fr',
                                            area('small', theme('spacing.10'),
                                                area('small-inner', '3fr',
                                                    center(theme('spacing.5'))
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                }
            }
            ,
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
