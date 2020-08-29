describe("Test Case 1", function() {
    it("should determine the areaOrPerimeter", function() {
        expect(areaOrPerimeter(4,4)).toEqual(16);
      });
});
describe("Test Case 2", function() {
  it("should determine the areaOrPerimeter", function() {
      expect(areaOrPerimeter(6 , 10)).toEqual(32);
    });
});
describe("Test Case 3", function() {
  it("should determine the areaOrPerimeter", function() {
      expect(areaOrPerimeter(14,4)).toEqual(36);
    });
});
describe("Test Case 4", function() {
  it("should determine the areaOrPerimeter", function() {
      expect(areaOrPerimeter(14,14)).toEqual(196);
    });
});
describe("Test Case 5", function() {
  it("should determine the areaOrPerimeter", function() {
      expect(areaOrPerimeter(-2 , 14)).toEqual(24);
    });
});


