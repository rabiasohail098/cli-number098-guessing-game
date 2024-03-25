#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to number guessing game.");
const answer = await inquirer.prompt([{
        message: " Please guessed a number between 1-6:",
        type: "number",
        name: "guessedNumber",
    },]);
console.log(answer);
const randomNumber = Math.floor(Math.random() * 6 + 1);
if (answer.guessedNumber === randomNumber) {
    console.log("Congratulation! you guessed a correct number");
}
else {
    console.log(`Sorry! you guessed a wrong number.\n Try Again.`);
}
