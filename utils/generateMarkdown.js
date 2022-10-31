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
// switch resource https://www.w3schools.com/js/js_switch.asp
function renderLicenseLink(license) {
  
  let licenseLink = '';

  switch(license) {
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
      case "BSD":
        licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
        break;
        case "GPL":
          licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
          break;
          case "Apache":
            licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
            break;
            default:
              licenseLink = "";
              break;
  }
  return licenseLink;
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
// this project is licensend under the (license) license
// if no license return ""

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
  If you have any question reach out to me at ${data.email}
`;
}

export default generateMarkdown;
