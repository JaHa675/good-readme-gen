const fs = require('fs')
const inquirer =require('inquirer')

inquirer
    .prompt([
        {
            type: 'input',
            message: 'github username?',
            name: 'githubUser',
        },{
            type: 'input',
            message: 'Repo name?',
            name: 'repo',
        },{
            type: 'input',
            message: 'Project title?',
            name: 'title',
        },{
            type: 'input',
            message: 'Describe the project',
            name: 'description',
        },{
            type: 'input',
            message: 'Installation instructions?',
            name: 'installNotes',
        },{
            type: 'input',
            message: 'Tell me what its used for',
            name: 'usage',
        },{
            type: 'input',
            message: 'Who colabd on this?',
            name: 'colabs',
        },{
            type: 'input',
            message: 'Email address',
            name: 'email',
        },
    ])
    .then((response)=>
fs.writeFile('./gen/README.md', 
`# ${response.title}
[![License: MIT](https://img.shields.io/github/license/${response.githubUser}/${response.repo})](https://opensource.org/licenses/MIT)

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Questions](#questions)
- [License](#license)

## Description

${response.description}

---

## Installation

${response.installNotes}

---

## Usage

${response.usage}

---

## Credits

${response.colabs}

---

## Questions

If you have any questions, reach me on [github](https://github.com/${response.githubUser})

or email me here at ${response.email}

---

## License

This app is covered under The MIT License, go nuts.

---

`,
(err) => err ? console.error(err) : console.log('Success!')
)
)


