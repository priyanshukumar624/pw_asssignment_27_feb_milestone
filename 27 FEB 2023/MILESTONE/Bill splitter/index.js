function calculateBill(dishCosts, numPeople) {
    // Calculate the total cost of all dishes
    const totalCost = dishCosts.reduce((acc, cur) => acc + cur, 0);
  
    // Calculate the cost per person
    const costPerPerson = totalCost / numPeople;
  
    // Round the cost per person to 2 decimal places
    const roundedCostPerPerson = Number(costPerPerson.toFixed(2));
  
    // Create an object to store the results
    const result = {
      totalBill: totalCost,
      billPerPerson: roundedCostPerPerson,
    };
  
    return result;
  }
  const dishCosts = [10.50, 7.25, 15.75, 9.80];
const numPeople = 4;

const result = calculateBill(dishCosts, numPeople);

console.log(result);
// Output: { totalBill: 43.3, billPerPerson: 10.83 }
