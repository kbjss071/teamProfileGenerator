const Employee = require('./Employee');

const question = [
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team manager's id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office number?"
    }
]

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }

    getOfficeNumber(){
        return this.office;
    }

    getRole(){
        return 'Manager';
    }
}

module.exports = {Manager, question};