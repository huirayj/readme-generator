const licenseBadge = require('./licenseBadge');

const generateMarkdown = (data) => `# ${data.title} 
${licenseBadge(data.license)}

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Test](#Tests)
- [License](#License)
- [Contributing](#Contributing)
- [Questions?](#Questions?)

---

## Description
${data.description}

---

## Installation
${data.installation}

---

## Usage
${data.usage}

---

## Tests
${data.tests}

---

## License
${data.license}

---

## Contributing
${data.contributing}

---

## Questions?
- [${data.username}'s GitHub Profile](https://github.com/${data.username})
- [${data.email}](${data.email})

`;

module.exports = generateMarkdown;
