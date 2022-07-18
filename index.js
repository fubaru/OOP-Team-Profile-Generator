const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager")
//need to import Engineer and Intern 

const generateHTML = require("./src/generateHTML")

//create Engineer questions and intern questions separately 
const employeeArray = [];
const managerQuestions = [
    {
        type:"input",
        message:"What is your manager's name?",
        name:"managerName"
    },
    {
        type:"input",
        message:"What is your manager's id?",
        name:"managerID"
    },
    {
        type:"input",
        message:"What is your manager's email?",
        name:"managerEmail"
    },
    {
        type:"input",
        message:"What is your manager's officeNumber?",
        name:"managerNumber"
    }
]

function init() {
    inquirer
    .prompt(managerQuestions)
    .then(res=>{
        const manager = new Manager(response.mannagerName, response.managerID, response.managerEmail)

        employeeArray.push(manager)

        confirmNext()
    })
}

function confirmNext() {
    inquirer.prompt([{
        type:"confirm",
        message: "Do you want to add more employees?",
        name: "addMore"
    }])
    .then(response=>{
        if(addMore===true){
            addEmpoloyee()
        } else {
            createHTML()
        }
    })
}

function addEmpoloyee () {

}

function createHTML () {
    
}

init();