# Team Profile generator
![badge](https://img.shields.io/badge/MIT-License-blue.svg)

## Description

Team profile generator is a Node.js command line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. It provides quick access to employees' emails and GitHub profiles.

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)
- [Technologies used](#technologies-used)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To install the dependancies (Inquirer package), run 'npm install' in your command line.

## Usage

To invoke the application , use the command 'node index'. When the application is invoked, user will be prompted with a series of questions about their team members. Answer the questions correctly with the information regarding your team members. First, user will be prompted to enter team manager information. Then, they are presented with a menu with the option to add an engineer or an intern or to finish building their team.  After all members are added and user decides to finish building their team, a HTML file is generated that displays a nicely formatted team roster based on the user input. If HTML file is genarated successfully, a message 'Successfully created webpage containing team info!' will be logged to the terminal. When you see the success message, look for the HTML page created inside the folder 'dist'.

## Features

- A command line application that prompts for team's basic information.
- All user input  is validated to ensure they are in the proper format.
- When user finishes building the team, a HTML file is generated that displays a nicely formatted team roster.
- When an email address on the webpage is clicked, then the user's default email program opens and populates the TO field of the email with the address.
- When GitHub username on the webpage is clicked, then that GitHub profile opens in a new tab.

## License

Team Profile generator is available under the MIT License.

## Technologies used

Node.js, Inquirer package, Jest package(for a suite of unit tests), HTML

## How to Contribute

Contributions and ideas are welcome. Before submitting an issue, please take a moment to look over the contributing guidelines in https://www.contributor-covenant.org/ . Before submitting pull requests, ensure the following:

1. Fork the repo and create your branch from master.
2. Write a unit test for every part of your code and ensure that it passes each test.

## Tests

Uses the Jest package. There are 4 suite of unit tests currently. The tests could be run by typing 'npm test' in command line.

## Questions

https://github.com/marycpriyanka

For any addditional questions, reach me at marycpriyanka@gmail.com.
