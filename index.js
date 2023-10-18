const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
    type: 'list',
    message: 'Please select a license for your project:',
    name: 'license',
    choices: ['MIT', 'Creative Commons', 'Mozilla Public License', 'Open Data Commons', 'The Artistic License']
  },
  {
      type: 'input',
      message: 'Please describe how to use your application:',
      name: 'usage',
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


inquirer
  .prompt(questions)
  .then((response) => {
    fs.writeFile('readme.md', generateMarkdown(response), (err) =>
    err ? console.log('Please complete the form') : console.log('Thanks! Go check out your ReadMe.'))
  });
