module.exports = {
  components: 'src/**/[A-Z]*.{js,jsx,ts,tsx}',
  ignore: ['src/{__data__,__styles__}/**.{js,jsx,ts,tsx}'],
  propsParser: require('react-docgen-typescript').parse,
  sections: [
    {
      name: 'Readme',
      content: 'README.md',
    },
    {
      name: 'UI Components',
      components: 'src/**/[A-Z]*.{js,jsx,ts,tsx}',
      ignore: ['src/{__data__,__styles__}/**.{js,jsx,ts,tsx}'],
      exampleMode: 'expand',
      usageMode: 'collapse',
    },
  ],
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: `https://fonts.googleapis.com/css?family=Raleway:300|Muli:700`,
        },
      ],
    },
  },
  theme: {
    color: {
      base: '#121619',
      lightest: '#BEB7A4',
      link: '#253D5B',
    },
    fontFamily: {
      base: ['Raleway', 'sans-serif'],
    },
  },
};
