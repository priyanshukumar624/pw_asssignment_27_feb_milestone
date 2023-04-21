function countVowels(name) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
  
    for (let i = 0; i < name.length; i++) {
      const letter = name.charAt(i).toLowerCase();
      if (vowels.includes(letter)) {
        count++;
      }
    }
  
    return count;
  }
  
  // Example usage:
  const name = "chintu";
  console.log(`The name "${name}" has ${countVowels(name)} vowels.`); // Output: "The name "Priyanshu" has 3 vowels."
  