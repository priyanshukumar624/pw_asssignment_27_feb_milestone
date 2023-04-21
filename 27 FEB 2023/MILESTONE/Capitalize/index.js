function capitalize(name) {
  const firstLetter = name.charAt(0);
  const capitalized = (firstLetter === firstLetter.toLowerCase()) ? 
    firstLetter.toUpperCase() + name.slice(1) : 
    name;
  return capitalized;
}

// Example usage:
const name = "priyanshu";
console.log(capitalize(name)); // Output: "Priyanshu"
