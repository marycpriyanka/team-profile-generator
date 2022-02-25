// Imports the inquirer package
const inquirer = require("inquirer");

// Import files
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// Holds the manager object
const manager;
// Array of engineer objects
const engineers = [];
// Array of intern objects
const interns = [];

// Prompts user to enter manager name, id, email and office number
inquirer.prompt([
    {
        message: "Enter team manager's name.",
        type: "input",
        name: "managerName"
    },
    {
        message: "Enter manager's employee id.",
        type: "number",
        name: "id"
    },
    {
        message: "Enter manager's email address.",
        type: "input",
        name: "email"
    },
    {
        message: "Enter manager's office number",
        type: "number",
        name: "phoneNumber"
    },
    {
        message: "Do you want to add engineer, or intern, or finish building your team?",
        type: "list",
        choices: ["Add Engineer", "Add Intern", "Finish building team"],
        name: "addOrFinishOption"
    }
]).then(response => {
    // Creates manager object
    manager = new Manager(response.name, response.id, response.email, response.phoneNumber);

    addEmployeeOrCompleteTeam(response.addOrFinishOption);
}).catch(error => {
    console.log(error);
});

// Handles the user choice to add engineer or intern or finish the team building
function addEmployeeOrCompleteTeam(addOrFinishOption) {
    switch(response.addOrFinishOption) {
        case "Add Engineer":
            addEngineer();
            break;

        case "Add Intern":
            addIntern();
            break;

        case "Finish building team":
            finishTeamBuilding();
    }
}

// Prompts the user to enter engineer details and adds that engineer
function addEngineer() {
    inquirer.prompt([
        {
            message: "Enter engineer name.",
            type: "input",
            name: "engineerName"
        },
        {
            message: "Enter engineer id.",
            type: "number",
            name: "id"
        },
        {
            message: "Enter engineer email id.",
            type: "input",
            name: "email"
        },
        {
            message: "Enter engineer's Github username.",
            type: "input",
            name: "github"
        },
        {
            message: "Do you want to add an engineer, or an intern, or finish building your team?",
            type: "list",
            choices: ["Add Engineer", "Add Intern", "Finish building team"],
            name: "addOrFinishOption"
        }
    ]).then(response => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        engineers.push(engineer);

        addEmployeeOrCompleteTeam(response.addOrFinishOption);
    });
}

// Prompts user to enter intern details and adds that intern
function addIntern() {
    inquirer.prompt([
        {
            message: "Enter intern name.",
            type: "input",
            name: "engineerName"
        },
        {
            message: "Enter intern id.",
            type: "number",
            name: "id"
        },
        {
            message: "Enter intern email id.",
            type: "input",
            name: "email"
        },
        {
            message: "Enter intern's school.",
            type: "input",
            name: "school"
        },
        {
            message: "Do you want to add an engineer, or an intern, or finish building your team?",
            type: "list",
            choices: ["Add Engineer", "Add Intern", "Finish building team"],
            name: "addOrFinishOption"
        }
    ]).then(response => {
        const intern = new Intern(response.name, response.id, response.email, response.school);
        interns.push(intern);

        addEmployeeOrCompleteTeam(response.addOrFinishOption);
    });
}

function finishTeamBuilding() {
    
}
