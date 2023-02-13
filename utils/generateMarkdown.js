// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license) {
    return (badge = `https://img.shields.io/badge/license-${license}-blue.svg`);
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache License 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'GNU General Public License v3.0') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (license === 'MIT License') {
    return 'https://opensource.org/licenses/MIT';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Apache License 2.0') {
    return `Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed.`;
  } else if (license === 'GNU General Public License v3.0') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (license === 'MIT License') {
    return 'https://opensource.org/licenses/MIT';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  <a href = '${renderLicenseLink(
    data.license,
  )}'> <img src = "${renderLicenseBadge(data.license)}">
  </a>

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

  <a href = '${renderLicenseLink(data.license)}'> ${data.license} </a>

  <p> ${renderLicenseSection(data.license)} </p>

  ## Features

    - ${data.features}

  ## Contributing (How to Contribute)

  ${data.Contributing}

  ## Tests 
  ${data.test}

  ## Questions  

  Please, reach me with additional questions:
  - Email: ${data.emailAddress}
  - GitHub: <a href = 'https://github.com/${data.GitHub}'> ${data.GitHub}
  </a>
`;
}

module.exports = generateMarkdown;
