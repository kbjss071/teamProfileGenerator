const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./generateHTML");
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
        const {name, id, email, officeNumber} = response;
        let newManager = new Manager.Manager(name, id, email, officeNumber);
        teamMember.push(newManager);
        isAddMember();
    })
}

function EngineerInfo(){
    inquirer.prompt(Engineer.question).then((response)=>{
        const {name, id, email, username} = response;
        let newEngineer = new Engineer.Engineer(name, id, email, username);
        teamMember.push(newEngineer);
        isAddMember();
    })

}

function InternInfo(){
    inquirer.prompt(Intern.question).then((response)=>{
        const {name, id, email, school} = response;
        let newIntern = new Intern.Intern(name, id, email, school);
        teamMember.push(newIntern);
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
                console.log("building a team...");
                writeToFile("index.html", generateHTML(teamMember));
        }
    })
}


// function to write index.html file using the user input
function writeToFile(filename, data){
    return fs.writeFileSync(path.join(__dirname, "/src", filename), data);
}

// call ManagerInfo function to start the app
ManagerInfo();