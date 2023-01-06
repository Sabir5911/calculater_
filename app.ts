import chalk from'chalk'
import { Multiplication } from './multi.js';

import inquirer from 'inquirer';
import { subtract } from './subtract.js';
import chalkanimation, { rainbow } from 'chalk-animation'
import { power } from './power.js';
import {sum} from './sum.js'
 import prompt from'prompt-sync'
import Choice from 'inquirer/lib/objects/choice.js';
import Choices from 'inquirer/lib/objects/choices.js';


import { Division } from './divison.js';
import { modolus } from './modolus.js';


const sleep=async()=>{

    return new Promise((resolve, reject) => {
        setTimeout(resolve,2000)
        
    })
}

const welcome=async()=>{
const rainbow=chalkanimation.rainbow(`Lets Start Calculation`)
await sleep();
rainbow.stop();

 console.log(  chalk.green( `                           _____________________
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
       `));
 

}



const user=async()=>{
    let inp=await inquirer.prompt([
        {
           type:"string",
           name:"user",
           message:"what is your Name:"
         
        }
    ]);
const a=inp.user

console.log(chalk.green(`Welcome ${a}`));



const slp=async()=>{
    return new Promise<void>((resolve, reject) => {
        setTimeout(resolve,2000)
        
    })
}

}



await user()
await welcome()





const question =  async()=> {
    const operators =  await inquirer.prompt([
        {
            name: 'choose_operations',
            type: 'list',
            message: 'Please use Arrow key to Select your option!\n',
            choices: [
                'Addition',
                'Subtraction',
                'Multiplication',
                'Division',
                'Modulus',
                'Power',]
                
}])


var a=(operators.choose_operations)


switch (a) {
    case "Addition":
        result: sum()
        break;
        case "Subtraction":
            result:subtract()
            break;
            case"Division":
            result:Division();
            break;
            case"Multiplication":
            result:Multiplication()
            break;
            case"Power":
            result:power()
            break;
            case "Modulus":
        result: modolus()
        break;

    default:
        console.log("error");
        
        break;
}

}

 async function start (){
  
   
    do{
        await question()
        var again=await inquirer.prompt([
            {
                type:'input',
                name:"restart",



                message:"if you want to start again press Y:  "
            }
        ])
    }while (again.restart=="Y" || again.restart=="y"||again.restart=="yes") {
        //  question()
    }
}


start()