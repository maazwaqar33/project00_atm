#! /usr/bin/env node

import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import chalk from 'chalk';

//sleep function to control the animation duration
const sleep =()=>{
    return new Promise ((res)=>{
        setTimeout(res, 2000)
    })
     
}


// welcome message with chalkANimation
async function welcomeMessage() {

    let title = chalkAnimation.neon("Let's Do some math mate")
    await sleep();
    title.stop();
    console.log(`
    _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    `)

    console.log(chalk.bold.hex('#DEADED').bold('Develop By Maaz Ahmed'));
}
await welcomeMessage()

// using inquirer for calculator behaviour and logic
async function calc_fun() {
    const answers = await inquirer
  .prompt([
    {
        type: 'list',
    name: 'calculate',
    message: 'Choose your Method',
    choices: ["Addition", "Subtraction", "Multiplication", "Division"]
},
{
    type: "number",
    name: "fstNum",
    message: "enter your firstNumber"
},
{
    type: "number",
    name: "sndNum",
    message: "enter your secondNumber"
},
  ]);
  if
  (answers.calculate === "Addition"){
    console.log(chalk.green(`${answers.fstNum} + ${answers.sndNum} = ${answers.fstNum + answers.sndNum}`));
  }
  
  else if 
  (answers.calculate === "Subtraction"){
    console.log(chalk.green(`${answers.fstNum} - ${answers.sndNum} = ${answers.fstNum - answers.sndNum}`));
  }

  else if 
  (answers.calculate === "Multiplication"){
    console.log(chalk.green(`${answers.fstNum} * ${answers.sndNum} = ${answers.fstNum * answers.sndNum}`));
  }
  
  else{
    console.log(chalk.green(`${answers.fstNum} / ${answers.sndNum} = ${answers.fstNum / answers.sndNum}`));
  }
}

async function startAgain() {
    
    do {
        await calc_fun();
        var askAgain = await inquirer
        .prompt({
            type:"input",
            name : "ask",
            message : "Do you wan to try other methods? press y to continue n to stop "
        })
    } while (askAgain.ask === 'y' || askAgain.ask === 'Y' || askAgain.ask === 'yes' || askAgain.ask === 'YES' || askAgain.ask === 'Yes');
}

startAgain()