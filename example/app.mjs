export const state = {
  title: '@grundstein/magic-theme',
  description: '@magic-theme for grundstein.',

  branding: ['@grund', 'stein'],

  menu: [
    { to: '/#installation', text: 'installation' },
    { to: '/#usage', text: 'usage' },
    { to: '/#theme-vars', text: 'theme vars' },
  ],

  vars: {
    background: {
      dark: '#212121',
      light: '#e0e0e0',
    },

    link: {
      dark: '#c4c4c4',
      light: '#212121',

      hover: {
        dark: '#f09d09',
        light: '#f09d09',
      },
    },

    neutral: '#5a5a5a',

    primary: {
      neutral: '#f09f09',
      light: '#ffee88',
      dark: '#ffa000',
    },

    secondary: {
      neutral: '#5a5a5a',
      light: '#d8d8d8',
      dark: '#0a0a0a',
    },

    text: {
      dark: '#c4c4c4',
      light: '#212121',
    },

    white: '#ffffff',

    maxWidth: '1000px',

    fadeDuration: '500ms',

    widths: {
      tablet: '500px',
      laptop: '1024px',
      desktop: '1600px',
    },
  },
}
