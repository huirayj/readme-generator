const inquirer = require('inquirer');
const questions = require('./assets/js/questions');
const handlers = require('./assets/js/handlers');

// prompts user response and process the inputed data
inquirer.prompt(questions)
        .then(handlers.responseHandler);
