const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("test Inter's properties", () => {
        it("test all properties", () => {
            const intern = new Intern('Mack', 1, 'mack@gmail.com', 'OSU')

            expect(intern.name).toEqual('Mack')
            expect(intern.id).toEqual(1)
            expect(intern.email).toEqual('mack@gmail.com')
            expect(intern.school).toEqual('OSU')
        })
    });

    describe("test all Intern's methods", () => {
        it("test all methods", () => {
            const intern = new Intern('Madi',2,'madi@gmail.com','Loyola')

            expect(intern.getSchool()).toEqual('Loyola')
            expect(intern.getRole()).toEqual('Intern')
        });
    });
});