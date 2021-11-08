const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
// TODO: Create an array of questions for user input
// const questions = [];
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
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
            name: 'installation',
            message: 'Please provide installation instructions'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions for use of your project'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your Github username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address'
        }


    ])


};

promptUser()
    .then((answers) => {
        const { title, description, installation, usage, github, email } = answers;
        const template = `
        ##${title}

        ## Description
        ${description}

        ## Table of Contents


        ## Installation
        ${installation}

        ## Usage
        ${usage}
        `
        // console.log("User answers: ", answers);
        fs.writeFileSync("README.md", template);
        // console.log("User answers saved successfully!");
    })
// promptUser().then(answers => console.log(answers));

// TODO: Create a function to write README file
// function writeToFile(myReadme, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
