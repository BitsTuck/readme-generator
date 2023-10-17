const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');

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
    message: 'Please select a license for your project:',
    name: 'usage',
    //need icon input and selection menu
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

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
    // const response = {
    //     title: '';
    //     description: '';
    //     installation: '';
    //     usage: '';
    //     contributions: '';
    //     tests: '';
    //     github: '';
    //     email: '';
    // }
    

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


inquirer
  .prompt(questions)
  .then((response) => {
    fs.writeFile('readme.md', JSON.stringify(response), (err) =>
    err ? console.log('Please complete the form') : console.log('Thank you for your reponse.'))


    //JSON parse?
    // `
    // <h1 id="title">Project Title</h1>
    // <h1 id="description">Project Description</h1>
    // <h1 id="installation">Project Installation</h1>
    // <h1 id="usage">Project Usage</h1>
    // <h1 id="contributions">Project Contributors</h1>
    // <h1 id="tests">Project Testing</h1>
    // <h1 id="github">Author Github</h1>
    // <h1 id="email">Contact the Author</h1>
    // `
 
  });
