
import promptsync from 'prompt-sync';
const prompt =promptsync()

import chalk from 'chalk'

export function power() {


    const number=Number (prompt("Enter your first number:- "))

    const number1=Number (prompt("Enter your second number:- "));

    console.log(chalk.yellow((`${number} * ${number1}= ${Math.pow(number,number1)} `)))

    

 
    
}