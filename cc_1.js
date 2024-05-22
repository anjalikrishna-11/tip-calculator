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

//Construct an array bills containing the test data values for data set 1
const bills1 = [275, 40, 430];
// Generate an array tips where each entry is the result of calling calcTip for each corresponding bill value
const tips1 = [];
const totals1 = [];

for (let i = 0; i < bills1.length; i++) {
    tips1[i] = calcTip(bills1[i]);
    totals1[i] = bills1[i] + tips1[i];
}

// Display the arrays
console.log('Data Set 1')
console.log('Bills:', bills1);
console.log('Tips:', tips1);
console.log('Totals:', totals1);

//Repeat the same for data set 2
const bills2 = [125, 555, 44];
const tips2 = [];
const totals2 = [];

for (let i = 0; i < bills2.length; i++) {
    tips2[i] = calcTip(bills2[i]);
    totals2[i] = bills2[i] + tips2[i];
}

console.log('Data Set 2')
console.log('Bills:', bills2);
console.log('Tips:', tips2);
console.log('Totals:', totals2);
