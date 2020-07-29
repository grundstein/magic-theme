## @grundstein/magic-theme

the [@magic-theme](https://magic-themes.github.io/) for @grundstein.
shared between all @grundstein pages to get unify color scheme and page layout

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@grundstein/magic-theme.svg
[npm-url]: https://www.npmjs.com/package/@grundstein/magic-theme
[travis-image]: https://img.shields.io/travis/com/grundstein/magic-theme/master
[travis-url]: https://travis-ci.com/grundstein/magic-theme
[appveyor-image]: https://img.shields.io/appveyor/ci/magicthemes/docs/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magicthemes/docs/branch/master
[coveralls-image]: https://coveralls.io/repos/github/grundstein/magic-theme/badge.svg
[coveralls-url]: https://coveralls.io/github/grundstein/magic-theme
[greenkeeper-image]: https://badges.greenkeeper.io/grundstein/magic-theme.svg
[greenkeeper-url]: https://badges.greenkeeper.io/grundstein/magic-theme.svg
[snyk-image]: https://snyk.io/test/github/grundstein/magic-theme/badge.svg
[snyk-url]: https://snyk.io/test/github/grundstein/magic-theme

#### install:
```bash
npm install --save --save-exact @grundstein/magic-theme
```

#### usage:

##### import:
```javascript
// config.mjs:

export default {
  //... other config
  THEME: '@grundstein/magic-theme',

  // multiple themes
  // THEME: [...other themes, '@grundstein/magic-theme'],
}
```

@magic will then import and use the theme automagically.

#### changelog
##### 0.0.1
first release

##### 0.0.2
update logo

##### 0.0.3
fix: Footer links.

##### 0.0.4
bump required node version to 14.2.0

##### 0.0.5 
update @magic-themes/project

##### 0.0.6 - unreleased
...
