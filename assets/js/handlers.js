const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

const responseHandler = (response) => {
    fs.writeFile('newREADME.md', generateMarkdown(response), (err) =>
        console.error(err ? err : 'Your README.md was successfully created.'));
}

module.exports = { responseHandler };