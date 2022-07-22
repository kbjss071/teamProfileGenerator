const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

const teamMember = [];

function ManagerInfo(){
    inquirer.prompt(Manager.question).then((response)=>{

    })
}

function EngineerInfo(){
    inquirer.prompt(Engineer.question).then((response)=>{

    })

}

function InternInfo(){
    inquirer.prompt(Intern.question).then((response)=>{
        
    })
}