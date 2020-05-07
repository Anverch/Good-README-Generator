const fs = require("fs").promises;
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")

const questions = [{
        type: "input",
        message: "What is your Github user name?",
        name: "username",
        validate: value => isNotEmpty(value)
    },
    {
        type: "input",
        message: "What is your Github email?",
        name: "email",
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
    },
    {
        type: "input",
        message: "What is the command to run necessary dependencies?",
        name: "installation",
        validate: value => isNotEmpty(value)
    },
    {
        type: "input",
        message: "How do you use this?",
        name: "usage"
    },
    {
        type: "list",
        message: "Provide license name",
        name: "license",
        choices: [
            "MIT",
            "GPL",
            "Apache",
            "Apache 2"
        ]
    },
    {
        type: "input",
        message: "Who contributed to the project?",
        name: "contributing",
        validate: value => isNotEmpty(value)
    },
    {
        type: "input",
        message: "To run tests, run the following command:",
        name: "test",
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

const writeToFile = async (fileName, data) => {
    const content = generateMarkdown(data);
    await fs.writeFile(fileName, content);
}

async function init() {
    const userInput = await inquirer.prompt(questions);
    await writeToFile("./output/README.md", userInput);
}

init();