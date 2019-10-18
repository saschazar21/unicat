import { resolve } from 'path';
import builtins from 'builtin-modules';
import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss';
import nodeResolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const distFile = file => resolve(__dirname, `./dist/${file}`);

const globals = {
  'react-animate-height': 'AnimateHeight',
  classnames: 'classnames',
  react: 'React',
};

const base = {
  external: [...builtins, 'react', 'react-animate-height', 'classnames'],
  input: './src/index.ts',
  plugins: [
    nodeResolve(),
    typescript(),
    babel({ extensions: ['.ts', '.tsx'] }),
    postcss({
      minimize: true,
      modules: {
        generateScopedName: '[name]__[local]___[md5:hash:hex:4]',
      },
      plugins: [autoprefixer()],
    }),
  ],
};

const prodBase = {
  ...base,
  plugins: [...base.plugins, terser(), filesize()],
};

export default [
  {
    ...base,
    output: [
      {
        file: distFile('index.js'),
        format: 'cjs',
        globals,
      },
      {
        file: distFile('index.es.js'),
        format: 'es',
        globals,
      },
      {
        file: distFile('index.umd.js'),
        format: 'umd',
        globals,
        name: `${pkg.name} v${parseInt(pkg.version, 10)}`,
      },
    ],
  },
  {
    ...prodBase,
    output: [
      {
        file: distFile('index.min.js'),
        format: 'cjs',
        globals,
      },
      {
        file: distFile('index.es.min.js'),
        format: 'es',
        globals,
      },
      {
        file: distFile('index.umd.min.js'),
        format: 'umd',
        globals,
        name: `${pkg.name} v${parseInt(pkg.version, 10)}`,
      },
    ],
  },
];
