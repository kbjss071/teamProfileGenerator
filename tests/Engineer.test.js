const Engineer = require('../lib/Engineer');
const EngineerConst = Engineer.Engineer;

describe("Engineer", () => {
    describe("getter method", () =>{
        const name = "Fizz";
        const id = 20;
        const email = "email@address.com";
        const username = "GitHub_username";
        const engineer = new EngineerConst (name, id, email, username);
        it("getName should return the engineer's name", () => {
            expect(engineer.getName()).toBe(name);
        });
        it("getId should return the engineer's ID", () => {
            expect(engineer.getId()).toBe(id);
        });
        it("getEmail shoud return the engineer's email", () => {
            expect(engineer.getEmail()).toBe(email);
        });
        it("getGithub should return the engineer's github username", ()=>{
            expect(engineer.getGithub()).toBe(username);
        })
        it("getRole should return the engineer's role", () => {
            expect(engineer.getRole()).toBe("Engineer");
        });
    });
})