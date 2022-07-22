const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("getter method", () =>{
        const name = "Fizz";
        const id = 20;
        const email = "email@address.com";
        const office = 3;
        const manager = new Manager (name, id, email, office);
        it("getName should return the manager's name", () => {
            expect(manager.getName()).toBe(name);
        });
        it("getId should return the manager's ID", () => {
            expect(manager.getId()).toBe(id);
        });
        it("getEmail shoud return the manager's email", () => {
            expect(manager.getEmail()).toBe(email);
        });
        it("getGithub should return the manager's office number", ()=>{
            expect(manager.getOfficeNumber()).toBe(office);
        })
        it("getRole should return the manager's role", () => {
            expect(manager.getRole()).toBe("Manager");
        });
    });
})