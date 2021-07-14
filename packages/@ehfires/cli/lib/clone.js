require('colors');

const download = require('download-git-repo');
const ora = require('ora');
const exists = require('fs').existsSync;
const uid = require('uid');
const remove = require('rimraf').sync;

const generate = require('./generate.js');

const handleDownloadGitRepo = (source, dest) => new Promise((resolve) => {
  download(source, dest, (err) => {
    if (err) {
      throw new Error(err);
    }
    resolve();
  });
});

function run(name, template, destination) {
  console.log(global._LANGUAGE_ === 'en' ? '\n  # Please fill in the contents correctly when starting to create the project \n'.gray : '\n  # 开始创建项目，请正确填写各项内容 \n'.gray);
  return generate(name, template, destination);

};

const clone = (name, template, destination) => run(name, template, destination);

module.exports = { clone };