const inquirer = require(inquirer);
const fs = require("fs");
const generateTeam = require("./src/page-template.js");

//lib modules
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//Array for answers to questions
const newStaffMemberData = [];

//Array object questions asked in CLI to user
const questions = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is you ID number?",
      name: "id",
    },
  ]);
};
