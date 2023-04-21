function calculateDiscountPercentage(originalPrice, discountedPrice) {
    let percentage = ((originalPrice - discountedPrice) / originalPrice) * 100;
    return percentage;
  }
  let originalPrice = 100;
let discountedPrice = 80;

let discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log(discountPercentage); // Output: 20
