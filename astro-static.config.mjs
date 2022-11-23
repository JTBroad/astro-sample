
import baseConfig from './astro.config.mjs';

const staticConfig = Object.assign({}, baseConfig);
delete staticConfig.server;
delete staticConfig.adapter;
delete staticConfig.output;
staticConfig.outDir = './dist/client';

export default staticConfig;

// import { defineConfig } from 'astro/config';
// // import serviceWorker from "astrojs-service-worker";
// import windicss from 'astro-windicss';

// // https://astro.build/config
// import react from "@astrojs/react";

// // https://astro.build/config
// export default defineConfig({
//   integrations: [windicss(), react()],
//   outDir:'./dist/client'
// });

