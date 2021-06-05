const inquirer = require('inquirer');
const questions = require('./assets/js/questions');
const handlers = require('./assets/js/handlers');

inquirer.prompt(questions)
        .then(handlers.responseHandler);
