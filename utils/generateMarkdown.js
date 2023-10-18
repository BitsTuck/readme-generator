// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case 'MIT':
            return ('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)')
            break;
        case 'Creative Commons':
            return ('[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)')
            break;
        case 'Mozilla Public License':
            return ('[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)')
            break;
        case 'Open Data Commons':
            return ('[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)')
            break;
        case 'The Artistic License':
            return ('[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)')
            break;
        default:
            break;
    }
}
console.log
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} 
#### Table of Contents
-[Description](#description)  
-[Installation](#installation)  
-[Usage](#usage)  
-[License](#license)  
-[Contributing](#contributing)  
-[Tests](#tests)  
-[Questions](#questions)  
# Description
${data.description}
# Installation
${data.installation}
# Usage
${data.usage}
# License 
${renderLicenseBadge(data.license)} (click the link to learn more about the license!)
# Contributing
${data.contributions}
# Tests
${data.tests}
# Questions
 <a href='https://github.com/${data.github}' target=_blank>Check out my Github Repo</a> or 
<a href='mailto:${data.email}'>drop me an email</a>



`;
}

module.exports = generateMarkdown;
