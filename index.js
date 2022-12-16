const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "what is going on?",
  },
]);
