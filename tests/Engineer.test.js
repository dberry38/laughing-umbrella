const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("createNewEngineer", () => {
    it("should create an object with the keys 'name', 'id', 'email', and 'github' with values passed from the parameters in a 'new Engineer' call.", () => {
      const engineer = new Engineer(
        "Jim",
        "001",
        "fakejake@hello.com",
        "gitUser"
      );

      expect(engineer.name).toBe("Jim");
      expect(engineer.id).toBe("001");
      expect(engineer.email).toBe("fakejake@hello.com");
      expect(engineer.github).toBe("gitUser");
    });
  });

  describe("getengineerInfo", () => {
    it("should return Engineer's name, id, email, github, and role.", () => {
      const engineer = new Engineer(
        "John",
        "025",
        "nospamhere@wahoo.org",
        "gitUser"
      );

      expect(engineer.getName()).toEqual(expect.stringContaining("John"));
      expect(engineer.getId()).toEqual(expect.stringContaining("025"));
      expect(engineer.getEmail()).toEqual(expect.stringContaining("nospamhere@wahoo.org"));
      expect(engineer.getGithub()).toEqual(expect.stringContaining("gitUser"));
      expect(engineer.getRole()).toEqual(expect.stringContaining("Engineer"));
    });
  });
});
