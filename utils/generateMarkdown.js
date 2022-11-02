// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenses) {

  if (!licenses) {
    return ``;
  } else {
    return `[![${licenses} license](https://img.shields.io/badge/License-${licenses}-green.svg)](${renderLicenseLink(licenses)})`
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// switch resource https://www.w3schools.com/js/js_switch.asp
function renderLicenseLink(licenses) {

  if (licenses === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
  if (licenses === 'BSD'){
    return `https://opensource.org/licenses/BSD-3-Clause`
  }
  if (licenses === 'GPL') {
    return `http://perso.crans.org/besson/LICENSE.html`
  }
  if (licenses === 'Apache') {
    return `https://www.apache.org/licenses/LICENSE-2.0.html`
  }
  if (licenses === "None") {
    return ''
  }
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenses) {
  if (!licenses) {
    return ``;
  } else {
    return `## Licenses
    This project is covered under the ${licenses} license. To learn more about what this means, click the license button at the top.`
  }
}

// TODO: Create a function to generate markdown for README

const generateMarkdown = data => {
  return `# ${data.title}

  ${renderLicenseBadge(data.licenses)}
  
  ## Descrition
  ${data.description}
  
  ## Table of Contents
    * [Installation](#installation)
    * [Usuage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage 
  ${data.usage}
  
  
  ${renderLicenseSection(data.licenses)}
  
  
  ## Contributing
  ${data.contributing}
  
  ## Test
  ${data.test}
  
  ## Questions
  Have questions about this project?  
  GitHub: https://github.com/${data.github}  
  Email: ${data.email}
`;
}

// export to index.js
export default generateMarkdown;
