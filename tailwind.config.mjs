/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    /* Vil du overskrive eller extende tailwinds indstillinger?  */

	theme: {

        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'vulcan': {
                "50": "rgba(243, 244, 252, 1)",
                "100": "rgba(231, 234, 247, 1)",
                "200": "rgba(202, 210, 237, 1)",
                "300": "rgba(155, 172, 222, 1)",
                "400": "rgba(101, 128, 203, 1)",
                "500": "rgba(65, 95, 182, 1)",
                "600": "rgba(48, 71, 153, 1)",
                "700": "rgba(40, 58, 124, 1)",
                "800": "rgba(36, 51, 104, 1)",
                "900": "rgba(35, 45, 87, 1)",
                "950*": "rgba(12, 15, 30, 1)",
                "50-950*-opacity:-50": "rgba(12, 15, 30, 0.5)"
            },
            'elephant': {
                "50": "rgba(239, 250, 252, 1)",
                "100": "rgba(215, 241, 246, 1)",
                "200": "rgba(179, 226, 238, 1)",
                "300": "rgba(127, 205, 225, 1)",
                "400": "rgba(68, 173, 204, 1)",
                "500": "rgba(40, 145, 178, 1)",
                "600": "rgba(36, 117, 150, 1)",
                "700": "rgba(35, 96, 123, 1)",
                "800": "rgba(37, 80, 101, 1)",
                "900": "rgba(35, 67, 86, 1)",
                "950*": "rgba(20, 48, 65, 1)",
            },
            'blue-dianne': {
                "50": "rgba(238, 252, 253, 1)",
                "100": "rgba(213, 246, 248, 1)",
                "200": "rgba(175, 236, 242, 1)",
                "300": "rgba(120, 221, 232, 1)",
                "400": "rgba(58, 195, 214, 1)",
                "500": "rgba(31, 167, 187, 1)",
                "600": "rgba(28, 135, 158, 1)",
                "700": "rgba(30, 108, 128, 1)",
                "800": "rgba(32, 89, 106, 1)",
                "900*": "rgba(33, 79, 95, 1)",
                "950": "rgba(15, 49, 61, 1)",
            },
            'ferra': {
                "50": "rgba(245, 243, 241, 1)",
                "100": "rgba(230, 224, 219, 1)",
                "200": "rgba(207, 194, 185, 1)",
                "300": "rgba(179, 157, 145, 1)",
                "400": "rgba(157, 128, 114, 1)",
                "500": "rgba(142, 113, 100, 1)",
                "600": "rgba(121, 92, 85, 1)",
                "700*": "rgba(107, 80, 76, 1)",
                "800": "rgba(84, 64, 63, 1)",
                "900": "rgba(74, 57, 57, 1)",
                "950": "rgba(42, 30, 31, 1)",
            },
            'golden-tainoi': {
                "50": "rgba(255, 249, 235, 1)",
                "100": "rgba(255, 238, 198, 1)",
                "200": "rgba(255, 218, 136, 1)",
                "300*": "rgba(255, 203, 104, 1)",
                "400": "rgba(255, 168, 32, 1)",
                "500": "rgba(249, 132, 7, 1)",
                "600": "rgba(221, 95, 2, 1)",
                "700": "rgba(183, 64, 6, 1)",
                "800": "rgba(148, 48, 12, 1)",
                "900": "rgba(122, 41, 13, 1)",
                "950": "rgba(70, 19, 2, 1)",
            },
            'blaze-orange': {
                "50": "rgba(254, 246, 238, 1)",
                "100": "rgba(252, 235, 216, 1)",
                "200": "rgba(249, 212, 175, 1)",
                "300": "rgba(245, 180, 124, 1)",
                "400": "rgba(239, 139, 72, 1)",
                "500*": "rgba(235, 107, 34, 1)",
                "600": "rgba(220, 83, 26, 1)",
                "700": "rgba(183, 63, 23, 1)",
                "800": "rgba(146, 50, 26, 1)",
                "900": "rgba(118, 44, 24, 1)",
                "950": "rgba(63, 20, 11, 1)",
            }
      },
         /* Tilføj din egen spacing nedenfor */
        // spacing: {
        //     'm': '40px',
        // },

        /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
        // fontFamily: {
        //     sans: ['Prompt', 'sans-serif'],
        //     'display': ['Courier', 'monospace'], /* eksempel på ekstra font */
        // },

        /* Tilføj dit typografiske hierarki herunder */
        // fontSize: {
        //     base: ['1rem', { lineHeight: '1.5rem' }],
        //     large: ['2.5rem', { lineHeight: '3.75rem' }],
        //   },

        /* Tilføj dit fontvægt-hierarki nedenfor */
        //   fontWeight: {
        //     regular: '400',
        //   },

        /* Borders - borderstørrelser herunder */
        // borderWidth: {
        //     DEFAULT: '1px',
        //     0: '0px',
        //     2: '2px',
        // },

        /* Border radius størrelser herunder */
        // borderRadius: {
        //     DEFAULT: '1.25rem',
        //     none: '0px',
        // },

        /* Box shadows herunder */
        // boxShadow: {
        //     drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)', /* x y blur spread farve / opacity */  
        // },

		extend: {
        },
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}