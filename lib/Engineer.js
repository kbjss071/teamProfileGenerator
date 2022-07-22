const Employee = require('./Employee');

const question = [
    {
        type: 'input',
        name: 'name',
        message: "What is your engineer's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your engineer's id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your engineer's email?"
    },
    {
        type: 'input',
        name: 'username',
        message: "What is your engineer's GitHub username?"
    },
    {
        type: 'list',
        name: 'type',
        message: "Which type of team member would you like to add?",
        choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
    }
]

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.username = github;
    }

    getGithub(){
        return this.username;
    }

    getRole(){
        return 'Engineer';
    }
}

module.exports = {Engineer, question};