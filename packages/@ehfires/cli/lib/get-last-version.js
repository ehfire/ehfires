const latestVersion = require('latest-version');

async function getCliScriptLastVersion() {
  const version = await latestVersion('@ehfires/cli-service');
  return version;
};


module.exports = {
  getCliScriptLastVersion,
};
