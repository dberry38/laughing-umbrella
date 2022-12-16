const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("createNewIntern", () => {
    it("should create an object with the keys 'name', 'id', 'email', and 'school' with values passed from the parameters in a 'new Intern' call.", () => {
      const intern = new Intern(
        "Jim",
        "001",
        "fakejake@hello.com",
        "UW"
      );

      expect(intern.name).toBe("Jim");
      expect(intern.id).toBe("001");
      expect(intern.email).toBe("fakejake@hello.com");
      expect(intern.school).toBe("UW");
    });
  });

  describe("getinternInfo", () => {
    it("should return Intern's name, id, email, school, and role.", () => {
      const intern = new Intern(
        "John",
        "025",
        "nospamhere@wahoo.org",
        "UW"
      );

      expect(intern.getName()).toEqual(expect.stringContaining("John"));
      expect(intern.getId()).toEqual(expect.stringContaining("025"));
      expect(intern.getEmail()).toEqual(expect.stringContaining("nospamhere@wahoo.org"));
      expect(intern.getSchool()).toEqual(expect.stringContaining("UW"));
      expect(intern.getRole()).toEqual(expect.stringContaining("Intern"));
    });
  });
});
