// import type { AstroConfig, AstroIntegration, AstroRenderer } from 'astro';
import { defineConfig } from 'astro/config';
import windicss from 'astro-windicss';
import react from "@astrojs/react";
import node from "@astrojs/node";

function Hybrid(staticPaths) {
  let _staticBuild = false;
  return {
    name: '@astrojs/solid-js',
    hooks: {
      'astro:config:setup': async options => {
        if(options.config.output === 'static'){
          _staticBuild = true;
        }
      },
      'astro:build:setup': async options => {
        if(!options.vite.build.ssr && _staticBuild){
          for(let key of options.pages.keys()){
            if(staticPaths.indexOf(key) === -1){
              options.pages.delete(key);
            }
          }
        }
      }
    }
  };
}

export default defineConfig({
  integrations: [
    windicss(), 
    react(), 
    Hybrid([
      'src/pages/app/index.astro'
    ])
  ],
  output: "server",
  server: (command) => ({ port: command === 'dev' ? 3000 : 3080, host: command === 'dev' ? false : '127.0.0.1' }),
  adapter: node({ 
    mode:'standalone'
  })
});