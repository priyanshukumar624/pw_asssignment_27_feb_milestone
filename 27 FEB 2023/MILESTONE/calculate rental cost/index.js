function calculateRentalCost(numOfDays, carType) {
    let rentalCost = 0;
    if (carType === "Economy") {
      rentalCost = 4000;
    } else if (carType === "Midsize") {
      rentalCost = 15000;
    } else if (carType === "Luxury") {
      rentalCost = 20000;
    }
    return rentalCost * numOfDays;
  }
  let numOfDays = 7;
let carType = "Midsize";
let totalCost = calculateRentalCost(numOfDays, carType);
console.log(totalCost);
