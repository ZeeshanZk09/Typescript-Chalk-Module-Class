import chalk from "chalk";
import inquirer from "inquirer";
let answers = await inquirer.prompt([{
        name: "age",
        type: "number",
        message: "Enter you age:"
    }]);
console.log(chalk.green(`Insha Allah in ${60 - answers.age} years you will be  60 years old. `));
