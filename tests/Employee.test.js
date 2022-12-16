const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("createNewEmployee", () => {
    it("should create an object with the keys 'name', 'id', and 'email' with values passed from the parameters in a 'new Employee' call.", () => {
      const employee = new Employee("Jim", "001", "fakejake@hello.com");

      expect(employee.name).toBe("Jim");
      expect(employee.id).toBe("001");
      expect(employee.email).toBe("fakejake@hello.com");
    });
  });

  describe("getEmployeeInfo", () => {
    it("should return Employee's name, id, email, and role.", () => {
      const employee = new Employee("John", "025", "nospamhere@wahoo.org");

      expect(employee.getName()).toEqual(expect.stringContaining("John"));
      expect(employee.getId()).toEqual(expect.stringContaining("025"));
      expect(employee.getEmail()).toEqual(
        expect.stringContaining("nospamhere@wahoo.org")
      );
      expect(employee.getRole()).toEqual(expect.stringContaining("Employee"));
    });
  });
});
