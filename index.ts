#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';


//greeting user with a welcome message
async function greeting() {
    console.log(chalk.green('\nWelcome to the Number Guessing Game!'));

        console.log(chalk.bold.hex('#DEADED').bold('Develop By Maaz Ahmed'));
    
}
 greeting();

// random number guesing fnction
async function guessNumber() {
    // await greeting();
    console.log(chalk.blackBright.bgCyan("\nI'm thinking of a number between 1 to 10. Can you guess it?"))
    
    //gnerating random number between 1 t0 10
    const secretNumber = Math.floor(Math.random() * 10)
    
    let attempt = 0
    
    let answers;
    do{
        answers = await inquirer
        .prompt([
            {
                type: "number",
                name: "userGuess",
                message: "enter your number"
            }
        ]);
        if
        (answers.userGuess <1 || answers.userGuess > 10){
            console.log(chalk.red.bgWhite("Please enter a number between 1 and 10!"));
        }
    }while
        (answers.userGuess < 1 || answers.userGuess > 10)
        attempt++  
    if(answers.userGuess === secretNumber){
        console.log(`WOooo! you guessed the ${secretNumber} correctly in ${attempt} attempts`);
    }
    else{
        console.log(`Oooops! you guessed worng number the correct number is ${secretNumber}`);
    }

}

// function to re start the game is user wanted

async function tryAgain() {
    do{
        await guessNumber();
        var askAgain = await inquirer .prompt([
            {
                type: "input",
                name: "userChoice",
                message: "Do you want to try again? Press 'y' to guess again or 'n' to stop"
            }
        ]);
    }
    while(askAgain.userChoice === "y" || askAgain.userChoice === "Y" || askAgain.userChoice === "yes" || askAgain.userChoice === "YES")
}

tryAgain();