const licenseBadge = require('./licenseBadge');

const generateMarkdown = (data) => `# ${data.title} 
${licenseBadge(data.license)}

## Table of Contents
- [Description](#Description)
${data.installation && `- [Installation](#Installation)`}
${data.usage && `- [Usage](#Usage)`}
${data.tests && `- [Test](#Tests)`}
${data.contributing && `- [Contributing](#Contributing)`}
- [License](#License)
- [Questions?](#Questions?)

---

## Description
${data.description}

${data.installation && `---

## Installation`}
${data.installation}

${data.usage && `---

## Usage`}
${data.usage}

${data.tests && `---

## Tests`}
${data.tests}

---

## License
${data.license}

${data.contributing && `---

## Contributing`}
${data.contributing}

---

## Questions?
- [${data.username}'s GitHub Profile](https://github.com/${data.username})
- [${data.email}](${data.email})

`;

module.exports = generateMarkdown;