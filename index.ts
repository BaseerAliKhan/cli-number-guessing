#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will generate a random number - done

// 2) User input for guessing number - done

// 3) Compare user input with computer generated number - done

const randomNumber = Math.floor(Math.random() * 6 + 1);

console.log("Welcome to number guessing game")

const answers = await inquirer.prompt ([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"please guess a number between 1-6: ",
    }
])

if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations you guessed number.");
}else {
    console.log("You guessed wrong number.");
}