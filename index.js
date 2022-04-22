const fs = require('fs')
const inquirer =require('inquirer')

inquirer
    .prompt([
        {
            type: 'input',
            message: 'github username?',
            name: 'githubUser',
            default: 'JaHa675',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("username is required.");
                }
                return true;
            }
        },{
            type: 'input',
            message: 'Project title?',
            name: 'title',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("title is required.");
                }
                return true;
            }
        },{
            type: 'input',
            message: 'Describe the project',
            name: 'description',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("description is required.");
                }
                return true;
            }
        },{
            type: 'input',
            message: 'Installation instructions?',
            name: 'installNotes',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("install notes are required.");
                }
                return true;
            }
        },{
            type: 'input',
            message: 'Tell me what its used for',
            name: 'usage',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("usage notes required.");
                }
                return true;
            }
        },{
            type: 'input',
            message: 'contribution guidelines?',
            name: 'contribute',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("contribution notes are required.");
                }
                return true;
            }
        },{
            type: 'input',
            message: 'Email address',
            name: 'email',
            default:'James.Harding675@gmail.com',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("email is very required.");
                }
                return true;
            }
        },{
            type: 'input',
            message: 'What tests?',
            name: 'tests',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("tests are required.");
                }
                return true;
            }
        },{
            type: 'list',
            message: "Choose a license for your project.",
            choices: ['GNUAGPLv3', 'GNUGPLv3', 'GNULGPLv3', 'MIT', 'Unlicense'],
            name: 'license'
        }
    ])
    .then((response)=>
fs.writeFile('./output/README.md', 
`# ${response.title}
![License: ${response.license}](https://img.shields.io/badge/license-${response.license}-blue)

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Questions](#questions)
- [License](#license)
- [Tests](#tests)

## Description

${response.description}

---

## Installation

${response.installNotes}

---

## Usage

${response.usage}

---

## Tests

${response.tests}

---

## Contribution guidelines

If you'd like to contribute, ${response.contribute}

---

## Questions

If you have any questions, reach me on [github](https://github.com/${response.githubUser})

or email me here at ${response.email}

---

## License

${response.license}

---

`,
(err) => err ? console.error(err) : console.log('Success!')
)
)
