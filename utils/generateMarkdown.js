// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log('license', license);
  if (license !== 'None') {
    return `![License:${license}](https://img.shields.io/badge/license-${license}-yellow.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## Description

${data.description}

## Table of Contents

 * [Installation](#installation)
 * [Usage](#usage)
 * [Contribution](#contribution)
 * [Tests](#tests)
 * [Questions](#questions)

${data.installation ? '## Installation Instructions' : ''}

${data.installation ? data.installation : ''}

## Usage

${data.usage}

## Contribution

${data.contribution}

${data.tests ? '## Tests' : ''}

${data.tests ? data.tests : ''}

## Questions

If you have any questions, email me at ${data.email}

Github: github.com/${data.github}
`;
}

module.exports = generateMarkdown;
