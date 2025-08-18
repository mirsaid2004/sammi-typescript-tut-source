import inquirer from 'inquirer';

async function bootstrap() {
    console.log("Bootstraping Application...");
    
    await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
    ]);
}

bootstrap()