// Imports the inquirer package
const inquirer = require("inquirer");

const fs = require("fs");

// Import files
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

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
        name: "managerName",
        validate: (answer) => {
            if (answer !== "") {
                return true;
            }
            else {
                return "Please enter manager name";
            }
        }
    },
    {
        message: "Enter manager's employee id.",
        type: "input",
        name: "id",
        validate: (answer) => {
            const isID = answer.match(/^[1-9]\d*$/);
            if (isID) {
                return true;
            }
            else {
                return "Please enter a positive number as employee ID.";
            }
        }
    },
    {
        message: "Enter manager's email address.",
        type: "input",
        name: "email",
        validate: (answer) => {
            const isEmail = answer.match(/\S+@\S+\.\S+/);
            if (isEmail) {
                return true;
            }
            else {
                return "Please enter a valid email address.";
            }
        }
    },
    {
        message: "Enter manager's office number",
        type: "input",
        name: "phoneNumber",
        validate: (answer) => {
            const isNumber = answer.match(/^[1-9]\d*$/);
            if (isNumber) {
                return true;
            }
            else {
                return "Please enter only numbers for office number.";
            }
        }
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
            name: "engineerName",
            validate: (answer) => {
                if (answer !== "") {
                    return true;
                }
                else {
                    return "Please enter engineer name";
                }
            }
        },
        {
            message: "Enter engineer id.",
            type: "input",
            name: "id",
            validate: (answer) => {
                const isID = answer.match(/^[1-9]\d*$/);
                if (isID) {
                    return true;
                }
                else {
                    return "Please enter a positive number as employee ID.";
                }
            }
        },
        {
            message: "Enter engineer email id.",
            type: "input",
            name: "email",
            validate: (answer) => {
                const isEmail = answer.match(/\S+@\S+\.\S+/);
                if (isEmail) {
                    return true;
                }
                else {
                    return "Please enter a valid email address.";
                }
            }
        },
        {
            message: "Enter engineer's Github username.",
            type: "input",
            name: "github",
            validate: (answer) => {
                if (answer !== "") {
                    return true;
                }
                else {
                    return "Please enter Github username";
                }
            }
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
            name: "internName",
            validate: (answer) => {
                if (answer !== "") {
                    return true;
                }
                else {
                    return "Please enter intern name";
                }
            }
        },
        {
            message: "Enter intern id.",
            type: "input",
            name: "id",
            validate: (answer) => {
                const isID = answer.match(/^[1-9]\d*$/);
                if (isID) {
                    return true;
                }
                else {
                    return "Please enter a positive number as employee ID.";
                }
            }
        },
        {
            message: "Enter intern email id.",
            type: "input",
            name: "email",
            validate: (answer) => {
                const isEmail = answer.match(/\S+@\S+\.\S+/);
                if (isEmail) {
                    return true;
                }
                else {
                    return "Please enter a valid email address.";
                }
            }
        },
        {
            message: "Enter intern's school.",
            type: "input",
            name: "school",
            validate: (answer) => {
                if (answer !== "") {
                    return true;
                }
                else {
                    return "Please enter school name";
                }
            }
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

// Generates the HTML file
function finishTeamBuilding() {
    const htmlText = generateHtmlContent();

    fs.writeFile("./dist/index.html", htmlText, err =>
        err ? console.log(err) : console.log("Successfully created webpage containing team info!"));
}

// Generates the HTML content based on user input
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
                    <li class="list-group-item m-2">Email: <a href="mailto:${manager.getEmail()}" class="card-link">${manager.getEmail()}</a></li>
                    <li class="list-group-item m-2">Office number: ${manager.officeNumber}</li>
                </ul>
            </div>
            `

    // Adds the HTML content for all engineers
    for (const engineer of engineers) {
        htmlText = htmlText.concat(
            `<div class="card p-0 m-3 border border-success shadow" style="width: 18rem;">
                <div class="card-header bg-dark text-light">
                    <h4 class="card-title">${engineer.getName()}</h4>
                    <h5 class="card-text">${engineer.getRole()}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item m-2">ID: ${engineer.getId()}</li>
                    <li class="list-group-item m-2">Email: <a href="mailto:${engineer.getEmail()}" class="card-link">${engineer.getEmail()}</a></li>
                    <li class="list-group-item m-2">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" class="card-link">${engineer.getGithub()}</a></li>
                </ul>
            </div>
            `);
    }

    // Adds HTML content for interns
    for (const intern of interns) {
        htmlText = htmlText.concat(
            `<div class="card p-0 m-3 border border-success shadow" style="width: 18rem;">
                <div class="card-header bg-dark text-light">
                    <h4 class="card-title">${intern.getName()}</h4>
                    <h5 class="card-text">${intern.getRole()}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item m-2">ID: ${intern.getId()}</li>
                    <li class="list-group-item m-2">Email: <a href="mailto:${intern.getEmail()}" class="card-link">${intern.getEmail()}</a></li>
                    <li class="list-group-item m-2">School: ${intern.getSchool()}</li>
                </ul>
            </div>
            `);
    }

    // Adds the closing HTML content at the end of the file
    htmlText = htmlText.concat(`</section>
    </main>
</body>

</html>`);

    return htmlText;
};
