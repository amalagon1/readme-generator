const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: function (answer) {
        if (!answer) {
            return "You must enter a title."
        }
        return true;
    }

},
{
    type: 'list',
    name: 'license',
    message: 'Please choose a license',
    choices: ['MIT', 'APACHE_2.0', 'Boost_1.0', 'BSD_2--Clause']
},
{
    type: 'input',
    name: 'description',
    message: 'Please describe your project',
    validate: function (answer) {
        if (!answer) {
            return "You must enter a description."
        }
        return true;
    }
},
{
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions if necessary'
},
{
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions for use of your project'
},
{
    type: 'input',
    name: 'contribution',
    message: 'How can other developers contribute to your project?'
},
{
    type: 'input',
    name: 'tests',
    message: "Test your application and provide examples on how to run them. "
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
];

// promptUser().then(answers => console.log(answers));

// TODO: Create a function to write README file
function writeToFile(myReadme, data) {
    return fs.writeFileSync(path.join(process.cwd(), myReadme), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(responses => {
        console.log(responses);
        // console.log('spreaded responses', { ...responses });
        // writeToFile("README.md", generateMarkdown({ ...responses }));
        writeToFile("README.md", generateMarkdown(responses));
    });
}
console.log('about to call init function');
// Function call to initialize app
init();
