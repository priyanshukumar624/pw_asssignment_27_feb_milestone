function removeDuplicates(items) {
    const uniqueItems = [];
  
    items.forEach(item => {
      if (!uniqueItems.includes(item)) {
        uniqueItems.push(item);
      }
    });
  
    return uniqueItems;
  }
  
  // Example usage:
  const items = ["apple", "banana", "orange", "banana", "grape", "apple", "priyanshu", "priyanshu", "priyanshu"];
  const uniqueItems = removeDuplicates(items);
  console.log(`Original items: ${items}`);
  console.log(`Unique items: ${uniqueItems}`);
  