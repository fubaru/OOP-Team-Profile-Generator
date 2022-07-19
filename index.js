const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
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

const engineerQuestions = [
    {
        type:"input",
        message:"What is your engineer's name?",
        name:"engineerName"
    },
    {
        type:"input",
        message:"What is your engineer's id?",
        name:"engineerID"
    },
    {
        type:"input",
        message:"What is your engineer's email?",
        name:"engineerEmail"
    },
    {
        type:"input",
        message:"What is your engineer's gitHub?",
        name:"engineerGithub"
    }
]

function init() {
    inquirer
    .prompt(managerQuestions)
    .then(res=>{
        const manager = new Manager(res.mannagerName, res.managerID, res.managerEmail)

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
    .then(res=>{
        if(addMore===true){
            addEmpoloyee()
        } else {
            createHTML()
        }
    })
}

function addEngineer(){
    inquirer
    .prompt(engineerQuestions)
    .then(res=>{
        // create new instance for Engineer and then add it to the employeeArray using push
        const engineer = new Engineer()
    })

    confirmNext()
}

function addIntern () {}

function addEmpoloyee () {
    inquirer.prompt([{
        type:"list",
        message:"Do you want to add Engineer or Intern",
        choices:["Engineer","Intern"],
        name: "selection"
    }])
    .then(res=>{
        if(res.selection==="Engineer"){
            addEngineer()
        } else {
            addIntern()
        }
    })
}

function createHTML () {
    
}

init();