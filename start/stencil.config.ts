import { Config } from '@stencil/core';
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: 'stencil-campus-conference',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: './config', dest: 'assets/config' },
      ],
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/globals/styles/core.scss',
      ]
    })
  ]
};
