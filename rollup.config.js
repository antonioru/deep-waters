import glob from 'glob';
import strip from '@rollup/plugin-strip';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import { version } from './package.json';

const banner = `/* Deep Waters v${version} */`;

const config = [
  // UMD build
  {
    input: 'src/index.js',
    output: {
      name: 'DeepWaters',
      file: 'dist/deep-waters.js',
      format: 'umd',
      exports: 'named',
      compact: true,
      banner,
    },
    plugins: [
      commonjs(),
      babel(),
    ],
  },
  {
    input: 'src/index.js',
    output: {
      name: 'DeepWaters',
      file: 'dist/deep-waters.min.js',
      format: 'umd',
      exports: 'named',
      sourcemap: true,
      compact: true,
    },
    plugins: [
      commonjs(),
      babel(),
      uglify(),
    ],
  },
  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: glob.sync('src/**/*.js'),
    preserveModules: true,
    output: [
      { name: 'deep-waters', dir: 'dist/cjs', format: 'cjs', exports: 'named', banner },
      { name: 'deep-waters', dir: 'dist/esm', format: 'esm', exports: 'named', banner },
    ],
    plugins: [strip(), babel()],
  },
];

export default config;
