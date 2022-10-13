// Include packages needed for this application
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const template = require('./src/html');
const writeFile = require('./src/writeFile');

// array of employees
let employees = [];

// add employee prompt
const employeeQuestion = [
    {
        type: 'list',
        name: 'option',
        message: 'Add an employee or finish team.',
        choices: ['engineer', 'intern', 'finished']
    }
]

// Create an array of questions for user input
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
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
        name: 'id',
        message: 'Manager ID:',
        validate: id => {
            if (id) {
                return true;
            } else {
                console.log("Please enter the manager's ID!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
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
        name: 'officeNumber',
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
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
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
        name: 'id',
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
        name: 'email',
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
        name: 'github',
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
        name: 'name',
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
        name: 'id',
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
        name: 'email',
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
        name: 'school',
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

// Create a function to initialize app
function getManager() {
    return inquirer
        .prompt(managerQuestions)
        .then(managerInfo => {
            const { name, id, email, officeNumber } = managerInfo;
            const manager = new Manager(name, id, email, officeNumber);
            employees.push(manager);
            console.log(manager);


        });
}

function addEmployee() {
    inquirer
        .prompt(employeeQuestion)
        .then(data => {
            if (data.option === 'engineer') {
                console.log(employees);
                getEngineer().then(addEmployee);


            } else if (data.option === 'intern') {
                console.log(employees);
                getIntern().then(addEmployee);


            } else {
                let html = template(employees)
                console.log('...');
                // creates HTML file
                writeFile(html);
            }
        })
}

function getEngineer() {
    return inquirer
        .prompt(engineerQuestions)
        .then(engineerInfo => {
            const { name, id, email, github } = engineerInfo;
            const engineer = new Engineer(name, id, email, github);
            employees.push(engineer);
            console.log(engineer);
        })
}

function getIntern() {
    return inquirer
        .prompt(internQuestions)
        .then(internInfo => {
            const { name, id, email, school } = internInfo;
            const intern = new Intern(name, id, email, school);
            employees.push(intern);
            console.log(intern);
        })
}

// Function call to initialize app
getManager()
        .then(addEmployee)
        .catch(err => {
            console.log(err)
        });
