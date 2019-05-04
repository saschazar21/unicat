module.exports = {
  plugins: ['babel-plugin-styled-components'],
  presets: [
    [
      '@babel/env',
      {
        corejs: 3,
        modules: false,
        useBuiltIns: 'usage',
      },
    ],
    '@babel/react',
  ],
};
