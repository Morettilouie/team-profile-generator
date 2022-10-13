# team-profile-generator

team profile generator is a backend app that uses inquire to prompt users about their team members

first a manager is entered, then the user has three options. add an engineer, intern, or finish the prompt and generate page of employees

each time the user finishes a manager, engineer, or intern prompt the data is saved as a new employ

when the user selects finished the data is assorted into html for the writeFile to create the page

each function to create new employees passes jest testing qualifications from the jest node package