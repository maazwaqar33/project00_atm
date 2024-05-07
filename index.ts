#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
  
// welcome message with chalkANimation
async function welcomeMessage() {
    console.log(chalk.bold.hex('#DEADED').bold('Develop By Maaz Ahmed'));
}

await welcomeMessage()


async function userAuth() {
   
    let randomId = Math.floor(Math.random() * 4135)
    console.log(`Your Id is ${randomId}`)
    let randomPin = Math.floor(Math.random() * 6028)
    console.log(`Your pin is ${randomPin}`)
    let isAuth = false;
    while (!isAuth) {
       const answers = await inquirer 
    .prompt([
        {
            type: 'input',
            name : 'userId',
            message: 'please enter you id',
        },
        {
            type: 'number',
            name : 'userPin',
            message: 'please enter you pin'
        },
    ]);
    const parsedUserID = parseInt(answers.userId)
    const parsedUserPin = parseInt(answers.userPin)

    if 
    (parsedUserID === randomId  && parsedUserPin === randomPin)
    {
        console.log(chalk.green("Authentication successful! Welcome to the ATM."));
        isAuth = true;
    }
    else{
        console.log(chalk.red('Invalid user ID or PIN. Please try again.'))
    }
    }
    
    
}



async function atmFun() {
   await userAuth();
    let replys = await inquirer .prompt([
        {
           type: 'list',
            name : 'accType',
            choices:["Saving","current"],
           message: 'Select your account type'
       },
       {
           type: 'list',
           name : 'transactionType',
           choices:["FastCash","withdrawal"],
           message: 'Select your transaction type',
           when: replys => replys.accType,
       
       },
       {
           type: 'list',
           name : 'amount',
           choices:["1000","5000", "10000"],
           message: 'Select your amount',
           when : replys => replys.transactionType === "FastCash",
       },
       {
           type: 'number',
           name : 'amount',
           message: 'Select your amount',
           when : replys => replys.transactionType === "withdrawal",
       },
   ]);
   if (replys.transactionType === "withdrawal" || "FastCash") {
       console.log(`You have withdrawn ${replys.amount} from your account`)
   }

}

atmFun();