const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
// TODO: Create an array of questions for user input
// const questions = [];
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
            //     validate: nameInput => {
            //         if (nameInput) {
            //             return true;
            //         } else {
            //             console.log('Please enter the name of your project!');
            //             return false;
            // }
            //     }

        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project'
        },
        {
            type: 'input',
            name: 'installation instructions',
            message: 'Please provide installation instructions'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions for use of your project'
        }


    ]);


};
promptUser().then(answers => console.log(answers));

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
