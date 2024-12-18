let groceryStack = [];
function peek() {
    if (groceryStack.length === 0) {
        console.log("The stack is empty.");
        return null;
    } else {
        return groceryStack[groceryStack.length - 1]; // Return the top item
    }
}

// Function to add an item to the stack (push)
function push(item) {
    groceryStack.push(item);  // Add item to the top (end of array)
    console.log(Added "${item}" to the stack.);
    console.log("Current Stack:", groceryStack);
    console.log("Top Item:", peek());
}

// Function to remove the top item from the stack (pop)
function pop() {
    if (groceryStack.length === 0) {
        console.log("Cannot pop, the stack is empty.");
    } else {
        let removedItem = groceryStack.pop();  // Remove the top item
        console.log(Removed "${removedItem}" from the stack.);
        console.log("Current Stack:", groceryStack);
        console.log("Top Item:", peek());
    }
}

// Loop to accept five grocery items from the user and push them to the stack
for (let i = 0; i < 5; i++) {
    let item = prompt(Enter grocery item ${i + 1}:);
    push(item);  // Add each item to the stack
}

// Pop an item from the stack to demonstrate the pop functionality
let shouldPop = prompt("Do you want to remove the last item? (yes/no):");
if (shouldPop.toLowerCase() === 'yes') {}
    pop();  // Remove the last added item