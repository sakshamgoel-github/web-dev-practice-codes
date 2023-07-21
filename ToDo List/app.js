let userInput = prompt("What you want to do?");

todo_list = [];

while (userInput != "quit") {
    
    if (userInput === "new") {
        let todo = prompt("Enter the todo");
        todo_list.push(todo);
    } else if (userInput === "list") {
        let todo_length = todo_list.length;
        if (!todo_length) {
            console.log(`The list is empty...`);
        } else {
            for (let i = 0; i < todo_length; ++i) {
                console.log(`${i} : ${todo_list[i]}`);
            }
        }
    } else if (userInput == "delete") {
        let todo_id = parseInt(prompt("Enter id to be deleted"));
        todo_list.splice(todo_id,todo_id);

    } else if (userInput === "quit") {
        console.log("Ok, Quitting...");
        break;
    } else {
         userInput = prompt("Please enter valid command");
         if(userInput==="quit"){
            console.log("Ok, Quitting...")
            break;
         }
    }
    userInput = prompt("What you want to do?");
}