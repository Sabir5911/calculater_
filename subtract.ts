// creating a sum calculator;)
import promptSync from 'prompt-sync';


const prompt = promptSync();

import chalk from 'chalk'

export function subtract() {


    const number=Number (prompt("Enter your first number:- "))

    const number1=Number (prompt("Enter your second number:- "));

    console.log(chalk.bgGrey(`${number} - ${number1}= ${number-number1} `))

 
    
}

