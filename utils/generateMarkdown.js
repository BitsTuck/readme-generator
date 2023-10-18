//Gives functionality to the list choices from index.js, including the badges and links to the licenses for more information
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

// Creates the markdown document using the data provided by the responses to the inquirer questions. Also adds text (see: license) and links (GitHub/Email)
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

//Exports the functionality of this js file so that it is available for the index file.
module.exports = generateMarkdown;
