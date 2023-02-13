// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const badge = '';
function renderLicenseBadge(license) {
  if (license.choices) {
    return badge = String(license.choices)
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if() {
     return
    }else {

    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if () {

  }else {
    
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## License

  ${data.license}

  ## Features

  ${data.features}

  ## Contributing (How to Contribute)

  ${data.Contributing}

  ## Tests 
  ${data.test}

  ## Questions  

  Please, reach me with additional questions:
  - ${data.emailAddress}
  - ${data.GitHub}

`;
}

module.exports = generateMarkdown;
