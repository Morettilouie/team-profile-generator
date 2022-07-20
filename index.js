// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
    
];

// Create a function to write HTML file
function writeToFile(data) {
    return ``
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
