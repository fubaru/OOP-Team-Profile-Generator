const Employee = require("../lib/Employee");
describe("Employee", ()=>{
    describe("test Employee's properties", ()=>{
        it("test all properties",()=>{
        const employee=new Employee('Austin',1,'austinfu0422@gmail.com');

        expect(employee.name).toEqual('Austin')
        expect(employee.id).toEqual(1)
        expect(employee.email).toEqual('austinfu0422@gmail.com')
        })
        
    });
    describe("test Employee's methods", ()=>{
        it("test all properties",()=>{
        const employee=new Employee('Justin',2,'justin@gmail.com');

        expect(employee.getName()).toEqual('Justin')
        expect(employee.getId()).toEqual(2)
        expect(employee.getEmail()).toEqual('justin@gmail.com')
        expect(employee.getRole()).toEqual('Employee')
        })
        
    });

});