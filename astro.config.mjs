import { defineConfig } from 'astro/config';
import windicss from 'astro-windicss';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [windicss(), react()],
  output: "server",
  server: (command) => ({ port: command === 'dev' ? 3000 : 3000, host: command === 'dev' ? false : false }),
  adapter: node({ 
    mode:'standalone'
  }),
  experimental:{
    prerender:true
  }
});