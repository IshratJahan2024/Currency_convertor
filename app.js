import inquirer from "inquirer";
let exchange_rate = {
    "CAD": 1,
    "USD": 0.9,
    "BHD": 110,
    "SAR": 225,
    "EUR": 120,
    "PKR": 285, //PAKISTANI RUPEES
};
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from:",
        choices: ["CAD", "USD", "BHD", "SAR", "EUR", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currency to convert into:",
        choices: ["CAD", "USD", "BHD", "SAR", "EUR", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
console.log(`converted amount = ${converted_amount}`);
