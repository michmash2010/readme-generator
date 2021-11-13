const fs = require('fs');
const index = require('../index.js'); 
const backticks = "```";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license = "MIT") {
    console.log("You chose MIT!")
  };
  
  
  //MIT, Apache 2.0, GPL 3.0, BSD 3, None
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
 
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //console.log("Hey I'm in generateMarkdown!" + data.title);
  return `
  
  # ${data.title}
  
  renderLicenseBadge
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

  This project is licensed under the ${data.license} license.

  ## Contributing

  ${data.contributing}

  ## Tests

  ${backticks}
  ${data.tests}
  ${backticks}

  ## Questions 

  For questions, please send email to ${data.email}.
`

;

}

module.exports = generateMarkdown;

