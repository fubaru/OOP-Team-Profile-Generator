const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("test Engineer's properties", () => {
        it("test all properties", ()=>{
            const engineer = new Engineer('Fubaru',1,'Fubaru@gmail.com','https://github.com/fuabru')

            expect(engineer.name).toEqual('Fubaru')
            expect(engineer.id).toEqual(1)
            expect(engineer.email).toEqual('Fubaru@gmail.com')
            expect(engineer.github).toEqual('https://github.com/fuabru')
        });
    });

    describe("test all Engineer's methods", () => {
        it("test all methods", ()=>{
            const engineer = new Engineer('Fuba',2,'Fuba@gmail.com','https://github.com/fuba')

            expect(engineer.getGithub()).toEqual('https://github.com/fuba')
            expect(engineer.getRole()).toEqual('Engineer')
        });
    });
});