const path = require('path');
const Service = require('@vue/cli-service');
const { toPlugin, fireConfigFileExists, getRootProjectPlugins } = require('./utils');

const babelPlugin = toPlugin('@vue/cli-plugin-babel');
const eslintPlugin = toPlugin('@vue/cli-plugin-eslint');
const typeScriptPlugin = toPlugin('@vue/cli-plugin-typescript');
const i18nPlugin = toPlugin('vue-cli-plugin-i18n');

const context = process.cwd();

const configPath = path.resolve(context, 'fire.config.js');
if (configPath && fireConfigFileExists(configPath)) {
  process.env.VUE_CLI_SERVICE_CONFIG_PATH = configPath;
}

const createService = (command) => {
  const projectPlugins = getRootProjectPlugins(context) || [];
  const inlinePlugins = [
    babelPlugin,
    typeScriptPlugin,
    i18nPlugin,
    eslintPlugin,
    ...projectPlugins,
  ];

  return new Service(context, {
    projectOptions: {
      compiler: true,
      lintOnSave: 'default',
    },
    inlineOptions: {
      parallel: false, // disable thread-loader
    },
    plugins: inlinePlugins,
  });
};

exports.runService = (command, args, rawArgv) => createService(command).run(command, args, rawArgv);
