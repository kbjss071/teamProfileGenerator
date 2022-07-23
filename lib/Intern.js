const Employee = require('./Employee');

const question = [
    {
        type: 'input',
        name: 'name',
        message: "What is your intern's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your intern's id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your intern's email?"
    },
    {
        type: 'input',
        name: 'school',
        message: "What is your intern's school?"
    }
]

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = 'Intern';
    }

    getSchool(){
        return this.school;
    }
    
    getRole(){
        return this.role;
    }
}

module.exports = {Intern, question};