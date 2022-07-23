const Intern = require('../lib/Intern');
const InternConst = Intern.Intern;

describe("Intern", () => {
    describe("getter method", () =>{
        const name = "Fizz";
        const id = 20;
        const email = "email@address.com";
        const school = "public school";
        const intern = new InternConst (name, id, email, school);
        it("getName should return the intern's name", () => {
            expect(intern.getName()).toBe(name);
        });
        it("getId should return the intern's ID", () => {
            expect(intern.getId()).toBe(id);
        });
        it("getEmail shoud return the intern's email", () => {
            expect(intern.getEmail()).toBe(email);
        });
        it("getGithub should return the intern's school", ()=>{
            expect(intern.getSchool()).toBe(school);
        })
        it("getRole should return the intern's role", () => {
            expect(intern.getRole()).toBe("Intern");
        });
    });
})