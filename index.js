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
    },
    {
        type: "input",
        message: "What is the command to run necessary dependencies?",
        name: "installation",
        validate: value => isNotEmpty(value)
    },
    // {
    //     type: "input",
    //     message: "What is the usage?",
    //     name: "usage"
    //     //validate: value => isNotEmpty(value)
    // },
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
    const content = `# ${data.title.trim()}\n
![GitHub](https://img.shields.io/github/license/${data.username.trim()}/${data.title.trim()})\n
## Description\n\n${data.description.trim()}\n
## Table of Contents\n
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)\n
## Installation\n
To install necessary dependencies, run the following command:
\`${data.installation.trim()}\`\n
## Usage\n

## License\n
This project is licensed under the ${data.license.trim()} license\n
## Contributing\n
${data.contributing.trim()}\n
## Tests\n
To run test, run the following command:\n
\`${data.test.trim()}\`\n
## Questions\n
<img src="https://avatars.githubusercontent.com/${data.username.trim()}" style="width: 40px; hight:40px; border-radius:100%;">\n
If you have any questions about the repo, open an issue or contact ${data.username.trim()} directly at null`;

    await fs.writeFile(fileName, content);
}

async function init() {
    const userInput = await inquirer.prompt(questions);
    await writeToFile("./output/README.md", userInput);
}

init();