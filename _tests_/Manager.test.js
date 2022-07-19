const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("test Manager's properties", () => {
        it("test all properties", () => {
            const manager = new Manager('JuJu', 1, 'juju@gmail.com', '123-456-7890');

            expect(manager.name).toEqual('JuJu')
            expect(manager.id).toEqual(1)
            expect(manager.email).toEqual('juju@gmail.com')
            expect(manager.officeNumber).toEqual('123-456-7890')
        })
    });

    describe("test Manager's methods", () => {
        it("test all methods", () => {
            const manager = new Manager('Mochi', 2, 'Mochi@gmail.com', '465-454-4545');
          
            expect(manager.getRole()).toEqual('Manager')
        })
    });
});