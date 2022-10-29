import inquirer from 'inquirer'
import fs from 'fs'

const generateReadme = ({title, description, tableOfContents, installation, usage, license, contributing, test, questions}) => ``

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your ReadMe?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of your project.',
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'List a table of contents for your README.md',
    },
    {
        type: 'input',
        name: 'instalation',
        message: 'Explain any installations needed to use your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how the application is used.',
    },
    {
        type: 'input',
        name: 'license',
        message: 'List any licenses used in your project',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'List any contributions towards your project.',
    },
    {
        type: 'input',
        name: 'test',
        message: '',
    },
    {
        type: 'input',
        name: 'questions',
        message: '',
    },

])
.then((answers) => {
    const readMeContent = generateReadme(answers)
    fs.writeFile('generateReadme.md', readMeContent, (err) => {
        if (err) throw err
    })
})
// create init function that launches inquirer
// write my questions 
//make sure data comes back as I need it
// send data to generate markdown via deconstructor
// use template literals to create readme
// send it back to index.js to populate via write to file function 

// TODO: Create an array of questions for user input
// const questions = [];*

// TODO: Create a function to write README file

// function writeToFile(fileName, data) {}*

// TODO: Create a function to initialize app
// function init() {}*

// Function call to initialize app

// init();*


//use inquire to create question prompts via node
// us 'fs' to access the write to file function
// write out your file that way
// use path to route that file to generate markdown javascript
// that should be a readme that you generate using temperate literals




// TODO: Include packages needed for this application
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README