import inquirer from "inquirer";

let todos : string[] = ["sajjad","ijaz","adil"];

async function addTodo(){

    const add = await inquirer.prompt({
        type: "input",
        name: "todo",
        message: "Add todo..."
    })

    todos.push(add.todo);
    console.log(todos);
}

async function deleteTodo(){

    let dElete = await inquirer.prompt({
        type: "list",
        name: "todo",
        message: "Delete todo...",
        choices : todos.map(item => item)
    })

    let newTodos = todos.filter(val => val !== dElete.todo);
    todos = [...newTodos];
    console.log(todos);
}

async function updateTodo(){

    let update = await inquirer.prompt({
        type: "list",
        name: "todo",
        message: "Update todo...",
        choices : todos.map(item => item)
    })

    const add = await inquirer.prompt({
        type: "input",
        name: "todo"
    })

    let newTodos = todos.filter(val => val !== update.todo);
    todos = [...newTodos,add.todo];
    console.log(todos);    
}

async function todofunc(todo: string[]){

        const options = await inquirer.prompt({
            type : "list",
            name : "select",
            message : "Select todo:",
            choices : ["Read todo","Update todo","Add todo","Delete todo"]
        })
    
        if(options.select === "Read todo"){
            console.log(todos);
        }
    
        if(options.select === "Update todo"){
            updateTodo();
        }
    
        if(options.select === "Add todo"){
            addTodo();
        }
    
        if(options.select === "Delete todo"){
            deleteTodo();
        }

}


todofunc(todos);