// require and fs modules
import inquirer from 'inquirer';
import fs from 'fs';

// link to where README.md is generated
import generateMarkdown from './utils/generateMarkdown.js';

// const licenses = ['None', 'MIT', 'BSD', 'GPL', 'Apache'];

// array of questions for the user
const questions = 
    // inquirer prompt for user to answer questions
    [
        {
            type: 'input',
            name: 'title',
            message: 'Welcome to README generator! Please enter the title of your project:',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your github username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email: ',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the description of your project: ',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the instructions for installation:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage Instructions:',
        },
        {
            type: 'list',
            name: 'licenses',
            message: 'Enter project license(s): ',
            choices: ['None', 'MIT', 'BSD', 'GPL', 'Apache'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can others contribute to this project?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Describe the tests for your application and how to use them:',
        },

    ]
        //function to write README file
        function writeToFile(data) {
            const generateReadme = "./README.md";

            fs.writeFile(generateReadme, data, function (err) {
                err ? console.log(err) : console.log(generateReadme + " created!")
            });
        }


function init() {
    inquirer.prompt(questions)
    .then(answers => writeToFile(generateMarkdown(answers)))
}

//function to initialize app
init()


// Brocked to-do list
// create init function that launches inquirer
// write my questions
//make sure data comes back as I need it
// send data to generate markdown via deconstructor
// use template literals to create readme
// send it back to index.js to populate via write to file function





