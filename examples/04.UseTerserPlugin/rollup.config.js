import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/bundle.common.js',
      format: 'cjs',
      exports: 'auto',
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'es',
    },
    {
      file: 'dist/bundle.iife.js',
      format: 'iife',
      name: 'Version',
    },
    {
      file: 'dist/bundle.iife.min.js',
      format: 'iife',
      name: 'Version',
      plugins: [terser()],
    },
    {
      file: 'dist/bundle.umd.js',
      format: 'umd',
      name: 'Version',
    },
  ],
  plugins: [json()],
};
