#! /usr/bin/env node 
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([
        {
            name: "question1",
            type: "input",
            message: "What you would like to add in your todos?"
        },
        {
            name: "question2",
            type: "confirm",
            message: "Would you like to add more in todos? (y/n)",
            default: "true"
        }
    ]);
    if (todoQuestions.question1 === "") {
        console.log("Please Add something in todos");
    }
    else {
        todos.push(todoQuestions.question1);
        console.log(todos);
    }
    if (!todoQuestions.question2) {
        console.log("Exiting the todo list.");
        condition = false;
    }
}
