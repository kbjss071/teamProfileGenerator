const Employee = require('./Employee');

class Intern extends Employee {
    constructor(id, email, school) {
        super(id, email);
        this.school = school;
    }
}