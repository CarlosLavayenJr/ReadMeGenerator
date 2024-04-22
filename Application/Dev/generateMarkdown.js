// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') return ''; // Enhanced to handle 'None' as no license
  const badges = {
    "MIT": "https://img.shields.io/badge/license-MIT-blue.svg",
    "GPLv3": "https://img.shields.io/badge/license-GPLv3-blue.svg",
    "Apache 2.0": "https://img.shields.io/badge/license-Apache%202.0-blue.svg"
  };
  return badges[license] ? `![License](${badges[license]})` : '';
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') return ''; // Enhanced to handle 'None' as no license
  const links = {
    "MIT": "https://opensource.org/licenses/MIT",
    "GPLv3": "https://www.gnu.org/licenses/gpl-3.0",
    "Apache 2.0": "https://opensource.org/licenses/Apache-2.0"
  };
  return links[license] ? `[License details](${links[license]})` : '';
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') return ''; // Enhanced to handle 'None' as no license
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);
  return `
## License
${badge}
This project is licensed under the ${license} license. ${link}
`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

${renderLicenseSection(data.license)}

## Questions
For any questions, you can find me on GitHub: [${data.github}](https://github.com/${data.github}) or reach me directly at ${data.email}.
`;
}

module.exports = generateMarkdown;
