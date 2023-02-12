// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs/promises');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    // default: ,
    validate: answer => {
      if (answer === '') {
        return 'Please enter a title.';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'description',
    message:
      'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide: (1)What was your motivation? (2) Why did you build this project? (3)  What problem does it solve? (4) What did you learn?',
    // default: ,
    // validate: ,
  },
  {
    type: 'checkbox',
    message:
      'If your README is long, add a table of contents to make it easy for users to find what they need.',
    name: 'tableOfContents',
    choices: ['[Installation]', '[Usage]', '[Credits]', '[License]'],
  },
  {
    type: 'input',
    name: '[Installation](#installation)',
    message:
      'What are the steps required to install the project? Provide a step-by-step description of how to get the development environment running, please.',
    default: '',
    // validate:
  },

  {
    type: 'input',
    name: 'usage',
    message:
      'Provide instructions and examples for use, please. (Include screenshots as needed).',
    default: '',
    // validate:
  },

  {
    type: 'input',
    name: 'cresits',
    message:
      'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.If you followed tutorials, include links to those here as well.',
    default: '',
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Choose an open source license, please.',
    choices: [
      'Apache License 2.0',
      'GNU General Public License v3.0',
      'MIT License',
      'BSD 2-Clause "Simplified" License,',
      'BSD 3-Clause "New" or "Revised" License',
      'Boost Software License 1.0',
    ],
    default:
      'This lets other developers know what they can and cannot do with your project.',
  },

  {
    type: 'input',
    name: 'features',
    message: 'Please, enter the features of your project.',
    // default:
    // validate:
  },

  {
    type: 'input',
    name: 'Contributing',
    message:
      "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.",
    // default:
    // validate:
  },
  {
    type: 'input',
    name: 'test',
    message:
      'If you have written the tests for your application, please, provide examples on how to run them here.',
  },
  {
    type: 'input',
    name: 'GitHub',
    message: 'Enter your GitHub username here, please.',
  },
  {
    type: 'input',
    name: 'emailAddress',
    message: 'Enter your email address here, please.',
  },
];

inquirer
  .prompt(
    /* Pass your questions in here */
    questions,
  )
  .then(function (answers) {
    // Use user feedback for... whatever!!
    console.log(answers);
    const markdown = generateMarkdown(answers);
    console.log(markdown);
    const fileName = `${answers.title.toLowerCase().split(' ').join('')}.md`;

    return fs.writeFile(`./output/${fileName}`, markdown);
  })
  .catch(error => {
    console.error(error);
    // if (error.isTryError) {
    //   // Prompt couldn't be rendered in the current environment
    // }else {
    //   // Something else went wrong
    // }
  });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
