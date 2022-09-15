// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: "Team manager's name:",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the manager's name!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerID',
        message: 'Manager ID:',
        validate: inputID => {
            if (inputID) {
                return true;
            } else {
                console.log("Please enter the manager's ID!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Email address:',
        validate: email => {
            validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (validEmail) {
                return true;
            } else {
                console.log("Please enter a valid email!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'Office number:',
        validate: officeNumber => {
            if (officeNumber) {
                return true;
            } else {
                console.log("Please enter the manager's office number!")
                return false;
            }
        }
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
        message: "Engineer's name:",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the engineer's name!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerID',
        message: 'Employee ID:',
        validate: inputID => {
            if (inputID) {
                return true;
            } else {
                console.log("Please enter the employee's ID!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'Email address:',
        validate: email => {
            validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (validEmail) {
                return true;
            } else {
                console.log("Please enter a valid email!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerGitHub',
        message: 'GitHub Username:',
        validate: github => {
            if (github) {
                return true;
            } else {
                console.log("Please enter the employee's ID!")
                return false;
            }
        }
    },
];

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: "Intern's name:",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the intern's name!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internID',
        message: 'Intern ID:',
        validate: inputID => {
            if (inputID) {
                return true;
            } else {
                console.log("Please enter the intern's ID!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'Email address:',
        validate: email => {
            validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (validEmail) {
                return true;
            } else {
                console.log("Please enter a valid email!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'Intern School:',
        validate: inputID => {
            if (inputID) {
                return true;
            } else {
                console.log("Please enter the intern's ID!")
                return false;
            }
        }
    }
]

function getEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then(engineerInfo => {
            return engineerInfo;
        })
}

function getIntern() {
    inquirer
        .prompt(internQuestions)
        .then(internInfo => {
            return internInfo;
        })
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
                
                // return managerChoice();
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
