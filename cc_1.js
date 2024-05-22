//Anjali Krishna (U35346496)
//Coding Challenge 2: Tip Calculator
// Determine the tip amount based on the bill using a ternary operator
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// Display a message in the console that includes the bill amount, the tip amount, and the total cost
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value $${bill + tip}`);
// Develop a function named calcTip that accepts any bill amount as an input and returns the calculated tip
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// Test the calcTip function with a bill value of $100
const testBill = 100;
const testTip = calcTip(testBill);
console.log(`Test bill: $${testBill}, Test tip: $${testTip}`);
