// require and fs modules
import inquirer from 'inquirer';
import fs from 'fs';

// link to where README.md is generated
const generateMarkdown = require('./utils/generateMarkdown.js');

const licenses = ['None', 'MIT', 'BSD', 'GPL', 'Apache'];

// array of questions for the user
const questions = () => {
    // inquirer prompt for user to answer questions
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your project:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a description of your project: ',
        },
        {
            type: 'input',
            name: 'instalation',
            message: 'Explain any installations needed to use your project: ',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe how the application is used: ',
        },
        {
            type: 'input',
            name: 'license',
            message: 'Enter project license(s): ',
            choices: licenses
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'List any contributions towards your project.',
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter your github username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email: ',
        },

    ]),
        //function to write README file
        function writeToFile(data) {
            const generateReadme = "./README.md";

            fs.writeFile(generateReadme, data, function (err) {
                err ? console.log(err) : console.log(filename + " created!")
            });
        }
}

function init() {
    inquirer.prompt(questions)
    .then(answers => writeToFile(generateMarkdown(answers)))
}

//function to initialize app
init()

// create init function that launches inquirer
// write my questions
//make sure data comes back as I need it
// send data to generate markdown via deconstructor
// use template literals to create readme
// send it back to index.js to populate via write to file function



//use inquire to create question prompts via node
// us 'fs' to access the write to file function
// write out your file that way
// use path to route that file to generate markdown javascript
// that should be a readme that you generate using temperate literals




