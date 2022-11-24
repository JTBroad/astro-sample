// import type { AstroConfig, AstroIntegration, AstroRenderer } from 'astro';
import { defineConfig } from 'astro/config';
import windicss from 'astro-windicss';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import node from "@astrojs/node";
// import cloudflare from "@astrojs/cloudflare";
function MyInt(config) {
  let _staticBuild = false;
  return {
    name: '@astrojs/solid-js',
    hooks: {
      'astro:config:setup': async options => {
        console.log('1', options);
        if(options.config.output === 'static'){
          _staticBuild = true;
        }
      },
      'astro:build:start': async options => {
        console.log('2', options);
      },
      'astro:build:setup': async options => {
        // delete options.pages['src/pages/api/cat-facts.ts'];
        if(!options.vite.build.ssr && _staticBuild){
          for(let key of options.pages.keys()){
            // if()
            if(config.staticRoutes.indexOf(key) === -1){
              options.pages.delete(key);
            }
          }
          // options.pages.delete('src/pages/api/cat-facts.ts');
          // options.pages.delete('src/pages/index.astro');
          // options.pages = undefined;
          // console.log(options, config);
        }
        // addRenderer(getRenderer());
        // updateConfig({ vite: await getViteConfiguration(command === 'dev', config) });
      }
    }
  };
}

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [windicss(), react(), MyInt({
    staticRoutes: [
      // 'src/pages/app/index.astro'
    ]
  })],
  output: "server",
  server: (command) => ({ port: command === 'dev' ? 3000 : 3080, host: command === 'dev' ? false : '127.0.0.1' }),
  adapter: node({ 
    mode:'standalone'
  })
});