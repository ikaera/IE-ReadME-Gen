// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer')
const fs = require('fs/promises')

    // 'What is the Project-Title?',
    // 'What is Description[User Story]?',
    // 'Table of Contents?',
    // 'Installation?',
    // 'What is the Usage[Acceptance Criteria] (including screensot and/or demo) and What Features were used?',    
    // 'License?',
    // 'Contirbuting?',
    // 'Tests?',
    // 'Questions?'

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the Project-Title?', 
  },
  // {

  // },
  // {

  // },
  // {

  // },
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
    console.log(markdown)
    return fs.writeFile('./output/Readme.md', markdown)
  })
  .catch((error) => {
    console.error(error)
    // if (error.isTryError) {
    //   // Prompt couldn't be rendered in the current environment
    // }else {
    //   // Something else went wrong
    // }
  })

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
