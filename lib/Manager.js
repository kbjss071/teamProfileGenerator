const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, email, office) {
        super(id, email);
        this.office = office;
    }
}