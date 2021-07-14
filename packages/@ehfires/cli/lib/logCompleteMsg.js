const cons = require('consolidate');

require('colors');

const logCompleteMsg = (opts, currentFolder) => {
  if (!opts) return;

  console.log(global._LANGUAGE_ === 'en' ? '\n  Execute the following command to start the project: \n'.green : '\n  执行以下命令启动项目: \n'.green);
  if (currentFolder) {
    console.log(`    cd ${opts.name}\n`);
  }
  console.log(`    yarn && yarn serve`);
  
  console.log(global._LANGUAGE_ === 'en' ? `\n  For more information, check the development documentation：` : `\n  需了解更多，请查看开发文档：`);
  console.log(' https://chat-dev.yunshujifu.com/docs/starts/'.green);
  console.log('\n  🖖 Happy coding, Good luck!');
};

module.exports = {
  logCompleteMsg,
};
