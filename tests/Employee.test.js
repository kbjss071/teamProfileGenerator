const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("getter method", () =>{
        const name = "Fizz";
        const id = 20;
        const email = "email@address.com";
        const employee = new Employee (name, id, email);
        it("getName should return the employee's name", () => {
            expect(employee.getName()).toBe(name);
        });
        it("getId should return the employee's ID", () => {
            expect(employee.getId()).toBe(id);
        });
        it("getEmail shoud return the employee's email", () => {
            expect(employee.getEmail()).toBe(email);
        });
        it("getRole should return the employee's role", () => {
            expect(employee.getRole()).toBe("Employee");
        });
    });
})