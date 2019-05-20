import { resolve } from 'path';
import builtins from 'builtin-modules';
import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss';
import nodeResolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';

import pkg from './package.json';

const distFile = file => resolve(__dirname, `./dist/${file}`);

const base = {
  external: [...builtins, 'react', 'classnames'],
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
    }),
  ],
};

const prodBase = {
  ...base,
  plugins: [...base.plugins, uglify(), filesize()],
};

export default [
  {
    ...base,
    output: [
      {
        file: distFile('index.js'),
        format: 'cjs',
      },
      {
        file: distFile('index.es.js'),
        format: 'es',
      },
      {
        file: distFile('index.umd.js'),
        format: 'umd',
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
      },
      {
        file: distFile('index.es.min.js'),
        format: 'es',
      },
      {
        file: distFile('index.umd.min.js'),
        format: 'umd',
        name: `${pkg.name} v${parseInt(pkg.version, 10)}`,
      },
    ],
  },
];
