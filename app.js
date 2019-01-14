const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

rl.question(`What is ${num1} + ${num2}? By the way, the answer is: ${answer} \n`,
    (userInput) => {
        if (userInput.trim() == answer)
            rl.close();
        else {
            rl.setPrompt('Incorrext response, try again \n'); //we set the prompt
            rl.prompt();  //we call the prompt
            rl.on('line', (userInput) => {
                if (userInput.trim() == answer)
                    rl.close();
                else {
                    rl.setPrompt(`Your anser of ${userInput} is incorrect try again \n`);
                    rl.prompt();
                }
            });
        }
    })

rl.on('close', () => {
    console.log('Correct!!!');
})