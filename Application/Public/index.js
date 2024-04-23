// Including packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown'); // Assuming generateMarkdown.js is in the same directory
const path = require('path');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'filePath',
    message: 'Enter the file path where you want the README.md to be saved (MAKE SURE TO INCLUDE B-SLASHREADME.md AT THE END OF PATH) (press Enter for default):',
    default: './README.md'
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  }
];

// Create a function to write README file
function writeToFile(fileName, data) {
  // Resolve the path to ensure it's correct, regardless of user input
  const resolvedPath = path.resolve(fileName);

  fs.writeFile(resolvedPath, data, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log(`Successfully created README.md at ${resolvedPath}!`);
    }
  });
}

// Create a function to initialize app
function init() {
  const inquirer = require('inquirer');
  inquirer.prompt(questions).then((answers) => {
    const markdownContent = generateMarkdown(answers);
    writeToFile(answers.filePath, markdownContent); // Pass the user-defined file path
  }).catch((error) => {
    console.error('An error occurred:', error);
  });
}


// Function call to initialize app
init();
