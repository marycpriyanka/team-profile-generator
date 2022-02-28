// Imports the inquirer package
const inquirer = require("inquirer");

const fs = require("fs");

// Import files
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Employee = require("./lib/employee");

// Holds the manager object
let manager;
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
    manager = new Manager(response.managerName, response.id, response.email, response.phoneNumber);

    addEmployeeOrCompleteTeam(response.addOrFinishOption);
}).catch(error => {
    console.log(error);
});

// Handles the user choice to add engineer or intern or finish the team building
function addEmployeeOrCompleteTeam(addOrFinishOption) {
    switch (addOrFinishOption) {
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
        const engineer = new Engineer(response.engineerName, response.id, response.email, response.github);
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
            name: "internName"
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
        const intern = new Intern(response.internName, response.id, response.email, response.school);
        interns.push(intern);

        addEmployeeOrCompleteTeam(response.addOrFinishOption);
    });
}

function finishTeamBuilding() {
    const htmlText = generateHtmlContent();

    fs.writeFile("./dist/index.html", htmlText, err =>
        err ? console.log(err) : console.log("Successfully created webpage containing team info!"));
    console.log(manager.name, manager.officeNumber);
}

const generateHtmlContent = () => {
    let htmlText = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team</title>
</head>

<body>
    <header class="bg-success bg-gradient">
        <h1 class="p-5 text-center text-light">My Team</h1>
    </header>
    <main class="container ">
        <section id="employeeSection" class="row justify-content-center d-flex">
            <div class="card p-0 m-3 border border-success shadow" style="width: 18rem;">
                <div class="card-header bg-dark text-light">
                    <h4 class="card-title">${manager.getName()}</h4>
                    <h5 class="card-text">${manager.getRole()}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item m-2">ID: ${manager.getId()}</li>
                    <li class="list-group-item m-2">Email: <a href="#" class="card-link">${manager.getEmail()}</a></li>
                    <li class="list-group-item m-2">Office number: <a href="#" class="card-link">${manager.officeNumber}</a></li>
                </ul>
            </div>
            `

    for (const engineer of engineers) {
        htmlText = htmlText.concat(
            `<div class="card p-0 m-3 border border-success shadow" style="width: 18rem;">
                <div class="card-header bg-dark text-light">
                    <h4 class="card-title">${engineer.getName()}</h4>
                    <h5 class="card-text">${engineer.getRole()}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item m-2">ID: ${engineer.getId()}</li>
                    <li class="list-group-item m-2">Email: <a href="#" class="card-link">${engineer.getEmail()}</a></li>
                    <li class="list-group-item m-2">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" class="card-link">${engineer.getGithub()}</a></li>
                </ul>
            </div>
            `);
    }

    for (const intern of interns) {
        htmlText = htmlText.concat(
            `<div class="card p-0 m-3 border border-success shadow" style="width: 18rem;">
                <div class="card-header bg-dark text-light">
                    <h4 class="card-title">${intern.getName()}</h4>
                    <h5 class="card-text">${intern.getRole()}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item m-2">ID: ${intern.getId()}</li>
                    <li class="list-group-item m-2">Email: <a href="#" class="card-link">${intern.getEmail()}</a></li>
                    <li class="list-group-item m-2">School: <a href="#" class="card-link">${intern.getSchool()}</a></li>
                </ul>
            </div>
            `);
    }

    htmlText = htmlText.concat(`</section>
    </main>
</body>

</html>`);

    return htmlText;
};
