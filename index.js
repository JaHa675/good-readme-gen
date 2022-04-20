const fs = require('fs')
const inquirer =require('inquirer')

inquirer
    .prompt([
        {
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
        },
    ])
    .then((response)=>
fs.writeFile('README.md', 
`# ${response.title}
## Description

${response.description}

## Installation

${response.installNotes}

## Usage

${response.usage}

## Credits

${response.colabs}

## License

Copyright 2022 James

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---
`,
(err) => err ? console.error(err) : console.log('Success!')
)

)


