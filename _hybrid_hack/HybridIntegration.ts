export function HybridBuild(staticPaths) {
	let _staticBuild = false;
	return {
		name: 'HybridBuild',
		hooks: {
			'astro:config:setup': async (options) => {
				if (options.config.output === 'static') {
					_staticBuild = true;
				}
			},
			'astro:build:setup': async (options) => {
				if (!options.vite.build.ssr && _staticBuild) {
					for (let key of options.pages.keys()) {
						if (staticPaths.indexOf(key) === -1) {
							options.pages.delete(key);
						}
					}
				}
			},
		},
	};
}
