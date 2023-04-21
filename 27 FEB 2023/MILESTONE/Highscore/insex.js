const marks = [80, 92, 75, 88, 95];
let highestMarks = 0;
let studentIndex = 0;

for (let i = 0; i < marks.length; i++) {
  highestMarks = (marks[i] > highestMarks) ? marks[i] : highestMarks;
  studentIndex = (marks[i] === highestMarks) ? i : studentIndex;
}

console.log(`The highest marks scored by a student is ${highestMarks} by student ${studentIndex + 1}.`);
