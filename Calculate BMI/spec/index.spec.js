describe("Test Case 1", function() {
    it("should determine the bmi", function() {
        expect(bmi(80, 1.80)).toEqual("Normal");
      });
});
describe("Test Case 2", function() {
  it("should determine the bmi", function() {
      expect(bmi(70, 1)).toEqual("Obese");
    });
});
describe("Test Case 3", function() {
  it("should determine the bmi", function() {
      expect(bmi(60, 1.5)).toEqual("Overweight");
    });
});
describe("Test Case 4", function() {
  it("should determine the bmi", function() {
      expect(bmi(30, 1.5)).toEqual("Underweight");
    });
});
describe("Test Case 5", function() {
  it("should determine the bmi", function() {
      expect(bmi(70, 3)).toEqual("Underweight");
    });
});


