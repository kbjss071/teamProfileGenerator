const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(id, email, github) {
        super(id, email);
        this.username = github;
    }
}