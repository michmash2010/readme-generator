const fs = require('fs');
const index = require('../index.js'); 
const backticks = "```";

// ![License Badge](https://img.shields.io/badge/license-MIT-green)
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license = "MIT") {
    console.log("You chose MIT!");
    return "![MIT License Badge](https://img.shields.io/badge/license-MIT-green)";
  }
  if (license = "Apache 2.0") {
    console.log("You chose Apache 2.0!");
    return "![Apache 2.0 License Badge]https://shields.io/badge/license-Apache%202-blue";
  }
  if (license = "GPL 3.0") {
    console.log("You chose GPL 3.0!");
    return "![GPL 3.0 License Badge]https://shields.io/badge/license-GPL-blue";
  }
  if (license = "BSD 3") {
    console.log("You chose BSD 3!");
    return "![BSD License Badge]https://shields.io/badge/license-BSD-green";
  }
  if (license = "None") {
    console.log("You chose None for license!");
    return "";
  }
  
  //MIT, Apache 2.0, GPL 3.0, BSD 3, None
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license = "MIT") {
    console.log("You chose MIT!");
    return "https://img.shields.io/badge/license-MIT-green";
  }
  if (license = "Apache 2.0") {
    console.log("You chose Apache 2.0!");
    return "https://shields.io/badge/license-Apache%202-blue";
  }
  if (license = "GPL 3.0") {
    console.log("You chose GPL 3.0!");
    return "https://shields.io/badge/license-GPL-blue";
  }
  if (license = "BSD 3") {
    console.log("You chose BSD 3!");
    return "https://shields.io/badge/license-BSD-green";
  }
  if (license = "None") {
    console.log("You chose None!");
    return "";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license = "MIT") {
    console.log("You chose MIT!");
    return "https://img.shields.io/badge/license-MIT-green";
  }
  if (license = "Apache 2.0") {
    console.log("You chose Apache 2.0!");
    return "https://shields.io/badge/license-Apache%202-blue";
  }
  if (license = "GPL 3.0") {
    console.log("You chose GPL 3.0!");
    return "https://shields.io/badge/license-GPL-blue";
  }
  if (license = "BSD 3") {
    console.log("You chose BSD 3!");
    return "https://shields.io/badge/license-BSD-green";
  }
  if (license = "None") {
    console.log("You chose None!");
    return "";
}
};
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //console.log("Hey I'm in generateMarkdown!" + data.title);
  return `
  
  # ${data.title}
  
  ${renderLicenseBadge()}
  
  ## Description

  ${data.description}

  ## Table of Contents

  *[Installation](#installation)

  *[Usage](#usage)

  *[License](#license)

  *[Contributing](#contributing)

  *[Tests](#tests)

  *[Questions](#questions)

  ## Installation

  ${backticks}
  ${data.installation}
  ${backticks}

  ## Usage

  ${data.usage}

  ## License

  This project is licensed under the following license:
  ${data.license}

  ## Contributing

  ${data.contributing}

  ## Tests

  To run tests, please run the following command:
  ${backticks}
  ${data.tests}
  ${backticks}

  ## Questions 

  For questions about the repo, please open an issue or send email to ${data.email}.
  You can find more of my work at <https://${data.github}.github.io/${data.title}>.
`

;

}

module.exports = generateMarkdown;

