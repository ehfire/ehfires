const inquirer = require('inquirer');

function prompt(message, choices) {
  const question = {
    message,
    choices,
    type: 'rawlist',
    name: 'answer',
  };
  return inquirer
    .prompt([ question ]);
};

module.exports = { prompt };
