
import baseConfig from '../astro.config.mjs';

const staticConfig = Object.assign({}, baseConfig);
delete staticConfig.server;
delete staticConfig.adapter;
delete staticConfig.output;
staticConfig.outDir = './dist/client';

export default staticConfig;
