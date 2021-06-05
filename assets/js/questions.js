const questions = [
    {
        type: 'input',
        message: 'Enter a title of your project: ',
        name: 'title',
        validate(answer) {
            return (answer.length) ? true : console.log("A project title is required.");
        }
    },
    {
        type: 'input',
        message: 'Enter your GitHub username: ',
        name: 'username',
        validate(answer) {
            return (answer.length) ? true : console.log("A GitHub username is required.");
        }
    },
    {
        type: 'input',
        message: 'Enter your E-mail address: ',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter a description of your project: ',
        name: 'description',
        validate(answer) {
            return (answer.length) ? true : console.log("A project description is required.");
        }
    },
    {
        type: 'input',
        message: 'Enter instructions for installation: ',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter instructions for usage: ',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Choose a license for your project: ',
        name: 'license',
        choices: ['Apache 2.0 License', 'GNU GPL v3', 'MIT License', 'BSD 3-Clause License', 'BSD 2-Clause License', 'Boost Software License 1.0', 'Creative Commons Zero', 'Eclipse Public License 1.0', 'GNU AGPL v3', 'Mozilla Public License 2.0', 'The Unlicense']
    },
    {
        type: 'input',
        message: 'Explain how users can contribute to your project: ',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Explain how to test your project: ',
        name: 'tests',
    }
];

module.exports = questions;