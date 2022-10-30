// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  let badge = '';

  if (license != "None") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }
  return badge;
}
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

const generateMarkdown = data => {
  return `# ${data.title}
  
  ## Descrition
  ${data.description}
  
  ## Table of Contents
    * [Installation] (#installation)
    * [Usuage] (#usage)
    * [License] (#license)
    * [Contributing] (#contributing)
    * [Tests](#tests)
    * [Questions] (#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage 
  ${data.usage}
  
  ## License
  This project is under ${data.license}
  
  ## Contributing
  ${data.contributing}
  
  ## Test
  ${data.test}
  
  ## Questions
  ${questions}
`;
}

module.exports = generateMarkdown;
