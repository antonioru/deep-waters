import multi from '@rollup/plugin-multi-entry';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

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
    },
    plugins: [
      commonjs(), // so Rollup can convert `ms` to an ES module
      babel({
        exclude: ['node_modules/**'],
      }),
    ],
  },
  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'src/**/*.js',
    preserveModules: true,
    output: [
      { name: 'deep-waters', dir: 'dist/cjs', format: 'cjs' },
      { name: 'deep-waters', dir: 'dist/esm', format: 'esm' },
    ],
    plugins: [
      babel({ exclude: ['node_modules/**'] }),
      multi(),
    ],
  },
];

export default config;
