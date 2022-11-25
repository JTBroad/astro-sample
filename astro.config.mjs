import { defineConfig } from 'astro/config';
import { HybridBuild } from './_hybrid_hack/HybridIntegration';
import windicss from 'astro-windicss';
import react from '@astrojs/react';
import node from '@astrojs/node';

export default defineConfig({
	integrations: [windicss(), react(), HybridBuild(['src/pages/app/index.astro'])],
	output: 'server',
	server: (command) => ({ port: command === 'dev' ? 3000 : 3080, host: command === 'dev' ? false : '127.0.0.1' }),
	adapter: node({
		mode: 'standalone',
	}),
});
