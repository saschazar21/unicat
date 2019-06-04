module.exports = {
  components: 'src/**/[A-Z]*.{js,jsx,ts,tsx}',
  ignore: ['src/__data__/**.{js,jsx,ts,tsx}', 'src/**/*.test.{js,jsx,ts,tsx}'],
  propsParser: require('react-docgen-typescript').parse,
  sections: [
    {
      name: 'Readme',
      content: 'README.md',
    },
    {
      name: 'UI Components',
      components: 'src/**/[A-Z]*.{js,jsx,ts,tsx}',
      ignore: ['src/__data__/**.{js,jsx,ts,tsx}'],
      exampleMode: 'expand',
      usageMode: 'collapse',
    },
  ],
  styles: {
    StyleGuide: {
      '@global body': {
        '--font-heading': '"Muli", sans-serif',
        fontFamily: '"Raleway", sans-serif',
      },
    },
  },
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
      base: '#1e1e24',
      lightest: '#f7f8ee',
      link: '#654f6f',
    },
    fontFamily: {
      base: ['"Raleway"', 'sans-serif'],
    },
  },
  webpackConfig: {
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'ts-loader'],
        },
        {
          test: /\.s?css$/,
          use: [
            'style-loader',
            { 
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]___[md5:hash:hex:4]',
                importLoaders: 2,
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  require('autoprefixer')(),
                ],
              },
            },
            'sass-loader',
          ],
        }
      ],
    },
  }
};
