const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const teamMember = [];

const addMemberQuest = [
    {
        type: 'list',
        name: 'type',
        message: "Which type of team member would you like to add?",
        choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
    }
]

function ManagerInfo(){
    inquirer.prompt(Manager.question).then((response)=>{
        teamMember.push(response);
        isAddMember();
    })
}

function EngineerInfo(){
    inquirer.prompt(Engineer.question).then((response)=>{
        teamMember.push(response);
        isAddMember();
    })

}

function InternInfo(){
    inquirer.prompt(Intern.question).then((response)=>{
        teamMember.push(response);
        isAddMember();
    })
}

function isAddMember(){
    return inquirer.prompt(addMemberQuest).then((response)=>{
        switch(response.type){
            case "Engineer":
                EngineerInfo();
                break;
            case "Intern":
                InternInfo();
                break;
            case "I don't want to add any more team members":
                console.log("building a team");
                console.log(teamMember);
                generateHTML(teamMember);
        }
    })
}

function generateHTML(member){

}

// function to write index.html file using the user input
function writeToFile(filename, data){
    return fs.writeFileSync(path.join(__dirname, "/src", filename), data);
}

// call ManagerInfo function to start the app
ManagerInfo();
