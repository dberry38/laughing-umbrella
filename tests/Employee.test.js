const { exportAllDeclaration } = require('@babel/types');
const { it } = require('node:test');
const { describe } = require('yargs');
const Employee = require('../lib/Employee');


describe('Employee', () => {
    describe('createNewEmployee', () => {
        it("should create an object with the keys 'name', 'id', and 'email' with values passed from the parameters in a 'new Employee' call.", () => {

            const obj = new Employee('Jim', 38, 'fakejake@hello.com');

            expect(obj.name).toBe('Jim');
            expect(obj.id).toBe(38);
            expect(obj.email).toBe('fakejake@hello.com');
            
        })
    })
})