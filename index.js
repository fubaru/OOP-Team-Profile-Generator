const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//need to import Engineer and Intern 

const generateHTML = require("./src/generateHTML");

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
];

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
];

const internQuestions = [
    {
        type:"input",
        message:"What is your intern's name?",
        name:"internName"
    },
    {
        type:"input",
        message:"What is your intern's id?",
        name:"internID"
    },
    {
        type:"input",
        message:"What is your intern's email?",
        name:"internEmail"
    },
    {
        type:"input",
        message:"Where does your Intern go to school?",
        name:"internSchool"
    }
];

function init() {
    inquirer
    .prompt(managerQuestions)
    .then(res=>{
        const manager = new Manager(res.managerName, res.managerID, res.managerEmail, res.managerNumber)

        employeeArray.push(manager)

        confirmNext()
    });
};

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
    });
};

function addEngineer(){
    inquirer
    .prompt(engineerQuestions)
    .then(res=>{
        // create new instance for Engineer and then add it to the employeeArray using push
        const engineer = new Engineer(res.engineerName, res.engineerID, res.engineerEmail, res.engineerGithub)

        employeeArray.push(engineer)

        confirmNext()
    });
};

function addIntern () {
    inquirer
    .prompt(internQuestions)
    .then(res=>{
        const intern = new Intern(res.internName, res.internID, res.internEmail, res.internSchool)

        employeeArray.push(intern)

        confirmNext()
    });
};

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
    console.log(employeeArray)

    let cards = ""

    for(let i=0; i < employeeArray.length; i++) {
        if(employeeArray[i].getRole()==='Manager') {
            cards = cards + managerCard(employeeArray[i])
        } else if (employeeArray[i].getRole()==='Engineer') {
            cards = cards + engineerCard(employeeArray[i])
        } else {
            cards = cards + interCard(employeeArray[i])
        }
    }

    fs.writeFileSync("./dist/team.html", generateHTML(cards))
}

init();