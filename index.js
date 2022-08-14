// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'managerName',
        message: "Team manager's name:"
    },
    {
        type: 'input',
        name: 'employeeID',
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
        name: 'employee',
        message: 'Add an employee or finish team.',
        choices: ['engineer', 'intern', 'finished']
    },
];

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
        
    </body>
    </html>`
}

// Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            fs.writeFile(`index.html`, writeToFile(data), err => 
                err ? console.log(err) : console.log('HTML file created successfully!')
            );
        });
}

// Function call to initialize app
init();
