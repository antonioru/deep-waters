import glob from 'glob';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { version } from './package.json';

const banner = `/* Deep Waters v${version} */`;

const config = [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    output: {
      name: 'deep-waters',
      file: 'dist/deep-waters.umd.js',
      format: 'umd',
      sourcemap: true,
      compact: true,
      banner,
    },
    plugins: [
      commonjs(),
      babel(),
    ],
  },
  // AMD
  {
    input: 'src/index.js',
    output: {
      name: 'deep-waters',
      file: 'dist/deep-waters.amd.js',
      sourcemap: true,
      compact: true,
      format: 'amd',
      amd: {
        id: 'deep-waters',
      },
      banner,
    },
    plugins: [
      commonjs(),
      babel(),
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
    output: { name: 'deep-waters', dir: 'dist', format: 'cjs', exports: 'named', banner },
    plugins: [babel()],
  },
];

export default config;
