const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")


//array of questions
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "projectName",
        message: "What is the name of your Project?"
    },
    {
        type: "input",
        name: "projectDescription",
        message: "Give a brief description of your project."
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions for use."
    },
    {
        type: "input",
        name: "install",
        message: "What is the process to install your project?"
    },
    {
        type: "input",
        name: "collaborators",
        message: "Which users worked on this project (please provide a link to their github)?"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project use?",
        choices: ["None", "MIT", "Unlicensed"]
    },

]

//write readme function
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, fileName), data);
}

//initialize program function
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log("Generating README.md");
        writeToFile("README.md", generateMarkdown({...answers}));
        })
    }

 



//initialize program call
init();