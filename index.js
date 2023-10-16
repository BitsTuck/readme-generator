const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [ {
    type: 'input',
    message: 'Please enter your project title:',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please describe your application:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Please describe how to install your application:',
    name: 'installation',
  },
  {
      type: 'input',
      message: 'Please describe how to use your application:',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Please describe how to install your application:',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Please list contributions to your application:',
      name: 'contributions',
    },
    {
      type: 'input',
      message: 'Please list tests of your application:',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Please enter your GitHub Username:',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Please enter your email address:',
      name: 'email',
    }];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


inquirer
  .prompt(questions)
  .then((response) => {
    fs.writeFile('readme.md', JSON.stringify(response), (err) =>
    err ? console.log('Please complete the form') : console.log('Thank you for your reponse.'))
 
  });
