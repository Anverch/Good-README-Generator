const fs = require("fs").promises;
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

async function writeToFile(fileName, data) {
    const content = `# ${data.title.trim()}\n
![GitHub](https://img.shields.io/github/license/${data.username.trim()}/${data.title.trim()})\n
## Description\n\n${data.description.trim()}\n
## Table of Contents\n
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)\n`;

    await fs.writeFile(fileName, content);
}

async function init() {
    const userInput = await inquirer.prompt(questions);
    await writeToFile("./output/README.md", userInput);
}

init();