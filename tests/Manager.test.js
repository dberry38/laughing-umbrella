const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("createNewmanager", () => {
    it("should create an object with the keys 'name', 'id', 'email', and 'officeNumber' with values passed from the parameters in a 'new Manager' call.", () => {
      const manager = new Manager(
        "Jim",
        "001",
        "fakejake@hello.com",
        "208",
      );

      expect(manager.name).toBe("Jim");
      expect(manager.id).toBe("001");
      expect(manager.email).toBe("fakejake@hello.com");
      expect(manager.officeNumber).toBe("208");
    });
  });

  describe("getmanagerInfo", () => {
    it("should return manager's name, id, email, officeNumber, and role.", () => {
      const manager = new Manager(
        "John",
        "025",
        "nospamhere@wahoo.org",
        "208"
      );

      expect(manager.getName()).toEqual(expect.stringContaining("John"));
      expect(manager.getId()).toEqual(expect.stringContaining("025"));
      expect(manager.getEmail()).toEqual(expect.stringContaining("nospamhere@wahoo.org"));
      expect(manager.getOfficeNumber()).toEqual(expect.stringContaining("208"));
      expect(manager.getRole()).toEqual(expect.stringContaining("Manager"));
    });
  });
});
