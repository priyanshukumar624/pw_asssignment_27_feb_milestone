let i = 6;
for (let row = i; row > 0; row--) {
  let line = "";
  for (let col = 1; col <= row; col++) {
    line += "*";
  }
  console.log(line);
}
