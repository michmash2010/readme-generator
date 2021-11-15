// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('./utils/generateMarkdown');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const promptUser = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'userName',
            message: '1. What is your GitHub username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: '2. What is your email address?'
        },
        {
            type: 'input',
            name: 'title',
            message: "3. What is your project's name?"
        },
        {
            type: 'input',
            name: 'description',
            message: '4. Please write a short description of your project.'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: '5. What kind of license should your project have? (Use arrow keys)',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            name: 'installation',
            message: '6. What command should be run to install dependencies?',
            default: 'npm i'
        },
        {
            type: 'input',
            name: 'tests',
            message: '7. What command should be run to run tests?',
            default: 'npm test'
        },
        {
            type: 'input',
            name: 'usage',
            message: '8. What does the user need to know about using the repo?'
        },
        {
            type: 'input',
            name: 'contributing',
            message: '9. What does the user need to know about contributing to the repo?'
        },

    ])
    .then(data => {
        //console.log(data);
        const pageMd = generateMarkdown(data);

        fs.writeFile('./README.md', pageMd, err => {
        if (err) throw new Error(err);

        console.log('--Your README has been created! Check out README.md in the project root directory to see it!');
    });
          
    })};

    promptUser();

// TODO: Create a function to write README file
const writeToFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeToFile('./dist/README.md', data, err => {
            // if there's an error, reject the Promise and send the error to the Promise's '.catch()' method.
            if (err) {
                reject(err);
                console.log("oops!");
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well.
                return;
            }
            // if everything went well, resolve the Promise and send the successful data to the '.then()' method.
            resolve({
                ok: true,
                message: "File created!"
            });
        });
    });    
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
