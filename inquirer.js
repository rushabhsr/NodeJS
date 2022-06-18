const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?",
  },
  {
    type: 'number',
    name: 'age',
    message: "What's your age?",
  },
];

inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers.name}! with age ${answers.age}`);
  console.log(answers);
});