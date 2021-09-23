export * as Logo from './Logo.mjs'
export * as EarlyBird from './EarlyBird.mjs'

export const state = {
  hero: {
    title: ['@grund', 'stein'],
    description: 'devops without hassle',
    content: 'the wise build their house on a rock.',

    // menu: [
    // { to: '/#about', text: 'about' },
    // { to: '/getting-started/', text: 'getting started' },
    // ],
  },

  footer: {
    one: {
      title: '@grundstein',
      before: ['hosting without hassle.', 'created by', 'Wizards & Witches @ Work'],
      // menu: [{ to: '/privacy/', text: 'privacy notice' }],
    },
    two: {
      title: 'our projects',
      menu: [
        { to: 'https://webboot.org', text: 'webboot' },
        { to: 'https://magic.github.io', text: 'magic' },
        { to: 'https://grundstein.it', text: 'grundstein' },
      ],
    },
    three: {
      title: 'social links',
      menu: [{ to: 'https://github.com/grundstein', text: 'github' }],
    },
  },
}

export const vars = {
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
}

export default (v = {}) => {
  v = { ...vars, ...v }

  return {
    '.Hero': {
      backgroundColor: vars.neutral,

      p: {
        color: vars.text.dark,
      },
      '.LogoWrapper h1': {
        color: vars.text.dark,
      },
    },
    '.Footer': {
      '.Menus, .Credits': {
        color: vars.neutral,

        a: {
          color: vars.neutral,

          '&:hover': {
            color: vars.white,
          },
        },
      },
    },
  }
}
