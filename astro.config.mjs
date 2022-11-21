import { defineConfig } from 'astro/config';
import serviceWorker from "astrojs-service-worker";
import windicss from 'astro-windicss';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [windicss(), react(), serviceWorker()],
  output: "server",
  server: (command) => ({ port: command === 'dev' ? 3000 : 80, host: command === 'dev' ? false : '0.0.0.0' }),
  adapter: node({ 
    mode:'standalone'
  })
});