

// creating a sum calculator;)
import promptSync from 'prompt-sync';


const prompt = promptSync();

import chalk from 'chalk'

export async function sum() {


    const number=Number (prompt("Enter your first number:- "))

    const number1=Number (prompt("Enter your second number:- "));

    // console.log("User Enter " ,number ,"and ", number1  );

    console.log(chalk.red(`${number} + ${number1}= ${number+number1} Ans`))


   

    
}


