const marks = [85, 72, 90, 68, 94]; // sample marks array
let highestMarks = 0;
let highestMarksIndex = 0;

for (let i = 0; i < marks.length; i++) {
  if (marks[i] > highestMarks) {
    highestMarks = marks[i];
    highestMarksIndex = i;
  }
}

console.log(`The highest marks scored by student ${highestMarksIndex + 1} is ${highestMarks}.`);
