// see https://github.com/rozek/build-configuration-study

import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser'

export default {
  input: './src/aframe-axeshelper.ts',
  output: [
    {
      file:     './dist/aframe-axeshelper.js',
      format:    'iife', // module is loaded for side-effects only
      noConflict:true,
      sourcemap: true,
      plugins: [terser({ format:{ comments:false, safari10:true } })],
    },{
      file:     './dist/aframe-axeshelper.esm.js',
      format:   'esm',
      sourcemap:true,
    }
  ],
  external: [
    'aframe','three'
  ],
  plugins: [
    typescript(),
  ],
};