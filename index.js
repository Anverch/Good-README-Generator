const inquirer = require('inquirer');

const questions = [{
        type: "input",
        message: "What is your Github user name?",
        name: "username",
        validate: value => isNotEmpty(value)
    },
    {
        type: "input",
        message: "What is your project title?",
        name: "title",
        validate: value => isNotEmpty(value)
    },
    {
        type: "input",
        message: "What is the project description?",
        name: "description",
        validate: value => isNotEmpty(value)
    }
];

function isNotEmpty(value) {
    if (value != null && value.length > 0) {
        return true;
    } else {
        return false;
    }
}

function writeToFile(fileName, data) {}

async function init() {
    const userInput = await inquirer.prompt(questions);
}

init();