export const View = () => [
  h2('early bird <3'),

  p(`
hello, you are here a bit early.
feel free to poke around,
but as long as this notice is here,
most documentation on this page will not be accurate (yet).
`),

  p(`
Since we do all development of this platform in the open, you are looking at a partially working minimum viable product here.
`),

  h3('What is working'),
  p([
    'Some services (',
    Link({ to: 'https://github.com/grundstein/gps', text: 'gps - grundstein proxy service' }),
    ', ',
    Link({ to: 'https://github.com/grundstein/grs', text: 'grs - grundstein redirection service' }),
    ', ',
    Link({ to: 'https://github.com/grundstein/gas', text: 'gas - grundstein api service' }),
    ', ',
    Link({ to: 'https://github.com/grundstein/gss', text: 'gss - grundstein static (file) service' }),
    ') work fine, and, despite their warning labels, are in production on the ',
    Link({ to: 'https://artificialmuseum.com', text: 'Artificial Museum' }),
    ' platform since November of 2020.',
  ]),

  h3('What is not working'),
  p([
    'Unfortunately the ',
    Link({ to: 'https://github.com/grundstein/grundstein', text: 'cli' }),
    ' and multiple other parts of the system setup are still work in progress.',
  ]),
]
