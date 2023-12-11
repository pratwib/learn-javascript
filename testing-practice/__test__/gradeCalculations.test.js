const { averageExams, isStudentPassExam } = require("../gradeCalculations");

describe("Grade Calculations", () => {
  test("it should return exact average", () => {
    const listValueOfExams = [80, 100, 100, 80];
    expect(averageExams(listValueOfExams)).toEqual(90);
  });

  test("it should handle non-number", () => {
    const listValueOfExams = [80, "a", "100", 80];
    expect(() => averageExams(listValueOfExams)).toThrow();
  });

  // INTEGRATION TESTING
  test("it should return exam passed status", () => {
    const listValueOfExams = [80, 100, 100, 80];
    expect(isStudentPassExam(listValueOfExams, "Budi")).toEqual(true);
  });

  test("it should return exam failed status", () => {
    const listValueOfExams = [50, 45, 100, 60];
    expect(isStudentPassExam(listValueOfExams, "Asep")).toEqual(false);
  });
});
