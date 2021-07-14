const async = require('async');
const Metalsmith = require('metalsmith');
const inquirer = require('inquirer');
const {
  render
} = require('consolidate').underscore;
const path = require('path');
const metadata = require('read-metadata');
const exists = require('fs').existsSync;
const validateName = require('validate-npm-package-name');

const gituser = require('./git-user');
const { getCliScriptLastVersion } = require('./get-last-version.js');


let projectName;

/**
 * Prompt plugin.
 *
 * @param {Object} files
 * @param {Metalsmith} metalsmith
 * @param {Function} done
 */
const ask = (opts) => (files, metalsmith, done) => {
  const questions = [{
    type: 'input',
    name: 'name',
    message: global._LANGUAGE_ === 'en' ? 'Please enter the project name' : '请输入项目名称',
    default: opts.name,
    validate(name) {
      const its = validateName(name)
      if (!its.validForNewPackages) {
        const errors = (its.errors || []).concat(its.warnings || []);
        return `Sorry, ${errors.join(' and ')}.`;
      }
      projectName = name;
      metalsmith.metadata()['title'] = name;
      return true;
    }
  }, {
    type: 'input',
    name: 'description',
    message: global._LANGUAGE_ === 'en' ? 'Please enter project description' : '请输入项目描述',
    default: opts.description,
    validate(description) {
      const len = description.trim().length;
      if (len === 0) {
        return global._LANGUAGE_ === 'en' ? 'Item description cannot be empty' : '项目描述不能为空';
      }
      if (len > 100) {
        return global._LANGUAGE_ === 'en' ? 'The number of item description characters cannot exceed 100': '项目描述字符数不能超过 100';
      }
      return true;
    },
  }, {
    type: 'input',
    name: 'author',
    message: global._LANGUAGE_ === 'en' ? 'Please enter the project creator' : '请输入项目创建者',
    default: gituser,
    validate(author) {
      const len = author.trim().length;
      if (len === 0) {
        return global._LANGUAGE_ === 'en' ? 'Project creator cannot be empty' : '项目创建者不能为空';
      }
      if (len > 80) {
        console.log(global._LANGUAGE_)
        return global._LANGUAGE_ === 'en' ? 'The number of project creator characters cannot exceed 80' : '项目创建者字符数不能超过 80';
      }
      return true;
    },
  }];
  const metadata = metalsmith.metadata();

  inquirer.prompt(questions)
    .then(async (answers) => {
      questions.forEach((item) => {
        metadata[item.name] = answers[item.name];
      });

      // 动态获取 cli-script 最新版本
      const cliScriptVersion = await getCliScriptLastVersion();
      metadata['cliScriptVersion'] = cliScriptVersion;

    
      done();
    });
};

/**
 * Template in place plugin.
 *
 * @param {Object} files
 * @param {Metalsmith} metalsmith
 * @param {Function} done
 */
function template(files, metalsmith, done) {
  const keys = Object.keys(files);
  const metadata = metalsmith.metadata();

  function run(file, done) {
    const currentFile = files[file];
    const str = currentFile.contents.toString();

    // do not attempt to render files that do not have mustaches
    if (!/<%=([^]+)%>/g.test(str)) {
      /* eslint consistent-return: 0 */
      return done();
    }
    render(str, metadata, (err, res) => {
      if (err) {
        done(err);
      } else {
        /* eslint no-buffer-constructor: 0 */
        currentFile.contents = Buffer.from(res);
        done();
      }
    });
  }

  async.each(keys, run, done);
}

/**
 * Build.
 */
const generate = (name, src, dest) => new Promise((resolve, reject) => {
  const templateSrc = path.join(src, 'template');
  const json = path.join(src, 'template.json');

  let opts = {};
  if (exists(json)) {
    opts = metadata.sync(json);
  }

  if (!opts.name) {
    opts.name = name;
  }

  Metalsmith(templateSrc)
    .use(ask(opts))
    .use(template)
    .clean(false)
    .source('.') // current directory
    .destination(dest)
    .build((err) => {
      if (err) {
        reject(err);
      } else {
        console.log('');
        console.log(global._LANGUAGE_ === 'en' ? '# Project created successfully \n'.gray : '  # 项目创建成功 \n'.gray);

        if (!opts.name) {
          opts.name = projectName;
        }
        resolve(opts);
      }
    });
});

module.exports = generate;