// Step 1: Determine the tip amount based on the bill using a ternary operator
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
