function generateMarkdown(data) {
  return `
  # ${data.title.trim()}\n
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
  To install necessary dependencies, run the following command:\n
  \`${data.installation.trim()}\`\n
  ## Usage\n
  ${data.usage.trim()}\n
  ## License\n
  This project is licensed under the ${data.license.trim()} license\n
  ## Contributing\n
  ${data.contributing.trim()}\n
  ## Tests\n
  To run test, run the following command:\n
  \`${data.test.trim()}\`\n
  ## Questions\n
  <img src="https://avatars.githubusercontent.com/${data.username.trim()}" style="width: 40px; hight:40px; border-radius:100%;">\n
  If you have any questions about the repo, open an issue or contact ${data.email.trim()}.`;
}

module.exports = generateMarkdown;
