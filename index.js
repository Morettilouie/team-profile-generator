// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: "Team manager's name:"
    },
    {
        type: 'input',
        name: 'managerID',
        message: 'Employee ID:'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Email address:'
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'Office number:'
    },
    {
        type: 'list',
        name: 'option',
        message: 'Add an employee or finish team.',
        choices: ['engineer', 'intern', 'finished']
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: "Engineer's name:"
    },
    {
        type: 'input',
        name: 'engineerID',
        message: 'Employee ID:'
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'Email address:'
    },
    {
        type: 'input',
        name: 'engineerGitHub',
        message: 'GitHub:'
    },
];

function getEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then(engineerInfo => {
            return engineerInfo;
        })
}

function getIntern() {
    console.log('Intern')
}

// Create a function to write HTML file
function writeToFile(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <header>
        <h1>My Team</h1>
    </header>
    <body>
        <div class='employees'>
            <div class='manager'>
                <h2>${data.managerName}</h2>
                <h3>Manager</h3>
                <div>
                    <div>
                        <p>ID:${data.managerID}</p>
                        <a href="mailto:${data.managerEmail}">Email:${data.managerEmail}</a>
                        <p>Office number:${data.managerOfficeNumber}</p>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>`
}

// Create a function to initialize app
function getManager() {
    inquirer
        .prompt(managerQuestions)
        .then(data => {
            if (data.option === 'engineer') {
                getEngineer();
                return getManager();
            } else if (data.option === 'intern') {
                getIntern()
            } else {
                fs.writeFile(`index.html`, writeToFile(data), err =>
                    err ? console.log(err) : console.log('HTML file created successfully!')
                )
            }

        });
}

// Function call to initialize app
getManager();
